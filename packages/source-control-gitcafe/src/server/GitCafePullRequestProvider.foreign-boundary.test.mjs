import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as GitCafeApi from "./GitCafeApi.vibe";
import * as GitCafePullRequestProvider from "./GitCafePullRequestProvider.vibe";

it.effect.prop(
  "rejects foreign hosts and noncanonical repository paths before sending requests",
  { suffix: Schema.String, foreignHost: Schema.Boolean },
  ({ suffix, foreignHost }) =>
    Effect.gen(function* () {
      let calls = 0;
      const provider = yield* GitCafePullRequestProvider.make.pipe(
        Effect.provideService(GitCafeApi.GitCafeApi, {
          request: () => {
            calls++;
            return Effect.die("Unexpected request");
          },
        }),
      );
      const error = yield* provider
        .getChangeRequest({
          cwd: ".",
          number: 1,
          host: foreignHost ? "foreign.example" : "git.cafe",
          repository: foreignHost ? "owner/repo" : `owner/repo/invalid${suffix}`,
        })
        .pipe(Effect.flip);
      expect(error.provider).toBe("gitcafe");
      expect(error.operation).toBe("getChangeRequest");
      expect(calls).toBe(0);
    }),
  { arbitrary: { runs: 100 } },
);
