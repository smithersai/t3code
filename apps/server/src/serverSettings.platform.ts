/** @throws {never} */
export function encodeBase64UrlUtf8(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}
