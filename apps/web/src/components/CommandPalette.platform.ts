export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
