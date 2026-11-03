import { EnvironmentId, type ExecutionEnvironmentDescriptor } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ServerSecretStore from "../auth/ServerSecretStore.ts";
import * as ServerConfig from "../config.ts";
import * as ProcessRunner from "../processRunner.ts";
declare const ServerEnvironmentIdPersistenceError_base: Schema.Class<ServerEnvironmentIdPersistenceError, Schema.TaggedStruct<"ServerEnvironmentIdPersistenceError", {
    readonly operation: Schema.Literals<readonly ["check", "read", "write", "initialize"]>;
    readonly environmentIdPath: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerEnvironmentIdPersistenceError extends ServerEnvironmentIdPersistenceError_base {
    get message(): string;
}
declare const ServerEnvironment_base: Context.ServiceClass<ServerEnvironment, "t3/environment/ServerEnvironment", {
    readonly getEnvironmentId: Effect.Effect<EnvironmentId>;
    readonly getDescriptor: Effect.Effect<ExecutionEnvironmentDescriptor>;
}>;
export declare class ServerEnvironment extends ServerEnvironment_base {
}
declare const ServerEnvironmentIdentity_base: Context.ServiceClass<ServerEnvironmentIdentity, "t3/environment/ServerEnvironment/ServerEnvironmentIdentity", {
    readonly getEnvironmentId: Effect.Effect<EnvironmentId>;
}>;
export declare class ServerEnvironmentIdentity extends ServerEnvironmentIdentity_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getEnvironmentId: Effect.Effect<EnvironmentId>;
    readonly getDescriptor: Effect.Effect<ExecutionEnvironmentDescriptor>;
}, import("../cloud/serviceLauncherClient.ts").ServiceLauncherClientError, FileSystem.FileSystem | Path.Path | ProcessRunner.ProcessRunner | ServerConfig.ServerConfig | ServerEnvironmentIdentity | ServerSecretStore.ServerSecretStore>;
export declare const layerIdentity: Layer.Layer<ServerEnvironmentIdentity, import("effect/PlatformError").PlatformError | ServerEnvironmentIdPersistenceError, Crypto.Crypto | FileSystem.FileSystem | ServerConfig.ServerConfig>;
export declare const layer: Layer.Layer<ServerEnvironment | ServerEnvironmentIdentity, import("effect/PlatformError").PlatformError | ServerEnvironmentIdPersistenceError | import("../cloud/serviceLauncherClient.ts").ServiceLauncherClientError, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig | ServerSecretStore.ServerSecretStore>;
export {};
