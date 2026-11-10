export function readWindowLocationHostname() {
  return window.location.hostname;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowIsSecureContext() {
  return window.isSecureContext;
}

export function readNavigatorClipboard() {
  return navigator.clipboard;
}
