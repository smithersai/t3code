import * as Schema from "effect/Schema";
export declare const BROWSER_PROFILE_NAME_MAX_LENGTH = 48;
export declare const BROWSER_PROFILE_MAX_COUNT = 24;
/** Control characters could collide with client cache-key delimiters and select another partition. */
export declare const BrowserProfileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type BrowserProfileId = typeof BrowserProfileId.Type;
export declare const BrowserProfileName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const BrowserProfileKind: Schema.Literals<readonly ["persistent", "incognito"]>;
export type BrowserProfileKind = typeof BrowserProfileKind.Type;
export declare const BrowserProfile: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["persistent", "incognito"]>;
}>;
export type BrowserProfile = typeof BrowserProfile.Type;
export declare const DEFAULT_BROWSER_PROFILE_ID: BrowserProfileId;
export declare const INCOGNITO_BROWSER_PROFILE_ID: BrowserProfileId;
export declare const BUILT_IN_BROWSER_PROFILES: ReadonlyArray<BrowserProfile>;
export declare function isBuiltInBrowserProfileId(id: string): boolean;
/** Deduplicates ids sharing a partition; only the built-in incognito id is actually ephemeral. */
export declare function resolveBrowserProfiles(userProfiles: ReadonlyArray<BrowserProfile>): ReadonlyArray<BrowserProfile>;
export declare function findBrowserProfile(profiles: ReadonlyArray<BrowserProfile>, id: string | undefined): BrowserProfile | undefined;
