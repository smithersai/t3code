import type { BrowserImportSourceId, BrowserImportSourceProfile } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { ChildProcessSpawner } from "effect/process";
export { chromiumProcessIsAlive } from "./Sources.vibe.platform.js";
export type BrowserImportEngine = "chromium" | "firefox" | "safari";
export interface BrowserImportPathContext {
    readonly path: Path.Path;
    readonly platform: NodeJS.Platform;
    readonly home: string;
    readonly appData: string | undefined;
    readonly localAppData: string | undefined;
}
export interface BrowserImportSourceDefinition {
    readonly id: BrowserImportSourceId;
    readonly name: string;
    readonly engine: BrowserImportEngine;
    readonly platforms: ReadonlyArray<NodeJS.Platform>;
    /** @throws {never} */
    readonly userDataDirectory: (context: BrowserImportPathContext) => string | undefined;
    /** @throws {never} */
    readonly alternateLinuxRoots?: (context: BrowserImportPathContext) => ReadonlyArray<string>;
    readonly keychainService?: string;
    readonly keychainAccount?: string;
    readonly linuxSecretApplication?: string;
}
export declare const BROWSER_IMPORT_SOURCES: ReadonlyArray<BrowserImportSourceDefinition>;
export declare const resolveCookieDatabase: (definition: BrowserImportSourceDefinition, context: BrowserImportPathContext, profileDirectory: string) => Effect.Effect<string | undefined, never, FileSystem.FileSystem>;
/**
 * Install* sections select defaults, not profiles; only ProfileN blocks describe profiles.
 * @throws {never}
 */
export declare function parseFirefoxProfiles(ini: string, path: Path.Path, root: string): ReadonlyArray<BrowserImportSourceProfile>;
export declare const sourcePathContext: Effect.Effect<{
    path: Path.Path;
    platform: NodeJS.Platform;
    home: string;
    appData: string | undefined;
    localAppData: string | undefined;
}, never, Path.Path>;
/** Keep alternate-root profile paths absolute so cookie reads and locks use the correct installation. */
export declare const listSourceProfiles: (definition: BrowserImportSourceDefinition, context: BrowserImportPathContext) => Effect.Effect<ReadonlyArray<BrowserImportSourceProfile>, never, FileSystem.FileSystem>;
type ProcessLivenessProbe = (pid: number) => Effect.Effect<boolean>;
export declare const chromiumSingletonLockIsHeld: (target: string, currentHost: string, isProcessAlive: ProcessLivenessProbe) => Effect.Effect<boolean, never, never>;
type WindowsLockProbe = (path: string) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
/** Windows Chromium locks cookie databases without sharing instead of creating POSIX SingletonLock symlinks. */
export declare const windowsChromiumCookiesAreHeld: (definition: BrowserImportSourceDefinition, context: BrowserImportPathContext, lockIsHeld?: WindowsLockProbe | undefined) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
export declare const firefoxSymlinkLockIsHeld: (target: string, localAddresses: ReadonlySet<string>, isProcessAlive: ProcessLivenessProbe) => Effect.Effect<boolean, never, never>;
export declare const isSourceRunning: (definition: BrowserImportSourceDefinition, context: BrowserImportPathContext) => Effect.Effect<boolean, never, FileSystem.FileSystem | ChildProcessSpawner.ChildProcessSpawner>;
/** Require a cookie database; installers create empty directories. Safari stat needs no Full Disk Access. */
export declare const isSourceInstalled: (definition: BrowserImportSourceDefinition, context: BrowserImportPathContext) => Effect.Effect<boolean, never, FileSystem.FileSystem>;
