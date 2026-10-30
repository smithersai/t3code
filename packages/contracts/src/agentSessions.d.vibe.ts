import * as Schema from "effect/Schema";
export declare const AgentSessionSource: Schema.Literals<readonly ["claudeAgent", "codex"]>;
export type AgentSessionSource = typeof AgentSessionSource.Type;
export declare const AgentSessionImportSource: Schema.Struct<{
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
export type AgentSessionImportSource = typeof AgentSessionImportSource.Type;
export declare const AgentSessionScanInput: Schema.Struct<{}>;
export type AgentSessionScanInput = typeof AgentSessionScanInput.Type;
export declare const AgentSessionProjectGit: Schema.Struct<{
    readonly remoteKey: Schema.NullOr<Schema.String>;
    readonly repository: Schema.NullOr<Schema.String>;
}>;
export type AgentSessionProjectGit = typeof AgentSessionProjectGit.Type;
export declare const AgentSessionProjectCandidate: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
    readonly sources: Schema.$Array<Schema.Literals<readonly ["claudeAgent", "codex"]>>;
    readonly threadCount: Schema.Int;
    readonly lastActiveAt: Schema.NullOr<Schema.String>;
    readonly alreadyImported: Schema.Boolean;
    readonly git: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly remoteKey: Schema.NullOr<Schema.String>;
        readonly repository: Schema.NullOr<Schema.String>;
    }>>>;
}>;
export type AgentSessionProjectCandidate = typeof AgentSessionProjectCandidate.Type;
export declare const AgentSessionScanResult: Schema.Struct<{
    readonly candidates: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
        readonly sources: Schema.$Array<Schema.Literals<readonly ["claudeAgent", "codex"]>>;
        readonly threadCount: Schema.Int;
        readonly lastActiveAt: Schema.NullOr<Schema.String>;
        readonly alreadyImported: Schema.Boolean;
        readonly git: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            readonly remoteKey: Schema.NullOr<Schema.String>;
            readonly repository: Schema.NullOr<Schema.String>;
        }>>>;
    }>>;
    readonly scannedAt: Schema.String;
    readonly truncated: Schema.optional<Schema.Boolean>;
}>;
export type AgentSessionScanResult = typeof AgentSessionScanResult.Type;
export declare const AgentSessionImportInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly expectedWorkspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AgentSessionImportInput = typeof AgentSessionImportInput.Type;
declare const AgentSessionImportProjectNotFoundError_base: Schema.Class<AgentSessionImportProjectNotFoundError, Schema.TaggedStruct<"AgentSessionImportProjectNotFoundError", {
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, import("effect/Cause").YieldableError>;
export declare class AgentSessionImportProjectNotFoundError extends AgentSessionImportProjectNotFoundError_base {
    get message(): string;
}
declare const AgentSessionImportProjectChangedError_base: Schema.Class<AgentSessionImportProjectChangedError, Schema.TaggedStruct<"AgentSessionImportProjectChangedError", {
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, import("effect/Cause").YieldableError>;
export declare class AgentSessionImportProjectChangedError extends AgentSessionImportProjectChangedError_base {
    get message(): string;
}
export declare const AgentSessionImportResult: Schema.Struct<{
    readonly importedCount: Schema.Int;
    readonly skippedCount: Schema.Int;
}>;
export type AgentSessionImportResult = typeof AgentSessionImportResult.Type;
declare const AgentSessionScanError_base: Schema.Class<AgentSessionScanError, Schema.TaggedStruct<"AgentSessionScanError", {
    readonly operation: Schema.Literals<readonly ["read-settings", "read-projects"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentSessionScanError extends AgentSessionScanError_base {
    get message(): string;
}
export {};
