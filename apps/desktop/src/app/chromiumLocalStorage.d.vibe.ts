import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
declare const ChromiumLocalStorageReadError_base: Schema.Class<ChromiumLocalStorageReadError, Schema.TaggedStruct<"ChromiumLocalStorageReadError", {
    readonly directory: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ChromiumLocalStorageReadError extends ChromiumLocalStorageReadError_base {
    get message(): string;
}
export declare const readChromiumLocalStorage: (directory: string, origin: string) => Effect.Effect<Map<string, string>, ChromiumLocalStorageReadError, FileSystem.FileSystem | Path.Path>;
export {};
