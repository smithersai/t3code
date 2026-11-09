// The platform code of AssetAccess.vibe, which VibeLang code does not use directly (EK4402).

/** @throws {never} */
export function base64ToBytes(value: string) {
  return Buffer.from(value, "base64");
}
