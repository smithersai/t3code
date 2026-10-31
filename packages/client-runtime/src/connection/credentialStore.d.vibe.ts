import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import type * as Option from "effect/Option";
import type { ConnectionCredential } from "./catalog.vibe";
import type { ConnectionAttemptError } from "./model.vibe";
declare const ConnectionCredentialStore_base: Context.ServiceClass<ConnectionCredentialStore, "@t3tools/client-runtime/connection/credentialStore/ConnectionCredentialStore", {
    readonly get: (connectionId: string) => Effect.Effect<Option.Option<ConnectionCredential>, ConnectionAttemptError>;
    readonly put: (connectionId: string, credential: ConnectionCredential) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (connectionId: string) => Effect.Effect<void, ConnectionAttemptError>;
}>;
export declare class ConnectionCredentialStore extends ConnectionCredentialStore_base {
}
export declare const make: (service: ConnectionCredentialStore["Service"]) => {
    readonly get: (connectionId: string) => Effect.Effect<Option.Option<ConnectionCredential>, ConnectionAttemptError>;
    readonly put: (connectionId: string, credential: ConnectionCredential) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (connectionId: string) => Effect.Effect<void, ConnectionAttemptError>;
};
export {};
