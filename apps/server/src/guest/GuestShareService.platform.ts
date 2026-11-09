// The platform code of GuestShareService.vibe, which VibeLang code does not use directly (EK4402).

/** @throws {never} */
export function base64UrlToBytes(value: string) {
  return Buffer.from(value, "base64url");
}
