export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(tagName: K) {
  return document.createElement(tagName);
}
