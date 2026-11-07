import * as Layer from "effect/Layer";
import { DesktopClerk } from "./DesktopClerk.vibe.platform.js";
export { DesktopClerk, DesktopClerkBridgeCleanupError, DesktopClerkBridgeInitializationError, make } from "./DesktopClerk.vibe.platform.js";
export declare const desktopClerkFrontendApiHostname: string | undefined;
export declare const layer: Layer.Layer<DesktopClerk, import("./DesktopClerk.vibe.platform.js").DesktopClerkBridgeInitializationError | import("./DesktopUserData.vibe").DesktopUserDataInitializationError, import("./DesktopEnvironment.vibe").DesktopEnvironment | import("../electron/ElectronApp.vibe.platform.ts").ElectronApp | import("../electron/ElectronShell.vibe").ElectronShell | import("effect/FileSystem").FileSystem | import("effect/Path").Path>;
