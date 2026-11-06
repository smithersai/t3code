import { type PersistedSavedEnvironmentRecord } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "../app/DesktopEnvironment.ts";
import * as ElectronSafeStorage from "../electron/ElectronSafeStorage.vibe";
declare const DesktopSavedEnvironmentsReadError_base: Schema.Class<DesktopSavedEnvironmentsReadError, Schema.TaggedStruct<"DesktopSavedEnvironmentsReadError", {
    readonly registryPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSavedEnvironmentsReadError extends DesktopSavedEnvironmentsReadError_base {
    get message(): string;
}
declare const DesktopSavedEnvironmentsDocumentDecodeError_base: Schema.Class<DesktopSavedEnvironmentsDocumentDecodeError, Schema.TaggedStruct<"DesktopSavedEnvironmentsDocumentDecodeError", {
    readonly registryPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSavedEnvironmentsDocumentDecodeError extends DesktopSavedEnvironmentsDocumentDecodeError_base {
    get message(): string;
}
declare const DesktopSavedEnvironmentSecretDecodeError_base: Schema.Class<DesktopSavedEnvironmentSecretDecodeError, Schema.TaggedStruct<"DesktopSavedEnvironmentSecretDecodeError", {
    readonly environmentId: Schema.String;
    readonly registryPath: Schema.String;
    readonly field: Schema.Literal<"encryptedBearerToken">;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSavedEnvironmentSecretDecodeError extends DesktopSavedEnvironmentSecretDecodeError_base {
    get message(): string;
}
declare const DesktopSavedEnvironmentSecretProtectionError_base: Schema.Class<DesktopSavedEnvironmentSecretProtectionError, Schema.TaggedStruct<"DesktopSavedEnvironmentSecretProtectionError", {
    readonly operation: Schema.Literals<readonly ["check-encryption-availability", "decrypt-secret"]>;
    readonly environmentId: Schema.String;
    readonly registryPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSavedEnvironmentSecretProtectionError extends DesktopSavedEnvironmentSecretProtectionError_base {
    get message(): string;
}
export type DesktopSavedEnvironmentsReadRegistryError = DesktopSavedEnvironmentsReadError | DesktopSavedEnvironmentsDocumentDecodeError;
export type DesktopSavedEnvironmentsGetSecretError = DesktopSavedEnvironmentsReadRegistryError | DesktopSavedEnvironmentSecretDecodeError | DesktopSavedEnvironmentSecretProtectionError;
declare const DesktopSavedEnvironments_base: Context.ServiceClass<DesktopSavedEnvironments, "@t3tools/desktop/settings/DesktopSavedEnvironments", {
    readonly getRegistry: Effect.Effect<readonly PersistedSavedEnvironmentRecord[], DesktopSavedEnvironmentsReadRegistryError>;
    readonly getSecret: (environmentId: string) => Effect.Effect<Option.Option<string>, DesktopSavedEnvironmentsGetSecretError>;
}>;
export declare class DesktopSavedEnvironments extends DesktopSavedEnvironments_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getRegistry: Effect.Effect<readonly PersistedSavedEnvironmentRecord[], DesktopSavedEnvironmentsReadRegistryError>;
    readonly getSecret: (environmentId: string) => Effect.Effect<Option.Option<string>, DesktopSavedEnvironmentsGetSecretError>;
}, never, DesktopEnvironment.DesktopEnvironment | ElectronSafeStorage.ElectronSafeStorage | FileSystem.FileSystem>;
export declare const layer: Layer.Layer<DesktopSavedEnvironments, never, DesktopEnvironment.DesktopEnvironment | ElectronSafeStorage.ElectronSafeStorage | FileSystem.FileSystem>;
export {};
