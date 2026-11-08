export function callWindowLocalStorageGetItem(
  ...args: Parameters<typeof window.localStorage.getItem>
) {
  return window.localStorage.getItem(...args);
}

export function callWindowLocalStorageSetItem(
  ...args: Parameters<typeof window.localStorage.setItem>
) {
  return window.localStorage.setItem(...args);
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function readDocumentVisibilityState() {
  return document.visibilityState;
}

export function callDocumentHasFocus(...args: Parameters<typeof document.hasFocus>) {
  return document.hasFocus(...args);
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

/** @throws {never} */
export function readTypeOfDocument() {
  return typeof document;
}

export function callDocumentAddEventListener(
  ...args: Parameters<typeof document.addEventListener>
) {
  return document.addEventListener(...args);
}

export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callDocumentRemoveEventListener(
  ...args: Parameters<typeof document.removeEventListener>
) {
  return document.removeEventListener(...args);
}

export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}
