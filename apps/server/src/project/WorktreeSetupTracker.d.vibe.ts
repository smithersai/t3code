import type { ThreadId, WorktreeSetupSnapshot, WorktreeSetupStage, WorktreeSetupStageId, WorktreeSetupStageStatus } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Fiber from "effect/Fiber";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";
declare const WorktreeSetupTracker_base: Context.ServiceClass<WorktreeSetupTracker, "t3/project/WorktreeSetupTracker", {
    readonly begin: (input: {
        readonly threadId: ThreadId;
        readonly branch: string | null;
        readonly baseRef: string | null;
        readonly stages: readonly WorktreeSetupStageId[];
        readonly fiber: Fiber.Fiber<unknown, unknown> | null;
    }) => Effect.Effect<void>;
    readonly update: (threadId: ThreadId, mutate: (snapshot: WorktreeSetupSnapshot) => WorktreeSetupSnapshot) => Effect.Effect<void>;
    readonly stage: (threadId: ThreadId, stageId: WorktreeSetupStageId, patch: Partial<Omit<WorktreeSetupStage, "id">>) => Effect.Effect<void>;
    readonly stageStatus: (threadId: ThreadId, stageId: WorktreeSetupStageId, status: WorktreeSetupStageStatus, detail?: string | null) => Effect.Effect<void>;
    readonly appendTail: (threadId: ThreadId, stageId: WorktreeSetupStageId, line: string) => Effect.Effect<void>;
    readonly finish: (threadId: ThreadId, phase: "done" | "failed" | "cancelled", error?: string | null) => Effect.Effect<WorktreeSetupSnapshot | null>;
    /** Call just before dispatch so late cancellation cannot roll back a started agent's thread. */
    readonly markUncancellable: (threadId: ThreadId) => Effect.Effect<void>;
    readonly cancel: (threadId: ThreadId) => Effect.Effect<boolean>;
    readonly get: (threadId: ThreadId) => Effect.Effect<WorktreeSetupSnapshot | null>;
    readonly stream: (threadId: ThreadId) => Stream.Stream<WorktreeSetupSnapshot | null>;
}>;
export declare class WorktreeSetupTracker extends WorktreeSetupTracker_base {
}
export declare const make: Effect.Effect<{
    readonly begin: (input: {
        readonly threadId: ThreadId;
        readonly branch: string | null;
        readonly baseRef: string | null;
        readonly stages: ReadonlyArray<WorktreeSetupStageId>;
        readonly fiber: Fiber.Fiber<unknown, unknown> | null;
    }) => Effect.Effect<void>;
    readonly update: (threadId: ThreadId, mutate: (snapshot: WorktreeSetupSnapshot) => WorktreeSetupSnapshot) => Effect.Effect<void>;
    readonly stage: (threadId: ThreadId, stageId: WorktreeSetupStageId, patch: Partial<Omit<WorktreeSetupStage, "id">>) => Effect.Effect<void>;
    readonly stageStatus: (threadId: ThreadId, stageId: WorktreeSetupStageId, status: WorktreeSetupStageStatus, detail?: string | null) => Effect.Effect<void>;
    readonly appendTail: (threadId: ThreadId, stageId: WorktreeSetupStageId, line: string) => Effect.Effect<void>;
    readonly finish: (threadId: ThreadId, phase: "done" | "failed" | "cancelled", error?: string | null) => Effect.Effect<WorktreeSetupSnapshot | null>;
    /** Call just before dispatch so late cancellation cannot roll back a started agent's thread. */
    readonly markUncancellable: (threadId: ThreadId) => Effect.Effect<void>;
    readonly cancel: (threadId: ThreadId) => Effect.Effect<boolean>;
    readonly get: (threadId: ThreadId) => Effect.Effect<WorktreeSetupSnapshot | null>;
    readonly stream: (threadId: ThreadId) => Stream.Stream<WorktreeSetupSnapshot | null>;
}, never, never>;
export declare const layer: Layer.Layer<WorktreeSetupTracker, never, never>;
export {};
