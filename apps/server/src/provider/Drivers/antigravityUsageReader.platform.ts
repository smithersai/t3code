// @effect-diagnostics-next-line nodeBuiltinImport:off - Effect's File.Info has no ctime, which the cache fingerprint needs.
import * as NodeFSP from "node:fs/promises";

export const statFile = (file: string) => NodeFSP.stat(file);
