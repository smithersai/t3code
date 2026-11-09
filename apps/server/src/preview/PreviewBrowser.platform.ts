// @effect-diagnostics nodeBuiltinImport:off - Effect has no incremental digest.
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";

export const makeSha256 = Effect.sync(() => {
  const hash = NodeCrypto.createHash("sha256");
  return {
    update: (chunk: Uint8Array) =>
      Effect.sync(() => {
        hash.update(chunk);
      }),
    digest: Effect.sync(() => hash.digest("hex")),
  };
});
