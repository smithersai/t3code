import * as Effect from "effect/Effect";
import type * as FileSystem from "effect/FileSystem";
import type * as Path from "effect/Path";
import * as EffectAcpErrors from "effect-acp/errors";
import type * as EffectAcpSchema from "effect-acp/compat";
export declare const readAntigravityClientTextFile: (input: {
    readonly fileSystem: FileSystem.FileSystem;
    readonly path: Path.Path;
    readonly allowedRoots: ReadonlyArray<string>;
    readonly request: EffectAcpSchema.ReadTextFileRequest;
}) => Effect.Effect<EffectAcpSchema.ReadTextFileResponse, EffectAcpErrors.AcpError>;
export declare const writeAntigravityClientTextFile: (input: {
    readonly fileSystem: FileSystem.FileSystem;
    readonly path: Path.Path;
    readonly allowedRoots: ReadonlyArray<string>;
    readonly request: EffectAcpSchema.WriteTextFileRequest;
}) => Effect.Effect<EffectAcpSchema.WriteTextFileResponse, EffectAcpErrors.AcpError>;
