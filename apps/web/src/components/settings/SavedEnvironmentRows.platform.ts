export function callWindowSetInterval(handler: () => void, timeout?: number) {
  return window.setInterval(handler, timeout);
}

export function callWindowClearInterval(id: number | undefined) {
  return window.clearInterval(id);
}
