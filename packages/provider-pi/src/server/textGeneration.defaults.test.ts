import { assert, it } from "@effect/vitest";
import { ProviderInstanceId } from "@t3tools/contracts";
import { createModelSelection } from "@t3tools/shared/model";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";

import { makePiTextGeneration } from "./textGeneration.vibe";

const markerKey = "T3CODE_PI_DEFAULT_ENV_TEST";
const settings = { enabled: true, binaryPath: "pi", launchArgs: "", customModels: [] };
const request = {
  cwd: process.cwd(),
  branch: "main",
  stagedSummary: "M README.md",
  stagedPatch: "diff --git a/README.md b/README.md",
  modelSelection: createModelSelection(ProviderInstanceId.make("pi"), "default"),
};

const exerciseEnvironmentTiming = (argument: "omitted" | "undefined" | "explicit") =>
  Effect.gen(function* () {
    const savedEnvironment = process.env;
    const captured: Array<string | undefined> = [];
    const explicitEnvironment = { [markerKey]: "provided" };
    const spawner = ChildProcessSpawner.make((command) => {
      if (command._tag !== "StandardCommand") return Effect.die("Unexpected test pipeline");
      return Effect.sync(() => {
        const value = command.options.env?.[markerKey];
        captured.push(typeof value === "string" ? value : undefined);
      }).pipe(Effect.andThen(Effect.die("Stop after capturing the command environment")));
    });

    try {
      process.env = { ...savedEnvironment, [markerKey]: "at-call" };
      const factory =
        argument === "omitted"
          ? makePiTextGeneration(settings)
          : makePiTextGeneration(
              settings,
              argument === "undefined" ? undefined : explicitEnvironment,
            );
      const program = factory.pipe(
        Effect.provideService(ChildProcessSpawner.ChildProcessSpawner, spawner),
      );

      for (const marker of ["first-run", "second-run"]) {
        process.env = { ...savedEnvironment, [markerKey]: marker };
        if (marker === "second-run") explicitEnvironment[markerKey] = "provided-later";
        const generation = yield* program;
        const result = yield* generation.generateCommitMessage(request).pipe(Effect.exit);
        assert.isTrue(Exit.isFailure(result));
      }

      assert.deepEqual(
        captured,
        argument === "explicit" ? ["provided", "provided-later"] : ["first-run", "second-run"],
      );
    } finally {
      process.env = savedEnvironment;
    }
  });

it.effect("resolves an omitted environment when the program executes and replays", () =>
  exerciseEnvironmentTiming("omitted"),
);

it.effect("resolves an explicit undefined environment on each execution", () =>
  exerciseEnvironmentTiming("undefined"),
);

it.effect("keeps the caller's explicit environment object across executions", () =>
  exerciseEnvironmentTiming("explicit"),
);
