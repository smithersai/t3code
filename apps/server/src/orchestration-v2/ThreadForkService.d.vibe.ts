import { ContextTransferId, OrchestrationV2Actor, OrchestrationV2AppThread, OrchestrationV2ContextSourcePoint, OrchestrationV2ContextTransfer, OrchestrationV2CreationSource, OrchestrationV2ProviderThread, OrchestrationV2ProviderTurnTokenUsage, OrchestrationV2Run, OrchestrationV2ThreadProjection, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
export interface ThreadForkPlanV2 {
    readonly targetThread: OrchestrationV2AppThread;
    readonly transfer: OrchestrationV2ContextTransfer;
}
declare const ThreadForkPlanError_base: Schema.Class<ThreadForkPlanError, Schema.TaggedStruct<"ThreadForkPlanError", {
    readonly sourceThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly targetThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadForkPlanError extends ThreadForkPlanError_base {
}
/** waiting means provider-finished with checkpoint capture pending. */
export declare function isForkableSourceRunStatus(status: OrchestrationV2Run["status"]): boolean;
export declare function forkableSourceRunStatusError(run: Pick<OrchestrationV2Run, "id" | "status">): string;
export interface ThreadForkServiceV2Shape {
    readonly plan: (input: {
        readonly sourceProjection: Pick<OrchestrationV2ThreadProjection, "thread">;
        readonly sourceRun: OrchestrationV2Run;
        readonly sourceProviderThread: OrchestrationV2ProviderThread | undefined;
        readonly sourceTokenUsage?: OrchestrationV2ProviderTurnTokenUsage | undefined;
        readonly canonicalSourcePoint: OrchestrationV2ContextSourcePoint;
        readonly transferId: ContextTransferId;
        readonly targetThreadId: ThreadId;
        readonly title?: string;
        readonly createdBy: OrchestrationV2Actor;
        readonly creationSource: OrchestrationV2CreationSource;
        readonly createdAt: DateTime.Utc;
    }) => Effect.Effect<ThreadForkPlanV2, ThreadForkPlanError>;
}
declare const ThreadForkServiceV2_base: Context.ServiceClass<ThreadForkServiceV2, "t3/orchestration-v2/ThreadForkService/ThreadForkServiceV2", ThreadForkServiceV2Shape>;
export declare class ThreadForkServiceV2 extends ThreadForkServiceV2_base {
}
export declare const layer: Layer.Layer<ThreadForkServiceV2>;
export {};
