export function callSetInterval(handler: () => void, timeout?: number) {
  return setInterval(handler, timeout);
}

export function callClearInterval(id: ReturnType<typeof setInterval> | undefined) {
  return clearInterval(id);
}
