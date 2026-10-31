import { type SelfInvocation } from "@t3tools/shared/nodeRuntime";
import { type OrchestrationV2ProviderCapabilities } from "@t3tools/contracts";
import { FxSettings } from "../settings.vibe";
import type * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import type * as FileSystem from "effect/FileSystem";
import type * as Path from "effect/Path";
import type * as Scope from "effect/Scope";
import type * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import type * as EffectAcpErrors from "effect-acp/errors";
import type * as McpProviderSessions from "@t3tools/provider-core/server/McpProviderSessions";
import type * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import type * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
import * as ProviderEventLoggers from "@t3tools/provider-core/server/ProviderEventLoggers";
import type * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import { type ProviderAdapterDriver } from "@t3tools/provider-core/server/adapterDriver";
import { type AcpAdapterV2RuntimeInput, makeAcpAdapterV2 } from "@t3tools/provider-acp/server/adapter";
export { FX_DRIVER_KIND } from "./acpSupport.js";
export interface FxAdapterV2Options {
    readonly instanceId: Parameters<typeof makeAcpAdapterV2>[0]["instanceId"];
    readonly settings: FxSettings;
    readonly environment: NodeJS.ProcessEnv;
    readonly selfInvocation: SelfInvocation;
    /** fx's id for "Default", the model the provider snapshot read from `fx status`. */
    readonly defaultModel?: Effect.Effect<string | undefined>;
    readonly nativeLogging?: Parameters<typeof makeAcpAdapterV2>[0]["nativeLogging"];
    readonly testHooks?: Parameters<typeof makeAcpAdapterV2>[0]["testHooks"];
    /** Replaces the `fx acp` launch (replay tests). fx's session setup still applies. */
    readonly makeRuntime?: (input: AcpAdapterV2RuntimeInput) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntime["Service"], EffectAcpErrors.AcpError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | Scope.Scope>;
    readonly assertComplete?: Effect.Effect<void, EffectAcpErrors.AcpError>;
}
export declare const makeFxAdapterV2: (options: FxAdapterV2Options) => Effect.Effect<{
    readonly instanceId: import("@t3tools/contracts").ProviderInstanceId;
    readonly driver: import("@t3tools/contracts").ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionInput) => Effect.Effect<import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionPlan, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error>;
    readonly openSession: (input: import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2OpenSessionInput) => Effect.Effect<import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2SessionRuntime, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error, Scope.Scope>;
}, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | McpProviderSessions.McpProviderSessions | ProviderHost.ProviderHost>;
export type FxAdapterV2DriverEnv = ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | Path.Path | McpProviderSessions.McpProviderSessions | ProviderEventLoggers.ProviderEventLoggers | ProviderHost.ProviderHost;
/** `defaultModel` reads fx's id for "Default" from the provider snapshot. */
export declare const makeFxAdapterV2Driver: (defaultModel: Effect.Effect<string | undefined>) => ProviderAdapterDriver<FxSettings, FxAdapterV2DriverEnv>;
