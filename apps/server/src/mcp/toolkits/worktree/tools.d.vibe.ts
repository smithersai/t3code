import { Tool, Toolkit } from "effect/ai";
import { WorktreeMcpFailure, OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as GitWorkflowService from "../../../git/GitWorkflowService.ts";
import * as ProjectService from "../../../project/ProjectService.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
import * as WorktreeMcpService from "../../WorktreeMcpService.ts";
export declare const WorktreeToolkit: Toolkit.Toolkit<{
    readonly t3_worktree_handoff: Tool.Tool<"t3_worktree_handoff", {
        readonly parameters: Schema.Struct<{
            readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly baseRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly startFromOrigin: Schema.optional<Schema.Boolean>;
            readonly runSetupScript: Schema.optional<Schema.Boolean>;
            readonly continuationPrompt: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly startedFromOrigin: Schema.Boolean;
            readonly setupScript: Schema.Union<readonly [Schema.Struct<{
                readonly status: Schema.Literal<"started">;
                readonly scriptName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.Struct<{
                readonly status: Schema.Literal<"no-script">;
            }>, Schema.Struct<{
                readonly status: Schema.Literal<"skipped">;
            }>, Schema.Struct<{
                readonly status: Schema.Literal<"failed">;
                readonly detail: Schema.String;
            }>]>;
            readonly continuation: Schema.Union<readonly [Schema.Struct<{
                readonly status: Schema.Literal<"scheduled">;
                readonly delivery: Schema.Literals<readonly ["started", "queued", "steered", "restarted"]>;
            }>, Schema.Struct<{
                readonly status: Schema.Literal<"skipped">;
            }>, Schema.Struct<{
                readonly status: Schema.Literal<"failed">;
                readonly detail: Schema.String;
            }>]>;
            readonly note: Schema.String;
        }>;
        readonly failure: Schema.Union<readonly [typeof WorktreeMcpFailure, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService | WorktreeMcpService.WorktreeMcpService>;
    readonly t3_worktree_list: Tool.Tool<"t3_worktree_list", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly query: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly cursor: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.Int>;
            readonly refKind: Schema.optional<Schema.Literals<readonly ["all", "local", "remote"]>>;
            readonly includeMatchingRemoteRefs: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
            readonly isAtRepositoryRoot: Schema.optional<Schema.Boolean>;
            readonly refs: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly isRemote: Schema.optional<Schema.Boolean>;
                readonly remoteName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly upstreamRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly current: Schema.Boolean;
                readonly isDefault: Schema.Boolean;
                readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly isRepo: Schema.Boolean;
            readonly hasPrimaryRemote: Schema.Boolean;
            readonly nextCursor: Schema.NullOr<Schema.Int>;
            readonly totalCount: Schema.Int;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, GitWorkflowService.GitWorkflowService | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_worktree_status: Tool.Tool<"t3_worktree_status", {
        readonly parameters: Tool.EmptyParams;
        readonly success: Schema.Struct<{
            readonly attached: Schema.Boolean;
            readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly branch: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly projectWorkspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly defaultStartFromOrigin: Schema.Boolean;
        }>;
        readonly failure: Schema.Union<readonly [typeof WorktreeMcpFailure, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService | WorktreeMcpService.WorktreeMcpService>;
}>;
