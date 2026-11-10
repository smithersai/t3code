export function createBlob(...args: ConstructorParameters<typeof Blob>) {
  return new Blob(...args);
}

/** @throws {never} */
export function readTypeOfCaches() {
  return typeof caches;
}

export function callCachesOpen(cacheName: string) {
  return caches.open(cacheName);
}

export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function callUrlCreateObjectURL(object: Blob | MediaSource) {
  return URL.createObjectURL(object);
}

export function callUrlRevokeObjectURL(url: string) {
  return URL.revokeObjectURL(url);
}
