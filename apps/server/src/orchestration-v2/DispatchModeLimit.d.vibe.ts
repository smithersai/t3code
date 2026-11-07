import type { ProviderInteractionMode, RuntimeMode, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import type * as Ref from "effect/Ref";
export interface DispatchModes {
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
}
export interface DispatchModeRefusal extends DispatchModes {
    readonly threadId: ThreadId;
    readonly mode: "runtime" | "interaction";
}
/** Recheck target modes under the command lock; the user can raise them after preflight. */
export interface DispatchModeLimitValue extends DispatchModes {
    readonly refused?: Ref.Ref<DispatchModeRefusal | undefined>;
}
export declare const DispatchModeLimit: Context.Reference<DispatchModeLimitValue | undefined>;
/** @throws {never} */
export declare const exceededDispatchModeLimit: (limit: DispatchModes, modes: DispatchModes) => "runtime" | "interaction" | undefined;
