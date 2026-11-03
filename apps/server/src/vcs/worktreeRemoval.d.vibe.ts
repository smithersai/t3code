import { GitCommandError } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type * as GitVcsDriver from "./GitVcsDriver.ts";
/**
 * Git for Windows before 2.54 follows NTFS junctions; newer Git leaves them behind.
 * On Windows, mirror Git's removal checks, then delete with Node's `rm`, which
 * unlinks junctions without following them. Git then removes the worktree metadata.
 */
export declare const removeLinkedWorktree: <A, E, R>(input: {
    readonly operation: string;
    readonly cwd: string;
    readonly worktreePath: string;
    readonly force: boolean;
    readonly execute: GitVcsDriver.GitVcsDriver["Service"]["execute"];
    readonly run: (args: ReadonlyArray<string>) => Effect.Effect<A, E, R>;
}) => Effect.Effect<A, E | GitCommandError, FileSystem.FileSystem | Path.Path | Exclude<R, import("effect/Tracer").ParentSpan>>;
