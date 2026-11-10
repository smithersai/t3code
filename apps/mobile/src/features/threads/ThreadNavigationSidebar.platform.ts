export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}
