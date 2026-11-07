import type { DesktopSshEnvironmentBootstrap, DesktopSshEnvironmentTarget } from "@t3tools/contracts";
import * as NetService from "@t3tools/shared/Net";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import { HttpClient } from "effect/http";
import { ChildProcessSpawner } from "effect/process";
import * as SshAuth from "./auth.vibe";
import { SshCommandError, SshInvalidTargetError, SshLaunchError, SshPairingError, SshPasswordPromptError, SshReadinessError } from "./errors.vibe";
import type { RemoteT3RunnerOptions } from "./tunnel.vibe.throwing.js";
export { SshInvalidArchiveVersionError, SshMissingRunnerError, buildRemoteNodeEnvScript, buildRemoteT3RunnerScript, resolveLoopbackSshHttpBaseUrl, } from "./tunnel.vibe.throwing.js";
export type { RemoteT3RunnerOptions } from "./tunnel.vibe.throwing.js";
export interface SshEnvironmentManagerOptions {
    readonly resolveCliRunner?: Effect.Effect<RemoteT3RunnerOptions>;
}
type SshEnvironmentEffectContext = ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | Path.Path | HttpClient.HttpClient | NetService.NetService | SshAuth.SshPasswordPrompt;
type SshEnvironmentEffectError = SshCommandError | SshInvalidTargetError | SshLaunchError | SshPairingError | SshReadinessError | SshPasswordPromptError | NetService.NetError;
export interface SshEnvironmentManagerShape {
    readonly ensureEnvironment: (target: DesktopSshEnvironmentTarget, options?: {
        readonly issuePairingToken?: boolean;
    }) => Effect.Effect<DesktopSshEnvironmentBootstrap, SshEnvironmentEffectError, SshEnvironmentEffectContext>;
    readonly disconnectEnvironment: (target: DesktopSshEnvironmentTarget) => Effect.Effect<void, SshEnvironmentEffectError, SshEnvironmentEffectContext>;
}
export declare const launchOrReuseRemoteServer: (target: {
    readonly alias: string;
    readonly hostname: string;
    readonly username: string | null;
    readonly port: number | null;
}, input?: SshAuth.SshAuthOptions | undefined, runner?: RemoteT3RunnerOptions | undefined) => Effect.Effect<{
    readonly remotePort: number;
    readonly remoteServerKind: "external" | "managed" | null;
}, SshCommandError | SshInvalidTargetError | SshLaunchError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | Path.Path>;
export declare const issueRemotePairingToken: (target: {
    readonly alias: string;
    readonly hostname: string;
    readonly username: string | null;
    readonly port: number | null;
}, input?: SshAuth.SshAuthOptions | undefined, runner?: RemoteT3RunnerOptions | undefined) => Effect.Effect<{
    readonly credential: string;
}, SshCommandError | SshInvalidTargetError | SshPairingError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | Path.Path>;
declare const SshEnvironmentManager_base: Context.ServiceClass<SshEnvironmentManager, "@t3tools/ssh/tunnel/SshEnvironmentManager", SshEnvironmentManagerShape>;
/**
 * @effect-expect-leaking ChildProcessSpawner | Crypto | FileSystem | HttpClient | NetService | Path | SshPasswordPrompt
 */
export declare class SshEnvironmentManager extends SshEnvironmentManager_base {
    static readonly layer: (options?: SshEnvironmentManagerOptions) => Layer.Layer<SshEnvironmentManager, never, never>;
}
