/** @throws {never} */
export function concatSkillChunks(chunks: ReadonlyArray<Uint8Array>): Buffer {
  return Buffer.concat(chunks);
}
