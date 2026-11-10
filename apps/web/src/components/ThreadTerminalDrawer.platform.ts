export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: ElementCreationOptions,
): HTMLElementTagNameMap[K] {
  return document.createElement(tag, options);
}

export function callDocumentQuerySelector<E extends Element = Element>(
  selectors: string,
): E | null {
  return document.querySelector<E>(selectors);
}

export function callGetComputedStyle(...args: Parameters<typeof getComputedStyle>) {
  return getComputedStyle(...args);
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

export function callWindowClearTimeout(...args: Parameters<typeof window.clearTimeout>) {
  return window.clearTimeout(...args);
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

export function callWindowSetTimeout(...args: Parameters<typeof window.setTimeout>) {
  return window.setTimeout(...args);
}

export function createMutationObserver(...args: ConstructorParameters<typeof MutationObserver>) {
  return new MutationObserver(...args);
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function readDocumentBody() {
  return document.body;
}

export function readDocumentDocumentElement() {
  return document.documentElement;
}

/** @throws {never} */
export function readTypeOfDocument() {
  return typeof document;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowInnerHeight() {
  return window.innerHeight;
}

export function readWindowInnerWidth() {
  return window.innerWidth;
}
