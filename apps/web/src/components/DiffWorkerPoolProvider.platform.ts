/** @throws {never} */
export function readTypeOfNavigator() {
  return typeof navigator;
}

export function readNavigatorHardwareConcurrency() {
  return navigator.hardwareConcurrency;
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function callSetTimeout(handler: () => void, timeout?: number) {
  return setTimeout(handler, timeout);
}

export function callClearTimeout(id: ReturnType<typeof setTimeout> | undefined) {
  return clearTimeout(id);
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}
