// @effect-diagnostics nodeBuiltinImport:off globalTimers:off - Playwright callbacks run outside the Effect runtime.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export const randomUuid = (): string => NodeCrypto.randomUUID();

/** @throws {never} */
export const startTimeout = (callback: () => void, ms: number): ReturnType<typeof setTimeout> =>
  setTimeout(callback, ms);

/** @throws {never} */
export const cancelTimeout = (handle: ReturnType<typeof setTimeout> | undefined): void =>
  clearTimeout(handle);

/** @throws {never} */
export const decodeBase64 = (value: string): Buffer => Buffer.from(value, "base64");

/** @throws {never} */
export const utf8ByteLength = (value: string): number => Buffer.byteLength(value, "utf8");
