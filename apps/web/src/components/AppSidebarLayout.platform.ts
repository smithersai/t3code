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

export function readWindowInnerWidth() {
  return window.innerWidth;
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
}

export function callWindowHistoryBack() {
  return window.history.back();
}

export function callWindowHistoryForward() {
  return window.history.forward();
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function callWindowGetSelection() {
  return window.getSelection();
}
