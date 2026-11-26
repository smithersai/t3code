/** @throws {never} */
export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

/** @throws {never} */
export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}
