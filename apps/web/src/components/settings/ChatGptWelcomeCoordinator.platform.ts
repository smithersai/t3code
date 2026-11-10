export function callLocalStorageGetItem(key: string) {
  return localStorage.getItem(key);
}

export function callLocalStorageSetItem(key: string, value: string) {
  return localStorage.setItem(key, value);
}
