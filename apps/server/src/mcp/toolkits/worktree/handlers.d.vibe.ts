import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as GitWorkflow from "../../../git/GitWorkflowService.js";
import * as Project from "../../../project/ProjectService.js";
import * as McpInvocationContext from "../../McpInvocationContext.js";
import * as McpToolAccess from "../../McpToolAccess.js";
import * as WorktreeMcpService from "../../WorktreeMcpService.js";
export declare const layer: McpToolAccess.HandlersLayer<{
    readonly t3_worktree_handoff: import("effect/ai/Tool").Tool<"t3_worktree_handoff", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly branch: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly baseRef: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly startFromOrigin: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly runSetupScript: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly continuationPrompt: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly worktreePath: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly branch: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly baseRef: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly startedFromOrigin: import("effect/Schema").Boolean;
            readonly setupScript: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"started">;
                readonly scriptName: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly terminalId: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            }>, import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"no-script">;
            }>, import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"skipped">;
            }>, import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"failed">;
                readonly detail: import("effect/Schema").String;
            }>]>;
            readonly continuation: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"scheduled">;
                readonly delivery: import("effect/Schema").Literals<readonly ["started", "queued", "steered", "restarted"]>;
            }>, import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"skipped">;
            }>, import("effect/Schema").Struct<{
                readonly status: import("effect/Schema").Literal<"failed">;
                readonly detail: import("effect/Schema").String;
            }>]>;
            readonly note: import("effect/Schema").String;
        }>;
        readonly failure: import("effect/Schema").Union<readonly [typeof import("@t3tools/contracts").WorktreeMcpFailure, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | import("../../../orchestration-v2/ThreadManagementService.js").ThreadManagementService | WorktreeMcpService.WorktreeMcpService>;
    readonly t3_worktree_list: import("effect/ai/Tool").Tool<"t3_worktree_list", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly threadId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly query: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly cursor: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly limit: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly refKind: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["all", "local", "remote"]>>;
            readonly includeMatchingRemoteRefs: import("effect/Schema").optional<import("effect/Schema").Boolean>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly isAtRepositoryRoot: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly refs: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly name: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly isRemote: import("effect/Schema").optional<import("effect/Schema").Boolean>;
                readonly remoteName: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly upstreamRef: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly current: import("effect/Schema").Boolean;
                readonly isDefault: import("effect/Schema").Boolean;
                readonly worktreePath: import("effect/Schema").NullOr<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            }>>;
            readonly isRepo: import("effect/Schema").Boolean;
            readonly hasPrimaryRemote: import("effect/Schema").Boolean;
            readonly nextCursor: import("effect/Schema").NullOr<import("effect/Schema").Int>;
            readonly totalCount: import("effect/Schema").Int;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, GitWorkflow.GitWorkflowService | McpInvocationContext.McpInvocationContext | Project.ProjectService | import("../../../orchestration-v2/ThreadManagementService.js").ThreadManagementService>;
    readonly t3_worktree_status: import("effect/ai/Tool").Tool<"t3_worktree_status", {
        readonly parameters: import("effect/ai/Tool").EmptyParams;
        readonly success: import("effect/Schema").Struct<{
            readonly attached: import("effect/Schema").Boolean;
            readonly worktreePath: import("effect/Schema").NullOr<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly branch: import("effect/Schema").NullOr<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly projectWorkspaceRoot: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly defaultStartFromOrigin: import("effect/Schema").Boolean;
        }>;
        readonly failure: import("effect/Schema").Union<readonly [typeof import("@t3tools/contracts").WorktreeMcpFailure, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | import("../../../orchestration-v2/ThreadManagementService.js").ThreadManagementService | WorktreeMcpService.WorktreeMcpService>;
}, never, never>;
