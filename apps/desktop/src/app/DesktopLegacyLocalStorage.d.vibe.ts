import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
declare const DesktopLegacyLocalStorage_base: Context.ServiceClass<DesktopLegacyLocalStorage, "@t3tools/desktop/app/DesktopLegacyLocalStorage", {
    readonly load: (userDataPath: string) => Effect.Effect<void>;
    readonly take: Effect.Effect<Option.Option<Readonly<Record<string, string>>>>;
    readonly complete: Effect.Effect<void>;
}>;
/** Reads the V1 profile without opening it in Chromium, even while V1 runs. */
export declare class DesktopLegacyLocalStorage extends DesktopLegacyLocalStorage_base {
}
export declare const layer: Layer.Layer<DesktopLegacyLocalStorage, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | Path.Path>;
export {};
