import type { ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as PubSub from "effect/PubSub";
import type * as Scope from "effect/Scope";
export interface PreviewAgentTurnChange {
    readonly threadId: ThreadId;
    readonly active: boolean;
}
declare const PreviewAgentActivity_base: Context.ServiceClass<PreviewAgentActivity, "t3/preview/PreviewAgentActivity", {
    /** Marks the thread active until the returned effect runs; it runs at most once. */
    readonly begin: (threadId: ThreadId) => Effect.Effect<Effect.Effect<void>>;
    readonly active: (threadId: ThreadId) => Effect.Effect<boolean>;
    /** Each thread's transitions between no turn and some turn, from subscription on. */
    readonly changes: Effect.Effect<PubSub.Subscription<PreviewAgentTurnChange>, never, Scope.Scope>;
}>;
/**
 * Whether an agent turn runs on a thread, model thinking included, so its preview tab
 * stays focused between tool calls. Background commands outlive the turn and do not count.
 */
export declare class PreviewAgentActivity extends PreviewAgentActivity_base {
}
export declare const layer: Layer.Layer<PreviewAgentActivity, never, never>;
export {};
