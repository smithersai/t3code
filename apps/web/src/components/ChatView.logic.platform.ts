export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function callAbortSignalTimeout(...args: Parameters<typeof AbortSignal.timeout>) {
  return AbortSignal.timeout(...args);
}

export function createFile(...args: ConstructorParameters<typeof File>) {
  return new File(...args);
}

export function callURLCreateObjectURL(...args: Parameters<typeof URL.createObjectURL>) {
  return URL.createObjectURL(...args);
}

export function callGlobalThisClearTimeout(...args: Parameters<typeof globalThis.clearTimeout>) {
  return globalThis.clearTimeout(...args);
}

export function callGlobalThisSetTimeout(...args: Parameters<typeof globalThis.setTimeout>) {
  return globalThis.setTimeout(...args);
}
