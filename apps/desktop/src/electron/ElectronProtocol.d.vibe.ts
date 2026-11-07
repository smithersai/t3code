import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
export { DESKTOP_HOST } from "./ElectronProtocol.vibe.platform.js";
/** @throws {never} */
export declare function getDesktopScheme(isDevelopment: boolean): string;
/** @throws {never} */
export declare function getDesktopUrl(isDevelopment: boolean): string;
declare const ElectronProtocolRegistrationError_base: Schema.Class<ElectronProtocolRegistrationError, Schema.TaggedStruct<"ElectronProtocolRegistrationError", {
    readonly scheme: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronProtocolRegistrationError extends ElectronProtocolRegistrationError_base {
    get message(): string;
}
declare const ElectronProtocolUnregistrationError_base: Schema.Class<ElectronProtocolUnregistrationError, Schema.TaggedStruct<"ElectronProtocolUnregistrationError", {
    readonly scheme: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronProtocolUnregistrationError extends ElectronProtocolUnregistrationError_base {
    get message(): string;
}
export type DesktopProtocolRegistrationInput = {
    readonly scheme: string;
    readonly clerkFrontendApiHostname: string | undefined;
} & ({
    readonly targetOrigin: URL;
} | {
    readonly assetDirectory: string;
});
declare const ElectronProtocol_base: Context.ServiceClass<ElectronProtocol, "@t3tools/desktop/electron/ElectronProtocol", {
    readonly registerDesktopProtocol: (input: DesktopProtocolRegistrationInput) => Effect.Effect<void, ElectronProtocolRegistrationError, Scope.Scope>;
}>;
export declare class ElectronProtocol extends ElectronProtocol_base {
}
export declare const layerSchemePrivileges: Layer.Layer<never, never, never>;
/** @public */
export declare const make: Effect.Effect<{
    readonly registerDesktopProtocol: (input: DesktopProtocolRegistrationInput) => Effect.Effect<void, ElectronProtocolRegistrationError, Scope.Scope>;
}, never, FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<ElectronProtocol, never, FileSystem.FileSystem | Path.Path>;
