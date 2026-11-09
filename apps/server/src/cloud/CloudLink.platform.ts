// The platform code of CloudLink.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no createPublicKey.
import * as NodeCrypto from "node:crypto";

export const createPublicKey = (pem: string) => NodeCrypto.createPublicKey(pem);
