export function readWindowLocationHref() {
  return window.location.href;
}

export function callWindowHistoryReplaceState(
  ...args: Parameters<typeof window.history.replaceState>
) {
  return window.history.replaceState(...args);
}

export function readDocumentTitle() {
  return document.title;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

export function readDOMException() {
  return DOMException;
}

export function readWindowPathname() {
  return window.location.pathname;
}
