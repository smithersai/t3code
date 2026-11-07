import * as Layer from "effect/Layer";
import { DesktopSnapShot } from "./DesktopSnapShot.vibe.platform.js";
export { DesktopSnapShot, DesktopSnapShotError, DesktopSnapShotSetupError, SnapShotFlash, make } from "./DesktopSnapShot.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopSnapShot, never, import("@t3tools/shared/Crypto").Crypto | import("../settings/DesktopClientSettings.vibe").DesktopClientSettings | import("../app/DesktopEnvironment.vibe").DesktopEnvironment | import("../window/DesktopWindow.vibe").DesktopWindow | import("effect/FileSystem").FileSystem | import("../permissions/MacPermissions.vibe").MacPermissions | import("effect/Path").Path>;
