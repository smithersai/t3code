import type { EnvironmentId } from "@t3tools/contracts";
export declare const connectPairingUrl: import("@t3tools/client-runtime/state/runtime").AtomCommand<{
    readonly pairingUrl: string;
    readonly expectedEnvironmentId?: EnvironmentId;
}, string & import("effect/Brand").Brand<"EnvironmentId">, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
export declare const updateBearerConnection: import("@t3tools/client-runtime/state/runtime").AtomCommand<{
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly httpBaseUrl: string;
}, void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
