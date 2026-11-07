import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as GitHubRest from "./GitHubRest.vibe";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
export interface CascadeLayer {
    readonly number: number;
    readonly headBranch: string;
    readonly headSha: string;
}
declare const GitHubStackRebaseConflictError_base: Schema.Class<GitHubStackRebaseConflictError, Schema.TaggedStruct<"GitHubStackRebaseConflictError", {
    readonly number: Schema.Int;
    readonly completed: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackRebaseConflictError extends GitHubStackRebaseConflictError_base {
    get message(): string;
}
declare const GitHubStackRebaseGitError_base: Schema.Class<GitHubStackRebaseGitError, Schema.TaggedStruct<"GitHubStackRebaseGitError", {
    readonly step: Schema.String;
    readonly number: Schema.Int;
    readonly completed: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackRebaseGitError extends GitHubStackRebaseGitError_base {
    get message(): string;
}
export declare const cascadeRebaseStack: (input: {
    readonly host: string;
    readonly repository: string;
    readonly base: string;
    readonly layers: ReadonlyArray<CascadeLayer>;
    readonly remote?: string;
}) => Effect.Effect<number, GitHubStackRebaseConflictError | GitHubStackRebaseGitError | import("./GitHubRequestPolicy.vibe").GitHubApiError, FileSystem.FileSystem | GitHubRest.GitHubRest | SourceControlHost.SourceControlHost>;
export {};
