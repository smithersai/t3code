import type { OrchestrationV2Command, OrchestrationV2DomainEvent, OrchestrationV2ThreadProjection } from "@t3tools/contracts";
import type * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import type { PendingOrchestrationEffectV2 } from "./EffectOutbox.ts";
import type * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
export interface ThreadDeletionPlan {
    readonly events: ReadonlyArray<OrchestrationV2DomainEvent>;
    readonly effects: ReadonlyArray<PendingOrchestrationEffectV2>;
}
export declare const planThreadDeletion: (input: {
    readonly command: Extract<OrchestrationV2Command, {
        readonly type: "thread.delete";
    }>;
    readonly projection: Pick<OrchestrationV2ThreadProjection, "thread" | "runs" | "attempts" | "nodes" | "runtimeRequests" | "subagents" | "providerSessions">;
    readonly attachmentIds: ReadonlyArray<string>;
    readonly now: DateTime.Utc;
    readonly idAllocator: IdAllocator.IdAllocatorV2["Service"];
}) => Effect.Effect<ThreadDeletionPlan, IdAllocator.IdAllocatorV2Error>;
