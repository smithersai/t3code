import * as Schema from "effect/Schema";
export declare const PROVIDER_SEND_TURN_MAX_INPUT_CHARS = 120000;
export declare const PROVIDER_SEND_TURN_MAX_ATTACHMENTS = 100;
export declare const PROVIDER_SEND_TURN_MAX_IMAGE_BYTES: number;
export declare const PROVIDER_SEND_TURN_MAX_FILE_BYTES: number;
export declare const PROVIDER_SEND_TURN_SUPPORTED_IMAGE_MIME_TYPES: readonly ["image/gif", "image/jpeg", "image/png", "image/webp"];
export declare function isProviderSendTurnSupportedImageMimeType(mimeType: string): boolean;
export declare const ChatAttachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ChatAttachmentId = typeof ChatAttachmentId.Type;
export declare const SNAP_SHOT_ACCESSIBLE_TEXT_MAX_CHARS = 32000;
export declare const SNAP_SHOT_ACCESSIBILITY_MAX_NODES = 10000;
export declare const SNAP_SHOT_ACCESSIBILITY_MAX_SERIALIZED_CHARS = 32000;
declare const SnapShotAccessibilityBounds: Schema.Struct<{
    readonly x: Schema.Int;
    readonly y: Schema.Int;
    readonly width: Schema.Int;
    readonly height: Schema.Int;
}>;
type SnapShotAccessibilityBounds = typeof SnapShotAccessibilityBounds.Type;
declare const SnapShotAccessibilityState: Schema.Struct<{
    readonly active: Schema.optional<Schema.Boolean>;
    readonly busy: Schema.optional<Schema.Boolean>;
    readonly checked: Schema.optional<Schema.Literals<readonly ["on", "off", "mixed"]>>;
    readonly editable: Schema.optional<Schema.Boolean>;
    readonly enabled: Schema.optional<Schema.Boolean>;
    readonly expanded: Schema.optional<Schema.Boolean>;
    readonly focused: Schema.optional<Schema.Boolean>;
    readonly selected: Schema.optional<Schema.Boolean>;
    readonly visible: Schema.optional<Schema.Boolean>;
}>;
type SnapShotAccessibilityState = typeof SnapShotAccessibilityState.Type;
export interface SnapShotAccessibilityNode {
    readonly role: string;
    readonly name?: string;
    readonly value?: string;
    readonly description?: string;
    readonly bounds: typeof SnapShotAccessibilityBounds.Type | null;
    readonly state?: typeof SnapShotAccessibilityState.Type;
    readonly actions?: Array<string>;
    readonly children: Array<SnapShotAccessibilityNode>;
}
export declare const SnapShotAccessibilityNode: Schema.Codec<SnapShotAccessibilityNode>;
export declare const SnapShotAccessibility: Schema.Union<readonly [Schema.Struct<{
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
    readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
}>]>;
export type SnapShotAccessibility = typeof SnapShotAccessibility.Type;
export declare const SnapShotSource: Schema.Struct<{
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
        readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
    }>]>>;
    readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type SnapShotSource = typeof SnapShotSource.Type;
export declare const ChatImageAttachment: Schema.Struct<{
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
            readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type ChatImageAttachment = typeof ChatImageAttachment.Type;
export declare const PastedTextAttachmentSource: Schema.TaggedStruct<"pasted-text", {}>;
export type PastedTextAttachmentSource = typeof PastedTextAttachmentSource.Type;
export declare const ChatFileAttachment: Schema.Struct<{
    readonly type: Schema.Literal<"file">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    /** Keep path-only so agents inspect selectively without consuming the context folding preserves. */
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
}>;
export type ChatFileAttachment = typeof ChatFileAttachment.Type;
/** Accepts unknown attachment types for older readers; malformed known types must fail their own schema. */
export declare const ChatUnknownAttachment: Schema.Struct<{
    readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
}>;
export type ChatUnknownAttachment = typeof ChatUnknownAttachment.Type;
export declare const UploadChatImageAttachment: Schema.Struct<{
    readonly id: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"image">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly dataUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
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
            readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type UploadChatImageAttachment = typeof UploadChatImageAttachment.Type;
export declare const ChatAttachment: Schema.Union<readonly [Schema.Struct<{
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
            readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
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
    /** Keep path-only so agents inspect selectively without consuming the context folding preserves. */
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
}>, Schema.Struct<{
    readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
}>]>;
export type ChatAttachment = typeof ChatAttachment.Type;
export declare function getProviderAttachmentLimitError(attachments: ReadonlyArray<Pick<ChatAttachment, "type" | "mimeType" | "sizeBytes">>): string | undefined;
export declare const UploadChatAttachment: Schema.Union<readonly [Schema.Struct<{
    readonly id: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"image">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly dataUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
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
            readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>]>;
export type UploadChatAttachment = typeof UploadChatAttachment.Type;
export declare const PersistChatAttachmentsInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
    readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"image">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
        readonly dataUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
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
                readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
            }>]>>;
            readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>]>>;
}>;
export type PersistChatAttachmentsInput = typeof PersistChatAttachmentsInput.Type;
export declare const PersistChatAttachmentsResult: Schema.Struct<{
    readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
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
                readonly root: Schema.Codec<SnapShotAccessibilityNode, SnapShotAccessibilityNode, never, never>;
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
        /** Keep path-only so agents inspect selectively without consuming the context folding preserves. */
        readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
    }>, Schema.Struct<{
        readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
    }>]>>;
}>;
export type PersistChatAttachmentsResult = typeof PersistChatAttachmentsResult.Type;
declare const PersistChatAttachmentsError_base: Schema.Class<PersistChatAttachmentsError, Schema.TaggedStruct<"PersistChatAttachmentsError", {
    readonly message: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PersistChatAttachmentsError extends PersistChatAttachmentsError_base {
}
export {};
