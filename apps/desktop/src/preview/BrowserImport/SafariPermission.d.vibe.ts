import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
export declare const safariPermissionCheck: Effect.Effect<
/** @throws {never} */
() => Promise<boolean>, never, FileSystem.FileSystem | import("effect/Path").Path>;
