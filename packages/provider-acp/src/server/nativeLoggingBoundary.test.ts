import { assert, it } from "@effect/vitest";
import { ProviderDriverKind, ThreadId } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Logger from "effect/Logger";
import * as Schema from "effect/Schema";
import { vi } from "vite-plus/test";

const diagnostics = vi.hoisted(() => ({ errorTag: vi.fn() }));
vi.mock("@t3tools/shared/observability", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@t3tools/shared/observability")>()),
  causeErrorTag: diagnostics.errorTag,
}));

import { makeAcpNativeLoggerFactory } from "./nativeLogging.vibe";

it.effect.prop(
  "keeps native logging lazy, preserves interruption and retains diagnostic defects",
  {
    detail: Schema.String,
    tag: Schema.String,
    interrupted: Schema.Boolean,
    tagThrows: Schema.Boolean,
  },
  ({ detail, tag, interrupted, tagThrows }) => {
    const messages: unknown[] = [];
    const capture = Logger.make<unknown, void>(({ message }) => {
      messages.push(message);
    });
    return Effect.gen(function* () {
      diagnostics.errorTag.mockReset();
      const diagnosticFailure = Object.freeze({ detail });
      const writerFailure = Object.freeze({ writer: true, detail });
      diagnostics.errorTag.mockImplementation(() => {
        if (tagThrows) throw diagnosticFailure;
        return tag;
      });
      let writes = 0;
      const makeLogger = yield* makeAcpNativeLoggerFactory();
      const logger = makeLogger({
        nativeEventLogger: {
          filePath: "native-log.ndjson",
          write: () => {
            writes++;
            return interrupted ? Effect.interrupt : Effect.die(writerFailure);
          },
          close: () => Effect.void,
        },
        provider: ProviderDriverKind.make("cursor"),
        threadId: ThreadId.make("thread-logging-boundary"),
      });
      const requestLogger = logger.requestLogger;
      assert.exists(requestLogger);
      if (!requestLogger) return;
      const program = requestLogger({ method: "session/prompt", payload: {}, status: "started" });
      assert.strictEqual(writes, 0);
      assert.strictEqual(diagnostics.errorTag.mock.calls.length, 0);

      const exit = yield* Effect.exit(program);
      assert.strictEqual(writes, 1);
      if (interrupted) {
        assert(Exit.isFailure(exit));
        assert(Cause.hasInterruptsOnly(exit.cause));
        assert.strictEqual(diagnostics.errorTag.mock.calls.length, 0);
        assert.deepStrictEqual(messages, []);
      } else if (tagThrows) {
        assert(Exit.isFailure(exit));
        const defects = exit.cause.reasons.filter(Cause.isDieReason);
        assert.strictEqual(defects.length, 1);
        assert.strictEqual(defects[0]?.defect, diagnosticFailure);
        assert.strictEqual(exit.cause.reasons.some(Cause.isFailReason), false);
        assert.strictEqual(diagnostics.errorTag.mock.calls.length, 1);
        assert.deepStrictEqual(messages, []);
      } else {
        assert(Exit.isSuccess(exit));
        assert.strictEqual(diagnostics.errorTag.mock.calls.length, 1);
        assert.deepStrictEqual(messages, [
          [
            "Failed to write native ACP event log.",
            {
              errorTag: tag,
              reasonCount: 1,
              provider: "cursor",
              threadId: "thread-logging-boundary",
            },
          ],
        ]);
      }
    }).pipe(
      Effect.provide(Crypto.layerWebCrypto),
      Effect.provide(Logger.layer([capture], { mergeWithExisting: false })),
    );
  },
);
