/** @throws {never} */
export function readTypeOfDocument() {
  return typeof document;
}

export function readTypeOfDocumentExecCommand() {
  return typeof document.execCommand;
}

export function callDocumentCreateElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: ElementCreationOptions,
): HTMLElementTagNameMap[K] {
  return document.createElement(tag, options);
}

export function readDocumentActiveElement() {
  return document.activeElement;
}

export function callDocumentBodyAppendChild(...args: Parameters<typeof document.body.appendChild>) {
  return document.body.appendChild(...args);
}

export function callDocumentExecCommand(...args: Parameters<typeof document.execCommand>) {
  return document.execCommand(...args);
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

/** @throws {never} */
export function readTypeOfNavigator() {
  return typeof navigator;
}

export function readNavigatorClipboardWriteText() {
  return navigator.clipboard?.writeText;
}

/** @throws {never} */
export function readTypeOfClipboardItem() {
  return typeof ClipboardItem;
}

export function readNavigatorClipboardWrite() {
  return navigator.clipboard.write;
}

export function callNavigatorClipboardWrite(...args: Parameters<typeof navigator.clipboard.write>) {
  return navigator.clipboard.write(...args);
}

export function createClipboardItem(...args: ConstructorParameters<typeof ClipboardItem>) {
  return new ClipboardItem(...args);
}

export function createBlob(...args: ConstructorParameters<typeof Blob>) {
  return new Blob(...args);
}

export function callNavigatorClipboardWriteText(
  ...args: Parameters<typeof navigator.clipboard.writeText>
) {
  return navigator.clipboard.writeText(...args);
}

export function readNavigatorClipboardReadText() {
  return navigator.clipboard?.readText;
}

export function callNavigatorClipboardReadText(
  ...args: Parameters<typeof navigator.clipboard.readText>
) {
  return navigator.clipboard.readText(...args);
}

export function callClearTimeout(...args: Parameters<typeof clearTimeout>) {
  return clearTimeout(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}

export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}
