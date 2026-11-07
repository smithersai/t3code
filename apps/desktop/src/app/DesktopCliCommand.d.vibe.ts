import * as Layer from "effect/Layer";
import { DesktopCliCommand } from "./DesktopCliCommand.vibe.platform.js";
export { DesktopCliCommand, DesktopCliCommandError, make } from "./DesktopCliCommand.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopCliCommand, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | import("./DesktopEnvironment.vibe").DesktopEnvironment | import("effect/FileSystem").FileSystem>;
