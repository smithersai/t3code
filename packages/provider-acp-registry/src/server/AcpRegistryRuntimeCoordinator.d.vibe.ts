import { type AcpRegistryAcceptUrlAuthInput, type AcpRegistryUrlAuthAction, type ProviderInstanceId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import type { AcpRegistryAvailableCommands, AcpRegistryLiveConfiguration } from "./probe.ts";
declare const AcpRegistryRuntimeCoordinator_base: Context.ServiceClass<AcpRegistryRuntimeCoordinator, "@t3tools/provider-acp-registry/server/AcpRegistryRuntimeCoordinator", {
    readonly withForegroundStartup: <A, E, R>(agentId: string, effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    readonly runBackgroundProbe: <A, E, R>(agentId: string, effect: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>;
    readonly withSessionMutation: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    readonly clearAvailableCommands: (instanceId: ProviderInstanceId) => Effect.Effect<void>;
    readonly publishAvailableCommands: (instanceId: ProviderInstanceId, commands: AcpRegistryAvailableCommands) => Effect.Effect<void>;
    readonly getAvailableCommands: (instanceId: ProviderInstanceId) => Effect.Effect<Option.Option<AcpRegistryAvailableCommands>>;
    readonly watchAvailableCommands: (instanceId: ProviderInstanceId, onUpdate: (commands: AcpRegistryAvailableCommands) => Effect.Effect<void>) => Effect.Effect<void>;
    readonly clearLiveConfiguration: (instanceId: ProviderInstanceId) => Effect.Effect<void>;
    readonly publishLiveConfiguration: (instanceId: ProviderInstanceId, configuration: AcpRegistryLiveConfiguration) => Effect.Effect<void>;
    readonly getLiveConfiguration: (instanceId: ProviderInstanceId) => Effect.Effect<Option.Option<AcpRegistryLiveConfiguration>>;
    readonly watchLiveConfiguration: (instanceId: ProviderInstanceId, onUpdate: (configuration: AcpRegistryLiveConfiguration) => Effect.Effect<void>) => Effect.Effect<void>;
    readonly requestUrlAuthentication: (instanceId: ProviderInstanceId, action: AcpRegistryUrlAuthAction) => Effect.Effect<boolean>;
    readonly acceptUrlAuthentication: (input: AcpRegistryAcceptUrlAuthInput) => Effect.Effect<boolean>;
    readonly getUrlAuthAction: (instanceId: ProviderInstanceId) => Effect.Effect<Option.Option<AcpRegistryUrlAuthAction>>;
    readonly watchUrlAuthAction: (instanceId: ProviderInstanceId, onUpdate: (action: AcpRegistryUrlAuthAction | null) => Effect.Effect<void>) => Effect.Effect<void>;
}>;
export declare class AcpRegistryRuntimeCoordinator extends AcpRegistryRuntimeCoordinator_base {
}
export declare const layer: Layer.Layer<AcpRegistryRuntimeCoordinator, never, never>;
export {};
