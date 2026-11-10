export function callWindowRequestAnimationFrame(
  ...args: Parameters<typeof window.requestAnimationFrame>
) {
  return window.requestAnimationFrame(...args);
}
