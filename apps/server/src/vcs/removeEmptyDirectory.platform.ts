// @effect-diagnostics nodeBuiltinImport:off - Effect's FileSystem has no rmdir.
import * as NodeFSP from "node:fs/promises";

export function removeDirectory(path: string): Promise<void> {
  return NodeFSP.rmdir(path);
}
