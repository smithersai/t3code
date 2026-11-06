import * as Schema from "effect/Schema";
import { GitCommandError } from "./git.vibe";
export declare const ReviewDiffPreviewInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly ignoreWhitespace: Schema.optionalKey<Schema.Boolean>;
    readonly file: Schema.optionalKey<Schema.Struct<{
        readonly path: Schema.NonEmptyString;
        readonly previousPath: Schema.NullOr<Schema.NonEmptyString>;
        readonly sourceKind: Schema.Literals<readonly ["working-tree", "branch-range"]>;
    }>>;
}>;
export type ReviewDiffPreviewInput = typeof ReviewDiffPreviewInput.Type;
export declare const ReviewDiffPreviewSourceKind: Schema.Literals<readonly ["working-tree", "branch-range"]>;
export type ReviewDiffPreviewSourceKind = typeof ReviewDiffPreviewSourceKind.Type;
export declare const ReviewDiffFileStat: Schema.Struct<{
    readonly path: Schema.String;
    readonly previousPath: Schema.NullOr<Schema.String>;
    readonly additions: Schema.Number;
    readonly deletions: Schema.Number;
}>;
export type ReviewDiffFileStat = typeof ReviewDiffFileStat.Type;
export declare const ReviewDiffPreviewSource: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["working-tree", "branch-range"]>;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly headRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly diff: Schema.String;
    readonly diffHash: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly truncated: Schema.Boolean;
    readonly files: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly previousPath: Schema.NullOr<Schema.String>;
        readonly additions: Schema.Number;
        readonly deletions: Schema.Number;
    }>>>;
}>;
export type ReviewDiffPreviewSource = typeof ReviewDiffPreviewSource.Type;
export declare const ReviewDiffFileContentsInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sourceKind: Schema.Literals<readonly ["working-tree", "branch-range"]>;
    readonly changeType: Schema.Literals<readonly ["change", "rename-pure", "rename-changed", "new", "deleted"]>;
    readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly headRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly oldPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly newPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ReviewDiffFileContentsInput = typeof ReviewDiffFileContentsInput.Type;
export declare const ReviewDiffFileContentsResult: Schema.Struct<{
    readonly oldContents: Schema.String;
    readonly newContents: Schema.String;
}>;
export type ReviewDiffFileContentsResult = typeof ReviewDiffFileContentsResult.Type;
export declare const ReviewDiffPreviewResult: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly generatedAt: Schema.DateTimeUtc;
    readonly sources: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["working-tree", "branch-range"]>;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly headRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly diff: Schema.String;
        readonly diffHash: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly truncated: Schema.Boolean;
        readonly files: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly path: Schema.String;
            readonly previousPath: Schema.NullOr<Schema.String>;
            readonly additions: Schema.Number;
            readonly deletions: Schema.Number;
        }>>>;
    }>>;
}>;
export type ReviewDiffPreviewResult = typeof ReviewDiffPreviewResult.Type;
export declare const ReviewDiffPreviewError: Schema.Union<readonly [Schema.Union<readonly [typeof import("./vcs.vibe").VcsProcessSpawnError, typeof import("./vcs.vibe").VcsProcessExitError, typeof import("./vcs.vibe").VcsProcessTimeoutError, typeof import("./vcs.vibe").VcsProcessStdinWriteError, typeof import("./vcs.vibe").VcsProcessOutputReadError, typeof import("./vcs.vibe").VcsProcessOutputLimitError, typeof import("./vcs.vibe").VcsProcessMissingExitCodeError, typeof import("./vcs.vibe").VcsRepositoryDetectionError, typeof import("./vcs.vibe").VcsUnsupportedOperationError]>, typeof GitCommandError]>;
export type ReviewDiffPreviewError = typeof ReviewDiffPreviewError.Type;
