import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { HttpClient } from "effect/http";
import * as ProcessRunner from "../processRunner.ts";
export interface PinnedRuntimePaths {
    readonly versionDir: string;
    readonly entryPath: string;
    readonly sentinelPath: string;
}
export declare function pinnedRuntimeCommand(paths: PinnedRuntimePaths): {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
};
export declare function pinnedRuntimeVersionsDir(path: Path.Path, baseDir: string): string;
export declare function pinnedRuntimePaths(path: Path.Path, baseDir: string, version: string, platform: NodeJS.Platform): PinnedRuntimePaths;
declare const PinnedRuntimeInstallError_base: Schema.Class<PinnedRuntimeInstallError, Schema.TaggedStruct<"PinnedRuntimeInstallError", {
    readonly step: Schema.String;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly stdoutLength: Schema.optional<Schema.Number>;
    readonly stderrLength: Schema.optional<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, Cause.YieldableError>;
export declare class PinnedRuntimeInstallError extends PinnedRuntimeInstallError_base {
    get message(): string;
}
declare const PinnedRuntimePreflightBlockedError_base: Schema.Class<PinnedRuntimePreflightBlockedError, Schema.TaggedStruct<"PinnedRuntimePreflightBlockedError", {
    readonly version: Schema.String;
    readonly reason: Schema.String;
}>, Cause.YieldableError>;
export declare class PinnedRuntimePreflightBlockedError extends PinnedRuntimePreflightBlockedError_base {
    get message(): string;
}
export type PinnedRuntimeProgress = {
    readonly stage: "download";
    readonly received: number;
    readonly total: number | undefined;
} | {
    readonly stage: "verify" | "extract" | "validate" | "cached";
};
/** Tar writes the executable before native packages; only a validated install gets a sentinel. */
interface PinnedRuntimeInstallInput {
    readonly baseDir: string;
    readonly version: string;
    readonly fs: FileSystem.FileSystem;
    readonly path: Path.Path;
    readonly runner: ProcessRunner.ProcessRunner["Service"];
    readonly validate: (paths: PinnedRuntimePaths) => Effect.Effect<void, PinnedRuntimeInstallError | PinnedRuntimePreflightBlockedError>;
    readonly platform: NodeJS.Platform;
    readonly arch: string;
    readonly httpClient: HttpClient.HttpClient;
    readonly releaseBaseUrl?: string | undefined;
    readonly onProgress?: (progress: PinnedRuntimeProgress) => void;
}
export declare const ensurePinnedRuntimeInstalled: (input: PinnedRuntimeInstallInput) => Effect.Effect<PinnedRuntimePaths, PinnedRuntimeInstallError | PinnedRuntimePreflightBlockedError, never>;
export declare function launcherOwnsVersionsDir(path: Path.Path, versionsDir: string, candidate: string): boolean;
/** The executable a `t3.cmd` shim written by the install script or `t3 update` runs. */
export declare const windowsShimTarget: (contents: string) => string | undefined;
/**
 * Keep runtimes named by callers, service state, running processes, launchers, or references,
 * and anything published within an hour. Only prune completed runtimes; leave staging
 * directories, symlinks, and unexpected entries untouched.
 */
export declare const prunePinnedRuntimes: (input: {
    readonly baseDir: string;
    readonly keep: ReadonlyArray<string>;
    readonly references?: ReadonlyArray<string>;
}) => Effect.Effect<string[], never, FileSystem.FileSystem | Path.Path | ProcessRunner.ProcessRunner>;
export {};
