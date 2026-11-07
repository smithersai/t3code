import type { EnvironmentId } from "@t3tools/contracts";
import type { RelayClientEnvironmentRecord, RelayEnvironmentStatusResponse } from "@t3tools/contracts/relay";
export interface RelayEnvironmentView {
    readonly environment: RelayClientEnvironmentRecord;
    readonly availability: "checking" | "online" | "offline" | "error";
    readonly status: RelayEnvironmentStatusResponse | null;
    readonly error: string | null;
    readonly traceId: string | null;
}
export declare function useConnectionController(): {
    connectedEnvironments: readonly import("@t3tools/client-runtime/state/presentation").EnvironmentConnectionSummary[];
    relayEnvironments: readonly RelayEnvironmentView[];
    availableRelayEnvironments: RelayEnvironmentView[];
    relayDiscovery: {
        isRefreshing: boolean;
        isOffline: boolean;
        error: string | null;
        errorTraceId: string | null;
    };
    connectPairingUrl: (pairingUrl: string, expectedEnvironmentId?: EnvironmentId) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<string & import("effect/Brand").Brand<"EnvironmentId">, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    connectRelayEnvironment: (environment: RelayClientEnvironmentRecord) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<boolean, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    removeEnvironment: (environmentId: EnvironmentId) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/connection").PlatformEnvironmentRemovalError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    retryEnvironment: (environmentId: EnvironmentId) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    setEnvironmentEnabled: (environmentId: EnvironmentId, enabled: boolean) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    updateEnvironment: (environmentId: EnvironmentId, updates: {
        readonly label: string;
        readonly displayUrl: string;
    }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    refreshRelayEnvironments: (value: void) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
};
