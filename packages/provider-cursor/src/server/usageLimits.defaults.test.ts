import { assert, it } from "@effect/vitest";
import { NodeServices } from "@effect/platform-node";
import * as HostProcess from "@t3tools/shared/HostProcess";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as CursorKeychain from "./CursorKeychain.vibe";
import { readCursorUsageLimits } from "./usageLimits.vibe";

it.effect.each(["omitted", "undefined", "explicit"] as const)(
  "resolves Cursor's %s environment correctly across executions",
  (argument) =>
    Effect.gen(function* () {
      const saved = process.env;
      const captured: Array<string | undefined> = [];
      const explicit = { CURSOR_AUTH_TOKEN: "provided", AGENT_CLI_CREDENTIAL_STORE: "memory" };
      const environment = (token: string) => ({
        ...saved,
        CURSOR_API_KEY: "",
        CURSOR_AUTH_TOKEN: token,
        AGENT_CLI_CREDENTIAL_STORE: "memory",
      });
      const client = HttpClient.make((request) => {
        captured.push(request.headers.authorization);
        return Effect.succeed(
          HttpClientResponse.fromWeb(
            request,
            Response.json({
              planUsage: { totalPercentUsed: 42 },
            }),
          ),
        );
      });
      try {
        process.env = environment("at-call");
        const program =
          argument === "omitted"
            ? readCursorUsageLimits({ apiEndpoint: "https://cursor.example" })
            : readCursorUsageLimits(
                { apiEndpoint: "https://cursor.example" },
                argument === "undefined" ? undefined : explicit,
              );
        const provided = program.pipe(
          Effect.provideService(HttpClient.HttpClient, client),
          Effect.provideService(CursorKeychain.CursorKeychain, {
            accessToken: Effect.die("Unexpected test Keychain access"),
          }),
          Effect.provideService(HostProcess.Platform, "linux"),
          Effect.provide(NodeServices.layer),
        );
        for (const token of ["first-run", "second-run"]) {
          process.env = environment(token);
          if (token === "second-run") explicit.CURSOR_AUTH_TOKEN = "provided-later";
          const result = yield* provided;
          assert.strictEqual(result.windows[0]?.usedPercent, 42);
        }
        assert.deepEqual(
          captured,
          argument === "explicit"
            ? ["Bearer provided", "Bearer provided-later"]
            : ["Bearer first-run", "Bearer second-run"],
        );
      } finally {
        process.env = saved;
      }
    }),
);
