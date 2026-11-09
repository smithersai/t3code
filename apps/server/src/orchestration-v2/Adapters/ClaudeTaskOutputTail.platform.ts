/**
 * The current process uid, or undefined where the platform has none (Windows).
 * @throws {never}
 */
export function readProcessUid(): number | undefined {
  return process.getuid?.();
}
