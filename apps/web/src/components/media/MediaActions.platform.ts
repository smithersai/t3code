/** @throws {never} */
export function readTypeOfNavigator() {
  return typeof navigator;
}

export function readNavigatorClipboard() {
  return navigator.clipboard;
}

export function callNavigatorClipboardWrite(data: ClipboardItems) {
  return navigator.clipboard.write(data);
}

/** @throws {never} */
export function readTypeOfClipboardItem() {
  return typeof ClipboardItem;
}

export function createClipboardItem(...args: ConstructorParameters<typeof ClipboardItem>) {
  return new ClipboardItem(...args);
}
