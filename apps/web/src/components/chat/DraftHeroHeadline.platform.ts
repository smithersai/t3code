export function callDocumentQuerySelector<E extends Element = Element>(selectors: string) {
  return document.querySelector<E>(selectors);
}
