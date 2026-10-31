import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import type * as Option from "effect/Option";
import type { ConnectionProfile } from "./catalog.vibe";
import type { ConnectionAttemptError } from "./model.vibe";
declare const ConnectionProfileStore_base: Context.ServiceClass<ConnectionProfileStore, "@t3tools/client-runtime/connection/profileStore/ConnectionProfileStore", {
    readonly get: (connectionId: string) => Effect.Effect<Option.Option<ConnectionProfile>, ConnectionAttemptError>;
    readonly put: (profile: ConnectionProfile) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (connectionId: string) => Effect.Effect<void, ConnectionAttemptError>;
}>;
export declare class ConnectionProfileStore extends ConnectionProfileStore_base {
}
export declare const make: (service: ConnectionProfileStore["Service"]) => {
    readonly get: (connectionId: string) => Effect.Effect<Option.Option<ConnectionProfile>, ConnectionAttemptError>;
    readonly put: (profile: ConnectionProfile) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (connectionId: string) => Effect.Effect<void, ConnectionAttemptError>;
};
export {};
