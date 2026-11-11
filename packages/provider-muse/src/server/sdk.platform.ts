// @effect-diagnostics globalTimers:off
// @effect-diagnostics-next-line nodeBuiltinImport:off -- FileSystem.realPath is Node's JS realpath; museWorkspaceRoot needs the native one.
import * as NodeFSP from "node:fs/promises";

/** @throws {never} */
export function readProcessEnv(): NodeJS.ProcessEnv {
  return process.env;
}

export function nativeRealpath(path: string): Promise<string> {
  return NodeFSP.realpath(path);
}

/**
 * Starts the native startup deadline without keeping the process alive.
 *
 * @throws {never}
 */
export function startStartupTimer(onTimeout: () => void, ms: number): NodeJS.Timeout {
  const timer = setTimeout(onTimeout, ms);
  timer.unref();
  return timer;
}

/** @throws {never} */
export function clearStartupTimer(timer: NodeJS.Timeout): void {
  clearTimeout(timer);
}
