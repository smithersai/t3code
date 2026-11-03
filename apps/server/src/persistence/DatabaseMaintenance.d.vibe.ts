import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
declare const DatabaseMissingError_base: Schema.Class<DatabaseMissingError, Schema.TaggedStruct<"DatabaseMissingError", {
    readonly path: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DatabaseMissingError extends DatabaseMissingError_base {
    get message(): string;
}
declare const DatabaseInUseError_base: Schema.Class<DatabaseInUseError, Schema.TaggedStruct<"DatabaseInUseError", {
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DatabaseInUseError extends DatabaseInUseError_base {
    get message(): string;
}
declare const DatabaseProjectionsInvalidError_base: Schema.Class<DatabaseProjectionsInvalidError, Schema.TaggedStruct<"DatabaseProjectionsInvalidError", {
    readonly path: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DatabaseProjectionsInvalidError extends DatabaseProjectionsInvalidError_base {
    get message(): string;
}
declare const DatabaseInspectError_base: Schema.Class<DatabaseInspectError, Schema.TaggedStruct<"DatabaseInspectError", {
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DatabaseInspectError extends DatabaseInspectError_base {
    get message(): string;
}
declare const DatabaseCompactError_base: Schema.Class<DatabaseCompactError, Schema.TaggedStruct<"DatabaseCompactError", {
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DatabaseCompactError extends DatabaseCompactError_base {
    get message(): string;
}
declare const LegacyDatabaseRemoveError_base: Schema.Class<LegacyDatabaseRemoveError, Schema.TaggedStruct<"LegacyDatabaseRemoveError", {
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class LegacyDatabaseRemoveError extends LegacyDatabaseRemoveError_base {
    get message(): string;
}
declare const DatabaseMaintenance_base: Context.ServiceClass<DatabaseMaintenance, "t3/persistence/DatabaseMaintenance", {
    readonly inspect: (databasePath: string) => Effect.Effect<{
        readonly databaseBytes: number;
        readonly reclaimableBytes: number;
        readonly incrementalVacuumEnabled: boolean;
        /** Size of the database from before 0.1.0 still kept beside it, or null. */
        readonly legacyDatabaseBytes: number | null;
    }, DatabaseMissingError | DatabaseInspectError>;
    /** Compacts history, then VACUUMs into incremental auto_vacuum. Refuses while a server has it open. */
    readonly compact: (databasePath: string) => Effect.Effect<{
        readonly beforeBytes: number;
        readonly afterBytes: number;
        readonly deletedEventCount: number;
        readonly deletedReceiptCount: number;
    }, DatabaseMissingError | DatabaseInUseError | DatabaseProjectionsInvalidError | DatabaseCompactError>;
    /** Deletes only the pre-0.1.0 database; earlier versions still use it. */
    readonly removeLegacyDatabase: (databasePath: string) => Effect.Effect<void, DatabaseInUseError | LegacyDatabaseRemoveError>;
}>;
export declare class DatabaseMaintenance extends DatabaseMaintenance_base {
}
export declare const layer: Layer.Layer<DatabaseMaintenance, never, FileSystem.FileSystem | Path.Path>;
export {};
