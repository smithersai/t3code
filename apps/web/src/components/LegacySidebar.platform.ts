export function callRequestAnimationFrame(callback: FrameRequestCallback) {
  return requestAnimationFrame(callback);
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function callWindowSetTimeout(handler: () => void, timeout?: number) {
  return window.setTimeout(handler, timeout);
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
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

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
