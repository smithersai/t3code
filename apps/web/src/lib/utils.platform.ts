export function callGlobalThisCryptoGetRandomValues<T extends ArrayBufferView<ArrayBuffer>>(
  array: T,
): T {
  return globalThis.crypto.getRandomValues(array);
}
