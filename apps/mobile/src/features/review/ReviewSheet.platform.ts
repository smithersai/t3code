export const expoPublicShowcase = process.env.EXPO_PUBLIC_SHOWCASE;

/** @throws {never} */
export function callConsoleError(...args: Parameters<typeof console.error>) {
  return console.error(...args);
}
