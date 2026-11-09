/** @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text);
}

/** @throws {never} */
export function bytesToBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
}
