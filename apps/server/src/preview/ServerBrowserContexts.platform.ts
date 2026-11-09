// @effect-diagnostics nodeBuiltinImport:off - Owns Playwright resources outside the Effect runtime.
import * as NodeFSP from "node:fs/promises";
import * as NodeModule from "node:module";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";

// Playwright needs its files on disk. createRequire also resolves it from a Node SEA executable.
const requirePlaywright = NodeModule.createRequire(import.meta.url);
export const loadPlaywright = () =>
  requirePlaywright("playwright-core") as typeof import("playwright-core");

/** @throws {never} */
export function osRelease(): string {
  return NodeOS.release();
}

/** @throws {never} */
export function processEnvironment(): NodeJS.ProcessEnv {
  return process.env;
}

export function makeDirectory(directory: string) {
  return NodeFSP.mkdir(directory, { recursive: true });
}

/** @throws {never} */
export function joinPath(...segments: ReadonlyArray<string>): string {
  return NodePath.join(...segments);
}

export function removeRecursive(path: string) {
  return NodeFSP.rm(path, { recursive: true, force: true });
}
