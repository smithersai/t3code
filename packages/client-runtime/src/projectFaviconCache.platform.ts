/** @throws {never} */
export const readGlobalFetch = (): typeof fetch => globalThis.fetch;
