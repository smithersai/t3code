export function callWindowMatchMedia(...args: Parameters<typeof window.matchMedia>) {
  return window.matchMedia(...args);
}
