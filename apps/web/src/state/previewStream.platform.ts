export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}
