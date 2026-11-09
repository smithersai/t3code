// The platform code of McpOAuth.vibe, which VibeLang code does not use directly (EK4402).

/** @throws {never} */
export function bytesToBase64Url(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64url");
}
