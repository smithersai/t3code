export function callCancelAnimationFrame(...args: Parameters<typeof cancelAnimationFrame>) {
  return cancelAnimationFrame(...args);
}

export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

export function callGetComputedStyle(...args: Parameters<typeof getComputedStyle>) {
  return getComputedStyle(...args);
}

export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}

export function callWindowSetTimeout(...args: Parameters<typeof window.setTimeout>) {
  return window.setTimeout(...args);
}

export function readDocumentFonts() {
  return document.fonts;
}

export function readHTMLElement() {
  return HTMLElement;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
