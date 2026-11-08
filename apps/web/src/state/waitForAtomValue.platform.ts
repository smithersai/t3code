export function callGlobalThisClearTimeout(...args: Parameters<typeof globalThis.clearTimeout>) {
  return globalThis.clearTimeout(...args);
}

export function callGlobalThisSetTimeout(...args: Parameters<typeof globalThis.setTimeout>) {
  return globalThis.setTimeout(...args);
}
