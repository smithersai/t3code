import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as PlatformError from "effect/PlatformError";
import { SafariCookieReadError } from "./SafariCookies.vibe.throwing.js";
export { SafariCookieReadError, SafariCookieReadFailure, parseBinaryCookies } from "./SafariCookies.vibe.throwing.js";
export declare const isPermissionDenied: (error: PlatformError.PlatformError) => boolean;
/** stat succeeds without Full Disk Access, so presence alone does not prove readable cookies. */
export declare const safariAccessDenied: (cookiePath: string) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
export declare const safariAccessGranted: (cookiePath: string) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
export declare const readSafariCookies: (cookiePath: string) => Effect.Effect<readonly import("./CookieDatabase.vibe").ImportedCookie[], SafariCookieReadError, FileSystem.FileSystem>;
