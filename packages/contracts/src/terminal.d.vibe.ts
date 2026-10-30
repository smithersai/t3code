import * as Schema from "effect/Schema";
export declare const DEFAULT_TERMINAL_ID = "term-1";
export declare const DEFAULT_MAX_TERMINAL_BUFFER_BYTES: number;
export declare const TerminalThreadInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TerminalThreadInput = typeof TerminalThreadInput.Type;
declare const TerminalSessionInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TerminalSessionInput = Schema.Codec.Encoded<typeof TerminalSessionInput>;
export declare const TerminalOpenInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly worktreePath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly cols: Schema.optional<Schema.Int>;
    readonly rows: Schema.optional<Schema.Int>;
    readonly env: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
}>;
export type TerminalOpenInput = typeof TerminalOpenInput.Type;
export declare const TerminalAttachInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly worktreePath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly cols: Schema.optional<Schema.Int>;
    readonly rows: Schema.optional<Schema.Int>;
    readonly env: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly restartIfNotRunning: Schema.optional<Schema.Boolean>;
    readonly resume: Schema.optional<Schema.Boolean>;
}>;
export type TerminalAttachInput = typeof TerminalAttachInput.Type;
export declare const TerminalObserveInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TerminalObserveInput = Schema.Codec.Encoded<typeof TerminalObserveInput>;
export declare const TerminalWriteInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly data: Schema.String;
}>;
export type TerminalWriteInput = Schema.Codec.Encoded<typeof TerminalWriteInput>;
export declare const TerminalResizeInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cols: Schema.Int;
    readonly rows: Schema.Int;
}>;
export type TerminalResizeInput = Schema.Codec.Encoded<typeof TerminalResizeInput>;
export declare const TerminalClearInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TerminalClearInput = Schema.Codec.Encoded<typeof TerminalClearInput>;
export declare const TerminalRestartInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly worktreePath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly cols: Schema.Int;
    readonly rows: Schema.Int;
    readonly env: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
}>;
export type TerminalRestartInput = typeof TerminalRestartInput.Type;
export declare const TerminalCloseInput: Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deleteHistory: Schema.optional<Schema.Boolean>;
}>;
export type TerminalCloseInput = typeof TerminalCloseInput.Type;
export declare const TerminalSessionStatus: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
export type TerminalSessionStatus = typeof TerminalSessionStatus.Type;
export declare const TerminalSessionSnapshot: Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly cwd: Schema.String;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
    readonly pid: Schema.NullOr<Schema.Int>;
    readonly history: Schema.String;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly exitSignal: Schema.NullOr<Schema.Int>;
    readonly label: Schema.String;
    readonly updatedAt: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
}>;
export type TerminalSessionSnapshot = typeof TerminalSessionSnapshot.Type;
export declare const TerminalSummary: Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly cwd: Schema.String;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
    readonly pid: Schema.NullOr<Schema.Int>;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly exitSignal: Schema.NullOr<Schema.Int>;
    readonly hasRunningSubprocess: Schema.Boolean;
    readonly label: Schema.String;
    readonly updatedAt: Schema.String;
}>;
export type TerminalSummary = typeof TerminalSummary.Type;
export declare const TerminalMetadataStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"snapshot">;
    readonly terminals: Schema.$Array<Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly hasRunningSubprocess: Schema.Boolean;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
    }>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"upsert">;
    readonly terminal: Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly hasRunningSubprocess: Schema.Boolean;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"remove">;
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
}>]>;
export type TerminalMetadataStreamEvent = typeof TerminalMetadataStreamEvent.Type;
export declare const TerminalEvent: Schema.Union<readonly [Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"started">;
    readonly snapshot: Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly history: Schema.String;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
        readonly sequence: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"output">;
    readonly data: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"exited">;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly exitSignal: Schema.NullOr<Schema.Int>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"closed">;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"error">;
    readonly message: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"cleared">;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"restarted">;
    readonly snapshot: Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly history: Schema.String;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
        readonly sequence: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"activity">;
    readonly hasRunningSubprocess: Schema.Boolean;
    readonly label: Schema.String;
}>]>;
export type TerminalEvent = typeof TerminalEvent.Type;
export declare const TerminalAttachStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"snapshot">;
    readonly snapshot: Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly history: Schema.String;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
        readonly sequence: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"output">;
    readonly data: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"exited">;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly exitSignal: Schema.NullOr<Schema.Int>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"closed">;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"error">;
    readonly message: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"cleared">;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"restarted">;
    readonly snapshot: Schema.Struct<{
        readonly threadId: Schema.String;
        readonly terminalId: Schema.String;
        readonly cwd: Schema.String;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["starting", "running", "exited", "error"]>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly history: Schema.String;
        readonly exitCode: Schema.NullOr<Schema.Int>;
        readonly exitSignal: Schema.NullOr<Schema.Int>;
        readonly label: Schema.String;
        readonly updatedAt: Schema.String;
        readonly sequence: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly sequence: Schema.optional<Schema.Int>;
    readonly type: Schema.Literal<"activity">;
    readonly hasRunningSubprocess: Schema.Boolean;
    readonly label: Schema.String;
}>]>;
export type TerminalAttachStreamEvent = typeof TerminalAttachStreamEvent.Type;
declare const TerminalCwdNotFoundError_base: Schema.Class<TerminalCwdNotFoundError, Schema.TaggedStruct<"TerminalCwdNotFoundError", {
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalCwdNotFoundError extends TerminalCwdNotFoundError_base {
    get message(): string;
}
declare const TerminalCwdNotDirectoryError_base: Schema.Class<TerminalCwdNotDirectoryError, Schema.TaggedStruct<"TerminalCwdNotDirectoryError", {
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalCwdNotDirectoryError extends TerminalCwdNotDirectoryError_base {
    get message(): string;
}
declare const TerminalCwdStatError_base: Schema.Class<TerminalCwdStatError, Schema.TaggedStruct<"TerminalCwdStatError", {
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalCwdStatError extends TerminalCwdStatError_base {
    get message(): string;
}
export declare const TerminalCwdError: Schema.Union<readonly [typeof TerminalCwdNotFoundError, typeof TerminalCwdNotDirectoryError, typeof TerminalCwdStatError]>;
export type TerminalCwdError = typeof TerminalCwdError.Type;
declare const TerminalHistoryError_base: Schema.Class<TerminalHistoryError, Schema.TaggedStruct<"TerminalHistoryError", {
    readonly operation: Schema.Literals<readonly ["read", "truncate", "migrate"]>;
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalHistoryError extends TerminalHistoryError_base {
    get message(): string;
}
declare const TerminalSessionLookupError_base: Schema.Class<TerminalSessionLookupError, Schema.TaggedStruct<"TerminalSessionLookupError", {
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalSessionLookupError extends TerminalSessionLookupError_base {
    get message(): string;
}
declare const TerminalProviderInstanceNotFoundError_base: Schema.Class<TerminalProviderInstanceNotFoundError, Schema.TaggedStruct<"TerminalProviderInstanceNotFoundError", {
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalProviderInstanceNotFoundError extends TerminalProviderInstanceNotFoundError_base {
    get message(): string;
}
declare const TerminalProviderEnvironmentError_base: Schema.Class<TerminalProviderEnvironmentError, Schema.TaggedStruct<"TerminalProviderEnvironmentError", {
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalProviderEnvironmentError extends TerminalProviderEnvironmentError_base {
    get message(): string;
}
declare const TerminalNotRunningError_base: Schema.Class<TerminalNotRunningError, Schema.TaggedStruct<"TerminalNotRunningError", {
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalNotRunningError extends TerminalNotRunningError_base {
    get message(): string;
}
declare const TerminalWriteError_base: Schema.Class<TerminalWriteError, Schema.TaggedStruct<"TerminalWriteError", {
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly terminalPid: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalWriteError extends TerminalWriteError_base {
    get message(): string;
}
declare const TerminalResizeError_base: Schema.Class<TerminalResizeError, Schema.TaggedStruct<"TerminalResizeError", {
    readonly threadId: Schema.String;
    readonly terminalId: Schema.String;
    readonly terminalPid: Schema.Number;
    readonly cols: Schema.Int;
    readonly rows: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TerminalResizeError extends TerminalResizeError_base {
    get message(): string;
}
export declare const TerminalError: Schema.Union<readonly [Schema.Union<readonly [typeof TerminalCwdNotFoundError, typeof TerminalCwdNotDirectoryError, typeof TerminalCwdStatError]>, typeof TerminalHistoryError, typeof TerminalSessionLookupError, typeof TerminalProviderInstanceNotFoundError, typeof TerminalProviderEnvironmentError, typeof TerminalNotRunningError, typeof TerminalWriteError, typeof TerminalResizeError]>;
export type TerminalError = typeof TerminalError.Type;
export {};
