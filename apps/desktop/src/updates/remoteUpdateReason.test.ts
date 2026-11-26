import { assert, describe, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";

import { normalizeRemoteUpdateReason } from "./remoteUpdateFlow.ts";

describe("remote update reason", () => {
  it.effect.prop(
    "normalizes every string without throwing or producing a blank reason",
    { reason: Schema.UndefinedOr(Schema.String) },
    ({ reason }) =>
      Effect.sync(() => {
        const normalized = normalizeRemoteUpdateReason(reason);
        assert.strictEqual(normalized, reason?.trim() || undefined);
        assert.strictEqual(normalizeRemoteUpdateReason(normalized), normalized);
      }),
  );
});
