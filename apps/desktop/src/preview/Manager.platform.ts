import * as NodeZlib from "node:zlib";

/** @throws {never} */
export function crc32(data: Uint8Array): number {
  return NodeZlib.crc32(data);
}

/** @throws {never} */
export function pngBlob(bytes: Uint8Array<ArrayBuffer>): Blob {
  return new Blob([bytes], { type: "image/png" });
}
