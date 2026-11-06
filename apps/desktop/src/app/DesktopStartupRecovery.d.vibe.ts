import type { DesktopUpdateState } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import type * as Scope from "effect/Scope";
import * as ElectronApp from "../electron/ElectronApp.ts";
import * as ElectronShell from "../electron/ElectronShell.vibe";
import * as ElectronTheme from "../electron/ElectronTheme.vibe";
import * as ElectronWindow from "../electron/ElectronWindow.ts";
import * as DesktopUpdates from "../updates/DesktopUpdates.vibe";
import * as DesktopEnvironment from "./DesktopEnvironment.ts";
import * as DesktopState from "./DesktopState.vibe";
export type StartupRecoveryOffer = {
    readonly _tag: "Checking";
} | {
    readonly _tag: "Update";
    readonly version: string;
} | {
    readonly _tag: "Downloading";
    readonly version: string;
    readonly percent: number | null;
} | {
    readonly _tag: "Reinstall";
    readonly version: string;
} | {
    readonly _tag: "Releases";
};
/**
 * Prefer a newer build, then the last build that started on this machine, then the releases page.
 * @throws {never}
 */
export declare function resolveStartupRecoveryOffer(update: DesktopUpdateState, lastStartedVersion: string | null): StartupRecoveryOffer;
/** Shows a self-contained error window while the primary backend fails to start, so a broken release still opens. */
export declare const listen: Effect.Effect<void, never, DesktopState.DesktopState | DesktopUpdates.DesktopUpdates | DesktopEnvironment.DesktopEnvironment | ElectronApp.ElectronApp | ElectronShell.ElectronShell | ElectronTheme.ElectronTheme | ElectronWindow.ElectronWindow | FileSystem.FileSystem | Scope.Scope>;
