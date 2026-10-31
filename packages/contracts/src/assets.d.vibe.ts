import * as Schema from "effect/Schema";
/**
 * The wire tag of a source control host's credentialed media. It names GitHub because GitHub had
 * it first, and servers and clients of different releases must keep understanding each other.
 */
export declare const SOURCE_CONTROL_MEDIA_ASSET: "github-media";
export declare const AssetResource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.TaggedStruct<"media-file", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
}>, Schema.TaggedStruct<"draft-workspace-file", {
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.TaggedStruct<"attachment", {
    readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Defaults to download; viewers may request inline after checking the type is safe. */
    readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
    readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
}>, Schema.TaggedStruct<"tool-output-image", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly index: Schema.Int;
}>, Schema.TaggedStruct<"project-favicon", {
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>, Schema.TaggedStruct<"native-app-icon", {
    readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
        readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"display-name", {
        readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>, Schema.TaggedStruct<"github-media", {
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type AssetResource = typeof AssetResource.Type;
export declare const AssetCreateUrlInput: Schema.Struct<{
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>;
export type AssetCreateUrlInput = typeof AssetCreateUrlInput.Type;
export declare const AssetImageDimensions: Schema.Struct<{
    readonly width: Schema.Int;
    readonly height: Schema.Int;
}>;
export type AssetImageDimensions = typeof AssetImageDimensions.Type;
export declare const AssetCreateUrlResult: Schema.Struct<{
    readonly relativeUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.Number;
    readonly sourcePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly imageDimensions: Schema.optional<Schema.Struct<{
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>>;
    /** Changes only when the file's contents or identity change, unlike `relativeUrl`, which is re-signed on every mint. */
    readonly fileRevision: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AssetCreateUrlResult = typeof AssetCreateUrlResult.Type;
export declare const ATTACHMENT_UPLOAD_URL_TTL_MS: number;
export declare const AttachmentCreateUploadUrlInput: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.optionalKey<Schema.Literal<"image">>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.Literals<readonly ["image/gif", "image/jpeg", "image/png", "image/webp"]>;
    readonly sizeBytes: Schema.Int;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"file">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
}>]>;
export type AttachmentCreateUploadUrlInput = typeof AttachmentCreateUploadUrlInput.Type;
export declare const AttachmentCreateUploadUrlResult: Schema.Struct<{
    readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly relativeUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.Number;
}>;
export type AttachmentCreateUploadUrlResult = typeof AttachmentCreateUploadUrlResult.Type;
export declare const AttachmentDeleteInput: Schema.Struct<{
    readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AttachmentDeleteInput = typeof AttachmentDeleteInput.Type;
declare const AttachmentUploadSigningKeyError_base: Schema.Class<AttachmentUploadSigningKeyError, Schema.TaggedStruct<"AttachmentUploadSigningKeyError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AttachmentUploadSigningKeyError extends AttachmentUploadSigningKeyError_base {
    get message(): string;
}
declare const AssetWorkspaceContextNotFoundError_base: Schema.Class<AssetWorkspaceContextNotFoundError, Schema.TaggedStruct<"AssetWorkspaceContextNotFoundError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceContextNotFoundError extends AssetWorkspaceContextNotFoundError_base {
    get message(): string;
}
declare const AssetWorkspaceContextResolutionError_base: Schema.Class<AssetWorkspaceContextResolutionError, Schema.TaggedStruct<"AssetWorkspaceContextResolutionError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceContextResolutionError extends AssetWorkspaceContextResolutionError_base {
    get message(): string;
}
declare const AssetWorkspaceRootNormalizationError_base: Schema.Class<AssetWorkspaceRootNormalizationError, Schema.TaggedStruct<"AssetWorkspaceRootNormalizationError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceRootNormalizationError extends AssetWorkspaceRootNormalizationError_base {
    get message(): string;
}
declare const AssetWorkspacePathValidationError_base: Schema.Class<AssetWorkspacePathValidationError, Schema.TaggedStruct<"AssetWorkspacePathValidationError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspacePathValidationError extends AssetWorkspacePathValidationError_base {
    get message(): string;
}
declare const AssetPreviewTypeValidationError_base: Schema.Class<AssetPreviewTypeValidationError, Schema.TaggedStruct<"AssetPreviewTypeValidationError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>, import("effect/Cause").YieldableError>;
export declare class AssetPreviewTypeValidationError extends AssetPreviewTypeValidationError_base {
    get message(): string;
}
declare const AssetWorkspaceAssetInspectionError_base: Schema.Class<AssetWorkspaceAssetInspectionError, Schema.TaggedStruct<"AssetWorkspaceAssetInspectionError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceAssetInspectionError extends AssetWorkspaceAssetInspectionError_base {
    get message(): string;
}
declare const AssetWorkspaceAssetNotFoundError_base: Schema.Class<AssetWorkspaceAssetNotFoundError, Schema.TaggedStruct<"AssetWorkspaceAssetNotFoundError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly checkedPath: Schema.optionalKey<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceAssetNotFoundError extends AssetWorkspaceAssetNotFoundError_base {
    get message(): string;
}
declare const AssetWorkspaceResolutionError_base: Schema.Class<AssetWorkspaceResolutionError, Schema.TaggedStruct<"AssetWorkspaceResolutionError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetWorkspaceResolutionError extends AssetWorkspaceResolutionError_base {
    get message(): string;
}
declare const AssetAttachmentNotFoundError_base: Schema.Class<AssetAttachmentNotFoundError, Schema.TaggedStruct<"AssetAttachmentNotFoundError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>, import("effect/Cause").YieldableError>;
export declare class AssetAttachmentNotFoundError extends AssetAttachmentNotFoundError_base {
    get message(): string;
}
declare const AssetProjectFaviconResolutionError_base: Schema.Class<AssetProjectFaviconResolutionError, Schema.TaggedStruct<"AssetProjectFaviconResolutionError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetProjectFaviconResolutionError extends AssetProjectFaviconResolutionError_base {
    get message(): string;
}
declare const AssetProjectFaviconInspectionError_base: Schema.Class<AssetProjectFaviconInspectionError, Schema.TaggedStruct<"AssetProjectFaviconInspectionError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetProjectFaviconInspectionError extends AssetProjectFaviconInspectionError_base {
    get message(): string;
}
declare const AssetProjectFaviconNotFoundError_base: Schema.Class<AssetProjectFaviconNotFoundError, Schema.TaggedStruct<"AssetProjectFaviconNotFoundError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
}>, import("effect/Cause").YieldableError>;
export declare class AssetProjectFaviconNotFoundError extends AssetProjectFaviconNotFoundError_base {
    get message(): string;
}
declare const AssetSigningKeyLoadError_base: Schema.Class<AssetSigningKeyLoadError, Schema.TaggedStruct<"AssetSigningKeyLoadError", {
    readonly resource: Schema.Union<readonly [Schema.TaggedStruct<"workspace-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"media-file", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly disposition: Schema.optionalKey<Schema.Literal<"attachment">>;
    }>, Schema.TaggedStruct<"draft-workspace-file", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"attachment", {
        readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Defaults to download; viewers may request inline after checking the type is safe. */
        readonly disposition: Schema.optionalKey<Schema.Literals<readonly ["inline", "attachment"]>>;
        readonly renderIntent: Schema.optionalKey<Schema.Literal<"mcp-app">>;
    }>, Schema.TaggedStruct<"tool-output-image", {
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly index: Schema.Int;
    }>, Schema.TaggedStruct<"project-favicon", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.TaggedStruct<"native-app-icon", {
        readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
            readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.TaggedStruct<"display-name", {
            readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
    }>, Schema.TaggedStruct<"github-media", {
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AssetSigningKeyLoadError extends AssetSigningKeyLoadError_base {
    get message(): string;
}
declare const AssetSourceControlMediaUrlValidationError_base: Schema.Class<AssetSourceControlMediaUrlValidationError, Schema.TaggedStruct<"AssetGitHubMediaUrlValidationError", {}>, import("effect/Cause").YieldableError>;
export declare class AssetSourceControlMediaUrlValidationError extends AssetSourceControlMediaUrlValidationError_base {
    get message(): string;
}
export declare const AssetAccessError: Schema.Union<readonly [typeof AssetWorkspaceContextNotFoundError, typeof AssetWorkspaceContextResolutionError, typeof AssetWorkspaceRootNormalizationError, typeof AssetWorkspacePathValidationError, typeof AssetPreviewTypeValidationError, typeof AssetWorkspaceAssetInspectionError, typeof AssetWorkspaceAssetNotFoundError, typeof AssetWorkspaceResolutionError, typeof AssetAttachmentNotFoundError, typeof AssetProjectFaviconResolutionError, typeof AssetProjectFaviconInspectionError, typeof AssetProjectFaviconNotFoundError, typeof AssetSourceControlMediaUrlValidationError, typeof AssetSigningKeyLoadError]>;
export type AssetAccessError = typeof AssetAccessError.Type;
export {};
