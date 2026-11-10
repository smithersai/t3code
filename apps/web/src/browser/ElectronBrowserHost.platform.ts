export function callWindowRequestAnimationFrame(callback: FrameRequestCallback) {
  return window.requestAnimationFrame(callback);
}

export function callWindowCancelAnimationFrame(handle: number) {
  return window.cancelAnimationFrame(handle);
}

export function createMutationObserver(callback: MutationCallback) {
  return new MutationObserver(callback);
}

export function readDocumentElement() {
  return document.documentElement;
}

export function readDocumentHead() {
  return document.head;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
