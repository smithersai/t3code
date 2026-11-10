/** @throws {never} */
export function readTypeOfIndexedDB() {
  return typeof indexedDB;
}

export function callIndexedDBOpen(...args: Parameters<typeof indexedDB.open>) {
  return indexedDB.open(...args);
}

/** @throws {never} */
export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

/** @throws {never} */
export function readWindow() {
  return window;
}

export function createEvent(...args: ConstructorParameters<typeof Event>) {
  return new Event(...args);
}

export function createMessageChannel(...args: ConstructorParameters<typeof MessageChannel>) {
  return new MessageChannel(...args);
}

export function callIDBKeyRangeBound(...args: Parameters<typeof IDBKeyRange.bound>) {
  return IDBKeyRange.bound(...args);
}
