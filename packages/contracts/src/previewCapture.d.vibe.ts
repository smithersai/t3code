import * as Schema from "effect/Schema";
declare const PreviewCaptureFailure_base: Schema.Class<PreviewCaptureFailure, Schema.TaggedStruct<"PreviewCaptureFailure", {
    readonly reason: Schema.Literals<readonly ["renderer-unavailable", "capture-unavailable", "capture-timeout", "recording-conflict", "capture-failed"]>;
    readonly stage: Schema.Literals<readonly ["screenshot", "capture-page", "recording-start"]>;
}>, import("effect/Cause").YieldableError>;
/** A plain encoded failure crosses IPC and contextBridge without an arbitrary Error or stack. */
export declare class PreviewCaptureFailure extends PreviewCaptureFailure_base {
    get message(): string;
}
export type PreviewCaptureFailureEncoded = Schema.Codec.Encoded<typeof PreviewCaptureFailure>;
export {};
