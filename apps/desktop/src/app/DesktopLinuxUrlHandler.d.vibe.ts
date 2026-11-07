import * as Layer from "effect/Layer";
import { DesktopLinuxUrlHandler } from "./DesktopLinuxUrlHandler.vibe.platform.js";
export { DesktopLinuxUrlHandler, DesktopLinuxUrlHandlerCacheRefreshError, DesktopLinuxUrlHandlerRegistrationError, escapeDesktopEntryExecArgument, make, renderUrlHandlerDesktopEntry, } from "./DesktopLinuxUrlHandler.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopLinuxUrlHandler, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | import("./DesktopAssets.vibe").DesktopAssets | import("./DesktopEnvironment.vibe").DesktopEnvironment | import("effect/FileSystem").FileSystem>;
