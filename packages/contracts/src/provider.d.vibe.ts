import * as Schema from "effect/Schema";
export declare const ProviderSession: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly status: Schema.Literals<readonly ["connecting", "ready", "running", "error", "closed"]>;
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly resumeCursor: Schema.optional<Schema.Unknown>;
    readonly activeTurnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly lastError: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProviderSession = typeof ProviderSession.Type;
export declare const ProviderSessionStartInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly provider: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>;
    readonly resumeCursor: Schema.optional<Schema.Unknown>;
    readonly approvalPolicy: Schema.optional<Schema.Literals<readonly ["untrusted", "on-failure", "on-request", "never"]>>;
    readonly sandboxMode: Schema.optional<Schema.Literals<readonly ["read-only", "workspace-write", "danger-full-access"]>>;
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
}>;
export type ProviderSessionStartInput = typeof ProviderSessionStartInput.Type;
export declare const ProviderSendTurnInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    /** Internal recovery: permits empty turns only for adapters supporting promptless continuation. */
    readonly continuation: Schema.optional<Schema.Boolean>;
    readonly input: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly attachments: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
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
    }>, Schema.Struct<{
        readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
    }>]>>>;
    readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>;
    readonly interactionMode: Schema.optional<Schema.Literals<readonly ["default", "plan"]>>;
}>;
export type ProviderSendTurnInput = typeof ProviderSendTurnInput.Type;
export declare const ProviderTurnStartResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly turnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">;
    readonly resumeCursor: Schema.optional<Schema.Unknown>;
}>;
export type ProviderTurnStartResult = typeof ProviderTurnStartResult.Type;
export declare const ProviderInterruptTurnInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
}>;
export type ProviderInterruptTurnInput = typeof ProviderInterruptTurnInput.Type;
export declare const ProviderStopSessionInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type ProviderStopSessionInput = typeof ProviderStopSessionInput.Type;
export declare const ProviderRespondToRequestInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ApprovalRequestId">;
    readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
}>;
export type ProviderRespondToRequestInput = typeof ProviderRespondToRequestInput.Type;
export declare const ProviderRespondToUserInputInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ApprovalRequestId">;
    readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
    readonly attachmentsByQuestionId: Schema.optional<Schema.$Record<Schema.String, Schema.$Array<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>>>;
}>;
export type ProviderRespondToUserInputInput = typeof ProviderRespondToUserInputInput.Type;
export declare const ProviderUploadFeedbackInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProviderUploadFeedbackInput = typeof ProviderUploadFeedbackInput.Type;
export declare const ProviderUploadFeedbackResult: Schema.Struct<{
    readonly feedbackId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProviderUploadFeedbackResult = typeof ProviderUploadFeedbackResult.Type;
declare const ProviderUploadFeedbackError_base: Schema.Class<ProviderUploadFeedbackError, Schema.TaggedStruct<"ProviderUploadFeedbackError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderUploadFeedbackError extends ProviderUploadFeedbackError_base {
    get message(): string;
}
export declare const ProviderEvent: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly kind: Schema.Literals<readonly ["session", "notification", "request", "error"]>;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly method: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ApprovalRequestId">>;
    readonly requestKind: Schema.optional<Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>>;
    readonly textDelta: Schema.optional<Schema.String>;
    readonly payload: Schema.optional<Schema.Unknown>;
}>;
export type ProviderEvent = typeof ProviderEvent.Type;
export {};
