import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as DesktopAssets from "./DesktopAssets.vibe";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
declare const DesktopLinuxUrlHandlerRegistrationError_base: Schema.Class<DesktopLinuxUrlHandlerRegistrationError, Schema.TaggedStruct<"DesktopLinuxUrlHandlerRegistrationError", {
    readonly step: Schema.Literals<readonly ["write-desktop-entry", "set-default-handler"]>;
    readonly scheme: Schema.String;
    readonly desktopEntryPath: Schema.optionalKey<Schema.String>;
    readonly exitCode: Schema.optionalKey<Schema.Number>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopLinuxUrlHandlerRegistrationError extends DesktopLinuxUrlHandlerRegistrationError_base {
    get message(): string;
}
declare const DesktopLinuxUrlHandlerCacheRefreshError_base: Schema.Class<DesktopLinuxUrlHandlerCacheRefreshError, Schema.TaggedStruct<"DesktopLinuxUrlHandlerCacheRefreshError", {
    readonly applicationsDir: Schema.String;
    readonly exitCode: Schema.optionalKey<Schema.Number>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopLinuxUrlHandlerCacheRefreshError extends DesktopLinuxUrlHandlerCacheRefreshError_base {
    get message(): string;
}
export declare function escapeDesktopEntryExecArgument(value: string): string;
export declare function renderUrlHandlerDesktopEntry(input: {
    readonly displayName: string;
    readonly execTarget: string;
    readonly scheme: string;
    readonly iconPath?: string;
}): string;
export declare function linuxThemeIconNames(desktopEntryName: string): readonly string[];
declare const DesktopLinuxUrlHandler_base: Context.ServiceClass<DesktopLinuxUrlHandler, "@t3tools/desktop/app/DesktopLinuxUrlHandler", {
    readonly register: Effect.Effect<void>;
}>;
export declare class DesktopLinuxUrlHandler extends DesktopLinuxUrlHandler_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly register: Effect.Effect<void>;
}, never, ChildProcessSpawner.ChildProcessSpawner | DesktopAssets.DesktopAssets | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export {};
