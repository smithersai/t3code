export function callSessionStorageGetItem(key: string) {
  return sessionStorage.getItem(key);
}

export function callSessionStorageSetItem(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

export function readWindowLocationHash() {
  return window.location.hash;
}

export function readWindowLocationSearch() {
  return window.location.search;
}

export function readWindowLocationPathname() {
  return window.location.pathname;
}

export function readWindowHistoryState(): unknown {
  return window.history.state;
}

export function callWindowHistoryReplaceState(...args: Parameters<History["replaceState"]>) {
  return window.history.replaceState(...args);
}

export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function isFormData(value: unknown): value is FormData {
  return value instanceof FormData;
}

export function createFormData() {
  return new FormData();
}

export function callWindowLocationReload() {
  return window.location.reload();
}

export function writeDocumentTitle(title: string) {
  document.title = title;
}

export function createEventSource(...args: ConstructorParameters<typeof EventSource>) {
  return new EventSource(...args);
}

export function readEventSourceClosed() {
  return EventSource.CLOSED;
}

export function callWindowOpen(...args: Parameters<typeof window.open>) {
  return window.open(...args);
}

export function callUrlCreateObjectURL(object: Blob | MediaSource) {
  return URL.createObjectURL(object);
}

export function callUrlRevokeObjectURL(url: string) {
  return URL.revokeObjectURL(url);
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
