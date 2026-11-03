import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
export type CliRunner = "npx" | "pnpm dlx" | "bunx";
/**
 * `T3CODE_NPM_LAUNCHER_PATH` is inherited by child shells, so accept it only for this package
 * version to avoid claiming another `t3` invocation is the npm install.
 */
export declare const resolveEntryPath: Effect.Effect<string, never, FileSystem.FileSystem | Path.Path>;
export declare const resolveServerInstallation: Effect.Effect<{
    kind: "bunx" | "npx" | "pnpm-dlx";
    prefix?: never;
} | {
    kind: "npm-global";
    prefix: string;
} | null, never, FileSystem.FileSystem | Path.Path>;
export declare const resolveCliCommand: (subcommand: string) => Effect.Effect<string, never, FileSystem.FileSystem | Path.Path>;
/**
 * Uses `t3` on PATH, the originating package runner, or this install's absolute launcher path.
 * Arguments are quoted for POSIX shells or PowerShell on Windows.
 */
export declare const resolveHostCliCommand: (subcommand: string, args?: readonly string[]) => Effect.Effect<{
    command: string;
    launcher: boolean;
}, never, FileSystem.FileSystem | Path.Path>;
/**
 * `sudo` resets PATH on most distributions, which drops a user-installed Node
 * (nvm, fnm, a tarball) and with it `npx` or a global `t3`, so the command
 * carries PATH through unless Node is on root's PATH too. An absolute launcher
 * needs neither.
 */
export declare const resolveRootCliCommand: (subcommand: string) => Effect.Effect<string, never, FileSystem.FileSystem | Path.Path>;
