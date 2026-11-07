import * as Schema from "effect/Schema";
export declare const OrchestratorMcpClientRequestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const OrchestratorMcpTargetOptions: Schema.Union<readonly [Schema.$Array<Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
}>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
}>>, Schema.$Record<Schema.String, Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>, never, never>]>;
export type OrchestratorMcpTargetOptions = typeof OrchestratorMcpTargetOptions.Type;
export declare const OrchestratorMcpTarget: Schema.Struct<{
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
}>;
export type OrchestratorMcpTarget = typeof OrchestratorMcpTarget.Type;
export declare const OrchestratorMcpRuntimeMode: Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>]>;
export type OrchestratorMcpRuntimeMode = typeof OrchestratorMcpRuntimeMode.Type;
export declare const OrchestratorMcpInteractionMode: Schema.Union<readonly [Schema.Literal<"inherit">, Schema.Literals<readonly ["default", "plan"]>]>;
export type OrchestratorMcpInteractionMode = typeof OrchestratorMcpInteractionMode.Type;
export declare const OrchestratorMcpTaskRole: Schema.Literals<readonly ["implementation", "research", "review", "design", "test", "general"]>;
export type OrchestratorMcpTaskRole = typeof OrchestratorMcpTaskRole.Type;
export declare const OrchestratorMcpDelegatedTaskStatus: Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
export type OrchestratorMcpDelegatedTaskStatus = typeof OrchestratorMcpDelegatedTaskStatus.Type;
export declare const OrchestratorMcpTerminalDelegatedTaskStatus: Schema.Literals<readonly ["completed", "failed", "cancelled", "interrupted"]>;
export type OrchestratorMcpTerminalDelegatedTaskStatus = typeof OrchestratorMcpTerminalDelegatedTaskStatus.Type;
export declare const OrchestratorMcpDelegateTaskInput: Schema.Struct<{
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
export type OrchestratorMcpDelegateTaskInput = typeof OrchestratorMcpDelegateTaskInput.Type;
export declare const ORCHESTRATOR_MCP_RUNNING_TASK_NEXT = "Completion wakes this thread, so end your turn. Do not wait on it or poll it.";
export declare const OrchestratorMcpDelegateTaskResult: Schema.Struct<{
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
    /** Null for a task that runs in a linked environment; see `remoteChild`. */
    readonly childThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    /** The linked environment and thread a remote task runs as. */
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
export type OrchestratorMcpDelegateTaskResult = typeof OrchestratorMcpDelegateTaskResult.Type;
export declare const OrchestratorMcpTaskStatusInput: Schema.Struct<{
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
}>;
export type OrchestratorMcpTaskStatusInput = typeof OrchestratorMcpTaskStatusInput.Type;
export declare const OrchestratorMcpTaskCancelInput: Schema.Struct<{
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
    readonly reason: Schema.optional<Schema.String>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpTaskCancelInput = typeof OrchestratorMcpTaskCancelInput.Type;
export declare const OrchestratorMcpTaskCancelResult: Schema.Struct<{
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
    readonly status: Schema.Literals<readonly ["cancel_requested", "completed", "failed", "cancelled", "interrupted"]>;
}>;
export type OrchestratorMcpTaskCancelResult = typeof OrchestratorMcpTaskCancelResult.Type;
export declare const OrchestratorMcpCreateThreadRequest: Schema.Struct<{
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
}>;
export type OrchestratorMcpCreateThreadRequest = typeof OrchestratorMcpCreateThreadRequest.Type;
export declare const OrchestratorMcpCreateThreadsInput: Schema.Struct<{
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
export type OrchestratorMcpCreateThreadsInput = typeof OrchestratorMcpCreateThreadsInput.Type;
export declare const OrchestratorMcpCreatedThreadStatus: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literal<"preparing">, Schema.Literal<"starting">, Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>, Schema.Literal<"rolled_back">]>;
export type OrchestratorMcpCreatedThreadStatus = typeof OrchestratorMcpCreatedThreadStatus.Type;
export declare const OrchestratorMcpCreatedThread: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly link: Schema.optional<Schema.String>;
    readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
    readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literal<"preparing">, Schema.Literal<"starting">, Schema.Literals<readonly ["queued", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>, Schema.Literal<"rolled_back">]>;
    readonly title: Schema.String;
    readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
    readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly model: Schema.String;
}>;
export type OrchestratorMcpCreatedThread = typeof OrchestratorMcpCreatedThread.Type;
export declare const OrchestratorMcpCreateThreadsResult: Schema.Struct<{
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
export type OrchestratorMcpCreateThreadsResult = typeof OrchestratorMcpCreateThreadsResult.Type;
export declare const OrchestratorMcpThreadStatus: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
export type OrchestratorMcpThreadStatus = typeof OrchestratorMcpThreadStatus.Type;
/**
 * A linked environment to act in instead of this one. The tools that take it
 * forward the call there, where the link's access and the caller's own modes
 * both apply.
 */
export declare const OrchestratorMcpEnvironmentTarget: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
export declare const OrchestratorMcpThreadListInput: Schema.Struct<{
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
export type OrchestratorMcpThreadListInput = typeof OrchestratorMcpThreadListInput.Type;
/** state is null until the host is read. */
export declare const OrchestratorMcpThreadPullRequest: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
    readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
}>;
export type OrchestratorMcpThreadPullRequest = typeof OrchestratorMcpThreadPullRequest.Type;
export declare const OrchestratorMcpThreadListItem: Schema.Struct<{
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
}>;
export type OrchestratorMcpThreadListItem = typeof OrchestratorMcpThreadListItem.Type;
export declare const OrchestratorMcpThreadListResult: Schema.Struct<{
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
export type OrchestratorMcpThreadListResult = typeof OrchestratorMcpThreadListResult.Type;
export declare const OrchestratorMcpThreadReadInput: Schema.Struct<{
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
export type OrchestratorMcpThreadReadInput = typeof OrchestratorMcpThreadReadInput.Type;
export declare const OrchestratorMcpThreadDetail: Schema.Struct<{
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
export type OrchestratorMcpThreadDetail = typeof OrchestratorMcpThreadDetail.Type;
export declare const OrchestratorMcpThreadRun: Schema.Struct<{
    readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
    readonly ordinal: Schema.Int;
    readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly model: Schema.String;
    readonly requestedAt: Schema.String;
    readonly startedAt: Schema.NullOr<Schema.String>;
    readonly completedAt: Schema.NullOr<Schema.String>;
}>;
export type OrchestratorMcpThreadRun = typeof OrchestratorMcpThreadRun.Type;
export declare const OrchestratorMcpThreadTimelineItem: Schema.Struct<{
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
}>;
export type OrchestratorMcpThreadTimelineItem = typeof OrchestratorMcpThreadTimelineItem.Type;
export declare const OrchestratorMcpThreadReadResult: Schema.Struct<{
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
export type OrchestratorMcpThreadReadResult = typeof OrchestratorMcpThreadReadResult.Type;
export declare const OrchestratorMcpThreadSendInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mode: Schema.optional<Schema.Literals<readonly ["auto", "queue", "steer", "restart"]>>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpThreadSendInput = typeof OrchestratorMcpThreadSendInput.Type;
export declare const OrchestratorMcpThreadSendResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly link: Schema.optional<Schema.String>;
    readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
    readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
    readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
    readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
    readonly delivery: Schema.Literals<readonly ["started", "queued", "steered", "restarted"]>;
}>;
export type OrchestratorMcpThreadSendResult = typeof OrchestratorMcpThreadSendResult.Type;
export declare const OrchestratorMcpThreadWaitInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
    readonly timeoutMs: Schema.optional<Schema.Finite>;
    readonly untilDelegatedWorkSettled: Schema.optional<Schema.Boolean>;
}>;
export type OrchestratorMcpThreadWaitInput = typeof OrchestratorMcpThreadWaitInput.Type;
export declare const OrchestratorMcpThreadWaitResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
    readonly status: Schema.Union<readonly [Schema.Literal<"idle">, Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>]>;
    readonly timedOut: Schema.Boolean;
    readonly next: Schema.optional<Schema.Literal<"Completion wakes this thread, so end your turn. Do not wait on it or poll it.">>;
    /** With untilDelegatedWorkSettled, once settled: the run whose reply is the thread's result. */
    readonly resultRun: Schema.optional<Schema.Struct<{
        readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
        readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
    }>>;
}>;
export type OrchestratorMcpThreadWaitResult = typeof OrchestratorMcpThreadWaitResult.Type;
export declare const OrchestratorMcpThreadInterruptInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
    readonly reason: Schema.optional<Schema.String>;
    /**
     * Stop the thread as its Stop button does instead: interrupt its running
     * turn whichever run that is, hold its queued messages, end its pull request
     * watches and stop every task it delegated. `runId` is then not used.
     */
    readonly stop: Schema.optional<Schema.Boolean>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpThreadInterruptInput = typeof OrchestratorMcpThreadInterruptInput.Type;
export declare const OrchestratorMcpThreadInterruptResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
    readonly status: Schema.Union<readonly [Schema.Literal<"interrupt_requested">, Schema.Literal<"no_active_run">, Schema.Literals<readonly ["completed", "failed", "cancelled", "interrupted", "rolled_back"]>]>;
}>;
export type OrchestratorMcpThreadInterruptResult = typeof OrchestratorMcpThreadInterruptResult.Type;
export declare const OrchestratorMcpCapabilitiesInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly search: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpCapabilitiesInput = typeof OrchestratorMcpCapabilitiesInput.Type;
export declare const OrchestratorMcpModelOption: Schema.Struct<{
    readonly id: Schema.String;
    readonly values: Schema.$Array<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
    readonly default: Schema.optional<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
}>;
export type OrchestratorMcpModelOption = typeof OrchestratorMcpModelOption.Type;
export declare const OrchestratorMcpProviderCapability: Schema.Struct<{
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly driverKind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly displayName: Schema.NullOr<Schema.String>;
    readonly models: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        /** Omitted when it only restates the id. */
        readonly label: Schema.optional<Schema.String>;
        readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly id: Schema.String;
            readonly values: Schema.$Array<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
            readonly default: Schema.optional<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
        }>>>;
    }>>;
    /** Models left out of `models`: unlisted visible models, or matches past the cap with `search`. */
    readonly omittedModels: Schema.optional<Schema.Int>;
    readonly runtimeModes: Schema.optional<Schema.$Array<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
    readonly canRunChildTask: Schema.Boolean;
    readonly canRunCrossProviderChildTask: Schema.Boolean;
    readonly constraints: Schema.$Array<Schema.String>;
}>;
export type OrchestratorMcpProviderCapability = typeof OrchestratorMcpProviderCapability.Type;
export declare const OrchestratorMcpEnvironmentLink: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    /** Whether it answered just now. An expired link must be linked again there. */
    readonly status: Schema.Literals<readonly ["reachable", "unreachable", "expired"]>;
    /** The most the linked environment lets this one's agents do there. */
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly expiresAt: Schema.String;
    readonly lastError: Schema.NullOr<Schema.String>;
}>;
export type OrchestratorMcpEnvironmentLink = typeof OrchestratorMcpEnvironmentLink.Type;
export declare const OrchestratorMcpEnvironmentLinksResult: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly links: Schema.$Array<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.String;
        /** Whether it answered just now. An expired link must be linked again there. */
        readonly status: Schema.Literals<readonly ["reachable", "unreachable", "expired"]>;
        /** The most the linked environment lets this one's agents do there. */
        readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly expiresAt: Schema.String;
        readonly lastError: Schema.NullOr<Schema.String>;
    }>>;
    /** What to do when the machine the user means is not among `links`. */
    readonly notListed: Schema.String;
}>;
export type OrchestratorMcpEnvironmentLinksResult = typeof OrchestratorMcpEnvironmentLinksResult.Type;
export declare const OrchestratorMcpCapabilitiesResult: Schema.Struct<{
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
            /** Omitted when it only restates the id. */
            readonly label: Schema.optional<Schema.String>;
            readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.String;
                readonly values: Schema.$Array<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
                readonly default: Schema.optional<Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>>;
            }>>>;
        }>>;
        /** Models left out of `models`: unlisted visible models, or matches past the cap with `search`. */
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
export type OrchestratorMcpCapabilitiesResult = typeof OrchestratorMcpCapabilitiesResult.Type;
export declare const OrchestratorMcpScheduleTaskInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
    readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly schedule: Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
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
    }>]>>]>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly enabled: Schema.optional<Schema.Boolean>;
    readonly bindToCurrentThread: Schema.optional<Schema.Boolean>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpScheduleTaskInput = typeof OrchestratorMcpScheduleTaskInput.Type;
/** `schedule_task` creates a task, or updates one when `scheduledTaskId` is given. */
export declare const OrchestratorMcpSaveScheduledTaskInput: Schema.Struct<{
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
export type OrchestratorMcpSaveScheduledTaskInput = typeof OrchestratorMcpSaveScheduledTaskInput.Type;
export declare const OrchestratorMcpScheduledTask: Schema.Struct<{
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
export type OrchestratorMcpScheduledTask = typeof OrchestratorMcpScheduledTask.Type;
export declare const OrchestratorMcpScheduleTaskResult: Schema.Struct<{
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
export type OrchestratorMcpScheduleTaskResult = typeof OrchestratorMcpScheduleTaskResult.Type;
export declare const OrchestratorMcpListScheduledTasksInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
}>;
export type OrchestratorMcpListScheduledTasksInput = typeof OrchestratorMcpListScheduledTasksInput.Type;
export declare const OrchestratorMcpListScheduledTasksResult: Schema.Struct<{
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
export type OrchestratorMcpListScheduledTasksResult = typeof OrchestratorMcpListScheduledTasksResult.Type;
export declare const OrchestratorMcpUpdateScheduledTaskInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly prompt: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
    readonly enabled: Schema.optional<Schema.Boolean>;
    readonly bindToCurrentThread: Schema.optional<Schema.Boolean>;
}>;
export type OrchestratorMcpUpdateScheduledTaskInput = typeof OrchestratorMcpUpdateScheduledTaskInput.Type;
export declare const OrchestratorMcpRequestSecretInput: Schema.Struct<{
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly placeholder: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly delivery: Schema.optional<Schema.Literals<readonly ["secretRef", "file"]>>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpRequestSecretInput = typeof OrchestratorMcpRequestSecretInput.Type;
export declare const OrchestratorMcpRequestSecretResult: Schema.Union<readonly [Schema.Struct<{
    readonly status: Schema.Literal<"saved">;
    readonly secretRef: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"saved">;
    readonly file: Schema.String;
}>, Schema.Struct<{
    readonly status: Schema.Literals<readonly ["declined", "cancelled", "timed_out"]>;
}>]>;
export type OrchestratorMcpRequestSecretResult = typeof OrchestratorMcpRequestSecretResult.Type;
export declare const OrchestratorMcpEnvironmentLinkInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly hint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly requestedAccess: Schema.optional<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type OrchestratorMcpEnvironmentLinkInput = typeof OrchestratorMcpEnvironmentLinkInput.Type;
export declare const OrchestratorMcpEnvironmentLinkResult: Schema.Union<readonly [Schema.Struct<{
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
export type OrchestratorMcpEnvironmentLinkResult = typeof OrchestratorMcpEnvironmentLinkResult.Type;
export declare const OrchestratorMcpEnvironmentUnlinkInput: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type OrchestratorMcpEnvironmentUnlinkInput = typeof OrchestratorMcpEnvironmentUnlinkInput.Type;
export declare const OrchestratorMcpEnvironmentUnlinkResult: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly removed: Schema.Boolean;
}>;
export type OrchestratorMcpEnvironmentUnlinkResult = typeof OrchestratorMcpEnvironmentUnlinkResult.Type;
export declare const OrchestratorMcpDeleteScheduledTaskInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
}>;
export type OrchestratorMcpDeleteScheduledTaskInput = typeof OrchestratorMcpDeleteScheduledTaskInput.Type;
export declare const OrchestratorMcpDeleteScheduledTaskResult: Schema.Struct<{
    readonly scheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly deleted: Schema.Boolean;
}>;
export type OrchestratorMcpDeleteScheduledTaskResult = typeof OrchestratorMcpDeleteScheduledTaskResult.Type;
declare const OrchestratorMcpFailure_base: Schema.Class<OrchestratorMcpFailure, Schema.TaggedStruct<"OrchestratorMcpFailure", {
    readonly code: Schema.Literals<readonly ["capability_denied", "parent_not_active", "provider_unavailable", "model_unavailable", "runtime_mode_escalation_denied", "interaction_mode_escalation_denied", "task_not_found", "task_not_cancellable", "thread_not_found", "run_not_found", "thread_not_sendable", "thread_not_interruptible", "invalid_request", "orchestration_error", "thread_credential_required", "target_required"]>;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class OrchestratorMcpFailure extends OrchestratorMcpFailure_base {
}
export {};
