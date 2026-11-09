/** @throws {never} */
export function concatAttachmentChunks(chunks: ReadonlyArray<Uint8Array>): Buffer {
  return Buffer.concat(chunks);
}

/** @throws {never} */
export function encodeAttachmentBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
}
