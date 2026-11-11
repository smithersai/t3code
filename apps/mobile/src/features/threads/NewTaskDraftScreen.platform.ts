/** @throws {never} */
export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}

/** @throws {never} */
export function callCancelAnimationFrame(...args: Parameters<typeof cancelAnimationFrame>) {
  return cancelAnimationFrame(...args);
}
