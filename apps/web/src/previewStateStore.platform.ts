export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
