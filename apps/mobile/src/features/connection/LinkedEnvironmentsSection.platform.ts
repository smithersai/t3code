/** @throws {never} */
export function callSetInterval(...args: Parameters<typeof setInterval>) {
  return setInterval(...args);
}

/** @throws {never} */
export function callClearInterval(...args: Parameters<typeof clearInterval>) {
  return clearInterval(...args);
}
