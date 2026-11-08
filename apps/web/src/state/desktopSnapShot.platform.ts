export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}
