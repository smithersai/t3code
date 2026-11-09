// Capture before config and bootstrap reads to detect launcher loss during startup.
export const startupParentPid = process.ppid;

/** @throws {never} */
export function readParentPid(): number {
  return process.ppid;
}
