import type { ServerProcessSignal } from "@t3tools/contracts";
import * as Effect from "effect/Effect";

/** @throws {never} */
export function serverPid(): number {
  return process.pid;
}

export const readServerPid = Effect.sync(() => process.pid);

export function killProcess(pid: number, signal: ServerProcessSignal): void {
  process.kill(pid, signal);
}
