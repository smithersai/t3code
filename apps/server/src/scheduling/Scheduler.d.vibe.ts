import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
declare const Scheduler_base: Context.ServiceClass<Scheduler, "t3/scheduling/Scheduler", {
    readonly register: <E, R>(name: string, runDueWork: Effect.Effect<void, E, R>) => Effect.Effect<void, never, R | Scope.Scope>;
}>;
export declare class Scheduler extends Scheduler_base {
}
export declare const layer: Layer.Layer<Scheduler, never, never>;
export {};
