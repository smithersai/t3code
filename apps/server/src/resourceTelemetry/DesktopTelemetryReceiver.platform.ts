// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFS from "node:fs";
import * as NodeNet from "node:net";

export function writeToFileDescriptor(
  fd: number,
  payload: Buffer,
  offset: number,
  length: number,
  callback: (error: NodeJS.ErrnoException | null, bytesWritten: number) => void,
): void {
  NodeFS.write(fd, payload, offset, length, null, callback);
}

/** @throws {never} */
export function utf8LineBytes(line: string): Buffer {
  return Buffer.from(`${line}\n`);
}

export function createInputSocket(fd: number): NodeNet.Socket {
  return new NodeNet.Socket({ fd, readable: true, writable: false });
}
