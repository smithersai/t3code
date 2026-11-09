/** @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text);
}

/** @throws {never} */
export function bytesToBuffer(bytes: Uint8Array): Buffer {
  return Buffer.from(bytes);
}
