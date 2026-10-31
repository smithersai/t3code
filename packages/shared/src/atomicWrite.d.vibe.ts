import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type * as PlatformError from "effect/PlatformError";
/** Windows open-file locks block renames; the same codes can mean permanent denial, so bound retries. */
export declare const isWindowsRenameLock: (error: PlatformError.PlatformError) => boolean;
/** Resolves symlink targets before renaming so writes preserve the link. */
export declare const writeFileStringAtomically: (input: {
    readonly filePath: string;
    readonly contents: string;
}) => Effect.Effect<void, PlatformError.PlatformError, FileSystem.FileSystem | Path.Path>;
