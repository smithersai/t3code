import { type LinuxPasswordStoreSwitch, type LinuxPasswordStorePreference } from "../linuxSecretStorage.ts";
import { type JoinPath } from "./DesktopStatePaths.vibe";
interface EarlyDesktopSettingsInput {
    readonly env: NodeJS.ProcessEnv;
    readonly homeDirectory: string;
    readonly joinPath: JoinPath;
    readonly readFileString: (path: string) => string;
}
type EarlyLinuxElectronOptionsInput = EarlyDesktopSettingsInput;
export interface EarlyLinuxElectronOptions {
    readonly isDevelopment: boolean;
    readonly linuxWmClass: string;
    readonly linuxDesktopEntryName: string;
    readonly passwordStore: LinuxPasswordStoreSwitch | null;
}
export declare const resolveLinuxDesktopEntryName: (isDevelopment: boolean) => string;
export declare function resolveEarlyLinuxPasswordStorePreference(input: EarlyDesktopSettingsInput): LinuxPasswordStorePreference;
export declare function resolveLinuxDisableFeaturesSwitch(input: {
    readonly env: NodeJS.ProcessEnv;
    readonly ozonePlatform: string | null;
    readonly enableFeatures: string | null;
    readonly disableFeatures: string | null;
    readonly readHyprctlVersionJson: () => string;
}): string | null;
export declare function resolveEarlyLinuxElectronOptions(input: EarlyLinuxElectronOptionsInput): EarlyLinuxElectronOptions;
/** Remember the explicit Chromium scale across AppImage updates, which drop launch arguments. */
export declare function restoreEarlyLinuxDeviceScaleFactor(input: EarlyDesktopSettingsInput & {
    readonly commandLine: {
        readonly hasSwitch: (name: string) => boolean;
        readonly getSwitchValue: (name: string) => string;
        readonly appendSwitch: (name: string, value: string) => void;
    };
    readonly writeFileString: (path: string, value: string) => void;
}): void;
export {};
