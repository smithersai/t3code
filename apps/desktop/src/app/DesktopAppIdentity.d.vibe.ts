import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as ElectronApp from "../electron/ElectronApp.ts";
import * as DesktopAssets from "./DesktopAssets.ts";
import * as DesktopEnvironment from "./DesktopEnvironment.ts";
import * as DesktopUserData from "./DesktopUserData.vibe";
declare const DesktopAppIdentity_base: Context.ServiceClass<DesktopAppIdentity, "@t3tools/desktop/app/DesktopAppIdentity", {
    readonly resolveUserDataPath: Effect.Effect<string, DesktopUserData.DesktopUserDataInitializationError>;
    readonly configure: Effect.Effect<void>;
}>;
export declare class DesktopAppIdentity extends DesktopAppIdentity_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly resolveUserDataPath: Effect.Effect<string, DesktopUserData.DesktopUserDataInitializationError>;
    readonly configure: Effect.Effect<void>;
}, never, DesktopAssets.DesktopAssets | DesktopEnvironment.DesktopEnvironment | ElectronApp.ElectronApp | FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<DesktopAppIdentity, never, DesktopAssets.DesktopAssets | DesktopEnvironment.DesktopEnvironment | ElectronApp.ElectronApp | FileSystem.FileSystem | Path.Path>;
export {};
