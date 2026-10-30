/** Worktrees use isolated .t3 state; ambient T3CODE_HOME could otherwise select the live userdata database. */
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
export declare const resolveGitWorktreePath: (cwd: string) => Effect.Effect<string | undefined, never, FileSystem.FileSystem | Path.Path>;
/**
 * Deliberately does not require the directory to exist yet: falling back
 * because it is missing would send callers at the shared home.
 */
export declare const resolveWorktreeT3Home: (cwd: string) => Effect.Effect<string | undefined, never, FileSystem.FileSystem | Path.Path>;
