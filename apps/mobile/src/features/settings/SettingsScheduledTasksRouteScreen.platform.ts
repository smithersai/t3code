export function callClearInterval(...args: Parameters<typeof clearInterval>) {
  return clearInterval(...args);
}

export function callSetInterval(...args: Parameters<typeof setInterval>) {
  return setInterval(...args);
}
