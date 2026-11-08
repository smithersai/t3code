import {
  readPrimaryEnvironmentTarget,
  type PrimaryEnvironmentTarget,
} from "../environments/primary/target";

type PrimaryEnvironmentTargetRead =
  | {
      readonly _tag: "Success";
      readonly target: PrimaryEnvironmentTarget | null;
    }
  | {
      readonly _tag: "Failure";
      readonly cause: unknown;
    };

/** @throws {never} */
export function readPrimaryEnvironmentTargetResult(
  readTarget: () => PrimaryEnvironmentTarget | null = readPrimaryEnvironmentTarget,
): PrimaryEnvironmentTargetRead {
  try {
    return { _tag: "Success", target: readTarget() };
  } catch (cause) {
    return { _tag: "Failure", cause };
  }
}

interface NetworkInformationLike extends EventTarget {
  readonly type?: string;
}

/** @throws {never} */
export function readTypeOfNavigator() {
  return typeof navigator;
}

export function readNavigatorOnLine() {
  return navigator.onLine;
}

export function callWindowAddEventListener(...args: Parameters<typeof window.addEventListener>) {
  return window.addEventListener(...args);
}

export function callWindowRemoveEventListener(
  ...args: Parameters<typeof window.removeEventListener>
) {
  return window.removeEventListener(...args);
}

export function readNetworkInformation() {
  return (navigator as Navigator & { readonly connection?: NetworkInformationLike }).connection;
}

export function readDocumentVisibilityState() {
  return document.visibilityState;
}

export function callDocumentAddEventListener(
  ...args: Parameters<typeof document.addEventListener>
) {
  return document.addEventListener(...args);
}

export function callDocumentRemoveEventListener(
  ...args: Parameters<typeof document.removeEventListener>
) {
  return document.removeEventListener(...args);
}

export function readNavigatorUserAgent() {
  return navigator.userAgent;
}

export function readNavigatorPlatform() {
  return navigator.platform;
}

export function readNavigatorMaxTouchPoints() {
  return navigator.maxTouchPoints;
}

export function readWindowDesktopBridge() {
  return window.desktopBridge;
}

export function callWindowLocalStorageGetItem(key: string) {
  return window.localStorage.getItem(key);
}

export function callWindowLocalStorageSetItem(key: string, value: string) {
  return window.localStorage.setItem(key, value);
}
