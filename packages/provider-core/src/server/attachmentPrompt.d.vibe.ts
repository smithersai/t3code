import { type ChatAttachment } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
export declare function isProviderNativeImageAttachment(attachment: ChatAttachment): boolean;
export declare const providerMessageTextWithAttachmentPaths: (input: {
    readonly text: string;
    readonly attachments: ReadonlyArray<ChatAttachment>;
    readonly resolveAttachmentPath: (attachment: ChatAttachment) => string | null;
    readonly resolveExtractedTextPath?: ((path: string) => Effect.Effect<string | undefined>) | undefined;
}) => Effect.Effect<string, never, never>;
