// The platform code of utils.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no createHmac or timingSafeEqual.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function sha256Hex(input: string): string {
  return NodeCrypto.createHash("sha256").update(input).digest("hex");
}

/** @throws {never} */
export function hmacSha256Base64Url(payload: string, secret: Uint8Array): string {
  return NodeCrypto.createHmac("sha256", Buffer.from(secret)).update(payload).digest("base64url");
}

/** @throws {never} */
export function timingSafeEqualBase64UrlBytes(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left, "base64url");
  const rightBuffer = Buffer.from(right, "base64url");
  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }
  return NodeCrypto.timingSafeEqual(leftBuffer, rightBuffer);
}
