/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
