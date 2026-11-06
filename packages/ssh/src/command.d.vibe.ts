import type { DesktopSshEnvironmentTarget } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { ChildProcessSpawner } from "effect/process";
import { type SshAuthOptions } from "./auth.vibe";
import { SshCommandError, SshInvalidTargetError } from "./errors.vibe";
export declare const resolveSshCommand: Effect.Effect<string, never, never>;
export interface SshCommandResult {
    readonly stdout: string;
    readonly stderr: string;
}
export interface RunSshCommandOptions extends SshAuthOptions {
    readonly preHostArgs?: ReadonlyArray<string>;
    readonly remoteCommandArgs?: ReadonlyArray<string>;
    readonly stdin?: string;
    readonly timeoutMs?: number;
    /** Keep the end of long failed-command stdout, where the final cause usually is. */
    readonly keepErrorOutputTail?: boolean;
}
/** @throws {never} */
export declare function parseSshResolveOutput(alias: string, stdout: string): DesktopSshEnvironmentTarget;
/** @throws {never} */
export declare function targetConnectionKey(target: DesktopSshEnvironmentTarget): string;
export declare const remoteStateKey: (target: {
    readonly alias: string;
    readonly hostname: string;
    readonly username: string | null;
    readonly port: number | null;
}) => Effect.Effect<string, never, Crypto.Crypto>;
export declare const buildSshHostSpecEffect: (target: DesktopSshEnvironmentTarget) => Effect.Effect<string, SshInvalidTargetError>;
/** @throws {never} */
export declare function baseSshArgs(target: DesktopSshEnvironmentTarget, input?: {
    readonly batchMode?: "yes" | "no";
}): string[];
/** @throws {never} */
export declare function getLastNonEmptyOutputLine(stdout: string): string | null;
export declare const runSshCommand: (target: {
    readonly alias: string;
    readonly hostname: string;
    readonly username: string | null;
    readonly port: number | null;
}, input?: RunSshCommandOptions | undefined) => Effect.Effect<SshCommandResult, SshCommandError | SshInvalidTargetError, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export declare const resolveSshTarget: (alias: string) => Effect.Effect<DesktopSshEnvironmentTarget, SshCommandError | SshInvalidTargetError, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
