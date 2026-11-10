export function callURLRevokeObjectURL(...args: Parameters<typeof URL.revokeObjectURL>) {
  return URL.revokeObjectURL(...args);
}

/** @throws {never} */
export function readGlobalThisLocationHref() {
  return globalThis.location?.href;
}

/** @throws {never} */
export function readTypeOfImage() {
  return typeof Image;
}

export function createImage(...args: ConstructorParameters<typeof Image>) {
  return new Image(...args);
}
