import * as Context from "effect/Context";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as DesktopEnvironment from "../../app/DesktopEnvironment.vibe";
export declare const LinuxBrowserSecretPath: Context.Reference<string | undefined>;
export declare const layer: Layer.Layer<never, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
