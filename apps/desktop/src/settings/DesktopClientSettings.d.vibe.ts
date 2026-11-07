import { type ClientSettings } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import { DesktopClientSettingsWriteError } from "./DesktopClientSettings.vibe.platform.js";
export { DesktopClientSettingsWriteError } from "./DesktopClientSettings.vibe.platform.js";
declare const DesktopClientSettingsReadError_base: Schema.Class<DesktopClientSettingsReadError, Schema.TaggedStruct<"DesktopClientSettingsReadError", {
    readonly operation: Schema.Literals<readonly ["read-file", "decode-document"]>;
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopClientSettingsReadError extends DesktopClientSettingsReadError_base {
    get message(): string;
}
declare const DesktopClientSettings_base: Context.ServiceClass<DesktopClientSettings, "@t3tools/desktop/settings/DesktopClientSettings", {
    readonly get: Effect.Effect<Option.Option<ClientSettings>, DesktopClientSettingsReadError>;
    readonly set: (settings: ClientSettings) => Effect.Effect<void, DesktopClientSettingsWriteError>;
}>;
export declare class DesktopClientSettings extends DesktopClientSettings_base {
}
export declare const make: Effect.Effect<{
    readonly get: Effect.Effect<Option.Option<ClientSettings>, DesktopClientSettingsReadError>;
    readonly set: (settings: ClientSettings) => Effect.Effect<void, DesktopClientSettingsWriteError>;
}, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<DesktopClientSettings, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | Path.Path>;
export declare const layerTest: (initialSettings?: Option.Option<ClientSettings>) => Layer.Layer<DesktopClientSettings, never, never>;
