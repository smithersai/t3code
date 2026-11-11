/** @throws {never} */
export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

/** @throws {never} */
export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

/** @throws {never} */
export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}

/** @throws {never} */
export function callCancelAnimationFrame(...args: Parameters<typeof cancelAnimationFrame>) {
  return cancelAnimationFrame(...args);
}

/** @throws {never} */
export function callSetInterval(...args: Parameters<typeof setInterval>) {
  return setInterval(...args);
}

/** @throws {never} */
export function callClearInterval(...args: Parameters<typeof clearInterval>) {
  return clearInterval(...args);
}
