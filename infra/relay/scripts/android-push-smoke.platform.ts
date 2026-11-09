// @effect-diagnostics nodeBuiltinImport:off - This developer command reads local credential files.
import * as NodeFSP from "node:fs/promises";
import * as Effect from "effect/Effect";

export const readScriptArgs = Effect.sync(() => process.argv.slice(2));

export function readTextFile(path: string): Promise<string> {
  return NodeFSP.readFile(path, "utf8");
}

/** @throws {never} */
export function webSubtleCrypto(): SubtleCrypto {
  return globalThis.crypto.subtle;
}
