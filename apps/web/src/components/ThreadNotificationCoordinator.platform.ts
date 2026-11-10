export function readNavigatorPlatform() {
  return navigator.platform;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowAddEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): void;
export function callWindowAddEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;
export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callWindowRemoveEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: boolean | EventListenerOptions,
): void;
export function callWindowRemoveEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;
export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}

export function callDocumentAddEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): void;
export function callDocumentAddEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;
export function callDocumentAddEventListener(
  ...args: Parameters<typeof document.addEventListener>
) {
  return document.addEventListener(...args);
}

export function callDocumentRemoveEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | EventListenerOptions,
): void;
export function callDocumentRemoveEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;
export function callDocumentRemoveEventListener(
  ...args: Parameters<typeof document.removeEventListener>
) {
  return document.removeEventListener(...args);
}

export function readDocumentVisibilityState() {
  return document.visibilityState;
}

export function callDocumentHasFocus() {
  return document.hasFocus();
}

/** @throws {never} */
export function readTypeOfNotification() {
  return typeof Notification;
}

export function readNotificationPermission() {
  return Notification.permission;
}

export function createNotification(...args: ConstructorParameters<typeof Notification>) {
  return new Notification(...args);
}

export function callWindowFocus() {
  return window.focus();
}
