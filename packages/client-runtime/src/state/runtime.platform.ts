/** @throws {never} */
export const readConsole = (): Console => console;

/** @throws {never} */
export const startTimeout = (callback: () => void, ms: number): ReturnType<typeof setTimeout> =>
  // @effect-diagnostics-next-line globalTimers:off - Mirrors `Atom.withRefresh`, outside an Effect runtime.
  setTimeout(callback, ms);

/** @throws {never} */
export const cancelTimeout = (handle: ReturnType<typeof setTimeout>): void => clearTimeout(handle);
