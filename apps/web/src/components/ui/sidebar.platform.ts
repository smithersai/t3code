/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function callWindowMatchMedia(query: string) {
  return window.matchMedia(query);
}

export function callCookieStoreSet(options: CookieInit) {
  return cookieStore.set(options);
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}
