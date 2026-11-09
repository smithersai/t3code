// @effect-diagnostics globalTimers:off - The tracker runs in atom subscriptions, outside an Effect runtime.

/** @throws {never} */
export const startTimeout = (callback: () => void, ms: number): ReturnType<typeof setTimeout> =>
  setTimeout(callback, ms);

/** @throws {never} */
export const cancelTimeout = (handle: ReturnType<typeof setTimeout>): void => clearTimeout(handle);
