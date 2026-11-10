export function callDocumentAddEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): void;
export function callDocumentAddEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;
export function callDocumentAddEventListener(
  ...args: Parameters<typeof document.addEventListener>
) {
  return document.addEventListener(...args);
}

export function callDocumentRemoveEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | EventListenerOptions,
): void;
export function callDocumentRemoveEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;
export function callDocumentRemoveEventListener(
  ...args: Parameters<typeof document.removeEventListener>
) {
  return document.removeEventListener(...args);
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

export function callWindowCancelAnimationFrame(
  ...args: Parameters<typeof window.cancelAnimationFrame>
) {
  return window.cancelAnimationFrame(...args);
}

export function callWindowClearTimeout(...args: Parameters<typeof window.clearTimeout>) {
  return window.clearTimeout(...args);
}

export function callWindowPerformanceNow() {
  return window.performance.now();
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

export function callWindowRequestAnimationFrame(
  ...args: Parameters<typeof window.requestAnimationFrame>
) {
  return window.requestAnimationFrame(...args);
}

export function callWindowSetTimeout(...args: Parameters<typeof window.setTimeout>) {
  return window.setTimeout(...args);
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function readElement() {
  return Element;
}

export function readHTMLElement() {
  return HTMLElement;
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function readNode() {
  return Node;
}

export function readWheelEvent() {
  return WheelEvent;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
