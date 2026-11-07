import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as PlatformError from "effect/PlatformError";
/**
 * Atomic writers rename onto this path so a linked file keeps its link. Fails
 * on a cycle, an overly long chain, or an unreadable link rather than handing
 * back a link that a rename would replace.
 */
export declare const resolveSymlinkTarget: (filePath: string) => Effect.Effect<string, PlatformError.PlatformError, FileSystem.FileSystem | Path.Path>;
