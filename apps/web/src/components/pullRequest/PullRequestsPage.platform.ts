export function callCSSEscape(...args: Parameters<typeof CSS.escape>) {
  return CSS.escape(...args);
}

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

export function createIntersectionObserver(
  ...args: ConstructorParameters<typeof IntersectionObserver>
) {
  return new IntersectionObserver(...args);
}

/** @throws {never} */
export function readTypeOfIntersectionObserver() {
  return typeof IntersectionObserver;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowInnerWidth() {
  return window.innerWidth;
}
