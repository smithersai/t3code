/** @throws {never} */
export function concatBytes(chunks: ReadonlyArray<Uint8Array>, totalLength: number) {
  return Buffer.concat(chunks, totalLength);
}

/** @throws {never} */
export function utf8ByteLength(value: string): number {
  return Buffer.byteLength(value);
}
