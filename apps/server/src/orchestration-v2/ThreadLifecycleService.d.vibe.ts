import { CommandId, type ModelSelection, type OrchestrationV2ThreadProjection, type ProviderInteractionMode, type RuntimeMode, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ThreadManagement from "./ThreadManagementService.ts";
declare const ThreadLifecycleError_base: Schema.Class<ThreadLifecycleError, Schema.TaggedStruct<"ThreadLifecycleError", {
    readonly operation: Schema.Literals<readonly ["archive", "unarchive", "delete", "update-metadata", "set-runtime-mode", "set-interaction-mode", "set-model-selection"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadLifecycleError extends ThreadLifecycleError_base {
    get message(): string;
}
declare const ThreadLifecycleService_base: Context.ServiceClass<ThreadLifecycleService, "t3/orchestration-v2/ThreadLifecycleService", {
    readonly archive: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly unarchive: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly delete: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly updateMetadata: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
        readonly title?: string;
        readonly branch?: string | null;
        readonly worktreePath?: string | null;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly setRuntimeMode: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
        readonly runtimeMode: RuntimeMode;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly setInteractionMode: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
        readonly interactionMode: ProviderInteractionMode;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
    readonly setModelSelection: (input: {
        readonly commandId: CommandId;
        readonly threadId: ThreadId;
        readonly modelSelection: ModelSelection;
    }) => Effect.Effect<Pick<OrchestrationV2ThreadProjection, "thread">, ThreadLifecycleError>;
}>;
export declare class ThreadLifecycleService extends ThreadLifecycleService_base {
}
export declare const layer: Layer.Layer<ThreadLifecycleService, never, ThreadManagement.ThreadManagementService>;
export {};
