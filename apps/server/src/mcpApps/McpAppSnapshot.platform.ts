/** @throws {never} */
export function decodeBase64Utf8(blob: string): string {
  return Buffer.from(blob, "base64").toString("utf8");
}
