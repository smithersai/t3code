// The platform code of ReusableDevAuth.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no timingSafeEqual.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function sha256Digest(input: string): Buffer {
  return NodeCrypto.createHash("sha256").update(input).digest();
}

/** @throws {never} */
export function timingSafeEqualSha256(hash: Buffer, credential: string): boolean {
  return NodeCrypto.timingSafeEqual(
    hash,
    NodeCrypto.createHash("sha256").update(credential).digest(),
  );
}
