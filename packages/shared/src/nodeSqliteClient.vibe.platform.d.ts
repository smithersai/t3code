import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as Context from "effect/Context";
import * as Reactivity from "effect/reactivity/Reactivity";
import * as Client from "effect/sql/SqlClient";
import { SqlError } from "effect/sql/SqlError";
export interface SqliteClientConfig {
    readonly filename: string;
    readonly readonly?: boolean | undefined;
    readonly allowExtension?: boolean | undefined;
    readonly prepareCacheSize?: number | undefined;
    readonly prepareCacheTTL?: Duration.Input | undefined;
    readonly spanAttributes?: Record<string, unknown> | undefined;
    readonly transformResultNames?: ((str: string) => string) | undefined;
    readonly transformQueryNames?: ((str: string) => string) | undefined;
    /** Ignored for in-memory databases, which cannot share a second connection. */
    readonly readerWorker?: boolean | undefined;
    readonly readerStartupTimeout?: Duration.Input | undefined;
    /** Ignored for in-memory databases. */
    readonly checkpointWorker?: boolean | undefined;
}
export declare const ReadOnly: Context.Reference<(<A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) | undefined>;
export interface Acquired {
    readonly connection: "writer" | "reader";
    readonly lockWaitMs: number;
}
export interface ConnectionOwner {
    readonly fiberId: number;
    readonly name: string;
    readonly traceId?: string;
    readonly spanId?: string;
}
declare const UnsupportedNodeSqliteVersionError_base: Schema.Class<UnsupportedNodeSqliteVersionError, Schema.TaggedStruct<"UnsupportedNodeSqliteVersionError", {
    readonly nodeVersion: Schema.String;
    readonly requirement: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class UnsupportedNodeSqliteVersionError extends UnsupportedNodeSqliteVersionError_base {
    get message(): string;
}
declare const UnsupportedNodeSqliteOperationError_base: Schema.Class<UnsupportedNodeSqliteOperationError, Schema.TaggedStruct<"UnsupportedNodeSqliteOperationError", {}>, import("effect/Cause").YieldableError>;
export declare class UnsupportedNodeSqliteOperationError extends UnsupportedNodeSqliteOperationError_base {
    get message(): string;
}
export interface ReaderRequest {
    readonly sql: string;
    readonly params: ReadonlyArray<unknown>;
    readonly cached: boolean;
    readonly values: boolean;
    readonly raw: boolean;
}
export type ReaderStartup = {
    readonly type: "ready";
} | {
    readonly type: "unavailable";
    readonly message: string;
};
export type ReaderReply = {
    readonly id: number;
    readonly rows: ReadonlyArray<any>;
} | {
    readonly id: number;
    readonly error: {
        readonly operation: "open" | "prepare" | "execute";
        readonly message: string;
        readonly code?: unknown;
        readonly errcode?: unknown;
        readonly errstr?: unknown;
    };
};
export declare const make: (options: SqliteClientConfig) => Effect.Effect<Client.SqlClient, SqlError, Reactivity.Reactivity | Scope.Scope>;
export {};
