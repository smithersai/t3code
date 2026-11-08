export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: ElementCreationOptions,
): HTMLElementTagNameMap[K] {
  return document.createElement(tag, options);
}
