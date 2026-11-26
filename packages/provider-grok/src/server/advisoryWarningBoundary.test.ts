import { assert, it } from "@effect/vitest";
import { ProviderDriverKind, ProviderInstanceId } from "@t3tools/contracts";
import * as ProviderLatestVersions from "@t3tools/provider-core/server/ProviderLatestVersions";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as FetchHttpClient from "effect/http/FetchHttpClient";
import * as Logger from "effect/Logger";
import * as Schema from "effect/Schema";
import { vi } from "vite-plus/test";

const diagnostics = vi.hoisted(() => ({ errorTag: vi.fn(), enrich: vi.fn() }));
vi.mock("@t3tools/shared/observability", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@t3tools/shared/observability")>()),
  causeErrorTag: diagnostics.errorTag,
}));
vi.mock("@t3tools/provider-core/server/maintenanceResolver", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@t3tools/provider-core/server/maintenanceResolver")>()),
  enrichProviderSnapshotWithVersionAdvisory: diagnostics.enrich,
}));

import { makeManualOnlyProviderMaintenanceCapabilities } from "@t3tools/provider-core/server/maintenanceResolver";
import { buildInitialGrokProviderSnapshot, enrichGrokSnapshot } from "./status.vibe";

it.effect.prop(
  "preserves the Effect counterpart of version advisory warnings",
  {
    tag: Schema.String,
    detail: Schema.String,
    tagThrows: Schema.Boolean,
    interrupted: Schema.Boolean,
  },
  ({ tag, detail, tagThrows, interrupted }) => {
    const failure = Object.freeze({ initial: detail });
    const diagnosticFailure = Object.freeze({ diagnostic: detail });
    let actualExecutions = 0;
    let published = 0;
    diagnostics.errorTag.mockReset();
    diagnostics.errorTag.mockImplementation(() => {
      if (tagThrows) throw diagnosticFailure;
      return tag;
    });
    diagnostics.enrich.mockReset();
    diagnostics.enrich.mockImplementation(() =>
      Effect.suspend(() => {
        actualExecutions++;
        return interrupted ? Effect.interrupt : Effect.die(failure);
      }),
    );

    function observe<A, E, R>(program: Effect.Effect<A, E, R>) {
      return Effect.gen(function* () {
        const messages: unknown[] = [];
        const logger = Logger.make<unknown, void>(({ message }) => {
          messages.push(message);
        });
        diagnostics.errorTag.mockClear();
        const exit = yield* Effect.exit(
          program.pipe(Effect.provide(Logger.layer([logger], { mergeWithExisting: false }))),
        );
        return {
          kind: exit._tag,
          interrupts: Exit.isFailure(exit) && Cause.hasInterrupts(exit.cause),
          defects: Exit.isFailure(exit)
            ? exit.cause.reasons.filter(Cause.isDieReason).map((reason) => ({
                diagnosticIdentity: reason.defect === diagnosticFailure,
                initialIdentity: reason.defect === failure,
              }))
            : [],
          typedFailure: Exit.isFailure(exit) && exit.cause.reasons.some(Cause.isFailReason),
          calls: diagnostics.errorTag.mock.calls.length,
          messages,
        };
      });
    }

    return Effect.gen(function* () {
      const settings = { enabled: false, binaryPath: "grok", launchArgs: "", customModels: [] };
      const draft = yield* buildInitialGrokProviderSnapshot(settings);
      const driver = ProviderDriverKind.make("grok");
      const snapshot = {
        ...draft,
        instanceId: ProviderInstanceId.make("advisory-provider"),
        driver,
      };
      const actual = enrichGrokSnapshot({
        snapshot,
        maintenanceCapabilities: makeManualOnlyProviderMaintenanceCapabilities({
          provider: driver,
          packageName: null,
        }),
        publishSnapshot: () => {
          published++;
          return Effect.void;
        },
      });
      assert.strictEqual(actualExecutions, 0);
      assert.strictEqual(diagnostics.errorTag.mock.calls.length, 0);
      assert.strictEqual(published, 0);

      // The original TypeScript counterpart is the oracle, including interrupted recovery.
      const reference = Effect.catchCause(
        Effect.suspend(() => (interrupted ? Effect.interrupt : Effect.die(failure))),
        (cause) =>
          Effect.logWarning("Grok version advisory enrichment failed", {
            errorTag: diagnostics.errorTag(cause),
          }),
      ).pipe(Effect.asVoid);
      const expected = yield* observe(reference);
      const observed = yield* observe(actual);
      assert.deepStrictEqual(observed, expected);
      assert.strictEqual(actualExecutions, 1);
      assert.strictEqual(published, 0);
      assert.strictEqual(observed.typedFailure, false);
      if (!interrupted && tagThrows) {
        assert.deepStrictEqual(observed.defects, [
          { diagnosticIdentity: true, initialIdentity: false },
        ]);
      }
    }).pipe(Effect.provide(FetchHttpClient.layer), Effect.provide(ProviderLatestVersions.layer));
  },
);
