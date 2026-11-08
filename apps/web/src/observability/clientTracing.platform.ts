interface NavigatorUserAgentData {
  readonly platform: string;
  readonly mobile: boolean;
  readonly brands: ReadonlyArray<{ readonly brand: string; readonly version: string }>;
}

/** @throws {never} */
export function readTypeOfNavigator() {
  return typeof navigator;
}

export function readUserAgentData() {
  return (navigator as Navigator & { userAgentData?: NavigatorUserAgentData }).userAgentData;
}

export function readNavigatorUserAgent() {
  return navigator.userAgent;
}

export function readNavigatorLanguage() {
  return navigator.language;
}

export function readImportMetaEnvDEV() {
  return import.meta.env.DEV;
}

export function readImportMetaEnvVITERELEASECHANNEL() {
  return import.meta.env.VITE_RELEASE_CHANNEL;
}

export function callConsoleWarn(...args: Parameters<typeof console.warn>) {
  return console.warn(...args);
}
