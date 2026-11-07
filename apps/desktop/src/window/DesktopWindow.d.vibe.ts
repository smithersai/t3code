import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Electron from "electron";
import { type DesktopSnapShotEvent } from "@t3tools/contracts";
import * as DesktopAssets from "../app/DesktopAssets.vibe";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import * as DesktopState from "../app/DesktopState.vibe";
import * as ElectronMenu from "../electron/ElectronMenu.vibe";
import * as ElectronShell from "../electron/ElectronShell.vibe";
import * as ElectronTheme from "../electron/ElectronTheme.vibe";
import * as ElectronWindow from "../electron/ElectronWindow.vibe";
import * as PreviewManager from "../preview/Manager.ts";
import * as PreviewPasskeys from "../preview/Passkeys.ts";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.vibe";
import * as DesktopClientSettings from "../settings/DesktopClientSettings.vibe";
import * as ElectronApp from "../electron/ElectronApp.vibe";
import * as DesktopRendererHistory from "../telemetry/DesktopRendererHistory.vibe";
type DesktopWindowRuntimeServices = DesktopEnvironment.DesktopEnvironment | DesktopState.DesktopState | DesktopAssets.DesktopAssets | DesktopAppSettings.DesktopAppSettings | DesktopClientSettings.DesktopClientSettings | ElectronApp.ElectronApp | ElectronMenu.ElectronMenu | ElectronShell.ElectronShell | ElectronTheme.ElectronTheme | ElectronWindow.ElectronWindow | DesktopRendererHistory.DesktopRendererHistory | PreviewManager.PreviewManager;
export type DesktopWindowError = ElectronWindow.ElectronWindowCreateError | PreviewManager.PreviewManagerError;
export type MainWindowZoomDirection = "in" | "out" | "reset";
export type MainWindowContentsCommand = "reload" | "forceReload" | "toggleDevTools";
declare const DesktopWindow_base: Context.ServiceClass<DesktopWindow, "@t3tools/desktop/window/DesktopWindow", {
    readonly createMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly ensureMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly revealOrCreateMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly activate: Effect.Effect<void, DesktopWindowError>;
    readonly createMainIfBackendReady: Effect.Effect<void, DesktopWindowError>;
    readonly showConnectingSplash: Effect.Effect<void>;
    readonly handleBackendReady: (httpBaseUrl: URL) => Effect.Effect<void, DesktopWindowError>;
    readonly handleBackendNotReady: Effect.Effect<void>;
    readonly flushMainWindowBounds: Effect.Effect<void>;
    readonly prepareCaptureReveal: Effect.Effect<void>;
    readonly dispatchMenuAction: (action: string, options?: {
        readonly reveal?: boolean;
    }) => Effect.Effect<void, DesktopWindowError>;
    readonly dispatchSnapShotEvent: (event: DesktopSnapShotEvent) => Effect.Effect<void, DesktopWindowError>;
    readonly zoomMain: (direction: MainWindowZoomDirection) => Effect.Effect<void>;
    readonly runMainContentsCommand: (command: MainWindowContentsCommand) => Effect.Effect<void>;
    readonly syncAppearance: Effect.Effect<void>;
}>;
export declare class DesktopWindow extends DesktopWindow_base {
}
type DisplayBounds = Pick<Electron.Rectangle, "x" | "y" | "width" | "height">;
/** @throws {never} */
export declare function resolveInitialMainWindowBounds(persistedBounds: DesktopAppSettings.DesktopWindowBounds | null, displays: readonly DisplayBounds[]): DesktopAppSettings.DesktopWindowBounds | typeof DesktopAppSettings.DEFAULT_MAIN_WINDOW_SIZE;
/** @public */
export declare const make: Effect.Effect<{
    readonly createMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly ensureMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly revealOrCreateMain: Effect.Effect<Electron.BrowserWindow, DesktopWindowError>;
    readonly activate: Effect.Effect<void, DesktopWindowError>;
    readonly createMainIfBackendReady: Effect.Effect<void, DesktopWindowError>;
    readonly showConnectingSplash: Effect.Effect<void>;
    readonly handleBackendReady: (httpBaseUrl: URL) => Effect.Effect<void, DesktopWindowError>;
    readonly handleBackendNotReady: Effect.Effect<void>;
    readonly flushMainWindowBounds: Effect.Effect<void>;
    readonly prepareCaptureReveal: Effect.Effect<void>;
    readonly dispatchMenuAction: (action: string, options?: {
        readonly reveal?: boolean;
    }) => Effect.Effect<void, DesktopWindowError>;
    readonly dispatchSnapShotEvent: (event: DesktopSnapShotEvent) => Effect.Effect<void, DesktopWindowError>;
    readonly zoomMain: (direction: MainWindowZoomDirection) => Effect.Effect<void>;
    readonly runMainContentsCommand: (command: MainWindowContentsCommand) => Effect.Effect<void>;
    readonly syncAppearance: Effect.Effect<void>;
}, never, PreviewPasskeys.PreviewPasskeys | DesktopWindowRuntimeServices>;
export declare const layer: Layer.Layer<DesktopWindow, never, PreviewPasskeys.PreviewPasskeys | DesktopWindowRuntimeServices>;
export {};
