// @effect-diagnostics globalTimers:off -- Preserve the timers owned by the calling callbacks.
// @effect-diagnostics globalConsole:off -- Preserve existing callback logging at the platform boundary.
export function warnOnPlatform(...values: unknown[]): void {
  console.warn(...values);
}

export const scheduleOnPlatform = (callback: () => void, delay: number) => setTimeout(callback, delay);

export function cancelOnPlatform(timer: ReturnType<typeof setTimeout>): void {
  clearTimeout(timer);
}
