import { assert, it } from "@effect/vitest";
import { NodeServices } from "@effect/platform-node";
import { ProviderInstanceId } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import { createModelSelection } from "@t3tools/shared/model";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as FileSystem from "effect/FileSystem";
import * as HttpClient from "effect/http/HttpClient";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import { makeGrokTextGeneration } from "./textGeneration.vibe";
import { readGrokAccount } from "./usageLimits.vibe";

const markerKey = "T3CODE_GROK_DEFAULT_ENV_TEST";
const settings = { enabled: true, binaryPath: "grok", customModels: [] };
const request = {
  cwd: process.cwd(),
  branch: "main",
  stagedSummary: "M README.md",
  stagedPatch: "diff --git a/README.md b/README.md",
  modelSelection: createModelSelection(ProviderInstanceId.make("grok"), "grok-4.5"),
};

it.effect.each(["omitted", "undefined", "explicit"] as const)(
  "resolves Grok text generation's %s environment across executions",
  (argument) =>
    Effect.gen(function* () {
      const saved = process.env;
      const captured: Array<string | undefined> = [];
      const explicit = { [markerKey]: "provided" };
      const spawner = ChildProcessSpawner.make((command) => {
        if (command._tag !== "StandardCommand") return Effect.die("Unexpected test pipeline");
        return Effect.sync(() => {
          const value = command.options.env?.[markerKey];
          captured.push(typeof value === "string" ? value : undefined);
        }).pipe(Effect.andThen(Effect.die("Stop after capturing the command environment")));
      });
      try {
        process.env = { ...saved, [markerKey]: "at-call" };
        const factory =
          argument === "omitted"
            ? makeGrokTextGeneration(settings)
            : makeGrokTextGeneration(settings, argument === "undefined" ? undefined : explicit);
        const provided = factory.pipe(
          Effect.provideService(ChildProcessSpawner.ChildProcessSpawner, spawner),
          Effect.provide(Crypto.layerWebCrypto),
        );
        for (const marker of ["first-run", "second-run"]) {
          process.env = { ...saved, [markerKey]: marker };
          if (marker === "second-run") explicit[markerKey] = "provided-later";
          const generation = yield* provided;
          const result = yield* generation.generateCommitMessage(request).pipe(Effect.exit);
          assert.isTrue(Exit.isFailure(result));
        }
        assert.deepEqual(
          captured,
          argument === "explicit" ? ["provided", "provided-later"] : ["first-run", "second-run"],
        );
      } finally {
        process.env = saved;
      }
    }),
);

it.effect.each(["omitted", "undefined", "explicit"] as const)(
  "resolves Grok account's %s environment across executions",
  (argument) =>
    Effect.gen(function* () {
      const saved = process.env;
      const captured: Array<string | undefined> = [];
      const environment = (email: string): NodeJS.ProcessEnv => ({
        ...Object.fromEntries(
          Object.entries(saved).filter(
            ([key]) => !key.startsWith("GROK_") && key !== "XAI_API_KEY",
          ),
        ),
        GROK_HOME: "synthetic-grok-home",
        GROK_AUTH: JSON.stringify({ "https://accounts.x.ai/sign-in": { email } }),
      });
      const explicit = environment("provided");
      try {
        process.env = environment("at-call");
        const program =
          argument === "omitted"
            ? readGrokAccount()
            : readGrokAccount(argument === "undefined" ? undefined : explicit);
        const provided = program.pipe(
          Effect.provideService(
            HttpClient.HttpClient,
            HttpClient.make(() => Effect.die("Unexpected test billing HTTP request")),
          ),
          Effect.provideService(
            FileSystem.FileSystem,
            FileSystem.makeNoop({
              readFileString: () => Effect.succeed(""),
            }),
          ),
          Effect.provide(NodeServices.layer),
        );
        for (const marker of ["first-run", "second-run"]) {
          process.env = environment(marker);
          if (marker === "second-run") explicit.GROK_AUTH = environment("provided-later").GROK_AUTH;
          const result = yield* provided;
          captured.push(result.email);
          assert.strictEqual(result.usageLimits.unavailable?.reason, "unsupported");
        }
        assert.deepEqual(
          captured,
          argument === "explicit" ? ["provided", "provided-later"] : ["first-run", "second-run"],
        );
      } finally {
        process.env = saved;
      }
    }),
);
