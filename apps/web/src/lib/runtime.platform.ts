export function callGlobalThisFetch(...args: Parameters<typeof globalThis.fetch>) {
  return globalThis.fetch(...args);
}

export function readImportMetaEnvAPPVERSION() {
  return import.meta.env.APP_VERSION;
}

/** @throws {never} */
export function readTypeOfWindow() {
  return typeof window;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}
