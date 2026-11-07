import * as Schema from "effect/Schema";
declare const NativeViewResolutionError_base: Schema.Class<NativeViewResolutionError, Schema.TaggedStruct<"NativeViewResolutionError", {
    readonly nativeModuleName: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class NativeViewResolutionError extends NativeViewResolutionError_base {
    get message(): string;
}
export {};
