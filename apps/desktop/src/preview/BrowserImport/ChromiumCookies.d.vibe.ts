import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import { ChildProcessSpawner } from "effect/process";
import { type CookieReadResult } from "./CookieDatabase.vibe";
export { decryptChromiumValue, readChromiumCookieDatabase } from "./ChromiumCookies.vibe.platform.js";
export declare const ChromiumCookieReadReason: Schema.Literals<readonly ["needsKeychainApproval", "keychainItemMissing", "keychainUnavailable", "unsupportedPlatform", "readFailed", "browserRunning"]>;
export type ChromiumCookieReadReason = typeof ChromiumCookieReadReason.Type;
declare const ChromiumCookieReadError_base: Schema.Class<ChromiumCookieReadError, Schema.TaggedStruct<"ChromiumCookieReadError", {
    readonly reason: Schema.Literals<readonly ["needsKeychainApproval", "keychainItemMissing", "keychainUnavailable", "unsupportedPlatform", "readFailed", "browserRunning"]>;
    readonly cookieDatabasePath: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ChromiumCookieReadError extends ChromiumCookieReadError_base {
    get message(): string;
}
export interface ChromiumCookieSource {
    readonly cookieDatabasePath: string;
    readonly keychainService: string | undefined;
    readonly keychainAccount: string | undefined;
    readonly linuxSecretApplication: string | undefined;
    readonly windowsLocalStatePath?: string;
    readonly platform: NodeJS.Platform;
}
export declare const readChromiumCookies: (source: ChromiumCookieSource) => Effect.Effect<CookieReadResult, ChromiumCookieReadError, FileSystem.FileSystem | Path.Path | Scope.Scope | ChildProcessSpawner.ChildProcessSpawner>;
