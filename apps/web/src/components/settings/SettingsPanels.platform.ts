/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowLocationAssign(url: string | URL) {
  return window.location.assign(url);
}

export function readNavigatorPlatform() {
  return navigator.platform;
}
