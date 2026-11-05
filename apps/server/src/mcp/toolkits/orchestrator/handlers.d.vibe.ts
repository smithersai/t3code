import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as PeerForwarding from "../../../peer/PeerForwarding.ts";
import * as PeerLinkRequests from "../../../peer/PeerLinkRequests.ts";
import * as PeerLinks from "../../../peer/PeerLinks.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
import * as McpToolAccess from "../../McpToolAccess.ts";
import * as OrchestratorMcpService from "../../OrchestratorMcpService.ts";
import * as ThreadMetadataMcpService from "../../ThreadMetadataMcpService.ts";
export declare const layer: McpToolAccess.HandlersLayer<{
    readonly create_threads: import("effect/ai/Tool").Tool<"create_threads", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly threads: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly prompt: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly title: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly target: import("effect/Schema").optional<import("effect/Schema").Struct<{
                    readonly providerInstanceId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">>;
                    readonly driverKind: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderDriverKind">>;
                    readonly model: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                    readonly options: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").$Array<import("effect/Schema").Struct<{
                        readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
                    }>>, import("effect/Schema").decodeTo<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                        readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
                    }>>, import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>>, never, never>]>>;
                    readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
                    readonly projectId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">>;
                }>>;
                readonly runtimeMode: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"inherit">, import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>]>>;
                readonly interactionMode: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"inherit">, import("effect/Schema").Literals<readonly ["default", "plan"]>]>>;
            }>>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly threads: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
                readonly runId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
                readonly status: import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"idle">, import("effect/Schema").Literal<"preparing">, import("effect/Schema").Literal<"starting">, import("effect/Schema").Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>, import("effect/Schema").Literal<"rolled_back">]>;
                readonly title: import("effect/Schema").String;
                readonly createdBy: import("effect/Schema").Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: import("effect/Schema").Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
                readonly model: import("effect/Schema").String;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly delegate_task: import("effect/ai/Tool").Tool<"delegate_task", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly task: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly target: import("effect/Schema").optional<import("effect/Schema").Struct<{
                readonly providerInstanceId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">>;
                readonly driverKind: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderDriverKind">>;
                readonly model: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly options: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").$Array<import("effect/Schema").Struct<{
                    readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
                }>>, import("effect/Schema").decodeTo<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                    readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
                }>>, import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>>, never, never>]>>;
                readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
                readonly projectId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">>;
            }>>;
            readonly title: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly role: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["implementation", "research", "review", "design", "test", "general"]>>;
            readonly isolation: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["shared", "worktree"]>>;
            readonly mode: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["async", "wait"]>>;
            readonly timeoutMs: import("effect/Schema").optional<import("effect/Schema").Finite>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly runtimeMode: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"inherit">, import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>]>>;
            readonly interactionMode: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"inherit">, import("effect/Schema").Literals<readonly ["default", "plan"]>]>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly taskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly childThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly remoteChild: import("effect/Schema").optional<import("effect/Schema").Struct<{
                readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
                readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly label: import("effect/Schema").String;
            }>>;
            readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly childRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly childNodeId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly status: import("effect/Schema").Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
            readonly workState: import("effect/Schema").Literals<readonly ["working", "waiting_for_children", "result_available"]>;
            readonly hasPendingChildRuns: import("effect/Schema").Boolean;
            readonly latestTerminalRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly latestTerminalStatus: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["completed", "failed", "cancelled", "interrupted"]>>;
            readonly latestTerminalSummary: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly latestTerminalResultContextTransferId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ContextTransferId">>;
            readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
            readonly model: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly options: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
            }>>>;
            readonly summary: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly resultContextTransferId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ContextTransferId">>;
            readonly hasPendingQuestion: import("effect/Schema").Boolean;
            readonly pendingApproval: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                readonly requestId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RuntimeRequestId">;
                readonly kind: import("effect/Schema").Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
                readonly runId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">;
            }>>;
            readonly waitTimedOut: import("effect/Schema").Boolean;
            readonly next: import("effect/Schema").optional<import("effect/Schema").Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly delete_scheduled_task: import("effect/ai/Tool").Tool<"delete_scheduled_task", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly scheduledTaskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ScheduledTaskId">;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly scheduledTaskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ScheduledTaskId">;
            readonly deleted: import("effect/Schema").Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly list_scheduled_tasks: import("effect/ai/Tool").Tool<"list_scheduled_tasks", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly projectId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly tasks: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly scheduledTaskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ScheduledTaskId">;
                readonly title: import("effect/Schema").String;
                readonly prompt: import("effect/Schema").String;
                readonly enabled: import("effect/Schema").Boolean;
                readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
                readonly boundThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
                readonly schedule: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                    readonly type: import("effect/Schema").Literal<"interval">;
                    readonly everyMs: import("effect/Schema").Int;
                }>, import("effect/Schema").Struct<{
                    readonly type: import("effect/Schema").Literal<"fixed_time">;
                    readonly timeOfDay: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly weekdays: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Int>>;
                }>, import("effect/Schema").Struct<{
                    readonly type: import("effect/Schema").Literal<"webhook">;
                    readonly signature: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                        header: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        encoding: import("effect/Schema").Literals<readonly ["hex", "base64"]>;
                        prefix: import("effect/Schema").String;
                    }>>;
                    readonly maxDeliveryAgeMinutes: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Int>>;
                    readonly dedupe: import("effect/Schema").optional<import("effect/Schema").Struct<{
                        readonly replayKey: import("effect/Schema").optional<import("effect/Schema").String>;
                        readonly coalesceKey: import("effect/Schema").optional<import("effect/Schema").String>;
                        readonly coalesceWindowSeconds: import("effect/Schema").optional<import("effect/Schema").Int>;
                    }>>;
                    readonly filters: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                        readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        readonly op: import("effect/Schema").Literals<readonly ["equals", "notEquals", "startsWith"]>;
                        readonly value: import("effect/Schema").String;
                    }>, import("effect/Schema").Struct<{
                        readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        readonly op: import("effect/Schema").Literal<"in">;
                        readonly value: import("effect/Schema").$Array<import("effect/Schema").String>;
                    }>, import("effect/Schema").Struct<{
                        readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                        readonly op: import("effect/Schema").Literal<"exists">;
                    }>]>>>;
                }>]>;
                readonly nextRunAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly lastRunStatus: import("effect/Schema").Literals<readonly ["never", "running", "succeeded", "failed"]>;
                readonly webhookUrl: import("effect/Schema").optional<import("effect/Schema").String>;
                readonly webhookSignature: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["none", "set"]>>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly orchestrator_capabilities: import("effect/ai/Tool").Tool<"orchestrator_capabilities", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly search: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly parentThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly inheritedProviderInstanceId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">>;
            readonly inheritedModel: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly inheritedOptions: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
            }>>>;
            readonly runtimeMode: import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
            readonly interactionMode: import("effect/Schema").Literals<readonly ["default", "plan"]>;
            readonly providers: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
                readonly driverKind: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderDriverKind">;
                readonly displayName: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly models: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                    readonly id: import("effect/Schema").String;
                    readonly label: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly options: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                        readonly id: import("effect/Schema").String;
                        readonly values: import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>>;
                        readonly default: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>>;
                    }>>>;
                }>>;
                readonly omittedModels: import("effect/Schema").optional<import("effect/Schema").Int>;
                readonly runtimeModes: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
                readonly canRunChildTask: import("effect/Schema").Boolean;
                readonly canRunCrossProviderChildTask: import("effect/Schema").Boolean;
                readonly constraints: import("effect/Schema").$Array<import("effect/Schema").String>;
            }>>;
            readonly features: import("effect/Schema").Struct<{
                readonly appOwnedSubagents: import("effect/Schema").Boolean;
                readonly asyncPolling: import("effect/Schema").Boolean;
                readonly cancellation: import("effect/Schema").Boolean;
                readonly batchThreadCreation: import("effect/Schema").Boolean;
                readonly threadManagement: import("effect/Schema").Boolean;
                readonly incrementalThreadRead: import("effect/Schema").Boolean;
                readonly scheduledTasks: import("effect/Schema").Boolean;
                readonly maxBatchThreads: import("effect/Schema").Number;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly request_secret: import("effect/ai/Tool").Tool<"request_secret", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly label: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly reason: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly placeholder: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly delivery: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["secretRef", "file"]>>;
            readonly timeoutMs: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literal<"saved">;
            readonly secretRef: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "SecretRef">;
        }>, import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literal<"saved">;
            readonly file: import("effect/Schema").String;
        }>, import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literals<readonly ["declined", "cancelled", "timed_out"]>;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly schedule_task: import("effect/ai/Tool").Tool<"schedule_task", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly projectId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">>;
            readonly title: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly enabled: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly bindToCurrentThread: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly scheduledTaskId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ScheduledTaskId">>;
            readonly prompt: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly schedule: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"interval">;
                readonly everyMs: import("effect/Schema").Int;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"fixed_time">;
                readonly timeOfDay: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly weekdays: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Int>>;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"webhook">;
                readonly signature: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    readonly header: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly encoding: import("effect/Schema").Literals<readonly ["hex", "base64"]>;
                    readonly prefix: import("effect/Schema").String;
                    readonly secret: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                    readonly secretRef: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "SecretRef">>;
                }>>>;
                readonly maxDeliveryAgeMinutes: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Int>>;
                readonly dedupe: import("effect/Schema").optional<import("effect/Schema").Struct<{
                    readonly replayKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceWindowSeconds: import("effect/Schema").optional<import("effect/Schema").Int>;
                }>>;
                readonly filters: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: import("effect/Schema").String;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"in">;
                    readonly value: import("effect/Schema").$Array<import("effect/Schema").String>;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"exists">;
                }>]>>>;
            }>]>, import("effect/Schema").fromJsonString<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"interval">;
                readonly everyMs: import("effect/Schema").Int;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"fixed_time">;
                readonly timeOfDay: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly weekdays: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Int>>;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"webhook">;
                readonly signature: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    readonly header: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly encoding: import("effect/Schema").Literals<readonly ["hex", "base64"]>;
                    readonly prefix: import("effect/Schema").String;
                    readonly secret: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                    readonly secretRef: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "SecretRef">>;
                }>>>;
                readonly maxDeliveryAgeMinutes: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Int>>;
                readonly dedupe: import("effect/Schema").optional<import("effect/Schema").Struct<{
                    readonly replayKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceWindowSeconds: import("effect/Schema").optional<import("effect/Schema").Int>;
                }>>;
                readonly filters: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: import("effect/Schema").String;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"in">;
                    readonly value: import("effect/Schema").$Array<import("effect/Schema").String>;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"exists">;
                }>]>>>;
            }>]>>]>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly scheduledTaskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ScheduledTaskId">;
            readonly title: import("effect/Schema").String;
            readonly prompt: import("effect/Schema").String;
            readonly enabled: import("effect/Schema").Boolean;
            readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
            readonly boundThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly schedule: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"interval">;
                readonly everyMs: import("effect/Schema").Int;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"fixed_time">;
                readonly timeOfDay: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly weekdays: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Int>>;
            }>, import("effect/Schema").Struct<{
                readonly type: import("effect/Schema").Literal<"webhook">;
                readonly signature: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    header: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    encoding: import("effect/Schema").Literals<readonly ["hex", "base64"]>;
                    prefix: import("effect/Schema").String;
                }>>;
                readonly maxDeliveryAgeMinutes: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Int>>;
                readonly dedupe: import("effect/Schema").optional<import("effect/Schema").Struct<{
                    readonly replayKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceKey: import("effect/Schema").optional<import("effect/Schema").String>;
                    readonly coalesceWindowSeconds: import("effect/Schema").optional<import("effect/Schema").Int>;
                }>>;
                readonly filters: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: import("effect/Schema").String;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"in">;
                    readonly value: import("effect/Schema").$Array<import("effect/Schema").String>;
                }>, import("effect/Schema").Struct<{
                    readonly path: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly op: import("effect/Schema").Literal<"exists">;
                }>]>>>;
            }>]>;
            readonly nextRunAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly lastRunStatus: import("effect/Schema").Literals<readonly ["never", "running", "succeeded", "failed"]>;
            readonly webhookUrl: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly webhookSignature: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["none", "set"]>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_background_wait: import("effect/ai/Tool").Tool<"t3_background_wait", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly taskIds: import("effect/Schema").$Array<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly waiting: import("effect/Schema").optional<import("effect/Schema").Boolean>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly matched: import("effect/Schema").$Array<import("effect/Schema").String>;
            readonly unmatched: import("effect/Schema").$Array<import("effect/Schema").String>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_environment_link: import("effect/ai/Tool").Tool<"t3_environment_link", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly url: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly hint: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly reason: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly requestedAccess: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literal<"pending">;
            readonly turnItemId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "TurnItemId">;
        }>, import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literal<"linked">;
            readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
            readonly label: import("effect/Schema").String;
            readonly access: import("effect/Schema").Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        }>, import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literals<readonly ["declined", "cancelled"]>;
        }>, import("effect/Schema").Struct<{
            readonly status: import("effect/Schema").Literal<"failed">;
            readonly message: import("effect/Schema").String;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerLinkRequests.PeerLinkRequests | PeerLinks.PeerLinks | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_environment_links: import("effect/ai/Tool").Tool<"t3_environment_links", {
        readonly parameters: import("effect/ai/Tool").EmptyParams;
        readonly success: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
            readonly links: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
                readonly label: import("effect/Schema").String;
                readonly status: import("effect/Schema").Literals<readonly ["reachable", "unreachable", "expired"]>;
                readonly access: import("effect/Schema").Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly expiresAt: import("effect/Schema").String;
                readonly lastError: import("effect/Schema").NullOr<import("effect/Schema").String>;
            }>>;
            readonly notListed: import("effect/Schema").String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerForwarding.PeerForwarding | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_environment_unlink: import("effect/ai/Tool").Tool<"t3_environment_unlink", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
            readonly removed: import("effect/Schema").Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerLinkRequests.PeerLinkRequests | PeerLinks.PeerLinks | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_thread_interrupt: import("effect/ai/Tool").Tool<"t3_thread_interrupt", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly runId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly reason: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly stop: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly runId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly status: import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"interrupt_requested">, import("effect/Schema").Literal<"no_active_run">, import("effect/Schema").Literals<readonly ["completed", "failed", "cancelled", "interrupted", "rolled_back"]>]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_thread_list: import("effect/ai/Tool").Tool<"t3_thread_list", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly projectId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">>;
            readonly statuses: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"idle">, import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>>>;
            readonly titleContains: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly settled: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly snoozed: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly includeSubagents: import("effect/Schema").optional<import("effect/Schema").Boolean>;
            readonly cursor: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly limit: import("effect/Schema").optional<import("effect/Schema").Int>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
            readonly currentThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly threads: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly title: import("effect/Schema").String;
                readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
                readonly createdBy: import("effect/Schema").Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: import("effect/Schema").Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly status: import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"idle">, import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
                readonly latestRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
                readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
                readonly model: import("effect/Schema").String;
                readonly runtimeMode: import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly interactionMode: import("effect/Schema").Literals<readonly ["default", "plan"]>;
                readonly linkedPullRequest: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
                    readonly repository: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly number: import("effect/Schema").Int;
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                }>>;
                readonly pullRequests: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                    readonly host: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly repository: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly number: import("effect/Schema").Int;
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly source: import("effect/Schema").Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
                    readonly state: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["open", "closed", "merged"]>>;
                }>>>;
                readonly settled: import("effect/Schema").Boolean;
                readonly settledAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly snoozed: import("effect/Schema").Boolean;
                readonly snoozedUntil: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly parentThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
                readonly relationshipToParent: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["fork", "subagent"]>>;
                readonly itemCount: import("effect/Schema").Int;
                readonly createdAt: import("effect/Schema").String;
                readonly updatedAt: import("effect/Schema").String;
            }>>;
            readonly nextCursor: import("effect/Schema").NullOr<import("effect/Schema").Int>;
            readonly total: import("effect/Schema").Int;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_thread_read: import("effect/ai/Tool").Tool<"t3_thread_read", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly itemId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "TurnItemId">>;
            readonly textOffset: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly view: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["messages", "activity"]>>;
            readonly afterPosition: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly limit: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").Int, import("effect/Schema").Int, never, never>>;
            readonly runLimit: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").Int, import("effect/Schema").Int, never, never>>;
            readonly maxCharsPerItem: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").Int, import("effect/Schema").Int, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly thread: import("effect/Schema").Struct<{
                readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
                readonly title: import("effect/Schema").String;
                readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
                readonly createdBy: import("effect/Schema").Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: import("effect/Schema").Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly status: import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"idle">, import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
                readonly latestRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
                readonly activeRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
                readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
                readonly model: import("effect/Schema").String;
                readonly runtimeMode: import("effect/Schema").Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly interactionMode: import("effect/Schema").Literals<readonly ["default", "plan"]>;
                readonly linkedPullRequest: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
                    readonly repository: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly number: import("effect/Schema").Int;
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                }>>;
                readonly pullRequests: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                    readonly host: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly repository: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly number: import("effect/Schema").Int;
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly source: import("effect/Schema").Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
                    readonly state: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["open", "closed", "merged"]>>;
                }>>>;
                readonly titleRegeneration: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                    readonly requestId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "CommandId">;
                    readonly startedAt: import("effect/Schema").String;
                }>>;
                readonly branch: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly worktreePath: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly parentThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
                readonly relationshipToParent: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["fork", "subagent"]>>;
                readonly runCount: import("effect/Schema").Int;
                readonly itemCount: import("effect/Schema").Int;
                readonly pendingRequestCount: import("effect/Schema").Int;
                readonly archived: import("effect/Schema").Boolean;
                readonly settled: import("effect/Schema").Boolean;
                readonly settledAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly snoozed: import("effect/Schema").Boolean;
                readonly snoozedUntil: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly createdAt: import("effect/Schema").String;
                readonly updatedAt: import("effect/Schema").String;
            }>;
            readonly recentRuns: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly runId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">;
                readonly ordinal: import("effect/Schema").Int;
                readonly status: import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
                readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
                readonly model: import("effect/Schema").String;
                readonly requestedAt: import("effect/Schema").String;
                readonly startedAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly completedAt: import("effect/Schema").NullOr<import("effect/Schema").String>;
            }>>;
            readonly items: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly position: import("effect/Schema").Int;
                readonly visibility: import("effect/Schema").Literals<readonly ["local", "inherited", "synthetic"]>;
                readonly sourceThreadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly itemId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "TurnItemId">;
                readonly subagentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">>;
                readonly runId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
                readonly messageId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "MessageId">>;
                readonly createdBy: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["user", "agent", "system"]>>;
                readonly creationSource: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>>;
                readonly senderThreadId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
                readonly type: import("effect/Schema").String;
                readonly status: import("effect/Schema").Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
                readonly title: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly text: import("effect/Schema").NullOr<import("effect/Schema").String>;
                readonly textTruncated: import("effect/Schema").Boolean;
                readonly nextTextOffset: import("effect/Schema").optional<import("effect/Schema").NullOr<import("effect/Schema").Int>>;
                readonly updatedAt: import("effect/Schema").String;
            }>>;
            readonly nextPosition: import("effect/Schema").NullOr<import("effect/Schema").Int>;
            readonly hasMore: import("effect/Schema").Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_thread_send: import("effect/ai/Tool").Tool<"t3_thread_send", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly message: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly mode: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["auto", "queue", "steer", "restart"]>>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly messageId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "MessageId">;
            readonly runId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">;
            readonly taskId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">>;
            readonly status: import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
            readonly delivery: import("effect/Schema").Literals<readonly ["started", "queued", "steered", "restarted"]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_thread_update: import("effect/ai/Tool").Tool<"t3_thread_update", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly action: import("effect/Schema").Literals<readonly ["rename", "regenerate_title"]>;
            readonly title: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly action: import("effect/Schema").Literals<readonly ["rename", "regenerate_title"]>;
            readonly commandId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "CommandId">;
            readonly sequence: import("effect/Schema").Int;
            readonly title: import("effect/Schema").String;
            readonly titleRegeneration: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                readonly requestId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "CommandId">;
                readonly startedAt: import("effect/Schema").String;
            }>>;
            readonly linkedPullRequest: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                readonly projectId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProjectId">;
                readonly repository: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly number: import("effect/Schema").Int;
                readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            }>>;
            readonly updatedAt: import("effect/Schema").String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService | ThreadMetadataMcpService.ThreadMetadataMcpService>;
    readonly t3_thread_wait: import("effect/ai/Tool").Tool<"t3_thread_wait", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly runId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly timeoutMs: import("effect/Schema").optional<import("effect/Schema").Finite>;
            readonly untilDelegatedWorkSettled: import("effect/Schema").optional<import("effect/Schema").Boolean>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly runId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly status: import("effect/Schema").Union<readonly [import("effect/Schema").Literal<"idle">, import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
            readonly timedOut: import("effect/Schema").Boolean;
            readonly next: import("effect/Schema").optional<import("effect/Schema").Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
            readonly resultRun: import("effect/Schema").optional<import("effect/Schema").Struct<{
                readonly runId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">;
                readonly status: import("effect/Schema").Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly t3_workflow_stop: import("effect/ai/Tool").Tool<"t3_workflow_stop", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
            readonly subagentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly environmentId: import("effect/Schema").optional<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: import("effect/Schema").Struct<{}>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly task_cancel: import("effect/ai/Tool").Tool<"task_cancel", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly taskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly reason: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly clientRequestId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly taskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly status: import("effect/Schema").Literals<readonly ["cancel_requested", "completed", "failed", "cancelled", "interrupted"]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly task_status: import("effect/ai/Tool").Tool<"task_status", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly taskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly taskId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly childThreadId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">>;
            readonly remoteChild: import("effect/Schema").optional<import("effect/Schema").Struct<{
                readonly environmentId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "EnvironmentId">;
                readonly threadId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ThreadId">;
                readonly label: import("effect/Schema").String;
            }>>;
            readonly link: import("effect/Schema").optional<import("effect/Schema").String>;
            readonly childRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly childNodeId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "NodeId">;
            readonly status: import("effect/Schema").Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
            readonly workState: import("effect/Schema").Literals<readonly ["working", "waiting_for_children", "result_available"]>;
            readonly hasPendingChildRuns: import("effect/Schema").Boolean;
            readonly latestTerminalRunId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">>;
            readonly latestTerminalStatus: import("effect/Schema").NullOr<import("effect/Schema").Literals<readonly ["completed", "failed", "cancelled", "interrupted"]>>;
            readonly latestTerminalSummary: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly latestTerminalResultContextTransferId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ContextTransferId">>;
            readonly providerInstanceId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ProviderInstanceId">;
            readonly model: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly options: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly id: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly value: import("effect/Schema").Union<readonly [import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, import("effect/Schema").Boolean]>;
            }>>>;
            readonly summary: import("effect/Schema").NullOr<import("effect/Schema").String>;
            readonly resultContextTransferId: import("effect/Schema").NullOr<import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "ContextTransferId">>;
            readonly hasPendingQuestion: import("effect/Schema").Boolean;
            readonly pendingApproval: import("effect/Schema").NullOr<import("effect/Schema").Struct<{
                readonly requestId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RuntimeRequestId">;
                readonly kind: import("effect/Schema").Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
                readonly runId: import("effect/Schema").brand<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>, "RunId">;
            }>>;
            readonly waitTimedOut: import("effect/Schema").Boolean;
            readonly next: import("effect/Schema").optional<import("effect/Schema").Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
}, never, never>;
