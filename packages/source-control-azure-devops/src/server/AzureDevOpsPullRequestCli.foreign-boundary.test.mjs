import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Cause from "effect/Cause";
import * as Exit from "effect/Exit";
import * as Schema from "effect/Schema";
import * as AzureDevOpsCli from "./AzureDevOpsCli.vibe";
import * as AzureDevOpsPullRequestCli from "./AzureDevOpsPullRequestCli.vibe";

it.effect.prop(
  "executes supported actions and keeps unsupported actions as defects",
  {
    action: Schema.Literals([
      "merge",
      "ready",
      "draft",
      "close",
      "reopen",
      "revert",
      "approve-workflows",
      "delete-branch",
    ]),
    number: Schema.Int,
    squash: Schema.Boolean,
  },
  ({ action, number, squash }) =>
    Effect.gen(function* () {
      const calls = [];
      const cli = yield* AzureDevOpsPullRequestCli.make.pipe(
        Effect.provideService(AzureDevOpsCli.AzureDevOpsCli, {
          execute: (input) => {
            calls.push(input);
            return Effect.succeed({ stdout: "", stderr: "", exitCode: 0 });
          },
        }),
      );
      const program = cli.runPullRequestAction({
        cwd: ".",
        number,
        action,
        mergeMethod: squash ? "squash" : "merge",
      });
      expect(calls).toEqual([]);
      const exit = yield* Effect.exit(program);
      if (["revert", "approve-workflows", "delete-branch"].includes(action)) {
        expect(Exit.isFailure(exit)).toBe(true);
        const defects = exit.cause.reasons.filter(Cause.isDieReason);
        expect(defects).toHaveLength(1);
        expect(defects[0].defect.message).toBe(
          `Azure DevOps pull request action ${action} is unsupported`,
        );
        expect(calls).toEqual([]);
      } else {
        expect(Exit.isSuccess(exit)).toBe(true);
        expect(calls).toHaveLength(1);
        expect(calls[0].args).toContain(String(number));
        if (action === "merge") expect(calls[0].args).toContain(squash ? "true" : "false");
      }
    }),
  { arbitrary: { runs: 100 } },
);
