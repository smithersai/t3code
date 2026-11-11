export function callUrlCreateObjectURL(object: Blob | MediaSource) {
  return URL.createObjectURL(object);
}

export function callUrlRevokeObjectURL(url: string) {
  return URL.revokeObjectURL(url);
}

export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function callSetTimeout(handler: () => void, timeout?: number) {
  return setTimeout(handler, timeout);
}

export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(tagName: K) {
  return document.createElement(tagName);
}
