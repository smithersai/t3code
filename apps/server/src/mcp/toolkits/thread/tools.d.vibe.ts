import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Schema from "effect/Schema";
import * as ThreadSearch from "../../../orchestration-v2/ThreadSearch.ts";
import * as ScheduledTaskService from "../../../scheduledTasks/ScheduledTaskService.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
export declare const ThreadToolkit: Toolkit.Toolkit<{
    readonly run_scheduled_task_now: Tool.Tool<"run_scheduled_task_now", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        }>;
        readonly success: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
            readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
            readonly runCount: Schema.Int;
            readonly nextRunAt: Schema.NullOr<Schema.String>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ScheduledTaskService.ScheduledTaskService | ThreadManagementService.ThreadManagementService>;
    readonly t3_pending_request: Tool.Tool<"t3_pending_request", {
        readonly parameters: Schema.Struct<{
            readonly action: Schema.Literals<readonly ["list", "read", "respond"]>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
            readonly answers: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly requestIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
        }>, Schema.Struct<{
            readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
            readonly questions: Schema.$Array<Schema.Struct<{
                readonly id: Schema.String;
                readonly header: Schema.String;
                readonly question: Schema.String;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly label: Schema.String;
                    readonly description: Schema.String;
                    readonly value: Schema.optional<Schema.String>;
                }>>;
                readonly multiSelect: Schema.optional<Schema.Boolean>;
                readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
                readonly initialAnswer: Schema.optional<Schema.String>;
                readonly required: Schema.optional<Schema.Boolean>;
            }>>;
        }>, Schema.Struct<{
            readonly sequence: Schema.Int;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly t3_queue: Tool.Tool<"t3_queue", {
        readonly parameters: Schema.Struct<{
            readonly action: Schema.Literals<readonly ["list", "read", "edit", "cancel", "reorder", "promote_to_steer"]>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly queuedRunId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly text: Schema.optional<Schema.String>;
            readonly beforeRunId: Schema.optional<Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>>;
            readonly targetRunId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly cursor: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly items: Schema.$Array<Schema.Struct<{
                readonly queuedRunId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
                readonly text: Schema.String;
                readonly truncated: Schema.Boolean;
            }>>;
            readonly nextCursor: Schema.NullOr<Schema.Int>;
        }>, Schema.Struct<{
            readonly queuedRunId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            readonly text: Schema.String;
            readonly truncated: Schema.Boolean;
        }>, Schema.Struct<{
            readonly sequence: Schema.Int;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_configure: Tool.Tool<"t3_thread_configure", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
                readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
            }>, Schema.Struct<{
                readonly provider: Schema.optional<Schema.Unknown>;
                readonly instanceId: Schema.optional<Schema.Unknown>;
                readonly model: Schema.Unknown;
                readonly options: Schema.optional<Schema.Unknown>;
            }>, never, never>>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly modelSelection: Schema.decodeTo<Schema.Struct<{
                readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
            }>, Schema.Struct<{
                readonly provider: Schema.optional<Schema.Unknown>;
                readonly instanceId: Schema.optional<Schema.Unknown>;
                readonly model: Schema.Unknown;
                readonly options: Schema.optional<Schema.Unknown>;
            }>, never, never>;
            readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
            readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
        }>, Schema.Struct<{
            readonly sequence: Schema.Int;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_organize: Tool.Tool<"t3_thread_organize", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly action: Schema.Literals<readonly ["pin", "unpin", "snooze", "unsnooze", "settle", "unsettle", "archive", "unarchive", "mark_unread"]>;
            readonly snoozedUntil: Schema.optional<Schema.String>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly sequence: Schema.Int;
        }>, Schema.Struct<{
            readonly settlesWhenTurnEnds: Schema.Literal<true>;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_search: Tool.Tool<"t3_thread_search", {
        readonly parameters: Schema.Struct<{
            readonly query: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly limit: Schema.optionalKey<Schema.Int>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly matches: Schema.$Array<Schema.Struct<{
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                readonly title: Schema.String;
                readonly link: Schema.optional<Schema.String>;
                readonly source: Schema.Literals<readonly ["title", "user", "assistant"]>;
                readonly snippet: Schema.optional<Schema.String>;
                readonly messageCreatedAt: Schema.optional<Schema.NullOr<Schema.String>>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService | ThreadSearch.ThreadSearch>;
    readonly t3_thread_transfer: Tool.Tool<"t3_thread_transfer", {
        readonly parameters: Schema.Struct<{
            readonly action: Schema.Literals<readonly ["fork", "merge_back", "status"]>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly sourcePoint: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"latest_stable">;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"run">;
                readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"checkpoint">;
                readonly checkpointId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointId">;
            }>]>>;
            readonly targetThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly sequence: Schema.Int;
            readonly targetThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        }>, Schema.Struct<{
            readonly transfers: Schema.$Array<Schema.Struct<{
                readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">;
                readonly sourceThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly targetThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly status: Schema.Literals<readonly ["pending", "resolved_native", "resolved_portable", "failed", "consumed", "superseded"]>;
            }>>;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
