export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

export function callQueueMicrotask(...args: Parameters<typeof queueMicrotask>) {
  return queueMicrotask(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

export function readWindowLocalStorage() {
  return window.localStorage;
}
