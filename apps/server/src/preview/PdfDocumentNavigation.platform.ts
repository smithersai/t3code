/** @throws {never} */
export function utf8ToBase64(text: string): string {
  return Buffer.from(text).toString("base64");
}
