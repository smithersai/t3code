import * as Layer from "effect/Layer";
import { DesktopAppActivation } from "./DesktopAppActivation.vibe.platform.js";
export { DesktopAppActivation, DesktopAppActivationStartError, make, startDesktopAppControlServer } from "./DesktopAppActivation.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopAppActivation, never, import("./DesktopEnvironment.vibe").DesktopEnvironment | import("../window/DesktopWindow.vibe").DesktopWindow | import("../electron/ElectronWindow.vibe.platform.ts").ElectronWindow | import("effect/Path").Path>;
