export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowGetSelection() {
  return window.getSelection();
}

export function isHTMLImageElement(value: unknown): value is HTMLImageElement {
  return value instanceof HTMLImageElement;
}
