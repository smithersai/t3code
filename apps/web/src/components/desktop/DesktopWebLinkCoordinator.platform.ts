export function callQueueMicrotask(...args: Parameters<typeof queueMicrotask>) {
  return queueMicrotask(...args);
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
