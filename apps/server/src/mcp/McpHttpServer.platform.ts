/** @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text, "utf8");
}

/** @throws {never} */
export function base64ToBytes(data: string): Uint8Array {
  return new Uint8Array(Buffer.from(data, "base64"));
}
