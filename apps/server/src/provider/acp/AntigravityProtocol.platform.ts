/** @throws {never} */
export function copyBoundedText(text: string): string {
  return Buffer.from(text, "utf16le").toString("utf16le");
}
