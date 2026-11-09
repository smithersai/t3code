// @effect-diagnostics-next-line nodeBuiltinImport:off - Effect's symlink has no type argument, and Windows needs a junction to link without elevation.
import * as NodeFSP from "node:fs/promises";
import * as Effect from "effect/Effect";

export const readProcessEnv = Effect.sync(() => process.env);

/** @throws {never} */
export function readProcessEnvNow(): NodeJS.ProcessEnv {
  return process.env;
}

export const linkSkillDirectory = (target: string, link: string, type: "junction" | "dir") =>
  NodeFSP.symlink(target, link, type);

/** @throws {never} */
export function concatLineChunks(chunks: ReadonlyArray<Uint8Array>, totalLength: number): Buffer {
  return Buffer.concat(chunks, totalLength);
}
