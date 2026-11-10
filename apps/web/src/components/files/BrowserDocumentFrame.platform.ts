export function readNavigatorPdfViewerEnabled() {
  return navigator.pdfViewerEnabled;
}

export function readNavigatorUserAgent() {
  return navigator.userAgent;
}

export function readNavigatorMaxTouchPoints() {
  return navigator.maxTouchPoints;
}

export function readNavigatorUserActivation() {
  return navigator.userActivation;
}

export function createKeyboardEvent(...args: ConstructorParameters<typeof KeyboardEvent>) {
  return new KeyboardEvent(...args);
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function readDocumentActiveElement() {
  return document.activeElement;
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
