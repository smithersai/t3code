import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
declare const FirefoxCookieReadError_base: Schema.Class<FirefoxCookieReadError, Schema.TaggedStruct<"FirefoxCookieReadError", {
    readonly cookieDatabasePath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class FirefoxCookieReadError extends FirefoxCookieReadError_base {
    get message(): string;
}
export declare const readFirefoxCookies: (cookieDatabasePath: string) => Effect.Effect<{
    url: string;
    name: string;
    value: string;
    domain: string | undefined;
    path: string;
    secure: boolean;
    httpOnly: boolean;
    expirationDate: number | undefined;
    sameSite: "lax" | "no_restriction" | "strict" | "unspecified";
}[], FirefoxCookieReadError, import("effect/FileSystem").FileSystem | import("effect/Path").Path | import("effect/Scope").Scope>;
export {};
