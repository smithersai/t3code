/** @throws {never} */
export function base64UrlFromBytes(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64url");
}
