import type { DesktopDiscoveredSshHost, DesktopSshEnvironmentBootstrap, DesktopSshEnvironmentTarget } from "@t3tools/contracts";
import * as NetService from "@t3tools/shared/Net";
import { SshCommandError, SshHostDiscoveryError, SshInvalidTargetError, SshLaunchError, SshPairingError, SshPasswordPromptError, SshReadinessError } from "@t3tools/ssh/errors";
import * as SshTunnel from "@t3tools/ssh/tunnel";
import * as Context from "effect/Context";
import type * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as HttpClient from "effect/http/HttpClient";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as DesktopSshPasswordPrompts from "./DesktopSshPasswordPrompts.ts";
export type DesktopSshEnvironmentRuntimeServices = ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | Path.Path | HttpClient.HttpClient | NetService.NetService;
export type DesktopSshEnvironmentOperationError = SshCommandError | SshInvalidTargetError | SshLaunchError | SshPairingError | SshReadinessError | SshPasswordPromptError | NetService.NetError;
export type DesktopSshEnvironmentDiscoverError = SshHostDiscoveryError;
declare const DesktopSshEnvironment_base: Context.ServiceClass<DesktopSshEnvironment, "@t3tools/desktop/ssh/DesktopSshEnvironment", {
    readonly discoverHosts: (input?: {
        readonly homeDir?: string;
    }) => Effect.Effect<readonly DesktopDiscoveredSshHost[], DesktopSshEnvironmentDiscoverError>;
    readonly resolveHost: (alias: string) => Effect.Effect<DesktopSshEnvironmentTarget, SshCommandError | SshInvalidTargetError>;
    readonly ensureEnvironment: (target: DesktopSshEnvironmentTarget, options?: {
        readonly issuePairingToken?: boolean;
    }) => Effect.Effect<DesktopSshEnvironmentBootstrap, DesktopSshEnvironmentOperationError>;
    readonly disconnectEnvironment: (target: DesktopSshEnvironmentTarget) => Effect.Effect<void, DesktopSshEnvironmentOperationError>;
}>;
export declare class DesktopSshEnvironment extends DesktopSshEnvironment_base {
}
export interface DesktopSshEnvironmentLayerOptions {
    readonly resolveCliRunner?: Effect.Effect<SshTunnel.RemoteT3RunnerOptions>;
}
export declare function isDesktopSshPasswordPromptCancellation(error: unknown): error is SshPasswordPromptError;
/** @public */
export declare const make: Effect.Effect<{
    readonly discoverHosts: (input?: {
        readonly homeDir?: string;
    }) => Effect.Effect<readonly DesktopDiscoveredSshHost[], DesktopSshEnvironmentDiscoverError>;
    readonly resolveHost: (alias: string) => Effect.Effect<DesktopSshEnvironmentTarget, SshCommandError | SshInvalidTargetError>;
    readonly ensureEnvironment: (target: DesktopSshEnvironmentTarget, options?: {
        readonly issuePairingToken?: boolean;
    }) => Effect.Effect<DesktopSshEnvironmentBootstrap, DesktopSshEnvironmentOperationError>;
    readonly disconnectEnvironment: (target: DesktopSshEnvironmentTarget) => Effect.Effect<void, DesktopSshEnvironmentOperationError>;
}, never, DesktopSshPasswordPrompts.DesktopSshPasswordPrompts | SshTunnel.SshEnvironmentManager | DesktopSshEnvironmentRuntimeServices>;
export declare const layer: (options?: DesktopSshEnvironmentLayerOptions) => Layer.Layer<DesktopSshEnvironment, never, DesktopSshPasswordPrompts.DesktopSshPasswordPrompts | DesktopSshEnvironmentRuntimeServices>;
export {};
