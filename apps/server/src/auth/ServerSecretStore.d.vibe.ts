import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as ServerConfig from "../config.ts";
declare const SecretStoreSecureError_base: Schema.Class<SecretStoreSecureError, Schema.TaggedStruct<"SecretStoreSecureError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreSecureError extends SecretStoreSecureError_base {
    get message(): string;
}
declare const SecretStoreReadError_base: Schema.Class<SecretStoreReadError, Schema.TaggedStruct<"SecretStoreReadError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreReadError extends SecretStoreReadError_base {
    get message(): string;
}
declare const SecretStoreTemporaryPathError_base: Schema.Class<SecretStoreTemporaryPathError, Schema.TaggedStruct<"SecretStoreTemporaryPathError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreTemporaryPathError extends SecretStoreTemporaryPathError_base {
    get message(): string;
}
declare const SecretStorePersistError_base: Schema.Class<SecretStorePersistError, Schema.TaggedStruct<"SecretStorePersistError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStorePersistError extends SecretStorePersistError_base {
    get message(): string;
}
declare const SecretStoreRandomGenerationError_base: Schema.Class<SecretStoreRandomGenerationError, Schema.TaggedStruct<"SecretStoreRandomGenerationError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreRandomGenerationError extends SecretStoreRandomGenerationError_base {
    get message(): string;
}
declare const SecretStoreConcurrentReadError_base: Schema.Class<SecretStoreConcurrentReadError, Schema.TaggedStruct<"SecretStoreConcurrentReadError", {
    readonly resource: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreConcurrentReadError extends SecretStoreConcurrentReadError_base {
    get message(): string;
}
declare const SecretStoreRemoveError_base: Schema.Class<SecretStoreRemoveError, Schema.TaggedStruct<"SecretStoreRemoveError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreRemoveError extends SecretStoreRemoveError_base {
    get message(): string;
}
declare const SecretStoreDecodeError_base: Schema.Class<SecretStoreDecodeError, Schema.TaggedStruct<"SecretStoreDecodeError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreDecodeError extends SecretStoreDecodeError_base {
    get message(): string;
}
declare const SecretStoreEncodeError_base: Schema.Class<SecretStoreEncodeError, Schema.TaggedStruct<"SecretStoreEncodeError", {
    readonly resource: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SecretStoreEncodeError extends SecretStoreEncodeError_base {
    get message(): string;
}
export declare const SecretStoreError: Schema.Union<readonly [typeof SecretStoreSecureError, typeof SecretStoreReadError, typeof SecretStoreTemporaryPathError, typeof SecretStorePersistError, typeof SecretStoreRandomGenerationError, typeof SecretStoreConcurrentReadError, typeof SecretStoreRemoveError, typeof SecretStoreDecodeError, typeof SecretStoreEncodeError]>;
export type SecretStoreError = typeof SecretStoreError.Type;
export declare const isSecretStoreError: <I>(input: I) => input is I & (SecretStoreConcurrentReadError | SecretStoreDecodeError | SecretStoreEncodeError | SecretStorePersistError | SecretStoreRandomGenerationError | SecretStoreReadError | SecretStoreRemoveError | SecretStoreSecureError | SecretStoreTemporaryPathError);
export declare const isSecretAlreadyExistsError: (error: SecretStoreError) => boolean;
declare const ServerSecretStore_base: Context.ServiceClass<ServerSecretStore, "t3/auth/ServerSecretStore", {
    readonly directory?: string;
    readonly get: (name: string) => Effect.Effect<Option.Option<Uint8Array>, SecretStoreError>;
    readonly set: (name: string, value: Uint8Array) => Effect.Effect<void, SecretStoreError>;
    readonly create: (name: string, value: Uint8Array) => Effect.Effect<void, SecretStoreError>;
    readonly getOrCreateRandom: (name: string, bytes: number) => Effect.Effect<Uint8Array, SecretStoreError>;
    readonly remove: (name: string) => Effect.Effect<void, SecretStoreError>;
}>;
export declare class ServerSecretStore extends ServerSecretStore_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly directory?: string;
    readonly get: (name: string) => Effect.Effect<Option.Option<Uint8Array>, SecretStoreError>;
    readonly set: (name: string, value: Uint8Array) => Effect.Effect<void, SecretStoreError>;
    readonly create: (name: string, value: Uint8Array) => Effect.Effect<void, SecretStoreError>;
    readonly getOrCreateRandom: (name: string, bytes: number) => Effect.Effect<Uint8Array, SecretStoreError>;
    readonly remove: (name: string) => Effect.Effect<void, SecretStoreError>;
}, PlatformError.PlatformError | SecretStoreSecureError, Crypto.Crypto | FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export declare const layer: Layer.Layer<ServerSecretStore, PlatformError.PlatformError | SecretStoreSecureError, Crypto.Crypto | FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export {};
