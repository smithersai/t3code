export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}

export function callSetTimeout(...args: Parameters<typeof setTimeout>) {
  return setTimeout(...args);
}
