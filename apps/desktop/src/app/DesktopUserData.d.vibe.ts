import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
declare const DesktopUserDataInitializationError_base: Schema.Class<DesktopUserDataInitializationError, Schema.TaggedStruct<"DesktopUserDataInitializationError", {
    readonly operation: Schema.Literals<readonly ["inspect", "read", "create-directory", "write"]>;
    readonly resourcePath: Schema.String;
    readonly category: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopUserDataInitializationError extends DesktopUserDataInitializationError_base {
    get message(): string;
    /** @throws {never} */
    static fromFileSystem(cause: PlatformError.PlatformError, operation: DesktopUserDataInitializationError["operation"], resourcePath: string): DesktopUserDataInitializationError;
}
export declare const resolveUserDataPath: (input: {
    readonly appDataDirectory: string;
    readonly isDevelopment: boolean;
    readonly platform: NodeJS.Platform;
}) => Effect.Effect<string, DesktopUserDataInitializationError, FileSystem.FileSystem | Path.Path>;
export {};
