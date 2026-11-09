/** @throws {never} */
export function isWebRequest(source: unknown): source is Request {
  return source instanceof Request;
}

export function makeWebRequest(input: string, init?: RequestInit): Request {
  return new Request(input, init);
}
