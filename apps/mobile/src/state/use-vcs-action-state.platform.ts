// @effect-diagnostics globalTimers:off -- Preserve the timers owned by the calling callbacks.
export const scheduleOnPlatform = (callback: () => void, delay: number) => setTimeout(callback, delay);

export function cancelOnPlatform(timer: ReturnType<typeof setTimeout>): void {
  clearTimeout(timer);
}
