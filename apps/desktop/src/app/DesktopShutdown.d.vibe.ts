import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
declare const DesktopShutdown_base: Context.ServiceClass<DesktopShutdown, "@t3tools/desktop/app/DesktopShutdown", {
    readonly request: Effect.Effect<void>;
    readonly awaitRequest: Effect.Effect<void>;
    readonly markComplete: Effect.Effect<void>;
    readonly awaitComplete: Effect.Effect<void>;
    readonly isComplete: Effect.Effect<boolean>;
}>;
export declare class DesktopShutdown extends DesktopShutdown_base {
}
export declare const layer: Layer.Layer<DesktopShutdown, never, never>;
export {};
