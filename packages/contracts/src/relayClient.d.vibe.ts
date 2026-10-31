import * as Schema from "effect/Schema";
export declare const RelayClientStatusSchema: Schema.Union<readonly [Schema.Struct<{
    readonly status: Schema.Literal<"available">;
    readonly executablePath: Schema.String;
    readonly source: Schema.Literals<readonly ["override", "managed", "path"]>;
    readonly version: Schema.String;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"missing">;
    readonly version: Schema.String;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"unsupported">;
    readonly platform: Schema.String;
    readonly arch: Schema.String;
    readonly version: Schema.String;
}>]>;
export type RelayClientStatus = typeof RelayClientStatusSchema.Type;
export declare const RelayClientInstallProgressStageSchema: Schema.Literals<readonly ["checking", "waiting_for_lock", "downloading", "verifying", "installing", "validating", "activating"]>;
export type RelayClientInstallProgressStage = typeof RelayClientInstallProgressStageSchema.Type;
export declare const RelayClientInstallProgressEventSchema: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"progress">;
    readonly stage: Schema.Literals<readonly ["checking", "waiting_for_lock", "downloading", "verifying", "installing", "validating", "activating"]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"complete">;
    readonly status: Schema.Union<readonly [Schema.Struct<{
        readonly status: Schema.Literal<"available">;
        readonly executablePath: Schema.String;
        readonly source: Schema.Literals<readonly ["override", "managed", "path"]>;
        readonly version: Schema.String;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"missing">;
        readonly version: Schema.String;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"unsupported">;
        readonly platform: Schema.String;
        readonly arch: Schema.String;
        readonly version: Schema.String;
    }>]>;
}>]>;
export type RelayClientInstallProgressEvent = typeof RelayClientInstallProgressEventSchema.Type;
export declare const RelayClientInstallFailureReasonSchema: Schema.Literals<readonly ["download_failed", "invalid_checksum", "install_locked", "override_missing", "unsupported_platform", "validation_failed", "write_failed"]>;
export type RelayClientInstallFailureReason = typeof RelayClientInstallFailureReasonSchema.Type;
declare const RelayClientInstallFailedError_base: Schema.Class<RelayClientInstallFailedError, Schema.TaggedStruct<"RelayClientInstallFailedError", {
    readonly reason: Schema.Literals<readonly ["download_failed", "invalid_checksum", "install_locked", "override_missing", "unsupported_platform", "validation_failed", "write_failed"]>;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class RelayClientInstallFailedError extends RelayClientInstallFailedError_base {
}
export {};
