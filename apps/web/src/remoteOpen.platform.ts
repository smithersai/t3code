export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowLocationAssign(...args: Parameters<typeof window.location.assign>) {
  return window.location.assign(...args);
}
