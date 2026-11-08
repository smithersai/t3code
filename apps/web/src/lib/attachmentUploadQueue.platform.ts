export function createXMLHttpRequest(...args: ConstructorParameters<typeof XMLHttpRequest>) {
  return new XMLHttpRequest(...args);
}
