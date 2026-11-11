/** @throws {never} */
export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}
