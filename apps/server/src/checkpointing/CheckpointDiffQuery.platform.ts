/** @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text);
}

/** @throws {never} */
export function utf8BytesPrefix(text: string, end: number): Uint8Array {
  return Buffer.from(text).subarray(0, end);
}
