import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { SavedRemoteConnection } from "../lib/connection";
import type { ConnectedEnvironmentSummary, EnvironmentRuntimeState } from "./remote-runtime-types";
export declare function setPendingConnectionError(message: string | null): void;
export interface PairingOutcome {
    readonly ok: boolean;
    /** Shown beside the pairing form; null when the failure got its own dialog. */
    readonly error: string | null;
}
/**
 * Pairs with the environment behind a pairing link and saves it.
 * @throws {never}
 */
export declare function pairEnvironment(pairingUrl: string, expectedEnvironmentId?: EnvironmentId): Promise<PairingOutcome>;
export declare const environmentConnectedAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<boolean>;
export declare function useSavedRemoteConnections(): {
    isLoadingSavedConnection: boolean;
    savedConnectionsById: Record<string & import("effect/Brand").Brand<"EnvironmentId">, SavedRemoteConnection>;
};
export declare function useSavedRemoteConnection(environmentId: EnvironmentId | null): SavedRemoteConnection | null;
export declare function useRemoteEnvironmentRuntime(environmentId: EnvironmentId | null): EnvironmentRuntimeState | null;
export declare function useRemoteConnectionStatus(): {
    connectedEnvironments: readonly ConnectedEnvironmentSummary[];
    connectionState: import("@t3tools/client-runtime/connection").EnvironmentConnectionPhase;
    connectionError: string | null;
};
export declare function useRemoteConnections(): {
    connectionPairingUrl: string;
    connectionState: import("@t3tools/client-runtime/connection").EnvironmentConnectionPhase;
    connectionError: string | null;
    connectedEnvironments: readonly ConnectedEnvironmentSummary[];
    connectedEnvironmentCount: number;
    onChangeConnectionPairingUrl: (pairingUrl: string) => void;
    onConnectPress: (pairingUrl?: string, expectedEnvironmentId?: EnvironmentId) => Promise<PairingOutcome>;
    onReconnectEnvironment: (environmentId: EnvironmentId) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    onSetEnvironmentEnabled: (environmentId: EnvironmentId, enabled: boolean) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    onUpdateEnvironment: (environmentId: EnvironmentId, updates: {
        readonly label: string;
        readonly displayUrl: string;
    }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    onRemoveEnvironmentPress: (environmentId: EnvironmentId) => void;
};
