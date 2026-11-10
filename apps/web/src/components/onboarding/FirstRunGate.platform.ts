export function callWindowSetTimeout(handler: () => void, timeout?: number) {
  return window.setTimeout(handler, timeout);
}

export function callWindowClearTimeout(id: number | undefined) {
  return window.clearTimeout(id);
}

export function callWindowLocationReload() {
  return window.location.reload();
}
