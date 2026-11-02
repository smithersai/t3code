import * as Schema from "effect/Schema";
declare const ServerCliCommandExitError_base: Schema.Class<ServerCliCommandExitError, Schema.TaggedStruct<"ServerCliCommandExitError", {
    readonly command: Schema.String;
    readonly args: Schema.$Array<Schema.String>;
    readonly cwd: Schema.optional<Schema.String>;
    readonly exitCode: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class ServerCliCommandExitError extends ServerCliCommandExitError_base {
    get message(): string;
}
declare const ServerCliDevelopmentIconSourceMissingError_base: Schema.Class<ServerCliDevelopmentIconSourceMissingError, Schema.TaggedStruct<"ServerCliDevelopmentIconSourceMissingError", {
    readonly sourcePath: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ServerCliDevelopmentIconSourceMissingError extends ServerCliDevelopmentIconSourceMissingError_base {
    get message(): string;
}
declare const ServerCliDevelopmentIconTargetMissingError_base: Schema.Class<ServerCliDevelopmentIconTargetMissingError, Schema.TaggedStruct<"ServerCliDevelopmentIconTargetMissingError", {
    readonly targetPath: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ServerCliDevelopmentIconTargetMissingError extends ServerCliDevelopmentIconTargetMissingError_base {
    get message(): string;
}
declare const ServerCliBuildAssetMissingError_base: Schema.Class<ServerCliBuildAssetMissingError, Schema.TaggedStruct<"ServerCliBuildAssetMissingError", {
    readonly assetPath: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ServerCliBuildAssetMissingError extends ServerCliBuildAssetMissingError_base {
    get message(): string;
}
declare const ServerCliExecutableImportError_base: Schema.Class<ServerCliExecutableImportError, Schema.TaggedStruct<"ServerCliExecutableImportError", {
    readonly bundlePath: Schema.String;
    readonly specifiers: Schema.$Array<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerCliExecutableImportError extends ServerCliExecutableImportError_base {
    get message(): string;
}
export {};
