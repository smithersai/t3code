import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
export declare const MARKER = "Written by T3 Code: runs the desktop app's bundled t3 CLI.";
export type CliShimTarget = {
    readonly kind: "appimage";
    readonly appImage: string;
    readonly executableName: string;
} | {
    readonly kind: "direct";
    readonly executable: string;
    readonly entry: string;
} | {
    readonly kind: "windows";
    readonly executable: string;
    readonly entry: string;
};
/**
 * Embed this install's home and executable path so `sudo`, which clears the environment, uses the same install.
 * @throws {never}
 */
export declare const renderCliShim: (input: {
    readonly target: CliShimTarget;
    readonly shimPath: string;
    readonly t3Home: string;
}) => string;
/** @throws {never} */
export declare const launcherPath: (environment: DesktopEnvironment.DesktopEnvironment["Service"]) => string;
export declare const install: Effect.Effect<Option.Option<string>, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
