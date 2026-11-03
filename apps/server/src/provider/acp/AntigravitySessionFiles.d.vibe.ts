import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
/** Call after the process closes. The unique temporary cwd proves which session we own. */
export declare const removeAntigravitySessionFiles: (input: {
    readonly profileDirectory: string;
    readonly sessionId: string | undefined;
    readonly cwd: string;
}) => Effect.Effect<void, never, FileSystem.FileSystem | Path.Path>;
/** Sweep only private runtimes before launch; Windows does not protect live extracted data files from deletion. */
export declare const removeAntigravityRuntimeTempDirs: (tempDirectory: string) => Effect.Effect<void, never, FileSystem.FileSystem>;
