import { OrchestratorMcpFailure } from "@t3tools/contracts";
import { Tool, Toolkit } from "effect/ai";
import * as Schema from "effect/Schema";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as PeerForwarding from "../../../peer/PeerForwarding.ts";
import * as PeerLinkRequests from "../../../peer/PeerLinkRequests.ts";
import * as PeerLinks from "../../../peer/PeerLinks.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
import * as OrchestratorMcpService from "../../OrchestratorMcpService.ts";
import * as ThreadMetadataMcpService from "../../ThreadMetadataMcpService.ts";
export declare const OrchestratorToolkit: Toolkit.Toolkit<{
    readonly create_threads: Tool.Tool<"create_threads", {
        readonly parameters: Schema.Struct<{
            readonly threads: Schema.$Array<Schema.Struct<{
                readonly prompt: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly target: Schema.optional<Schema.Struct<{
                    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
                    readonly driverKind: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">>;
                    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly options: Schema.optional<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                    }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                    }>>, Schema.$Record<Schema.String, Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>, never, never>]>>;
                    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
                    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
                }>>;
                readonly runtimeMode: Schema.optional<Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>]>>;
                readonly interactionMode: Schema.optional<Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["default", "plan"]>]>>;
            }>>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly threads: Schema.$Array<Schema.Struct<{
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly link: Schema.optional<Schema.String>;
                readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
                readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literal<"preparing">, Schema.Literal<"starting">, Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>, Schema.Literal<"rolled_back">]>;
                readonly title: Schema.String;
                readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.String;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly delegate_task: Tool.Tool<"delegate_task", {
        readonly parameters: Schema.Struct<{
            readonly task: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly target: Schema.optional<Schema.Struct<{
                readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
                readonly driverKind: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">>;
                readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly options: Schema.optional<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.$Record<Schema.String, Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>, never, never>]>>;
                readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
                readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
            }>>;
            readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly role: Schema.optional<Schema.Literals<readonly ["implementation", "research", "review", "design", "test", "general"]>>;
            readonly isolation: Schema.optional<Schema.Literals<readonly ["shared", "worktree"]>>;
            readonly mode: Schema.optional<Schema.Literals<readonly ["async", "wait"]>>;
            readonly timeoutMs: Schema.optional<Schema.Finite>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly runtimeMode: Schema.optional<Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>]>>;
            readonly interactionMode: Schema.optional<Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["default", "plan"]>]>>;
        }>;
        readonly success: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly childThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly remoteChild: Schema.optional<Schema.Struct<{
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly label: Schema.String;
            }>>;
            readonly link: Schema.optional<Schema.String>;
            readonly childRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly childNodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly status: Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
            readonly workState: Schema.Literals<readonly ["working", "waiting_for_children", "result_available"]>;
            readonly hasPendingChildRuns: Schema.Boolean;
            readonly latestTerminalRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly latestTerminalStatus: Schema.NullOr<Schema.Literals<readonly ["completed", "failed", "cancelled", "interrupted"]>>;
            readonly latestTerminalSummary: Schema.NullOr<Schema.String>;
            readonly latestTerminalResultContextTransferId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">>;
            readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.NullOr<Schema.String>;
            readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>>;
            readonly summary: Schema.NullOr<Schema.String>;
            readonly resultContextTransferId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">>;
            readonly hasPendingQuestion: Schema.Boolean;
            readonly pendingApproval: Schema.NullOr<Schema.Struct<{
                readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
                readonly kind: Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
                readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            }>>;
            readonly waitTimedOut: Schema.Boolean;
            readonly next: Schema.optional<Schema.Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly delete_scheduled_task: Tool.Tool<"delete_scheduled_task", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        }>;
        readonly success: Schema.Struct<{
            readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
            readonly deleted: Schema.Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly list_scheduled_tasks: Tool.Tool<"list_scheduled_tasks", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly tasks: Schema.$Array<Schema.Struct<{
                readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
                readonly title: Schema.String;
                readonly prompt: Schema.String;
                readonly enabled: Schema.Boolean;
                readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                readonly boundThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
                readonly schedule: Schema.Union<readonly [Schema.Struct<{
                    readonly type: Schema.Literal<"interval">;
                    readonly everyMs: Schema.Int;
                }>, Schema.Struct<{
                    readonly type: Schema.Literal<"fixed_time">;
                    readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
                }>, Schema.Struct<{
                    readonly type: Schema.Literal<"webhook">;
                    readonly signature: Schema.NullOr<Schema.Struct<{
                        header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        encoding: Schema.Literals<readonly ["hex", "base64"]>;
                        prefix: Schema.String;
                    }>>;
                    readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
                    readonly dedupe: Schema.optional<Schema.Struct<{
                        readonly replayKey: Schema.optional<Schema.String>;
                        readonly coalesceKey: Schema.optional<Schema.String>;
                        readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
                    }>>;
                    readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                        readonly value: Schema.String;
                    }>, Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly op: Schema.Literal<"in">;
                        readonly value: Schema.$Array<Schema.String>;
                    }>, Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly op: Schema.Literal<"exists">;
                    }>]>>>;
                }>]>;
                readonly nextRunAt: Schema.NullOr<Schema.String>;
                readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
                readonly webhookUrl: Schema.optional<Schema.String>;
                readonly webhookSignature: Schema.optional<Schema.Literals<readonly ["none", "set"]>>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly orchestrator_capabilities: Tool.Tool<"orchestrator_capabilities", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly search: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly parentThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly inheritedProviderInstanceId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
            readonly inheritedModel: Schema.NullOr<Schema.String>;
            readonly inheritedOptions: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>>;
            readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
            readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
            readonly providers: Schema.$Array<Schema.Struct<{
                readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly driverKind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly displayName: Schema.NullOr<Schema.String>;
                readonly models: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.String;
                    readonly label: Schema.optional<Schema.String>;
                    readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
                        readonly id: Schema.String;
                        readonly values: Schema.$Array<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
                        readonly default: Schema.optional<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
                    }>>>;
                }>>;
                readonly omittedModels: Schema.optional<Schema.Int>;
                readonly runtimeModes: Schema.optional<Schema.$Array<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
                readonly canRunChildTask: Schema.Boolean;
                readonly canRunCrossProviderChildTask: Schema.Boolean;
                readonly constraints: Schema.$Array<Schema.String>;
            }>>;
            readonly features: Schema.Struct<{
                readonly appOwnedSubagents: Schema.Boolean;
                readonly asyncPolling: Schema.Boolean;
                readonly cancellation: Schema.Boolean;
                readonly batchThreadCreation: Schema.Boolean;
                readonly threadManagement: Schema.Boolean;
                readonly incrementalThreadRead: Schema.Boolean;
                readonly scheduledTasks: Schema.Boolean;
                readonly maxBatchThreads: Schema.Number;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly request_secret: Tool.Tool<"request_secret", {
        readonly parameters: Schema.Struct<{
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly placeholder: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly delivery: Schema.optional<Schema.Literals<readonly ["secretRef", "file"]>>;
            readonly timeoutMs: Schema.optional<Schema.Int>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly status: Schema.Literal<"saved">;
            readonly secretRef: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">;
        }>, Schema.Struct<{
            readonly status: Schema.Literal<"saved">;
            readonly file: Schema.String;
        }>, Schema.Struct<{
            readonly status: Schema.Literals<readonly ["declined", "cancelled", "timed_out"]>;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly schedule_task: Tool.Tool<"schedule_task", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
            readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.optional<Schema.Boolean>;
            readonly bindToCurrentThread: Schema.optional<Schema.Boolean>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scheduledTaskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
            readonly prompt: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly schedule: Schema.optional<Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"interval">;
                readonly everyMs: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"fixed_time">;
                readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"webhook">;
                readonly signature: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly encoding: Schema.Literals<readonly ["hex", "base64"]>;
                    readonly prefix: Schema.String;
                    readonly secret: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly secretRef: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">>;
                }>>>;
                readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
                readonly dedupe: Schema.optional<Schema.Struct<{
                    readonly replayKey: Schema.optional<Schema.String>;
                    readonly coalesceKey: Schema.optional<Schema.String>;
                    readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
                }>>;
                readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: Schema.String;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"in">;
                    readonly value: Schema.$Array<Schema.String>;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"exists">;
                }>]>>>;
            }>]>, Schema.fromJsonString<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"interval">;
                readonly everyMs: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"fixed_time">;
                readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"webhook">;
                readonly signature: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly encoding: Schema.Literals<readonly ["hex", "base64"]>;
                    readonly prefix: Schema.String;
                    readonly secret: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly secretRef: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">>;
                }>>>;
                readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
                readonly dedupe: Schema.optional<Schema.Struct<{
                    readonly replayKey: Schema.optional<Schema.String>;
                    readonly coalesceKey: Schema.optional<Schema.String>;
                    readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
                }>>;
                readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: Schema.String;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"in">;
                    readonly value: Schema.$Array<Schema.String>;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"exists">;
                }>]>>>;
            }>]>>]>>;
        }>;
        readonly success: Schema.Struct<{
            readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
            readonly title: Schema.String;
            readonly prompt: Schema.String;
            readonly enabled: Schema.Boolean;
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
            readonly boundThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly schedule: Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"interval">;
                readonly everyMs: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"fixed_time">;
                readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"webhook">;
                readonly signature: Schema.NullOr<Schema.Struct<{
                    header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    encoding: Schema.Literals<readonly ["hex", "base64"]>;
                    prefix: Schema.String;
                }>>;
                readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
                readonly dedupe: Schema.optional<Schema.Struct<{
                    readonly replayKey: Schema.optional<Schema.String>;
                    readonly coalesceKey: Schema.optional<Schema.String>;
                    readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
                }>>;
                readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                    readonly value: Schema.String;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"in">;
                    readonly value: Schema.$Array<Schema.String>;
                }>, Schema.Struct<{
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly op: Schema.Literal<"exists">;
                }>]>>>;
            }>]>;
            readonly nextRunAt: Schema.NullOr<Schema.String>;
            readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
            readonly webhookUrl: Schema.optional<Schema.String>;
            readonly webhookSignature: Schema.optional<Schema.Literals<readonly ["none", "set"]>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_background_wait: Tool.Tool<"t3_background_wait", {
        readonly parameters: Schema.Struct<{
            readonly taskIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly waiting: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
            readonly matched: Schema.$Array<Schema.String>;
            readonly unmatched: Schema.$Array<Schema.String>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_environment_link: Tool.Tool<"t3_environment_link", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly requestedAccess: Schema.optional<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly status: Schema.Literal<"pending">;
            readonly turnItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        }>, Schema.Struct<{
            readonly status: Schema.Literal<"linked">;
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.String;
            readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        }>, Schema.Struct<{
            readonly status: Schema.Literals<readonly ["declined", "cancelled"]>;
        }>, Schema.Struct<{
            readonly status: Schema.Literal<"failed">;
            readonly message: Schema.String;
        }>]>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerLinkRequests.PeerLinkRequests | PeerLinks.PeerLinks | ThreadManagementService.ThreadManagementService>;
    readonly t3_environment_links: Tool.Tool<"t3_environment_links", {
        readonly parameters: Tool.EmptyParams;
        readonly success: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly links: Schema.$Array<Schema.Struct<{
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly label: Schema.String;
                readonly status: Schema.Literals<readonly ["reachable", "unreachable", "expired"]>;
                readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly expiresAt: Schema.String;
                readonly lastError: Schema.NullOr<Schema.String>;
            }>>;
            readonly notListed: Schema.String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerForwarding.PeerForwarding | ThreadManagementService.ThreadManagementService>;
    readonly t3_environment_unlink: Tool.Tool<"t3_environment_unlink", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        }>;
        readonly success: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly removed: Schema.Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | PeerLinkRequests.PeerLinkRequests | PeerLinks.PeerLinks | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_interrupt: Tool.Tool<"t3_thread_interrupt", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly reason: Schema.optional<Schema.String>;
            readonly stop: Schema.optional<Schema.Boolean>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly status: Schema.Union<readonly [Schema.Literal<"interrupt_requested">, Schema.Literal<"no_active_run">, Schema.Literals<readonly ["completed", "failed", "cancelled", "interrupted", "rolled_back"]>]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_list: Tool.Tool<"t3_thread_list", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
            readonly statuses: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>>>;
            readonly titleContains: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly settled: Schema.optional<Schema.Boolean>;
            readonly snoozed: Schema.optional<Schema.Boolean>;
            readonly includeSubagents: Schema.optional<Schema.Boolean>;
            readonly cursor: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
            readonly currentThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly threads: Schema.$Array<Schema.Struct<{
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly title: Schema.String;
                readonly link: Schema.optional<Schema.String>;
                readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
                readonly latestRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
                readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.String;
                readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
                readonly linkedPullRequest: Schema.NullOr<Schema.Struct<{
                    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly number: Schema.Int;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly pullRequests: Schema.optional<Schema.$Array<Schema.Struct<{
                    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly number: Schema.Int;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
                    readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
                }>>>;
                readonly settled: Schema.Boolean;
                readonly settledAt: Schema.NullOr<Schema.String>;
                readonly snoozed: Schema.Boolean;
                readonly snoozedUntil: Schema.NullOr<Schema.String>;
                readonly parentThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
                readonly relationshipToParent: Schema.NullOr<Schema.Literals<readonly ["fork", "subagent"]>>;
                readonly itemCount: Schema.Int;
                readonly createdAt: Schema.String;
                readonly updatedAt: Schema.String;
            }>>;
            readonly nextCursor: Schema.NullOr<Schema.Int>;
            readonly total: Schema.Int;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_read: Tool.Tool<"t3_thread_read", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
            readonly textOffset: Schema.optional<Schema.Int>;
            readonly view: Schema.optional<Schema.Literals<readonly ["messages", "activity"]>>;
            readonly afterPosition: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.decodeTo<Schema.Int, Schema.Int, never, never>>;
            readonly runLimit: Schema.optional<Schema.decodeTo<Schema.Int, Schema.Int, never, never>>;
            readonly maxCharsPerItem: Schema.optional<Schema.decodeTo<Schema.Int, Schema.Int, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly thread: Schema.Struct<{
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                readonly title: Schema.String;
                readonly link: Schema.optional<Schema.String>;
                readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
                readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
                readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
                readonly latestRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
                readonly activeRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
                readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.String;
                readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
                readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
                readonly linkedPullRequest: Schema.NullOr<Schema.Struct<{
                    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly number: Schema.Int;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly pullRequests: Schema.optional<Schema.$Array<Schema.Struct<{
                    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly number: Schema.Int;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
                    readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
                }>>>;
                readonly titleRegeneration: Schema.NullOr<Schema.Struct<{
                    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
                    readonly startedAt: Schema.String;
                }>>;
                readonly branch: Schema.NullOr<Schema.String>;
                readonly worktreePath: Schema.NullOr<Schema.String>;
                readonly parentThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
                readonly relationshipToParent: Schema.NullOr<Schema.Literals<readonly ["fork", "subagent"]>>;
                readonly runCount: Schema.Int;
                readonly itemCount: Schema.Int;
                readonly pendingRequestCount: Schema.Int;
                readonly archived: Schema.Boolean;
                readonly settled: Schema.Boolean;
                readonly settledAt: Schema.NullOr<Schema.String>;
                readonly snoozed: Schema.Boolean;
                readonly snoozedUntil: Schema.NullOr<Schema.String>;
                readonly createdAt: Schema.String;
                readonly updatedAt: Schema.String;
            }>;
            readonly recentRuns: Schema.$Array<Schema.Struct<{
                readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
                readonly ordinal: Schema.Int;
                readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
                readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.String;
                readonly requestedAt: Schema.String;
                readonly startedAt: Schema.NullOr<Schema.String>;
                readonly completedAt: Schema.NullOr<Schema.String>;
            }>>;
            readonly items: Schema.$Array<Schema.Struct<{
                readonly position: Schema.Int;
                readonly visibility: Schema.Literals<readonly ["local", "inherited", "synthetic"]>;
                readonly sourceThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
                readonly subagentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
                readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
                readonly messageId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
                readonly createdBy: Schema.NullOr<Schema.Literals<readonly ["user", "agent", "system"]>>;
                readonly creationSource: Schema.NullOr<Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>>;
                readonly senderThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
                readonly type: Schema.String;
                readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
                readonly title: Schema.NullOr<Schema.String>;
                readonly text: Schema.NullOr<Schema.String>;
                readonly textTruncated: Schema.Boolean;
                readonly nextTextOffset: Schema.optional<Schema.NullOr<Schema.Int>>;
                readonly updatedAt: Schema.String;
            }>>;
            readonly nextPosition: Schema.NullOr<Schema.Int>;
            readonly hasMore: Schema.Boolean;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_send: Tool.Tool<"t3_thread_send", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mode: Schema.optional<Schema.Literals<readonly ["auto", "queue", "steer", "restart"]>>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly link: Schema.optional<Schema.String>;
            readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
            readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
            readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
            readonly delivery: Schema.Literals<readonly ["started", "queued", "steered", "restarted"]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_update: Tool.Tool<"t3_thread_update", {
        readonly parameters: Schema.Struct<{
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly action: Schema.Literals<readonly ["rename", "regenerate_title"]>;
            readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly action: Schema.Literals<readonly ["rename", "regenerate_title"]>;
            readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
            readonly sequence: Schema.Int;
            readonly title: Schema.String;
            readonly titleRegeneration: Schema.NullOr<Schema.Struct<{
                readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
                readonly startedAt: Schema.String;
            }>>;
            readonly linkedPullRequest: Schema.NullOr<Schema.Struct<{
                readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
                readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly number: Schema.Int;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly updatedAt: Schema.String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService | ThreadMetadataMcpService.ThreadMetadataMcpService>;
    readonly t3_thread_wait: Tool.Tool<"t3_thread_wait", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly timeoutMs: Schema.optional<Schema.Finite>;
            readonly untilDelegatedWorkSettled: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
            readonly timedOut: Schema.Boolean;
            readonly next: Schema.optional<Schema.Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
            readonly resultRun: Schema.optional<Schema.Struct<{
                readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
                readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly t3_workflow_stop: Tool.Tool<"t3_workflow_stop", {
        readonly parameters: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly subagentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: Schema.Struct<{}>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly task_cancel: Tool.Tool<"task_cancel", {
        readonly parameters: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly reason: Schema.optional<Schema.String>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly status: Schema.Literals<readonly ["cancel_requested", "completed", "failed", "cancelled", "interrupted"]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
    readonly task_status: Tool.Tool<"task_status", {
        readonly parameters: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        }>;
        readonly success: Schema.Struct<{
            readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly childThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly remoteChild: Schema.optional<Schema.Struct<{
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly label: Schema.String;
            }>>;
            readonly link: Schema.optional<Schema.String>;
            readonly childRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly childNodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
            readonly status: Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
            readonly workState: Schema.Literals<readonly ["working", "waiting_for_children", "result_available"]>;
            readonly hasPendingChildRuns: Schema.Boolean;
            readonly latestTerminalRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly latestTerminalStatus: Schema.NullOr<Schema.Literals<readonly ["completed", "failed", "cancelled", "interrupted"]>>;
            readonly latestTerminalSummary: Schema.NullOr<Schema.String>;
            readonly latestTerminalResultContextTransferId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">>;
            readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.NullOr<Schema.String>;
            readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>>;
            readonly summary: Schema.NullOr<Schema.String>;
            readonly resultContextTransferId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">>;
            readonly hasPendingQuestion: Schema.Boolean;
            readonly pendingApproval: Schema.NullOr<Schema.Struct<{
                readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
                readonly kind: Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
                readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            }>>;
            readonly waitTimedOut: Schema.Boolean;
            readonly next: Schema.optional<Schema.Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | OrchestratorMcpService.OrchestratorMcpService | ThreadManagementService.ThreadManagementService>;
}>;
