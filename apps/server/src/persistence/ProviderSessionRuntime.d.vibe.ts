import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import { type ProviderSessionRuntimeRepositoryError } from "./Errors.vibe";
export declare const ProviderSessionRuntime: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerName: Schema.String;
    readonly providerInstanceId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly adapterKey: Schema.String;
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly status: Schema.Literals<readonly ["starting", "running", "stopped", "error"]>;
    readonly lastSeenAt: Schema.String;
    readonly resumeCursor: Schema.NullOr<Schema.Unknown>;
    readonly runtimePayload: Schema.NullOr<Schema.Unknown>;
}>;
export type ProviderSessionRuntime = typeof ProviderSessionRuntime.Type;
export declare const GetProviderSessionRuntimeInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type GetProviderSessionRuntimeInput = typeof GetProviderSessionRuntimeInput.Type;
export declare const DeleteProviderSessionRuntimeInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type DeleteProviderSessionRuntimeInput = typeof DeleteProviderSessionRuntimeInput.Type;
export declare const RecordImportedTranscriptInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly source: Schema.Struct<{
        readonly provider: Schema.Literals<readonly ["claudeAgent", "codex"]>;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly filePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly size: Schema.Int;
        readonly mtimeMs: Schema.NullOr<Schema.Number>;
        readonly device: Schema.Number;
        readonly inode: Schema.NullOr<Schema.Union<readonly [Schema.String, Schema.Number]>>;
        readonly birthtimeMs: Schema.NullOr<Schema.Number>;
    }>;
}>;
export type RecordImportedTranscriptInput = typeof RecordImportedTranscriptInput.Type;
export interface ProviderSessionRuntimeUpsertOptions {
    readonly onConflict?: "update" | "ignore";
}
declare const ProviderSessionRuntimeRepository_base: Context.ServiceClass<ProviderSessionRuntimeRepository, "t3/persistence/ProviderSessionRuntime/ProviderSessionRuntimeRepository", {
    readonly upsert: (runtime: ProviderSessionRuntime, options?: ProviderSessionRuntimeUpsertOptions) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
    readonly recordImportedTranscript: (input: RecordImportedTranscriptInput) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
    readonly getByThreadId: (input: GetProviderSessionRuntimeInput) => Effect.Effect<Option.Option<ProviderSessionRuntime>, ProviderSessionRuntimeRepositoryError>;
    readonly list: (options?: {
        readonly excludeStopped?: boolean;
    }) => Effect.Effect<readonly ProviderSessionRuntime[], ProviderSessionRuntimeRepositoryError>;
    readonly deleteByThreadId: (input: DeleteProviderSessionRuntimeInput) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
}>;
export declare class ProviderSessionRuntimeRepository extends ProviderSessionRuntimeRepository_base {
}
/** @public */
export declare const make: Effect.Effect<{
    upsert: (runtime: ProviderSessionRuntime, options?: ProviderSessionRuntimeUpsertOptions) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
    recordImportedTranscript: (input: RecordImportedTranscriptInput) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
    getByThreadId: (input: GetProviderSessionRuntimeInput) => Effect.Effect<Option.Option<ProviderSessionRuntime>, ProviderSessionRuntimeRepositoryError>;
    list: (options?: {
        readonly excludeStopped?: boolean;
    }) => Effect.Effect<ReadonlyArray<ProviderSessionRuntime>, ProviderSessionRuntimeRepositoryError>;
    deleteByThreadId: (input: DeleteProviderSessionRuntimeInput) => Effect.Effect<void, ProviderSessionRuntimeRepositoryError>;
}, never, SqlClient.SqlClient>;
export declare const layer: Layer.Layer<ProviderSessionRuntimeRepository, never, SqlClient.SqlClient>;
export {};
