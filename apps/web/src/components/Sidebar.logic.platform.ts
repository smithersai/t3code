/** @throws {never} */
export function readTypeOfIntersectionObserver() {
  return typeof IntersectionObserver;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}

export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}
