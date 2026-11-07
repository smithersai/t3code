import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
export type ThreadHistoryLoadEarlierResult = {
    readonly _tag: "loaded";
} | {
    readonly _tag: "noop";
} | {
    readonly _tag: "busy";
} | {
    readonly _tag: "error";
    readonly message: string;
};
export type ThreadHistoryHandler = {
    readonly loadEarlier: (throughEntryId?: string) => Effect.Effect<ThreadHistoryLoadEarlierResult>;
    readonly reconcilePendingWork: () => Effect.Effect<void>;
};
export type ThreadHistoryRegistration = {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly handler: ThreadHistoryHandler;
};
declare const ThreadHistoryController_base: Context.ServiceClass<ThreadHistoryController, "@t3tools/client-runtime/state/threadHistoryController", {
    readonly register: (environmentId: EnvironmentId, threadId: ThreadId, handler: ThreadHistoryHandler) => Effect.Effect<ThreadHistoryRegistration>;
    readonly unregister: (registration: ThreadHistoryRegistration) => Effect.Effect<void>;
    readonly loadEarlier: (environmentId: EnvironmentId, threadId: ThreadId, throughEntryId?: string) => Effect.Effect<ThreadHistoryLoadEarlierResult>;
    readonly reconcilePendingWork: (environmentId: EnvironmentId, threadId: ThreadId) => Effect.Effect<void>;
}>;
export declare class ThreadHistoryController extends ThreadHistoryController_base {
}
export declare const layer: Layer.Layer<ThreadHistoryController>;
export {};
