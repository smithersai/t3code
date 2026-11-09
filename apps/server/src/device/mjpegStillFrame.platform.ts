// The platform code of mjpegStillFrame.vibe, which a .vibe file does not use directly (EK4402).

export const HEADER_END = Buffer.from("\r\n\r\n");

/** @throws {never} */
export function bufferView(chunk: Uint8Array): Buffer {
  return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
}

/** @throws {never} */
export function concatBuffers(list: ReadonlyArray<Uint8Array>): Buffer {
  return Buffer.concat(list);
}
