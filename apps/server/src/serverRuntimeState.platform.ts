/** @throws {never} */
export function readProcessId(): number {
  return process.pid;
}

/** @throws {unknown} */
export function sendProcessSignal(pid: number, signal: number): void {
  process.kill(pid, signal);
}
