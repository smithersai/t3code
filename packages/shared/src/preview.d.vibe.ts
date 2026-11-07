import type { BrowserSearchEngine } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
/** @throws {never} */
export declare function previewPdfAssetUrl(rawUrl: string, httpBaseUrl: string | null): string | null;
/** @throws {never} */
export declare function newPreviewTabId(): string;
export declare const LSOF_LOCAL_HOST_TOKENS: ReadonlySet<string>;
/** @throws {never} */
export declare function isLoopbackHost(host: string): boolean;
declare const PreviewUrlNormalizationError_base: Schema.Class<PreviewUrlNormalizationError, Schema.TaggedStruct<"PreviewUrlNormalizationError", {
    readonly inputLength: Schema.Number;
    readonly reason: Schema.Literals<readonly ["empty", "parse", "unsupported-protocol"]>;
    readonly protocol: Schema.optional<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewUrlNormalizationError extends PreviewUrlNormalizationError_base {
    get message(): string;
}
export declare const isPreviewUrlNormalizationError: <I>(input: I) => input is I & PreviewUrlNormalizationError;
/**
 * Whether a custom search URL is an http(s) URL with `%s` where the query goes.
 * `%s` in the host or credentials is rejected: the query would never reach a
 * search page, and a query with spaces would make the host unreachable.
 * @throws {never}
 */
export declare function isValidSearchUrlTemplate(template: string): boolean;
/**
 * The search URL template for the chosen engine. An unusable custom template
 * falls back to DuckDuckGo so a query typed in the address bar always searches.
 * @throws {never}
 */
export declare function resolveSearchUrlTemplate(settings: {
    readonly browserSearchEngine: BrowserSearchEngine;
    readonly browserCustomSearchUrl: string;
}): string;
/** @throws {never} */
export declare function resolveAddressBarInput(rawInput: string, searchUrlTemplate?: string): string;
/** @throws {never} */
export declare function normalizePreviewUrl(rawUrl: string): string;
export {};
