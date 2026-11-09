// @effect-diagnostics nodeBuiltinImport:off
// Cold windows span ~1.4 GB/1,500 files; node:fs buffer streaming is ~10x cheaper than materializing files.
import * as NodeFSP from "node:fs/promises";
import * as NodePath from "node:path";
import * as NodeStringDecoder from "node:string_decoder";

export function readDirectoryEntries(dir: string) {
  return NodeFSP.readdir(dir, { withFileTypes: true });
}

export function statPath(path: string) {
  return NodeFSP.stat(path);
}

export function openForRead(path: string) {
  return NodeFSP.open(path, "r");
}

/** @throws {never} */
export function joinPath(dir: string, name: string): string {
  return NodePath.join(dir, name);
}

/** @throws {never} */
export function allocBuffer(size: number): Buffer {
  return Buffer.alloc(size);
}

/** @throws {never} */
export function bufferFromString(text: string): Buffer {
  return Buffer.from(text);
}

/** @throws {never} */
export function concatBuffers(chunks: ReadonlyArray<Buffer>, totalLength: number): Buffer {
  return Buffer.concat(chunks, totalLength);
}

/** @throws {never} */
export function createUtf8Decoder(): NodeStringDecoder.StringDecoder {
  return new NodeStringDecoder.StringDecoder("utf8");
}
