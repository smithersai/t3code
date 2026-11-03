import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import { type ImportedCookie } from "./CookieDatabase.vibe";
export declare const SafariCookieReadFailure: Schema.Literals<readonly ["needsFullDiskAccess", "readFailed"]>;
export type SafariCookieReadFailure = typeof SafariCookieReadFailure.Type;
declare const SafariCookieReadError_base: Schema.Class<SafariCookieReadError, Schema.TaggedStruct<"SafariCookieReadError", {
    readonly reason: Schema.Literals<readonly ["needsFullDiskAccess", "readFailed"]>;
    readonly cookieDatabasePath: Schema.optional<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class SafariCookieReadError extends SafariCookieReadError_base {
    get message(): string;
}
export declare function parseBinaryCookies(buffer: Buffer): ReadonlyArray<ImportedCookie>;
export declare const isPermissionDenied: (error: PlatformError.PlatformError) => boolean;
/** stat succeeds without Full Disk Access, so presence alone does not prove readable cookies. */
export declare const safariAccessDenied: (cookiePath: string) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
export declare const safariAccessGranted: (cookiePath: string) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
export declare const readSafariCookies: (cookiePath: string) => Effect.Effect<readonly ImportedCookie[], SafariCookieReadError, FileSystem.FileSystem>;
export {};
