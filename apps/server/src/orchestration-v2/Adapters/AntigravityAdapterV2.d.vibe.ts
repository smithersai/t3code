import { ProviderDriverKind, ProviderInstanceId, type OrchestrationV2ProviderCapabilities, type ProviderSetupError } from "@t3tools/contracts";
import type { SelfInvocation } from "@t3tools/shared/nodeRuntime";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Scope from "effect/Scope";
import * as EffectAcpErrors from "effect-acp/errors";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import type { AntigravityAuth } from "../../provider/AntigravityAuth.ts";
import type * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
import { type AntigravityAcpRuntimeInput } from "../../provider/acp/AntigravityAcpSupport.ts";
import { makeAcpAdapterV2, type AcpAdapterV2Flavor } from "@t3tools/provider-acp/server/adapter";
export interface AntigravityAdapterV2Options {
    readonly instanceId: ProviderInstanceId;
    readonly selfInvocation: SelfInvocation;
    readonly makeRuntime: (input: Omit<AntigravityAcpRuntimeInput, "spawn" | "childProcessSpawner">) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntime["Service"], EffectAcpErrors.AcpError | ProviderSetupError, Scope.Scope>;
    readonly withProcess: AntigravityAuth["withProcess"];
    readonly defaultModel: Effect.Effect<string | undefined>;
    readonly onSessionStarted?: (started: AcpSessionRuntime.AcpSessionRuntimeStartResult, cwd: string) => Effect.Effect<void>;
    readonly onSessionEvent?: AcpAdapterV2Flavor["onSessionEvent"];
    readonly nativeLogging?: Parameters<typeof makeAcpAdapterV2>[0]["nativeLogging"];
    readonly continuationRequests?: Parameters<typeof makeAcpAdapterV2>[0]["continuationRequests"];
}
interface AntigravityFlavorServices {
    readonly crypto: Crypto.Crypto;
    readonly fileSystem: FileSystem.FileSystem;
    readonly path: Path.Path;
    readonly host: ProviderHost.ProviderHost["Service"];
}
export declare function makeAntigravityAcpAdapterFlavor(options: AntigravityAdapterV2Options & AntigravityFlavorServices): AcpAdapterV2Flavor;
export declare const makeAntigravityAdapterV2: (options: AntigravityAdapterV2Options) => Effect.Effect<{
    readonly instanceId: ProviderInstanceId;
    readonly driver: ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionInput) => Effect.Effect<import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionPlan, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error>;
    readonly openSession: (input: import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2OpenSessionInput) => Effect.Effect<import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2SessionRuntime, import("@t3tools/provider-core/server/ProviderAdapter").ProviderAdapterV2Error, Scope.Scope>;
}, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | import("@t3tools/provider-core/server/IdAllocator").IdAllocatorV2 | import("@t3tools/provider-core/server/McpProviderSessions").McpProviderSessions | Path.Path | ProviderHost.ProviderHost>;
export {};
