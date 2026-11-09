// Pages reach 25 MiB; use Node's encoder.
/** @throws {never} */
export function pageBody(html: string) {
  return Buffer.from(Buffer.from(html, "utf8").toString("base64"), "latin1");
}
