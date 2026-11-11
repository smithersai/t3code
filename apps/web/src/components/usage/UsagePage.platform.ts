export function callGlobalThisWindowAddEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): void;
export function callGlobalThisWindowAddEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;
export function callGlobalThisWindowAddEventListener(
  ...args: Parameters<typeof globalThis.window.addEventListener>
) {
  return globalThis.window.addEventListener(...args);
}

export function callGlobalThisWindowRemoveEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | EventListenerOptions,
): void;
export function callGlobalThisWindowRemoveEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;
export function callGlobalThisWindowRemoveEventListener(
  ...args: Parameters<typeof globalThis.window.removeEventListener>
) {
  return globalThis.window.removeEventListener(...args);
}
