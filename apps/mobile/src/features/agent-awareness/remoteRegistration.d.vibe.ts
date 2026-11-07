import * as Effect from "effect/Effect";
import type { EnvironmentId } from "@t3tools/contracts";
import { ManagedRelay } from "@t3tools/client-runtime/relay";
import type { SavedRemoteConnection } from "../../lib/connection";
import type { Preferences } from "../../persistence/mobile-preferences";
import type { AgentAwarenessRegistrationStatus } from "./remoteRegistration.vibe.platform.js";
export { AgentAwarenessOperationError, __resetAgentAwarenessRemoteRegistrationForTest, mergeAgentAwarenessRegistrationPreferences, refreshActiveLiveActivityRemoteRegistration, registerLiveActivityPushToken, releaseAgentAwarenessRelayTokenProvider, setAgentAwarenessRelayTokenProvider, shouldRegisterAgentAwarenessDeviceForProvider, } from "./remoteRegistration.vibe.platform.js";
export type { AgentAwarenessRegistrationStatus } from "./remoteRegistration.vibe.platform.js";
/** @throws {never} */
export declare function getAgentAwarenessRegistrationStatus(): AgentAwarenessRegistrationStatus;
/** @throws {never} */
export declare function subscribeAgentAwarenessRegistrationStatus(listener: 
/** @throws {never} */
() => void): 
/** @throws {never} */
() => void;
/** @throws {never} */
export declare function armAgentAwarenessLiveActivityForLocalWork(input: {
    readonly environmentId: EnvironmentId;
    readonly threadTitle: string;
    readonly projectTitle: string;
}): void;
/** @throws {never} */
export declare function registerAgentAwarenessConnection(connection: SavedRemoteConnection): void;
/** @throws {never} */
export declare function unregisterAgentAwarenessConnection(environmentId: EnvironmentId): void;
export declare function refreshAgentAwarenessRegistration(): Effect.Effect<void, never, ManagedRelay.ManagedRelayClient>;
export declare function updateAgentAwarenessRegistrationPreferences(preferencesOverride: Partial<Preferences>): Effect.Effect<void, unknown, ManagedRelay.ManagedRelayClient>;
export declare const unregisterAgentAwarenessDeviceForCurrentUser: (tokenProvider: 
/** @throws {never} */
() => Promise<string | null>) => Effect.Effect<void, never, ManagedRelay.ManagedRelayClient>;
