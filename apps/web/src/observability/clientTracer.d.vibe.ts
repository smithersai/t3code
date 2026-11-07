import * as Layer from "effect/Layer";
import * as Tracer from "effect/Tracer";
/** `service.instance.id` for this page load, shared by every resource the UI exports. */
export declare const serviceInstanceId: string;
export declare function setDelegate(next: Tracer.Tracer | null): void;
export declare function hasDelegate(): boolean;
export declare const layer: Layer.Layer<never, never, never>;
