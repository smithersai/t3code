import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ElectronSafeStorage from "../electron/ElectronSafeStorage.vibe";
import * as DesktopSavedEnvironments from "../settings/DesktopSavedEnvironments.ts";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
import { DesktopConnectionCatalogStoreWriteError } from "./DesktopConnectionCatalogStore.vibe.platform.js";
export { DesktopConnectionCatalogStoreWriteError } from "./DesktopConnectionCatalogStore.vibe.platform.js";
declare const DesktopConnectionCatalogStoreDecodeError_base: Schema.Class<DesktopConnectionCatalogStoreDecodeError, Schema.TaggedStruct<"DesktopConnectionCatalogStoreDecodeError", {
    readonly resource: Schema.Literal<"encryptedCatalog">;
    readonly catalogPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopConnectionCatalogStoreDecodeError extends DesktopConnectionCatalogStoreDecodeError_base {
    get message(): string;
}
declare const DesktopConnectionCatalogStoreReadError_base: Schema.Class<DesktopConnectionCatalogStoreReadError, Schema.TaggedStruct<"DesktopConnectionCatalogStoreReadError", {
    readonly catalogPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopConnectionCatalogStoreReadError extends DesktopConnectionCatalogStoreReadError_base {
    get message(): string;
}
declare const DesktopConnectionCatalogStoreDocumentDecodeError_base: Schema.Class<DesktopConnectionCatalogStoreDocumentDecodeError, Schema.TaggedStruct<"DesktopConnectionCatalogStoreDocumentDecodeError", {
    readonly catalogPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopConnectionCatalogStoreDocumentDecodeError extends DesktopConnectionCatalogStoreDocumentDecodeError_base {
    get message(): string;
}
declare const DesktopConnectionCatalogStoreMigrationError_base: Schema.Class<DesktopConnectionCatalogStoreMigrationError, Schema.TaggedStruct<"DesktopConnectionCatalogStoreMigrationError", {
    readonly operation: Schema.Literals<readonly ["read-legacy-registry", "read-legacy-secret", "encode-catalog", "persist-catalog"]>;
    readonly catalogPath: Schema.String;
    readonly environmentId: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopConnectionCatalogStoreMigrationError extends DesktopConnectionCatalogStoreMigrationError_base {
    get message(): string;
}
declare const DesktopConnectionCatalogStoreProtectionError_base: Schema.Class<DesktopConnectionCatalogStoreProtectionError, Schema.TaggedStruct<"DesktopConnectionCatalogStoreProtectionError", {
    readonly operation: Schema.Literals<readonly ["check-encryption-availability", "encrypt-catalog", "decrypt-catalog"]>;
    readonly catalogPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopConnectionCatalogStoreProtectionError extends DesktopConnectionCatalogStoreProtectionError_base {
    get message(): string;
}
declare const DesktopConnectionCatalogStore_base: Context.ServiceClass<DesktopConnectionCatalogStore, "@t3tools/desktop/app/DesktopConnectionCatalogStore", {
    readonly get: Effect.Effect<Option.Option<string>, DesktopConnectionCatalogStoreReadError | DesktopConnectionCatalogStoreDocumentDecodeError | DesktopConnectionCatalogStoreDecodeError | DesktopConnectionCatalogStoreMigrationError | DesktopConnectionCatalogStoreProtectionError>;
    readonly set: (catalog: string) => Effect.Effect<boolean, DesktopConnectionCatalogStoreWriteError | DesktopConnectionCatalogStoreProtectionError>;
    readonly clear: Effect.Effect<void>;
}>;
export declare class DesktopConnectionCatalogStore extends DesktopConnectionCatalogStore_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly get: Effect.Effect<Option.Option<string>, DesktopConnectionCatalogStoreReadError | DesktopConnectionCatalogStoreDocumentDecodeError | DesktopConnectionCatalogStoreDecodeError | DesktopConnectionCatalogStoreMigrationError | DesktopConnectionCatalogStoreProtectionError>;
    readonly set: (catalog: string) => Effect.Effect<boolean, DesktopConnectionCatalogStoreWriteError | DesktopConnectionCatalogStoreProtectionError>;
    readonly clear: Effect.Effect<void>;
}, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | DesktopSavedEnvironments.DesktopSavedEnvironments | ElectronSafeStorage.ElectronSafeStorage | FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<DesktopConnectionCatalogStore, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | DesktopSavedEnvironments.DesktopSavedEnvironments | ElectronSafeStorage.ElectronSafeStorage | FileSystem.FileSystem | Path.Path>;
