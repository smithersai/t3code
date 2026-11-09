/** @throws {never} */
export function digestSha256(data: BufferSource): Promise<ArrayBuffer> {
  return crypto.subtle.digest("SHA-256", data);
}

/** @throws {never} */
export function isWebRequest(source: unknown): source is Request {
  return source instanceof Request;
}
