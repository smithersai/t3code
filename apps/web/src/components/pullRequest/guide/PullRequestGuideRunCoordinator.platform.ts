export function callCSSEscape(...args: Parameters<typeof CSS.escape>) {
  return CSS.escape(...args);
}

export function callClearInterval(...args: Parameters<typeof clearInterval>) {
  return clearInterval(...args);
}

export function callDocumentHasFocus(...args: Parameters<typeof document.hasFocus>) {
  return document.hasFocus(...args);
}

export function callDocumentQuerySelector<E extends Element = Element>(
  selectors: string,
): E | null {
  return document.querySelector<E>(selectors);
}

export function callSetInterval(...args: Parameters<typeof setInterval>) {
  return setInterval(...args);
}

export function callWindowFocus(...args: Parameters<typeof window.focus>) {
  return window.focus(...args);
}

export function createNotification(...args: ConstructorParameters<typeof Notification>) {
  return new Notification(...args);
}

export function readDocumentVisibilityState() {
  return document.visibilityState;
}

export function readNotification() {
  return Notification;
}

/** @throws {never} */
export function readTypeOfNotification() {
  return typeof Notification;
}
