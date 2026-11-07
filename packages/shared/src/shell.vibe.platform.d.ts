import * as Cache from "effect/Cache";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Context from "effect/Context";
export declare const WINDOWS_PATH_DELIMITER = ";";
export type ExecFileSyncLike = (file: string, args: ReadonlyArray<string>, options: {
    encoding: "utf8";
    timeout: number;
    detached?: true;
    stdio?: ["ignore", "pipe", "ignore"];
}) => string;
export declare function canExecuteFile(filePath: string): boolean;
export interface CommandAvailabilityOptions {
    readonly env?: NodeJS.ProcessEnv;
    readonly extendEnv?: boolean;
}
export declare function escapeWindowsShellArg(arg: string): string;
export interface ResolvedSpawnCommand {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    readonly shell: boolean;
}
export type SpawnExecutableResolver = (command: string, platform: NodeJS.Platform, env: NodeJS.ProcessEnv) => string | undefined;
export declare function resolveSpawnExecutableWithNode(command: string, platform: NodeJS.Platform, env: NodeJS.ProcessEnv): string | undefined;
export declare const SpawnExecutableResolution: Context.Reference<SpawnExecutableResolver>;
export declare function trimNonEmpty(value: string | null | undefined): string | undefined;
export declare function readUserLoginShell(): string | undefined;
export declare function readPathFromLaunchctl(execFile?: ExecFileSyncLike): string | undefined;
export declare function envCaptureStart(name: string): string;
export declare function envCaptureEnd(name: string): string;
export declare function buildEnvironmentCaptureCommand(shell: string, names: ReadonlyArray<string>): string;
export declare function buildWindowsEnvironmentCaptureCommand(names: ReadonlyArray<string>): string;
export declare function extractEnvironmentValue(output: string, name: string): string | undefined;
export type ShellEnvironmentReader = (shell: string, names: ReadonlyArray<string>, execFile?: ExecFileSyncLike) => Partial<Record<string, string>>;
export declare const readEnvironmentFromLoginShell: ShellEnvironmentReader;
export declare const execWindowsEnvironmentProbe: (file: string, args: ReadonlyArray<string>, options: {
    encoding: "utf8";
    timeout: number;
}) => Effect.Effect<Option.Option<string>, never, never>;
export declare function stripWrappingQuotes(value: string): string;
export declare function pathDelimiterForPlatform(platform: NodeJS.Platform): string;
export declare function readEnvPath(env: NodeJS.ProcessEnv): string | undefined;
export declare function resolvePathEnvironmentVariable(env: NodeJS.ProcessEnv): string;
export declare function resolveWindowsPathExtensions(env: NodeJS.ProcessEnv): ReadonlyArray<string>;
export declare function resolveCommandCandidates(command: string, platform: NodeJS.Platform, windowsPathExtensions: ReadonlyArray<string>, extname: (path: string) => string): ReadonlyArray<string>;
export interface CommandResolutionCacheEntry {
    readonly resolvedPath: string | null;
    readonly expiresAtNanos: bigint;
}
export declare const CommandResolutionCache: Context.Reference<Map<string, CommandResolutionCacheEntry>>;
export interface PathDirectoryListing {
    readonly modified: number | null | undefined;
    readonly names: ReadonlySet<string> | undefined;
}
export declare const directoryMtime: (directory: string) => Effect.Effect<number | null | undefined, never, FileSystem.FileSystem>;
export declare const PathDirectoryListings: Context.Reference<Cache.Cache<string, PathDirectoryListing, never, FileSystem.FileSystem> | undefined>;
export declare function spawnResolverCacheId(resolver: SpawnExecutableResolver | XcodeGitLocator): number;
export declare function cacheCommandResolution(cache: Map<string, CommandResolutionCacheEntry>, cacheKey: string, resolvedPath: string | null, nowNanos: bigint): void;
export declare const resolveCommandPathForPlatform: (command: string, options: CommandAvailabilityOptions & {
    readonly platform: NodeJS.Platform;
}) => Effect.Effect<string | null, never, FileSystem.FileSystem | Path.Path>;
export declare function isFileSync(filePath: string): boolean;
/** Bypass the launcher's extra process and kernel-token leak. Retain it when MSYSTEM is set, or git.exe omits hook/helper PATH entries. */
export declare function preferGitForWindowsBinary(executable: string, env: NodeJS.ProcessEnv, isFile?: (filePath: string) => boolean): string;
export declare function readFileSyncOrUndefined(filePath: string): string | undefined;
/** Resolve shims that only launch native executables so direct spawning keeps them in libuv's kill-on-close job. */
export declare function npmShimExecutable(shimPath: string, readFile?: (filePath: string) => string | undefined, isFile?: (filePath: string) => boolean): string | undefined;
export type XcodeGitLocator = (env: NodeJS.ProcessEnv) => string | undefined;
export declare function locateXcodeGitWithXcrun(env: NodeJS.ProcessEnv): string | undefined;
export declare const XcodeGitLocation: Context.Reference<XcodeGitLocator>;
export interface SpawnCommandOptions extends CommandAvailabilityOptions {
    /** Bypass npm cmd-shims; see npmShimExecutable for process-lifetime semantics. */
    readonly bypassNpmShim?: boolean;
}
export declare const resolveSpawnCommand: (command: string, args: readonly string[], options?: SpawnCommandOptions | undefined) => Effect.Effect<ResolvedSpawnCommand, never, never>;
