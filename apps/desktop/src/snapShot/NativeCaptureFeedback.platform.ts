// @effect-diagnostics nodeBuiltinImport:off -- Host APIs stay at the platform boundary.
// @effect-diagnostics globalTimers:off -- Preserve the timers owned by the calling callbacks.
import * as NodeChildProcess from "node:child_process";

export const scheduleOnPlatform = (callback: () => void, delay: number) =>
  setTimeout(callback, delay);

export function cancelOnPlatform(timer: ReturnType<typeof setTimeout>): void {
  clearTimeout(timer);
}

export const spawnFeedbackOnPlatform = (executable: string, directory: string, options: unknown) =>
  NodeChildProcess.spawn(executable, ["feedback", directory, JSON.stringify(options)], {
    stdio: ["pipe", "pipe", "ignore"],
  });
