/** @throws {never} */
export function isWebRequest(source: unknown): source is Request {
  return source instanceof Request;
}
