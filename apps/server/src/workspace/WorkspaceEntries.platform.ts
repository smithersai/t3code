// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFSP from "node:fs/promises";

export function readDirectoryEntries(directory: string) {
  return NodeFSP.readdir(directory, { withFileTypes: true });
}

export function resolveRealPath(path: string) {
  return NodeFSP.realpath(path);
}

export function linkStatus(path: string) {
  return NodeFSP.lstat(path);
}
