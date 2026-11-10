/** @throws {never} */
export function callConsoleWarn(...args: Parameters<typeof console.warn>) {
  return console.warn(...args);
}
