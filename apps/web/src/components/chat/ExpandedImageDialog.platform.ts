export function callURLRevokeObjectURL(...args: Parameters<typeof URL.revokeObjectURL>) {
  return URL.revokeObjectURL(...args);
}

export function readDocumentActiveHTMLElement() {
  return document.activeElement instanceof HTMLElement ? document.activeElement : null;
}

export function readHTMLVideoElement() {
  return HTMLVideoElement;
}
