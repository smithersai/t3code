import * as Schema from "effect/Schema";
declare const ClerkPublishableKeyDecodeError_base: Schema.Class<ClerkPublishableKeyDecodeError, Schema.TaggedStruct<"ClerkPublishableKeyDecodeError", {
    readonly keyPrefix: Schema.Literals<readonly ["pk_test", "pk_live", "unknown"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ClerkPublishableKeyDecodeError extends ClerkPublishableKeyDecodeError_base {
    get message(): string;
}
declare const ClerkPublishableKeyFrontendApiError_base: Schema.Class<ClerkPublishableKeyFrontendApiError, Schema.TaggedStruct<"ClerkPublishableKeyFrontendApiError", {
    readonly keyPrefix: Schema.Literals<readonly ["pk_test", "pk_live", "unknown"]>;
    readonly frontendApi: Schema.String;
    readonly reason: Schema.Literals<readonly ["empty", "contains-path", "invalid-url"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ClerkPublishableKeyFrontendApiError extends ClerkPublishableKeyFrontendApiError_base {
    get message(): string;
}
/** @throws {never} */
export declare function clerkFrontendApiUrlFromPublishableKey(publishableKey: string): string;
/** @throws {never} */
export declare function clerkFrontendApiHostnameFromPublishableKey(publishableKey: string): string;
/** @throws {never} */
export declare function relayClerkTokenOptions(template: string): {
    readonly template: string;
    readonly skipCache: true;
};
export {};
