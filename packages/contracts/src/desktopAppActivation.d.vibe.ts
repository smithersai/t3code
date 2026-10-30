import * as Schema from "effect/Schema";
export declare const DESKTOP_APP_ACTIVATION_PROTOCOL_VERSION: 1;
export declare const DesktopAppActivationPlatform: Schema.Literals<readonly ["darwin", "linux", "win32"]>;
export type DesktopAppActivationPlatform = typeof DesktopAppActivationPlatform.Type;
export declare const DesktopAppActivationRequest: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"open-workspace">;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["darwin", "linux", "win32"]>;
}>;
export type DesktopAppActivationRequest = typeof DesktopAppActivationRequest.Type;
export declare const DesktopAppActivationErrorCode: Schema.Literals<readonly ["invalid-request", "renderer-unavailable", "environment-unavailable", "platform-mismatch", "project-create-failed", "thread-open-failed", "request-timeout", "internal-error"]>;
export type DesktopAppActivationErrorCode = typeof DesktopAppActivationErrorCode.Type;
export declare const DesktopAppActivationSuccess: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly ok: Schema.Literal<true>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type DesktopAppActivationSuccess = typeof DesktopAppActivationSuccess.Type;
export declare const DesktopAppActivationFailure: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly ok: Schema.Literal<false>;
    readonly code: Schema.Literals<readonly ["invalid-request", "renderer-unavailable", "environment-unavailable", "platform-mismatch", "project-create-failed", "thread-open-failed", "request-timeout", "internal-error"]>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DesktopAppActivationFailure = typeof DesktopAppActivationFailure.Type;
export declare const DesktopAppActivationResponse: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly ok: Schema.Literal<true>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly ok: Schema.Literal<false>;
    readonly code: Schema.Literals<readonly ["invalid-request", "renderer-unavailable", "environment-unavailable", "platform-mismatch", "project-create-failed", "thread-open-failed", "request-timeout", "internal-error"]>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type DesktopAppActivationResponse = typeof DesktopAppActivationResponse.Type;
