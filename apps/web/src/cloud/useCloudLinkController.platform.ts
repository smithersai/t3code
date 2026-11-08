export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function callNavigatorClipboardWriteText(text: string) {
  return navigator.clipboard?.writeText(text);
}
