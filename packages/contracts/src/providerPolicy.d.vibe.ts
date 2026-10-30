import * as Schema from "effect/Schema";
export declare const ProviderApprovalPolicy: Schema.Literals<readonly ["untrusted", "on-failure", "on-request", "never"]>;
export type ProviderApprovalPolicy = typeof ProviderApprovalPolicy.Type;
export declare const ProviderSandboxMode: Schema.Literals<readonly ["read-only", "workspace-write", "danger-full-access"]>;
export type ProviderSandboxMode = typeof ProviderSandboxMode.Type;
export declare const RuntimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
export type RuntimeMode = typeof RuntimeMode.Type;
export declare const DEFAULT_RUNTIME_MODE: RuntimeMode;
export declare const ProviderInteractionMode: Schema.Literals<readonly ["default", "plan"]>;
export type ProviderInteractionMode = typeof ProviderInteractionMode.Type;
export declare const DEFAULT_PROVIDER_INTERACTION_MODE: ProviderInteractionMode;
export declare const ProviderRequestKind: Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
export type ProviderRequestKind = typeof ProviderRequestKind.Type;
export declare const AssistantDeliveryMode: Schema.Literals<readonly ["buffered", "streaming"]>;
export type AssistantDeliveryMode = typeof AssistantDeliveryMode.Type;
export declare const ProviderApprovalDecision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
export type ProviderApprovalDecision = typeof ProviderApprovalDecision.Type;
export declare const ProviderApprovalFullAccessOverride: Schema.Literals<readonly ["ask_rule", "provider_check"]>;
export type ProviderApprovalFullAccessOverride = typeof ProviderApprovalFullAccessOverride.Type;
export declare const ProviderApprovalOption: Schema.Struct<{
    readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProviderApprovalOption = typeof ProviderApprovalOption.Type;
export declare const ProviderUserInputAnswers: Schema.$Record<Schema.String, Schema.Unknown>;
export type ProviderUserInputAnswers = typeof ProviderUserInputAnswers.Type;
export declare const UserInputAttachments: Schema.$Record<Schema.String, Schema.$Array<Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly source: Schema.optional<Schema.Struct<{
        readonly kind: Schema.Literal<"snap-shot">;
        readonly capturedAt: Schema.String;
        readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly format: Schema.Literal<"flat-text">;
            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly truncated: Schema.Boolean;
        }>, Schema.Struct<{
            readonly format: Schema.Literal<"element-tree">;
            readonly coordinateSpace: Schema.Literal<"captured-image">;
            readonly imageSize: Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
            readonly truncated: Schema.Boolean;
            readonly root: Schema.Codec<import("./chatAttachment.js").SnapShotAccessibilityNode, import("./chatAttachment.js").SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"file">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
}>]>>>;
export type UserInputAttachments = typeof UserInputAttachments.Type;
export declare const UserInputAttachmentAnswerPayload: Schema.Struct<{
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly questionTextById: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
    readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
    readonly attachmentsByQuestionId: Schema.$Record<Schema.String, Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
        readonly source: Schema.optional<Schema.Struct<{
            readonly kind: Schema.Literal<"snap-shot">;
            readonly capturedAt: Schema.String;
            readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly format: Schema.Literal<"flat-text">;
                readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly truncated: Schema.Boolean;
            }>, Schema.Struct<{
                readonly format: Schema.Literal<"element-tree">;
                readonly coordinateSpace: Schema.Literal<"captured-image">;
                readonly imageSize: Schema.Struct<{
                    readonly width: Schema.Int;
                    readonly height: Schema.Int;
                }>;
                readonly truncated: Schema.Boolean;
                readonly root: Schema.Codec<import("./chatAttachment.js").SnapShotAccessibilityNode, import("./chatAttachment.js").SnapShotAccessibilityNode, never, never>;
            }>]>>;
            readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
        readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
    }>]>>>;
}>;
export type UserInputAttachmentAnswerPayload = typeof UserInputAttachmentAnswerPayload.Type;
