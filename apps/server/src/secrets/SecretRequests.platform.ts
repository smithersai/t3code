// The platform code of SecretRequests.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no createHmac.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function hmacSha256Hex(key: string, data: string): string {
  return NodeCrypto.createHmac("sha256", key).update(data).digest("hex");
}

/** @throws {never} */
export function bytesToHex(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("hex");
}
