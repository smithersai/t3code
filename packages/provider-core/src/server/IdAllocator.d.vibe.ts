import { CheckpointId, CheckpointScopeId, CommandId, ContextHandoffId, ContextTransferId, EventId, MessageId, NodeId, PlanId, ProjectId, ProviderDriverKind, ProviderInstanceId, ProviderSessionId, ProviderThreadId, ProviderTurnId, RawEventId, RunAttemptId, RunId, RuntimeRequestId, ThreadId, TurnItemId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
export declare const IdAllocatorV2Kind: Schema.Literals<readonly ["command", "event", "raw_event", "project", "thread", "message", "run", "run_attempt", "node", "provider_session", "provider_thread", "provider_turn", "runtime_request", "turn_item", "checkpoint_scope", "checkpoint", "context_handoff", "context_transfer", "plan"]>;
export type IdAllocatorV2Kind = typeof IdAllocatorV2Kind.Type;
declare const IdAllocatorV2AllocationError_base: Schema.Class<IdAllocatorV2AllocationError, Schema.TaggedStruct<"IdAllocatorV2AllocationError", {
    readonly kind: Schema.Literals<readonly ["command", "event", "raw_event", "project", "thread", "message", "run", "run_attempt", "node", "provider_session", "provider_thread", "provider_turn", "runtime_request", "turn_item", "checkpoint_scope", "checkpoint", "context_handoff", "context_transfer", "plan"]>;
    readonly input: Schema.optional<Schema.Unknown>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class IdAllocatorV2AllocationError extends IdAllocatorV2AllocationError_base {
    get message(): string;
}
export declare const IdAllocatorV2Error: Schema.Union<readonly [typeof IdAllocatorV2AllocationError]>;
export type IdAllocatorV2Error = typeof IdAllocatorV2Error.Type;
export interface IdAllocatorV2Allocate {
    readonly command: (input: {
        readonly fixtureName: string;
        readonly commandName: string;
    }) => Effect.Effect<CommandId, IdAllocatorV2Error>;
    readonly event: (input: {
        readonly threadId?: ThreadId;
        readonly commandId?: CommandId;
        readonly providerSessionId?: ProviderSessionId;
    }) => Effect.Effect<EventId, IdAllocatorV2Error>;
    readonly rawEvent: (input: {
        readonly providerSessionId: ProviderSessionId;
        readonly method: string | null;
    }) => Effect.Effect<RawEventId, IdAllocatorV2Error>;
    readonly project: (input: {
        readonly fixtureName: string;
    }) => Effect.Effect<ProjectId, IdAllocatorV2Error>;
    readonly thread: (input: {
        readonly fixtureName?: string;
        readonly projectId?: ProjectId;
    }) => Effect.Effect<ThreadId, IdAllocatorV2Error>;
    readonly message: (input: {
        readonly threadId: ThreadId;
        readonly ordinal: number;
    }) => Effect.Effect<MessageId, IdAllocatorV2Error>;
    readonly providerSession: (input: {
        readonly providerInstanceId: ProviderInstanceId;
        readonly threadId: ThreadId;
    }) => Effect.Effect<ProviderSessionId, IdAllocatorV2Error>;
    readonly runtimeRequest: (input: {
        readonly driver: ProviderDriverKind;
        readonly providerTurnId?: ProviderTurnId;
        readonly nativeRequestId?: string;
    }) => Effect.Effect<RuntimeRequestId, IdAllocatorV2Error>;
    readonly checkpointScope: (input: {
        readonly threadId: ThreadId;
        readonly name: string;
    }) => Effect.Effect<CheckpointScopeId, IdAllocatorV2Error>;
    readonly checkpoint: (input: {
        readonly checkpointScopeId: CheckpointScopeId;
        readonly name: string;
    }) => Effect.Effect<CheckpointId, IdAllocatorV2Error>;
    readonly contextHandoff: (input: {
        readonly threadId: ThreadId;
        readonly fromProviderInstanceId: ProviderInstanceId;
        readonly toProviderInstanceId: ProviderInstanceId;
    }) => Effect.Effect<ContextHandoffId, IdAllocatorV2Error>;
    readonly contextTransfer: (input: {
        readonly sourceThreadId: ThreadId;
        readonly targetThreadId: ThreadId;
        readonly type: string;
    }) => Effect.Effect<ContextTransferId, IdAllocatorV2Error>;
    readonly plan: (input: {
        readonly threadId: ThreadId;
        readonly runId?: RunId;
        readonly driver: ProviderDriverKind;
    }) => Effect.Effect<PlanId, IdAllocatorV2Error>;
}
export interface IdAllocatorV2Derive {
    /** @throws {never} */
    readonly providerSession: (input: {
        readonly providerInstanceId: ProviderInstanceId;
    }) => ProviderSessionId;
    /** @throws {never} */
    readonly delegatedTaskNode: (input: {
        readonly commandId: CommandId;
    }) => NodeId;
    /** @throws {never} */
    readonly delegatedTaskThread: (input: {
        readonly commandId: CommandId;
    }) => ThreadId;
    /** @throws {never} */
    readonly delegatedTaskMessage: (input: {
        readonly commandId: CommandId;
    }) => MessageId;
    /** @throws {never} */
    readonly delegatedTaskTurnItem: (input: {
        readonly commandId: CommandId;
    }) => TurnItemId;
    /** @throws {never} */
    readonly createdThreadTurnItem: (input: {
        readonly commandId: CommandId;
    }) => TurnItemId;
    /** @throws {never} */
    readonly threadFromProviderThread: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeThreadId: string;
        readonly providerInstanceId?: ProviderInstanceId;
    }) => ThreadId;
    /** @throws {never} */
    readonly run: (input: {
        readonly threadId: ThreadId;
        readonly ordinal: number;
    }) => RunId;
    /** @throws {never} */
    readonly runAttempt: (input: {
        readonly runId: RunId;
        readonly attemptOrdinal: number;
    }) => RunAttemptId;
    /** @throws {never} */
    readonly rootNode: (input: {
        readonly runId: RunId;
    }) => NodeId;
    /** @throws {never} */
    readonly rootNodeAttempt: (input: {
        readonly runId: RunId;
        readonly attemptOrdinal: number;
    }) => NodeId;
    /** @throws {never} */
    readonly userTurnItem: (input: {
        readonly messageId: MessageId;
    }) => TurnItemId;
    /** @throws {never} */
    readonly runSignalTurnItem: (input: {
        readonly runId: RunId;
        readonly signal: string;
    }) => TurnItemId;
    /** @throws {never} */
    readonly providerThread: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeThreadId: string;
        readonly providerInstanceId?: ProviderInstanceId;
    }) => ProviderThreadId;
    /** @throws {never} */
    readonly providerTurn: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeTurnId: string;
    }) => ProviderTurnId;
    /** @throws {never} */
    readonly nodeFromProviderItem: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeItemId: string;
    }) => NodeId;
    /** @throws {never} */
    readonly messageFromProviderItem: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeItemId: string;
    }) => MessageId;
    /** @throws {never} */
    readonly turnItemFromProviderItem: (input: {
        readonly driver: ProviderDriverKind;
        readonly nativeItemId: string;
    }) => TurnItemId;
    /** @throws {never} */
    readonly approvalNode: (input: {
        readonly requestId: RuntimeRequestId;
    }) => NodeId;
    /** @throws {never} */
    readonly approvalTurnItem: (input: {
        readonly requestId: RuntimeRequestId;
    }) => TurnItemId;
}
declare const IdAllocatorV2_base: Context.ServiceClass<IdAllocatorV2, "@t3tools/provider-core/server/IdAllocator/IdAllocatorV2", {
    readonly allocate: IdAllocatorV2Allocate;
    readonly derive: IdAllocatorV2Derive;
}>;
export declare class IdAllocatorV2 extends IdAllocatorV2_base {
}
/** @throws {never} */
export declare function deriveThreadFromProviderThread(input: {
    readonly driver: ProviderDriverKind;
    readonly providerInstanceId?: ProviderInstanceId;
    readonly nativeThreadId: string;
}): ThreadId;
/** @throws {never} */
export declare function deriveProviderThread(input: {
    readonly driver: ProviderDriverKind;
    readonly providerInstanceId?: ProviderInstanceId;
    readonly nativeThreadId: string;
}): ProviderThreadId;
export declare const derive: IdAllocatorV2Derive;
export declare const layer: Layer.Layer<IdAllocatorV2>;
export {};
