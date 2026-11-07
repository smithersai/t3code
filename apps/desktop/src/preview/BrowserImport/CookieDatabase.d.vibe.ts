import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
export interface ImportedCookie {
    readonly url: string;
    readonly name: string;
    readonly value: string;
    /** Leave host-only cookies undefined; Electron widens any supplied domain and rejects __Host- cookies with one. */
    readonly domain: string | undefined;
    readonly path: string;
    readonly secure: boolean;
    readonly httpOnly: boolean;
    readonly expirationDate: number | undefined;
    readonly sameSite: "unspecified" | "no_restriction" | "lax" | "strict";
}
export interface CookieReadResult {
    readonly cookies: ReadonlyArray<ImportedCookie>;
    readonly undecryptable: number;
    readonly undecryptableHosts: ReadonlyArray<string>;
}
/** @throws {never} */
export declare const cookieScope: (host: string, path: string, secure: boolean) => {
    readonly url: string;
    readonly domain: string | undefined;
};
/** @throws {never} */
export declare const bareHost: (host: string) => string;
/** Copy before reading to avoid live WAL writes and never open the source browser database for writing. */
export declare const snapshotCookieDatabase: (cookiePath: string, tempPrefix?: any) => Effect.Effect<string, import("effect/PlatformError").PlatformError | import("effect/sql/SqlError").SqlError, FileSystem.FileSystem | Path.Path | import("effect/Scope").Scope>;
