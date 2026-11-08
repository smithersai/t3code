import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as OpenCodeRuntime from "../OpenCodeRuntime.ts";
import { verifyServer } from "./OpenCode2Server.vibe";

it.effect.prop(
  "preserves runtime failures and sanitizes foreign server failures",
  {
    detail: Schema.String,
    kind: Schema.Literals(["runtime", "unauthorized", "foreign"]),
  },
  ({ detail, kind }) =>
    Effect.gen(function* () {
      const original =
        kind === "runtime"
          ? new OpenCodeRuntime.OpenCodeRuntimeError({ operation: "probe", detail })
          : { _tag: kind === "unauthorized" ? "UnauthorizedError" : "ClientError", detail };
      const client = { server: { info: () => Effect.fail(original) } };
      const failure = yield* verifyServer(client).pipe(Effect.flip);
      if (kind === "runtime") expect(failure).toBe(original);
      else
        expect(failure.detail).toBe(
          kind === "unauthorized"
            ? "The OpenCode server rejected the server password."
            : "The server is not an OpenCode 2 server.",
        );
    }),
  { arbitrary: { runs: 100 } },
);
