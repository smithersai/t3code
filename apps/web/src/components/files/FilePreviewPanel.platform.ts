export function callCancelAnimationFrame(...args: Parameters<typeof cancelAnimationFrame>) {
  return cancelAnimationFrame(...args);
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: ElementCreationOptions,
): HTMLElementTagNameMap[K] {
  return document.createElement(tag, options);
}

export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

export function callURLCreateObjectURL(...args: Parameters<typeof URL.createObjectURL>) {
  return URL.createObjectURL(...args);
}

export function callURLRevokeObjectURL(...args: Parameters<typeof URL.revokeObjectURL>) {
  return URL.revokeObjectURL(...args);
}

export function callWindowAddEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): void;
export function callWindowAddEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;
export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callWindowRemoveEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | EventListenerOptions,
): void;
export function callWindowRemoveEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;
export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}
