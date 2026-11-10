export function readNavigatorPlatform() {
  return navigator.platform;
}

export function callWindowSetTimeout(handler: () => void, timeout?: number) {
  return window.setTimeout(handler, timeout);
}

export function callWindowClearTimeout(id: number | undefined) {
  return window.clearTimeout(id);
}
