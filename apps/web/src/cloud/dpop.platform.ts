export function callGlobalThisCryptoGetRandomValues<T extends ArrayBufferView<ArrayBuffer>>(
  array: T,
): T {
  return globalThis.crypto.getRandomValues(array);
}

export function callGlobalThisCryptoSubtleDigest(
  ...args: Parameters<typeof globalThis.crypto.subtle.digest>
) {
  return globalThis.crypto.subtle.digest(...args);
}

export function callIndexedDBOpen(...args: Parameters<typeof indexedDB.open>) {
  return indexedDB.open(...args);
}

/** @throws {never} */
export function readTypeOfIndexedDB() {
  return typeof indexedDB;
}

export function generateDpopKey(): Promise<CryptoKeyPair> {
  return crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, [
    "sign",
    "verify",
  ]) as Promise<CryptoKeyPair>;
}

export function exportDpopJwk(key: CryptoKey) {
  return crypto.subtle.exportKey("jwk", key);
}
