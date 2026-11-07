import * as NodeServices from "@effect/platform-node/NodeServices";
import { assert, it } from "@effect/vitest";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as TestConsole from "effect/testing/TestConsole";
import { Command } from "effect/cli";
import { vi } from "vite-plus/test";

import type { ServicePreflightResult } from "../cloud/servicePreflight.ts";

const preflight = vi.hoisted(() =>
  vi.fn<
    (input: {
      readonly databasePath: string;
      readonly launcherProtocol: number;
      readonly version?: string;
    }) => ServicePreflightResult
  >(),
);

vi.mock("../cloud/servicePreflight.ts", () => ({ runServicePreflight: preflight }));

import { servicePreflightCommand } from "./servicePreflight.vibe";

it.effect.prop(
  "keeps service preflight lazy and preserves helper and serialization defects",
  {
    version: Schema.String,
    reason: Schema.String,
    helperThrows: Schema.Boolean,
    getterThrows: Schema.Boolean,
  },
  ({ version, reason, helperThrows, getterThrows }) =>
    Effect.gen(function* () {
      const failure = Object.freeze({ version, reason });
      let reads = 0;
      preflight.mockReset();
      preflight.mockImplementation(() => {
        if (helperThrows) throw failure;
        return {
          status: "blocked",
          get version() {
            reads++;
            if (getterThrows) throw failure;
            return version;
          },
          reason,
        };
      });
      const program = Command.runWith(servicePreflightCommand, { version: "test" })([
        "--database-path",
        "preflight.sqlite",
        "--launcher-protocol",
        "1",
      ]);
      assert.strictEqual(preflight.mock.calls.length, 0);
      assert.strictEqual(reads, 0);

      const exit = yield* Effect.exit(program);
      const lines = yield* TestConsole.logLines;
      assert.strictEqual(preflight.mock.calls.length, 1);
      assert.deepStrictEqual(preflight.mock.calls[0]?.[0], {
        databasePath: "preflight.sqlite",
        launcherProtocol: 1,
      });
      if (helperThrows || getterThrows) {
        assert(Exit.isFailure(exit));
        const defects = exit.cause.reasons.filter(Cause.isDieReason);
        assert.strictEqual(defects.length, 1);
        assert.strictEqual(defects[0]?.defect, failure);
        assert.strictEqual(exit.cause.reasons.some(Cause.isFailReason), false);
        assert.deepStrictEqual(lines, []);
      } else {
        assert(Exit.isSuccess(exit));
        assert.deepStrictEqual(lines, [JSON.stringify({ status: "blocked", version, reason })]);
      }
      assert.strictEqual(reads, helperThrows ? 0 : 1);
    }).pipe(Effect.provide(NodeServices.layer), Effect.provide(Layer.fresh(TestConsole.layer))),
);
