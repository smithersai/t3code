// @effect-diagnostics nodeBuiltinImport:off - Effect has no incremental digest.
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";

export const makeSha256Hash = Effect.sync(() => NodeCrypto.createHash("sha256"));
