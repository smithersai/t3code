/** @throws {never} */
export function readTypeOfLocalStorage() {
  return typeof localStorage;
}

export function readLocalStorage() {
  return localStorage;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

/** @throws {never} */
export function readTypeOfWindowAddEventListener() {
  return typeof window.addEventListener;
}

export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callURLRevokeObjectURL(...args: Parameters<typeof URL.revokeObjectURL>) {
  return URL.revokeObjectURL(...args);
}

export function createFile(...args: ConstructorParameters<typeof File>) {
  return new File(...args);
}
