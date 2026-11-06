import * as Schema from "effect/Schema";
export declare const VcsDriverKind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
export type VcsDriverKind = typeof VcsDriverKind.Type;
export declare const VcsFreshnessSource: Schema.Literals<readonly ["live-local", "cached-local", "cached-remote", "explicit-remote"]>;
export type VcsFreshnessSource = typeof VcsFreshnessSource.Type;
export declare const VcsFreshness: Schema.Struct<{
    readonly source: Schema.Literals<readonly ["live-local", "cached-local", "cached-remote", "explicit-remote"]>;
    readonly observedAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.Option<Schema.DateTimeUtc>;
}>;
export type VcsFreshness = typeof VcsFreshness.Type;
export declare const VcsDriverCapabilities: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
    readonly supportsWorktrees: Schema.Boolean;
    readonly supportsBookmarks: Schema.Boolean;
    readonly supportsAtomicSnapshot: Schema.Boolean;
    readonly supportsPushDefaultRemote: Schema.Boolean;
    readonly ignoreClassifier: Schema.Literals<readonly ["native", "git-compatible-fallback"]>;
}>;
export type VcsDriverCapabilities = typeof VcsDriverCapabilities.Type;
export declare const VcsRepositoryIdentity: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
    readonly rootPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly metadataPath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly freshness: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["live-local", "cached-local", "cached-remote", "explicit-remote"]>;
        readonly observedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.Option<Schema.DateTimeUtc>;
    }>;
}>;
export type VcsRepositoryIdentity = typeof VcsRepositoryIdentity.Type;
export declare const VcsListWorkspaceFilesResult: Schema.Struct<{
    readonly paths: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly truncated: Schema.Boolean;
    readonly freshness: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["live-local", "cached-local", "cached-remote", "explicit-remote"]>;
        readonly observedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.Option<Schema.DateTimeUtc>;
    }>;
}>;
export type VcsListWorkspaceFilesResult = typeof VcsListWorkspaceFilesResult.Type;
export declare const VcsRemote: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly pushUrl: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly isPrimary: Schema.Boolean;
}>;
export type VcsRemote = typeof VcsRemote.Type;
export declare const VcsListRemotesResult: Schema.Struct<{
    readonly remotes: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly pushUrl: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly isPrimary: Schema.Boolean;
    }>>;
    readonly freshness: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["live-local", "cached-local", "cached-remote", "explicit-remote"]>;
        readonly observedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.Option<Schema.DateTimeUtc>;
    }>;
}>;
export type VcsListRemotesResult = typeof VcsListRemotesResult.Type;
export interface VcsProcessErrorContext {
    readonly operation: string;
    readonly command: string;
    readonly cwd: string;
    readonly argumentCount?: number;
}
export interface VcsProcessSpawnFailure {
    readonly cause: unknown;
}
export interface VcsProcessTimeoutFailure {
    readonly timeoutMs: number;
}
export declare const VcsProcessExitFailureKind: Schema.Literals<readonly ["authentication", "not-found", "rate-limited", "command-failed"]>;
export type VcsProcessExitFailureKind = typeof VcsProcessExitFailureKind.Type;
export interface VcsProcessExitFailure {
    readonly exitCode: number;
    readonly stderr: string;
    readonly stderrTruncated: boolean;
}
declare const VcsProcessSpawnError_base: Schema.Class<VcsProcessSpawnError, Schema.TaggedStruct<"VcsProcessSpawnError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessSpawnError extends VcsProcessSpawnError_base {
    get message(): string;
    /** @throws {never} */
    static fromProcessSpawnError(context: VcsProcessErrorContext, error: VcsProcessSpawnFailure): VcsProcessSpawnError;
}
declare const VcsProcessExitError_base: Schema.Class<VcsProcessExitError, Schema.TaggedStruct<"VcsProcessExitError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly exitCode: Schema.Number;
    readonly detail: Schema.String;
    readonly failureKind: Schema.optional<Schema.Literals<readonly ["authentication", "not-found", "rate-limited", "command-failed"]>>;
    readonly retryable: Schema.optional<Schema.Boolean>;
    readonly stderrLength: Schema.optional<Schema.Int>;
    readonly stderrTruncated: Schema.optional<Schema.Boolean>;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessExitError extends VcsProcessExitError_base {
    get message(): string;
    /** @throws {never} */
    static fromProcessExit(context: VcsProcessErrorContext, error: VcsProcessExitFailure, failureKind: VcsProcessExitFailureKind, options?: {
        readonly retryable?: boolean;
        readonly notFoundDetail?: string;
    }): VcsProcessExitError;
}
declare const VcsProcessTimeoutError_base: Schema.Class<VcsProcessTimeoutError, Schema.TaggedStruct<"VcsProcessTimeoutError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly timeoutMs: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessTimeoutError extends VcsProcessTimeoutError_base {
    get message(): string;
    /** @throws {never} */
    static fromProcessTimeoutError(context: VcsProcessErrorContext, error: VcsProcessTimeoutFailure): VcsProcessTimeoutError;
}
declare const VcsProcessStdinWriteError_base: Schema.Class<VcsProcessStdinWriteError, Schema.TaggedStruct<"VcsProcessStdinWriteError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly stdinBytes: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessStdinWriteError extends VcsProcessStdinWriteError_base {
    get message(): string;
}
declare const VcsProcessOutputReadError_base: Schema.Class<VcsProcessOutputReadError, Schema.TaggedStruct<"VcsProcessOutputReadError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly stream: Schema.Literals<readonly ["stdout", "stderr", "exitCode"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessOutputReadError extends VcsProcessOutputReadError_base {
    get message(): string;
}
declare const VcsProcessOutputLimitError_base: Schema.Class<VcsProcessOutputLimitError, Schema.TaggedStruct<"VcsProcessOutputLimitError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Int>;
    readonly stream: Schema.Literals<readonly ["stdout", "stderr"]>;
    readonly maxBytes: Schema.Int;
    readonly observedBytes: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessOutputLimitError extends VcsProcessOutputLimitError_base {
    get message(): string;
}
declare const VcsProcessMissingExitCodeError_base: Schema.Class<VcsProcessMissingExitCodeError, Schema.TaggedStruct<"VcsProcessMissingExitCodeError", {
    operation: Schema.String;
    command: Schema.String;
    cwd: Schema.String;
    argumentCount: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProcessMissingExitCodeError extends VcsProcessMissingExitCodeError_base {
    get message(): string;
}
export declare const VcsOutputDecodeError: Schema.Union<readonly [typeof VcsProcessStdinWriteError, typeof VcsProcessOutputReadError, typeof VcsProcessOutputLimitError, typeof VcsProcessMissingExitCodeError]>;
export type VcsOutputDecodeError = typeof VcsOutputDecodeError.Type;
declare const VcsRepositoryDetectionError_base: Schema.Class<VcsRepositoryDetectionError, Schema.TaggedStruct<"VcsRepositoryDetectionError", {
    readonly operation: Schema.String;
    readonly cwd: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class VcsRepositoryDetectionError extends VcsRepositoryDetectionError_base {
    get message(): string;
}
declare const VcsUnsupportedOperationError_base: Schema.Class<VcsUnsupportedOperationError, Schema.TaggedStruct<"VcsUnsupportedOperationError", {
    readonly operation: Schema.String;
    readonly kind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class VcsUnsupportedOperationError extends VcsUnsupportedOperationError_base {
    get message(): string;
}
export declare const VcsError: Schema.Union<readonly [typeof VcsProcessSpawnError, typeof VcsProcessExitError, typeof VcsProcessTimeoutError, typeof VcsProcessStdinWriteError, typeof VcsProcessOutputReadError, typeof VcsProcessOutputLimitError, typeof VcsProcessMissingExitCodeError, typeof VcsRepositoryDetectionError, typeof VcsUnsupportedOperationError]>;
export type VcsError = typeof VcsError.Type;
export {};
