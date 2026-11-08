export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}
