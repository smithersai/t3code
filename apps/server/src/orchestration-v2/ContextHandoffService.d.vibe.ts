import { OrchestrationV2ContextHandoff, type OrchestrationV2TurnItem, type OrchestrationV2Run, ProviderInstanceId, ProviderThreadId, RunId, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
declare const ContextHandoffPrepareError_base: Schema.Class<ContextHandoffPrepareError, Schema.TaggedStruct<"ContextHandoffPrepareError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly targetRunId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
    readonly fromProviderThreadIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
    readonly toProviderThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ContextHandoffPrepareError extends ContextHandoffPrepareError_base {
    get message(): string;
}
export declare const ContextHandoffServiceV2Error: Schema.Union<readonly [typeof ContextHandoffPrepareError]>;
export type ContextHandoffServiceV2Error = typeof ContextHandoffServiceV2Error.Type;
export interface ContextHandoffServiceV2Shape {
    readonly prepareLegacyImport: (input: {
        readonly threadId: ThreadId;
        readonly targetRunId: RunId;
        readonly toProviderThreadId: ProviderThreadId;
        readonly toProviderInstanceId: ProviderInstanceId;
        readonly items: ReadonlyArray<OrchestrationV2TurnItem>;
        readonly createdAt: DateTime.Utc;
    }) => Effect.Effect<OrchestrationV2ContextHandoff, ContextHandoffServiceV2Error>;
    readonly prepare: (input: {
        readonly threadId: ThreadId;
        readonly targetRunId: RunId;
        readonly fromProviderThreadIds: ReadonlyArray<ProviderThreadId>;
        readonly toProviderThreadId: ProviderThreadId;
    }) => Effect.Effect<OrchestrationV2ContextHandoff, ContextHandoffServiceV2Error>;
    readonly prepareForkDelta: (input: {
        readonly sourceThreadId: ThreadId;
        readonly targetThreadId: ThreadId;
        readonly targetRunId: RunId;
        readonly transferId: OrchestrationV2ContextHandoff["transferId"];
        readonly fromProviderThreadIds: ReadonlyArray<ProviderThreadId>;
        readonly toProviderThreadId: ProviderThreadId;
        readonly fromProviderInstanceId: ProviderInstanceId;
        readonly toProviderInstanceId: ProviderInstanceId;
        readonly coveredRunOrdinals: OrchestrationV2ContextHandoff["coveredRunOrdinals"];
        readonly deltaItems: ReadonlyArray<OrchestrationV2TurnItem>;
        readonly createdAt: DateTime.Utc;
    }) => Effect.Effect<OrchestrationV2ContextHandoff, ContextHandoffServiceV2Error>;
    readonly prepareProviderHandoff: (input: {
        readonly threadId: ThreadId;
        readonly targetRunId: RunId;
        readonly transferId: OrchestrationV2ContextHandoff["transferId"];
        readonly fromProviderThreadIds: ReadonlyArray<ProviderThreadId>;
        readonly toProviderThreadId: ProviderThreadId;
        readonly fromProviderInstanceId: ProviderInstanceId;
        readonly toProviderInstanceId: ProviderInstanceId;
        readonly coveredRunOrdinals: OrchestrationV2ContextHandoff["coveredRunOrdinals"];
        readonly runs?: ReadonlyArray<OrchestrationV2Run>;
        readonly strategy: Extract<OrchestrationV2ContextHandoff["strategy"], "delta_since_target_last_seen" | "full_thread_summary">;
        readonly items: ReadonlyArray<OrchestrationV2TurnItem>;
        readonly createdAt: DateTime.Utc;
    }) => Effect.Effect<OrchestrationV2ContextHandoff, ContextHandoffServiceV2Error>;
}
declare const ContextHandoffServiceV2_base: Context.ServiceClass<ContextHandoffServiceV2, "t3/orchestration-v2/ContextHandoffService/ContextHandoffServiceV2", ContextHandoffServiceV2Shape>;
export declare class ContextHandoffServiceV2 extends ContextHandoffServiceV2_base {
}
export declare function providerMessageWithContextHandoff(input: {
    readonly handoff: OrchestrationV2ContextHandoff;
    readonly userText: string;
}): string;
export declare const layer: Layer.Layer<ContextHandoffServiceV2, never, IdAllocator.IdAllocatorV2>;
export {};
