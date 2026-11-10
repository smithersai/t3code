export function callDocumentGetElementById(elementId: string) {
  return document.getElementById(elementId);
}

export function readDocumentBody() {
  return document.body;
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function callRequestAnimationFrame(callback: FrameRequestCallback) {
  return requestAnimationFrame(callback);
}
