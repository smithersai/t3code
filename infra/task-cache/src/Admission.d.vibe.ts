import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
declare const AdmissionRejected_base: Schema.Class<AdmissionRejected, Schema.TaggedStruct<"AdmissionRejected", {}>, import("effect/Cause").YieldableError>;
export declare class AdmissionRejected extends AdmissionRejected_base {
}
declare const Admission_base: Context.ServiceClass<Admission, "@t3tools/task-cache/Admission", {
    readonly withPermit: <A, E, R>(store: boolean, task: Effect.Effect<A, E, R>) => Effect.Effect<A, E | AdmissionRejected, R>;
}>;
export declare class Admission extends Admission_base {
}
export declare const layer: Layer.Layer<Admission, never, never>;
export {};
