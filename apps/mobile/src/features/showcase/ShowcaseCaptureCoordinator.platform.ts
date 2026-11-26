export const expoPublicShowcase = process.env.EXPO_PUBLIC_SHOWCASE;

export function callCancelAnimationFrame(...args: Parameters<typeof cancelAnimationFrame>) {
  return cancelAnimationFrame(...args);
}

export function callClearInterval(...args: Parameters<typeof clearInterval>) {
  return clearInterval(...args);
}

export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

export function callConsoleWarn(...args: Parameters<typeof console.warn>) {
  return console.warn(...args);
}

export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}

export function callSetInterval(...args: Parameters<typeof setInterval>) {
  return setInterval(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}
