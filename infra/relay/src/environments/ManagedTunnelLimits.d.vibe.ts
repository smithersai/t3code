import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
export declare const DEFAULT_MANAGED_TUNNEL_LIMIT = 3;
declare const ManagedTunnelLimitPersistenceError_base: Schema.Class<ManagedTunnelLimitPersistenceError, Schema.TaggedStruct<"ManagedTunnelLimitPersistenceError", {
    readonly operation: Schema.Literals<readonly ["load-limit", "count-tunnels"]>;
    readonly userId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedTunnelLimitPersistenceError extends ManagedTunnelLimitPersistenceError_base {
    get message(): string;
}
declare const ManagedTunnelLimitExceeded_base: Schema.Class<ManagedTunnelLimitExceeded, Schema.TaggedStruct<"ManagedTunnelLimitExceeded", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly maxTunnels: Schema.Number;
    readonly activeTunnels: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedTunnelLimitExceeded extends ManagedTunnelLimitExceeded_base {
    get message(): string;
}
declare const ManagedTunnelLimits_base: Context.ServiceClass<ManagedTunnelLimits, "t3code-relay/environments/ManagedTunnelLimits", {
    readonly ensureCapacity: (input: {
        readonly userId: string;
        readonly environmentId: string;
    }) => Effect.Effect<void, ManagedTunnelLimitExceeded | ManagedTunnelLimitPersistenceError>;
}>;
export declare class ManagedTunnelLimits extends ManagedTunnelLimits_base {
}
export declare const make: Effect.Effect<{
    readonly ensureCapacity: (input: {
        readonly userId: string;
        readonly environmentId: string;
    }) => Effect.Effect<void, ManagedTunnelLimitExceeded | ManagedTunnelLimitPersistenceError>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<ManagedTunnelLimits, never, RelayDb.RelayDb>;
export {};
