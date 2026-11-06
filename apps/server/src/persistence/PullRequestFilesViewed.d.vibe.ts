import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import { type PullRequestFilesViewedRepositoryError } from "./Errors.vibe";
export declare const PullRequestFilesViewedScope: Schema.Struct<{
    readonly provider: Schema.mutableKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
    readonly host: Schema.mutableKey<Schema.String>;
    readonly repository: Schema.mutableKey<Schema.String>;
    readonly number: Schema.mutableKey<Schema.Int>;
    readonly viewer: Schema.mutableKey<Schema.String>;
}>;
export type PullRequestFilesViewedScope = typeof PullRequestFilesViewedScope.Type;
export declare const PullRequestFileViewedMark: Schema.Struct<{
    readonly path: Schema.String;
    /** Empty means the host confirms deletion; null means no baseline, so the mark stays cleared until replaced. */
    readonly revision: Schema.NullOr<Schema.String>;
}>;
export type PullRequestFileViewedMark = typeof PullRequestFileViewedMark.Type;
export interface SetPullRequestFilesViewedInput extends PullRequestFilesViewedScope {
    readonly files: ReadonlyArray<PullRequestFileViewedMark & {
        readonly viewed: boolean;
    }>;
    readonly viewedAt: string;
}
export declare const MAX_FILES_VIEWED_ROWS = 500;
export interface PullRequestFilesViewedPage {
    readonly files: ReadonlyArray<PullRequestFileViewedMark>;
    readonly truncated: boolean;
}
type PullRequestFilesViewedRepository_shape = {
    list: (input: PullRequestFilesViewedScope) => Effect.Effect<PullRequestFilesViewedPage, PullRequestFilesViewedRepositoryError>;
    set: (input: SetPullRequestFilesViewedInput) => Effect.Effect<void, PullRequestFilesViewedRepositoryError>;
};
declare const PullRequestFilesViewedRepository_base: Context.ServiceClass<PullRequestFilesViewedRepository, "t3/persistence/PullRequestFilesViewed/PullRequestFilesViewedRepository", PullRequestFilesViewedRepository_shape>;
export declare class PullRequestFilesViewedRepository extends PullRequestFilesViewedRepository_base {
}
export declare namespace PullRequestFilesViewedRepository {
    type Shape = PullRequestFilesViewedRepository_shape;
}
export declare const layer: Layer.Layer<PullRequestFilesViewedRepository, never, SqlClient.SqlClient>;
export {};
