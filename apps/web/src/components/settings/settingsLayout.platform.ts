export function callDocumentGetElementById(...args: Parameters<typeof document.getElementById>) {
  return document.getElementById(...args);
}

export function callWindowMatchMedia(...args: Parameters<typeof window.matchMedia>) {
  return window.matchMedia(...args);
}

export function createMutationObserver(...args: ConstructorParameters<typeof MutationObserver>) {
  return new MutationObserver(...args);
}

export function readCSSTransition() {
  return CSSTransition;
}

export function readDocumentActiveElement() {
  return document.activeElement;
}
