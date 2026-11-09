// The platform code of environmentKeys.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no generateKeyPairSync.
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";

export const generateEd25519PemKeyPair = Effect.sync(() =>
  NodeCrypto.generateKeyPairSync("ed25519", {
    privateKeyEncoding: { format: "pem", type: "pkcs8" },
    publicKeyEncoding: { format: "pem", type: "spki" },
  }),
);
