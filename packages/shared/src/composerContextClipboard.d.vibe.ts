import { COMPOSER_CONTEXT_CLIPBOARD_MIME, ComposerContextClipboardFragment } from "@t3tools/contracts";
export { COMPOSER_CONTEXT_CLIPBOARD_MIME };
export declare function encodeComposerContextFragment(fragment: ComposerContextClipboardFragment): string | null;
export declare function encodeComposerContextClipboardHtml(text: string, fragment: string, html?: string): string;
export declare function decodeComposerContextClipboardHtml(html: string | null | undefined): ComposerContextClipboardFragment | null;
export declare function decodeComposerContextFragment(raw: string | null | undefined): ComposerContextClipboardFragment | null;
