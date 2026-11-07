import type { BrowserImportInput, BrowserImportResult, BrowserImportSource } from "@t3tools/contracts";
import * as Context from "effect/Context";
import type { Session } from "electron";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { ChildProcessSpawner } from "effect/process";
import * as BrowserSession from "../BrowserSession.vibe";
import type { CookieReadResult } from "./CookieDatabase.vibe";
declare const BrowserImportFailedError_base: Schema.Class<BrowserImportFailedError, Schema.TaggedStruct<"BrowserImportFailedError", {
    readonly sourceId: Schema.String;
    readonly reason: Schema.Literals<readonly ["notInstalled", "needsKeychainApproval", "keychainItemMissing", "needsFullDiskAccess", "browserRunning", "unsupportedPlatform", "keychainUnavailable", "unknownSource", "unknownSourceProfile", "sessionUnavailable", "profileNotSaved", "profileLimitReached", "readFailed"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserImportFailedError extends BrowserImportFailedError_base {
    get message(): string;
}
declare const BrowserCookieWriteError_base: Schema.Class<BrowserCookieWriteError, Schema.TaggedStruct<"BrowserCookieWriteError", {
    readonly url: Schema.String;
    readonly name: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserCookieWriteError extends BrowserCookieWriteError_base {
    get message(): string;
}
declare const BrowserImport_base: Context.ServiceClass<BrowserImport, "@t3tools/desktop/preview/BrowserImport/BrowserImport", {
    readonly listSources: Effect.Effect<readonly BrowserImportSource[]>;
    readonly importCookies: (input: {
        readonly input: BrowserImportInput;
        readonly scope: string;
        readonly persistent: boolean;
        readonly namespace?: BrowserSession.BrowserSessionPartitionNamespace;
    }) => Effect.Effect<BrowserImportResult, BrowserImportFailedError>;
}>;
export declare class BrowserImport extends BrowserImport_base {
}
export declare const writeCookies: (session: {
    readonly cookies: Pick<Session["cookies"], "set" | "flushStore">;
}, read: CookieReadResult) => Effect.Effect<{
    imported: number;
    skipped: number;
    skippedDomains: string[];
}, never, never>;
/** @public */
export declare const make: Effect.Effect<{
    readonly listSources: Effect.Effect<ReadonlyArray<BrowserImportSource>>;
    readonly importCookies: (input: {
        readonly input: BrowserImportInput;
        readonly scope: string;
        readonly persistent: boolean;
        readonly namespace?: BrowserSession.BrowserSessionPartitionNamespace;
    }) => Effect.Effect<BrowserImportResult, BrowserImportFailedError>;
}, never, BrowserSession.BrowserSession | ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<BrowserImport, never, BrowserSession.BrowserSession | ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export {};
