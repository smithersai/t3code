import * as Schema from "effect/Schema";
/**
 * A guest share lets one unauthenticated browser watch a thread over T3 Connect and propose
 * messages the owner must send or dismiss. The thread projection holds this public state; the
 * credentials are derived from the share id with a server key and never stored.
 */
export declare const GUEST_SHARE_TTL_MS: number;
export declare const GUEST_MESSAGE_MAX_LENGTH = 4000;
export declare const GUEST_NAME_MAX_LENGTH = 40;
export declare const GUEST_PENDING_MESSAGE_LIMIT = 3;
/** Resolved messages kept so the guest can see what happened to what they sent. */
export declare const GUEST_RESOLVED_MESSAGE_LIMIT = 20;
/** Files a guest can attach to one message, and their total size. */
export declare const GUEST_MESSAGE_MAX_ATTACHMENTS = 4;
export declare const GUEST_MESSAGE_MAX_ATTACHMENT_BYTES: number;
/** Total size of the files in a share's waiting messages, so a guest cannot fill the disk. */
export declare const GUEST_PENDING_ATTACHMENT_BYTES_LIMIT: number;
export declare const ThreadGuestMessageStatus: Schema.Literals<readonly ["pending", "sent", "dismissed"]>;
export type ThreadGuestMessageStatus = typeof ThreadGuestMessageStatus.Type;
export declare const ThreadGuestMessage: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
    readonly text: Schema.String;
    readonly status: Schema.Literals<readonly ["pending", "sent", "dismissed"]>;
    readonly submittedAt: Schema.String;
    /** The thread's attachments, deleted if the message is dismissed. Absent on older messages. */
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
}>;
export type ThreadGuestMessage = typeof ThreadGuestMessage.Type;
export declare const ThreadGuestShare: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">;
    /** The T3 Connect tunnel hostname the link points at. Guest routes require it to still serve. */
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly expiresAt: Schema.String;
    /** Set once, when the guest redeems the link. */
    readonly guestName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly messages: Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
        readonly text: Schema.String;
        readonly status: Schema.Literals<readonly ["pending", "sent", "dismissed"]>;
        readonly submittedAt: Schema.String;
        /** The thread's attachments, deleted if the message is dismissed. Absent on older messages. */
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
    }>>;
}>;
export type ThreadGuestShare = typeof ThreadGuestShare.Type;
export declare const pendingGuestMessageCount: (share: ThreadGuestShare | null | undefined) => number;
export declare const GuestShareCreateInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type GuestShareCreateInput = typeof GuestShareCreateInput.Type;
export declare const GuestShareCreateResult: Schema.Struct<{
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly share: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">;
        /** The T3 Connect tunnel hostname the link points at. Guest routes require it to still serve. */
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly createdAt: Schema.String;
        readonly expiresAt: Schema.String;
        /** Set once, when the guest redeems the link. */
        readonly guestName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messages: Schema.$Array<Schema.Struct<{
            readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
            readonly text: Schema.String;
            readonly status: Schema.Literals<readonly ["pending", "sent", "dismissed"]>;
            readonly submittedAt: Schema.String;
            /** The thread's attachments, deleted if the message is dismissed. Absent on older messages. */
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
        }>>;
    }>;
}>;
export type GuestShareCreateResult = typeof GuestShareCreateResult.Type;
declare const GuestShareCreateError_base: Schema.Class<GuestShareCreateError, Schema.TaggedStruct<"GuestShareCreateError", {
    readonly reason: Schema.Literals<readonly ["disabled", "connect_unavailable", "thread_unavailable", "read_failed", "changed"]>;
}>, import("effect/Cause").YieldableError>;
export declare class GuestShareCreateError extends GuestShareCreateError_base {
    get message(): string;
}
export declare const GuestRedeemRequest: Schema.Struct<{
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type GuestRedeemRequest = typeof GuestRedeemRequest.Type;
/**
 * The fields of a guest message. The page posts them as multipart form data, with each file as a
 * `file` part; text can be empty when files are attached.
 */
export declare const GuestSubmitRequest: Schema.Struct<{
    /** The share the page shows, so a message from a page for a replaced link is refused instead
        of reaching the new one. */
    readonly shareId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">;
    readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type GuestSubmitRequest = typeof GuestSubmitRequest.Type;
export declare const GUEST_ROUTE_PREFIX = "/api/guest";
/** The guest page and guest routes name the share they mean with this query parameter. */
export declare const GUEST_SHARE_PARAM = "share";
/**
 * One session cookie per share, so a guest keeps every link they joined on a host, and a page
 * for one share never acts with another share's session.
 */
export declare const guestSessionCookieName: (shareId: string) => string;
/** Serves one HTML render in the shared thread: `?share=<share id>&item=<turn item id>`. */
export declare const GUEST_RENDER_ROUTE = "/api/guest/render";
/** One item of the shared thread, as an expanded row loads it: `?share=<share id>&item=<id>`. */
export declare const GUEST_ITEM_ROUTE = "/api/guest/item";
/** Server-sent output frames of one command in the shared thread: `?share=<share id>&item=<id>`. */
export declare const GUEST_COMMAND_OUTPUT_ROUTE = "/api/guest/command-output";
/**
 * A file in the shared thread or a guest's waiting message: `?share=<share id>&id=<attachment id>`.
 * Images load inline; other files download.
 */
export declare const GUEST_ATTACHMENT_ROUTE = "/api/guest/attachment";
export {};
