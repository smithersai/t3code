import { type LinuxPasswordStoreSwitch, type LinuxPasswordStorePreference } from "../linuxSecretStorage.ts";
import { type JoinPath } from "./DesktopStatePaths.vibe";
interface EarlyDesktopSettingsInput {
    readonly env: NodeJS.ProcessEnv;
    readonly homeDirectory: string;
    readonly joinPath: JoinPath;
    /** @throws {never} */
    readonly readFileString: (path: string) => string;
}
type EarlyLinuxElectronOptionsInput = EarlyDesktopSettingsInput;
export interface EarlyLinuxElectronOptions {
    readonly isDevelopment: boolean;
    readonly linuxWmClass: string;
    readonly linuxDesktopEntryName: string;
    readonly passwordStore: LinuxPasswordStoreSwitch | null;
}
/** @throws {never} */
export declare const resolveLinuxDesktopEntryName: (isDevelopment: boolean) => string;
/** @throws {never} */
export declare function resolveEarlyLinuxPasswordStorePreference(input: EarlyDesktopSettingsInput): LinuxPasswordStorePreference;
/** @throws {never} */
export declare function resolveLinuxDisableFeaturesSwitch(input: {
    readonly env: NodeJS.ProcessEnv;
    readonly ozonePlatform: string | null;
    readonly enableFeatures: string | null;
    readonly disableFeatures: string | null;
    /** @throws {never} */
    readonly readHyprctlVersionJson: () => string;
}): string | null;
/** @throws {never} */
export declare function resolveEarlyLinuxElectronOptions(input: EarlyLinuxElectronOptionsInput): EarlyLinuxElectronOptions;
/**
 * Remember the explicit Chromium scale across AppImage updates, which drop launch arguments.
 * @throws {never}
 */
export declare function restoreEarlyLinuxDeviceScaleFactor(input: EarlyDesktopSettingsInput & {
    readonly commandLine: {
        /** @throws {never} */
        readonly hasSwitch: (name: string) => boolean;
        /** @throws {never} */
        readonly getSwitchValue: (name: string) => string;
        /** @throws {never} */
        readonly appendSwitch: (name: string, value: string) => void;
    };
    /** @throws {never} */
    readonly writeFileString: (path: string, value: string) => void;
}): void;
export {};
