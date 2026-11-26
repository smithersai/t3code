import { expect, it } from "@effect/vitest";
import { vi } from "vite-plus/test";
import * as Schema from "effect/Schema";
import * as Effect from "effect/Effect";
import * as Cause from "effect/Cause";
import * as Exit from "effect/Exit";
import * as Alchemy from "alchemy";
import * as Resources from "../src/resources.vibe";

const state = vi.hoisted(() => ({
  calls: [],
  failAt: undefined,
  error: undefined,
}));

vi.mock("alchemy", async () => {
  const Context = await import("effect/Context");
  return { Stack: Context.Service()("resource-construction-test/Stack") };
});

vi.mock("@alchemy.run/cloudflare", async () => {
  const Effect = await import("effect/Effect");
  const create = (label, options) => {
    state.calls.push(["create", label, options.name]);
    if (state.failAt === "create") throw state.error;
    return Effect.succeed({ label, options });
  };
  return { D1: { Database: create }, R2: { Bucket: create } };
});

vi.mock("alchemy/AdoptPolicy", () => ({
  adopt: (enabled) => {
    state.calls.push(["adopt", enabled]);
    if (state.failAt === "adopt") throw state.error;
    return (resource) => resource;
  },
}));

vi.mock("alchemy/RemovalPolicy", () => ({
  retain: () => {
    state.calls.push(["retain"]);
    if (state.failAt === "retain") throw state.error;
    return (resource) => resource;
  },
}));

it("leaves resource construction inside the Effect fiber", () => {
  expect(state.calls).toEqual([]);
});

it.effect.prop(
  "preserves resource names, construction order, and original defects",
  {
    name: Schema.Literals(["Index", "Artifacts", "NativeClients", "Savings"]),
    stage: Schema.String,
    fails: Schema.Boolean,
    failureIndex: Schema.Literals([0, 1, 2]),
    failureKind: Schema.Literals(["error", "string", "number", "null", "undefined", "object"]),
    detail: Schema.String,
    number: Schema.Int,
  },
  ({ name, stage, fails, failureIndex, failureKind, detail, number }) =>
    Effect.gen(function* () {
      const failure =
        failureKind === "error"
          ? new Error(detail)
          : failureKind === "string"
            ? detail
            : failureKind === "number"
              ? number
              : failureKind === "null"
                ? null
                : failureKind === "undefined"
                  ? undefined
                  : { message: detail };
      const steps =
        name === "Index" || name === "Artifacts"
          ? ["create", "adopt", "retain"]
          : ["create", "retain"];
      state.calls.length = 0;
      state.failAt = fails ? steps[failureIndex % steps.length] : undefined;
      state.error = failure;
      const resource = Effect.provideService(Resources[name], Alchemy.Stack, { stage });
      expect(state.calls).toEqual([]);

      const exit = yield* Effect.exit(resource);
      const base = stage === "prod" ? "t3-task-cache" : `t3-task-cache-${stage}`;
      const resourceName =
        name === "NativeClients"
          ? `${base}-native-clients`
          : name === "Savings"
            ? `${base}-savings`
            : base;
      const observed = state.calls.map(([step]) => step);
      const expected = fails ? steps.slice(0, steps.indexOf(state.failAt) + 1) : steps;
      expect(observed).toEqual(expected);
      expect(state.calls[0]).toEqual(["create", name, resourceName]);

      if (fails) {
        expect(Exit.isFailure(exit)).toBe(true);
        const defects = exit.cause.reasons.filter(Cause.isDieReason);
        expect(defects).toHaveLength(1);
        expect(defects[0].defect).toBe(failure);
      } else {
        expect(Exit.isSuccess(exit)).toBe(true);
        expect(exit.value.label).toBe(name);
        expect(exit.value.options.name).toBe(resourceName);
      }
    }),
  { arbitrary: { runs: 100 } },
);
