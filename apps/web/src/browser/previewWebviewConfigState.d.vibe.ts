import type { DesktopPreviewWebviewConfig, EnvironmentId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const PreviewWebviewBridgeUnavailableError_base: Schema.Class<PreviewWebviewBridgeUnavailableError, Schema.TaggedStruct<"PreviewWebviewBridgeUnavailableError", {
    readonly environmentId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewWebviewBridgeUnavailableError extends PreviewWebviewBridgeUnavailableError_base {
    get message(): string;
}
declare const PreviewWebviewConfigLoadError_base: Schema.Class<PreviewWebviewConfigLoadError, Schema.TaggedStruct<"PreviewWebviewConfigLoadError", {
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewWebviewConfigLoadError extends PreviewWebviewConfigLoadError_base {
    get message(): string;
}
export declare const PreviewWebviewConfigError: Schema.Union<readonly [typeof PreviewWebviewBridgeUnavailableError, typeof PreviewWebviewConfigLoadError]>;
export type PreviewWebviewConfigError = typeof PreviewWebviewConfigError.Type;
export declare function usePreviewWebviewConfig(environmentId: EnvironmentId, profileId?: string): DesktopPreviewWebviewConfig | null;
export {};
