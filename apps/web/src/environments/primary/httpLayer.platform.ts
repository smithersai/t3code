/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowLocationOriginStartsWith(
  ...args: Parameters<typeof window.location.origin.startsWith>
) {
  return window.location.origin.startsWith(...args);
}

export function readWindowLocationOrigin() {
  return window.location.origin;
}

export function readGlobalThisFetch() {
  return globalThis.fetch;
}
