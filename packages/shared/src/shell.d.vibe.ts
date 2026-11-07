import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Context from "effect/Context";
import type { CommandAvailabilityOptions } from "./shell.vibe.platform.js";
export { CommandResolutionCache, SpawnExecutableResolution, XcodeGitLocation, buildEnvironmentCaptureCommand, npmShimExecutable, preferGitForWindowsBinary, readEnvironmentFromLoginShell, readPathFromLaunchctl, resolveSpawnCommand, } from "./shell.vibe.platform.js";
export type { CommandAvailabilityOptions, ResolvedSpawnCommand, ShellEnvironmentReader, SpawnCommandOptions, SpawnExecutableResolver, XcodeGitLocator, } from "./shell.vibe.platform.js";
export type CommandAvailabilityChecker = (command: string, options?: CommandAvailabilityOptions) => Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path>;
export interface WindowsEnvironmentProbeOptions {
    readonly loadProfile?: boolean;
}
/** @throws {never} */
export declare function listLoginShellCandidates(platform: NodeJS.Platform, shell: string | undefined, userShell?: string | undefined): ReadonlyArray<string>;
/** @throws {never} */
export declare function mergePathEntries(preferredPath: string | undefined, inheritedPath: string | undefined, platform: NodeJS.Platform): string | undefined;
export type WindowsShellEnvironmentReader = (names: ReadonlyArray<string>, options?: WindowsEnvironmentProbeOptions) => Effect.Effect<Partial<Record<string, string>>>;
export declare const WindowsShellEnvironment: Context.Reference<WindowsShellEnvironmentReader>;
export declare const CommandAvailability: Context.Reference<CommandAvailabilityChecker>;
export declare const readEnvironmentFromWindowsShell: (names: readonly string[], options?: WindowsEnvironmentProbeOptions | undefined, execFile?: ((file: string, args: ReadonlyArray<string>, options: {
    encoding: "utf8";
    timeout: number;
}) => Effect.Effect<Option.Option<string>, never, never>) | undefined) => Effect.Effect<Partial<Record<string, string>>, never, never>;
/** @throws {never} */
export declare function mergePathValues(preferredPath: string | undefined, inheritedPath: string | undefined, platform: NodeJS.Platform): string | undefined;
export declare const withPathDirectoryListings: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, never>>;
export declare const resolveCommandPath: (command: string, options?: CommandAvailabilityOptions | undefined) => Effect.Effect<string | null, never, FileSystem.FileSystem | Path.Path>;
export declare const isCommandAvailable: (command: string, options?: CommandAvailabilityOptions | undefined) => Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path>;
/**
 * Keep one PATH spelling in copied Windows environment records.
 * @throws {never}
 */
export declare function setWindowsPath(env: NodeJS.ProcessEnv, value: string): void;
export declare const resolveWindowsEnvironment: (env: NodeJS.ProcessEnv) => Effect.Effect<Partial<NodeJS.ProcessEnv>, never, FileSystem.FileSystem | Path.Path>;
