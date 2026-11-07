import * as Layer from "effect/Layer";
import { DesktopShellEnvironment } from "./DesktopShellEnvironment.vibe.platform.js";
export { DesktopShellEnvironment, DesktopShellEnvironmentCommandError, DesktopShellEnvironmentCommandTimeoutError, make } from "./DesktopShellEnvironment.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopShellEnvironment, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | import("../app/DesktopEnvironment.vibe").DesktopEnvironment | import("effect/FileSystem").FileSystem>;
