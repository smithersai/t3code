import { type SelfInvocation } from "@t3tools/shared/nodeRuntime";
import { ProviderDriverKind, type OrchestrationV2ProviderCapabilities, type RuntimeMode } from "@t3tools/contracts";
import { GrokSettings } from "../settings.vibe";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type * as Scope from "effect/Scope";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as EffectAcpErrors from "effect-acp/errors";
import * as McpProviderSessions from "@t3tools/provider-core/server/McpProviderSessions";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
import * as ProviderEventLoggers from "@t3tools/provider-core/server/ProviderEventLoggers";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
import { type ProviderAdapterDriver } from "@t3tools/provider-core/server/adapterDriver";
import { makeAcpAdapterV2, type AcpAdapterV2Flavor, type AcpAdapterV2RuntimeInput } from "@t3tools/provider-acp/server/adapter";
export declare const GROK_PROVIDER: string & import("effect/Brand").Brand<"ProviderDriverKind">;
export declare const GROK_DEFAULT_INSTANCE_ID: string & import("effect/Brand").Brand<"ProviderInstanceId">;
export interface GrokAdapterV2Options {
    readonly instanceId: Parameters<typeof makeAcpAdapterV2>[0]["instanceId"];
    readonly settings: GrokSettings;
    readonly environment: NodeJS.ProcessEnv;
    readonly hostPlatform: NodeJS.Platform;
    readonly selfInvocation: SelfInvocation;
    readonly nativeLogging?: Parameters<typeof makeAcpAdapterV2>[0]["nativeLogging"];
    readonly continuationRequests?: Parameters<typeof makeAcpAdapterV2>[0]["continuationRequests"];
    readonly testHooks?: Parameters<typeof makeAcpAdapterV2>[0]["testHooks"];
    readonly makeRuntime?: (input: AcpAdapterV2RuntimeInput) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntime["Service"], EffectAcpErrors.AcpError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | Scope.Scope>;
    readonly assertComplete?: Effect.Effect<void, EffectAcpErrors.AcpError>;
}
/**
 * Explicit policy overrides launch in ask mode so Grok cannot bypass T3 approval checks.
 * @throws {never}
 */
export declare function grokLaunchRuntimeMode(runtimePolicy: ProviderAdapter.ProviderAdapterV2RuntimePolicy): RuntimeMode;
/** @throws {never} */
export declare function makeGrokAcpAdapterFlavor(options: GrokAdapterV2Options, homeDirectory: string): AcpAdapterV2Flavor;
export declare const makeGrokAdapterV2: (options: GrokAdapterV2Options) => Effect.Effect<{
    readonly instanceId: import("@t3tools/contracts").ProviderInstanceId;
    readonly driver: ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, ProviderAdapter.ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionInput) => Effect.Effect<import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionPlan, ProviderAdapter.ProviderAdapterV2Error>;
    readonly openSession: (input: ProviderAdapter.ProviderAdapterV2OpenSessionInput) => Effect.Effect<ProviderAdapter.ProviderAdapterV2SessionRuntime, ProviderAdapter.ProviderAdapterV2Error, Scope.Scope>;
}, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | McpProviderSessions.McpProviderSessions | ProviderHost.ProviderHost>;
export type GrokAdapterV2DriverEnv = ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | Path.Path | McpProviderSessions.McpProviderSessions | ProviderEventLoggers.ProviderEventLoggers | ProviderHost.ProviderHost;
export declare const GrokAdapterV2Driver: ProviderAdapterDriver<GrokSettings, GrokAdapterV2DriverEnv>;
