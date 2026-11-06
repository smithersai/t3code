import * as Schema from "effect/Schema";
declare const OAuthScopeEncodingError_base: Schema.Class<OAuthScopeEncodingError, Schema.TaggedStruct<"OAuthScopeEncodingError", {
    readonly scopes: Schema.$Array<Schema.String>;
    readonly invalidScopes: Schema.$Array<Schema.String>;
    readonly duplicateScopes: Schema.$Array<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class OAuthScopeEncodingError extends OAuthScopeEncodingError_base {
    get message(): string;
}
/** @throws {never} */
export declare function parseOAuthScope(value: string): ReadonlyArray<string> | null;
/** @throws {never} */
export declare function encodeOAuthScope(scopes: ReadonlyArray<string>): string;
/** @throws {never} */
export declare function oauthScopeSetEquals(value: string, expectedScopes: ReadonlyArray<string>): boolean;
/** @throws {never} */
export declare function parseAllowedOAuthScope<Scope extends string>(input: {
    readonly value: string;
    readonly allowedScopes: ReadonlySet<Scope>;
}): ReadonlyArray<Scope> | null;
export {};
