import { assert, describe, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { ManagedRelay, relayRequestFailureDetail } from "@t3tools/client-runtime/relay";

import { CloudEnvironmentLinkError, decodedRelayClientError } from "./linkEnvironmentErrors.ts";

describe("cloud relay error boundary", () => {
  it.effect.prop(
    "retains request detail, trace id and the original cause",
    { message: Schema.String, traceId: Schema.String, status: Schema.Literals([400, 403, 504]) },
    ({ message, traceId, status }) =>
      Effect.sync(() => {
        const cause = new ManagedRelay.ManagedRelayRequestFailedError({
          action: "link relay environment",
          cause: new Error("transport"),
          status,
          traceId,
        });
        const error = decodedRelayClientError(message)(cause);
        assert.instanceOf(error, CloudEnvironmentLinkError);
        assert.strictEqual(error._tag, "CloudEnvironmentLinkError");
        assert.strictEqual(error.cause, cause);
        assert.strictEqual(error.message, `${message}: ${relayRequestFailureDetail(cause)}`);
        assert.strictEqual(error.traceId, traceId || undefined);
      }),
  );

  it.effect.prop(
    "preserves non-request failures without inventing request detail",
    { message: Schema.String, relayUrl: Schema.String },
    ({ message, relayUrl }) =>
      Effect.sync(() => {
        const cause = new ManagedRelay.ManagedRelayUrlInvalidError({ relayUrl });
        const error = decodedRelayClientError(message)(cause);
        assert.strictEqual(error.message, message);
        assert.strictEqual(error.cause, cause);
        assert.strictEqual(error.traceId, undefined);
      }),
  );
});
