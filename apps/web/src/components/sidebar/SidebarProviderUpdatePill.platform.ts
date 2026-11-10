export function callWindowClearTimeout(...args: Parameters<typeof window.clearTimeout>) {
  return window.clearTimeout(...args);
}

export function callWindowSetTimeout(...args: Parameters<typeof window.setTimeout>) {
  return window.setTimeout(...args);
}
