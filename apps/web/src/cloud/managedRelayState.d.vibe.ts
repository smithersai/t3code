import { ManagedRelay } from "@t3tools/client-runtime/relay";
import type { EnvironmentId } from "@t3tools/contracts";
export declare const deregisterManagedRelayEnvironmentCommand: import("@t3tools/client-runtime/state/runtime").AtomCommand<{
    readonly accountId: string;
    readonly environmentId: EnvironmentId;
}, undefined, ManagedRelay.ManagedRelayAccessTokenScopesUnexpectedError | ManagedRelay.ManagedRelayDpopKeyLoadError | ManagedRelay.ManagedRelayRequestFailedError | ManagedRelay.ManagedRelayRequestProofCreationError | ManagedRelay.ManagedRelayRequestTimeoutError | import("@t3tools/client-runtime/relay").ManagedRelaySessionError | ManagedRelay.ManagedRelayTokenProofCreationError | ManagedRelay.ManagedRelayUrlInvalidError>;
export declare function useManagedRelayEnvironments(): {
    data: readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly label: string;
        readonly endpoint: {
            readonly httpBaseUrl: string;
            readonly wsBaseUrl: string;
            readonly providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        };
        readonly linkedAt: string;
    }[] | null;
    error: string | null;
    errorTraceId: string | null;
    isPending: boolean;
    accountId: string | null;
    refresh: () => void;
};
export declare function useManagedRelayDevices(): {
    data: readonly {
        readonly deviceId: string;
        readonly label: string;
        readonly platform: "android" | "ios";
        readonly iosMajorVersion: number | null;
        readonly androidApiLevel?: number | null | undefined;
        readonly appVersion: string | null;
        readonly notifications: {
            readonly enabled: boolean;
            readonly notifyOnApproval: boolean;
            readonly notifyOnInput: boolean;
            readonly notifyOnCompletion: boolean;
            readonly notifyOnFailure: boolean;
        };
        readonly liveActivities: {
            readonly enabled: boolean;
        };
        readonly updatedAt: string;
    }[] | null;
    error: string | null;
    errorTraceId: string | null;
    isPending: boolean;
    accountId: string | null;
    refresh: () => void;
};
