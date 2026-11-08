/** @throws {never} */
export function readTypeOfLocalStorage() {
  return typeof localStorage;
}

export function readLocalStorage() {
  return localStorage;
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}
