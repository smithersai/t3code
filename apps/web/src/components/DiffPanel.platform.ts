export function callConsoleWarn(...args: Parameters<typeof console.warn>) {
  return console.warn(...args);
}

export function readHTMLAnchorElement() {
  return HTMLAnchorElement;
}

export function readHTMLButtonElement() {
  return HTMLButtonElement;
}

export function readHTMLElement() {
  return HTMLElement;
}
