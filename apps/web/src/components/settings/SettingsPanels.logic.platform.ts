export function callLocalStorageGetItem(...args: Parameters<typeof localStorage.getItem>) {
  return localStorage.getItem(...args);
}

export function callLocalStorageSetItem(...args: Parameters<typeof localStorage.setItem>) {
  return localStorage.setItem(...args);
}
