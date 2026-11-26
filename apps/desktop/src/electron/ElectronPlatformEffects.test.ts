import { assert, describe, it } from "@effect/vitest";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Schema from "effect/Schema";
import { vi } from "vite-plus/test";

const platform = vi.hoisted(() => ({
  register: vi.fn(),
  remove: vi.fn(),
  setFeedURL: vi.fn(),
}));

vi.mock("electron", () => ({
  nativeTheme: {
    on: platform.register,
    removeListener: platform.remove,
  },
}));

vi.mock("electron-updater", () => ({
  autoUpdater: { setFeedURL: platform.setFeedURL },
}));

import * as ElectronTheme from "./ElectronTheme.vibe";
import * as ElectronUpdater from "./ElectronUpdater.vibe";

function assertDefect(exit: Exit.Exit<void, never>, failure: unknown) {
  assert(Exit.isFailure(exit));
  const defects = exit.cause.reasons.filter(Cause.isDieReason);
  assert.strictEqual(defects.length, 1);
  assert.strictEqual(defects[0]?.defect, failure);
  assert.strictEqual(exit.cause.reasons.some(Cause.isFailReason), false);
}

describe("Electron platform effects", () => {
  it.effect.prop(
    "registers lazily and removes its listener exactly once at scope close",
    { name: Schema.String },
    ({ name }) =>
      Effect.gen(function* () {
        platform.register.mockReset();
        platform.remove.mockReset();
        const events: string[] = [];
        const listener = () => events.push(name);
        platform.register.mockImplementation(() => events.push("register"));
        platform.remove.mockImplementation(() => events.push("remove"));

        const program = ElectronTheme.make.onUpdated(listener);
        assert.deepStrictEqual(events, []);
        const exit = yield* Effect.exit(Effect.scoped(program));

        assert(Exit.isSuccess(exit));
        assert.deepStrictEqual(events, ["register", "remove"]);
        assert.strictEqual(platform.register.mock.calls[0]?.[1], listener);
        assert.strictEqual(platform.remove.mock.calls[0]?.[1], listener);
      }),
  );

  it.effect.prop(
    "preserves platform defects during registration and cleanup",
    { detail: Schema.String, failDuringCleanup: Schema.Boolean },
    ({ detail, failDuringCleanup }) =>
      Effect.gen(function* () {
        platform.register.mockReset();
        platform.remove.mockReset();
        const failure = Object.freeze({ detail });
        const events: string[] = [];
        platform.register.mockImplementation(() => {
          events.push("register");
          if (!failDuringCleanup) throw failure;
        });
        platform.remove.mockImplementation(() => {
          events.push("remove");
          throw failure;
        });

        const program = ElectronTheme.make.onUpdated(() => {});
        assert.deepStrictEqual(events, []);
        assertDefect(yield* Effect.exit(Effect.scoped(program)), failure);
        assert.deepStrictEqual(events, failDuringCleanup ? ["register", "remove"] : ["register"]);
      }),
  );

  it.effect.prop(
    "sets a feed only when run and preserves its platform failure as a defect",
    { url: Schema.String, fail: Schema.Boolean },
    ({ url, fail }) =>
      Effect.gen(function* () {
        platform.setFeedURL.mockReset();
        const failure = Object.freeze({ url });
        platform.setFeedURL.mockImplementation(() => {
          if (fail) throw failure;
        });
        const options = { provider: "generic" as const, url };
        const program = ElectronUpdater.make.setFeedURL(options);
        assert.strictEqual(platform.setFeedURL.mock.calls.length, 0);

        const exit = yield* Effect.exit(program);
        assert.strictEqual(platform.setFeedURL.mock.calls.length, 1);
        assert.strictEqual(platform.setFeedURL.mock.calls[0]?.[0], options);
        if (fail) assertDefect(exit, failure);
        else assert(Exit.isSuccess(exit));
      }),
  );
});
