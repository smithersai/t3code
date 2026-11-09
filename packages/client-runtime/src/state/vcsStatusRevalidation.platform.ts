// @effect-diagnostics globalTimers:off - The wake debounce runs in an atom subscription, outside an Effect runtime.

/** @throws {never} */
export const startTimeout = (callback: () => void, ms: number): ReturnType<typeof setTimeout> =>
  setTimeout(callback, ms);

/** @throws {never} */
export const cancelTimeout = (handle: ReturnType<typeof setTimeout>): void => clearTimeout(handle);
