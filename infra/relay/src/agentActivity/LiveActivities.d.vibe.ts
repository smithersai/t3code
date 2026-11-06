import type { RelayAgentActivityAggregateState, RelayDeliveryKind, RelayLiveActivityRegistrationRequest } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const LiveActivityRegistrationPersistenceError_base: Schema.Class<LiveActivityRegistrationPersistenceError, Schema.TaggedStruct<"LiveActivityRegistrationPersistenceError", {
    readonly userId: Schema.String;
    readonly deviceId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class LiveActivityRegistrationPersistenceError extends LiveActivityRegistrationPersistenceError_base {
    get message(): string;
}
declare const LiveActivityTargetListPersistenceError_base: Schema.Class<LiveActivityTargetListPersistenceError, Schema.TaggedStruct<"LiveActivityTargetListPersistenceError", {
    readonly userId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class LiveActivityTargetListPersistenceError extends LiveActivityTargetListPersistenceError_base {
    get message(): string;
}
declare const LiveActivityIdleTargetListPersistenceError_base: Schema.Class<LiveActivityIdleTargetListPersistenceError, Schema.TaggedStruct<"LiveActivityIdleTargetListPersistenceError", {
    readonly deliveredBefore: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class LiveActivityIdleTargetListPersistenceError extends LiveActivityIdleTargetListPersistenceError_base {
    get message(): string;
}
declare const LiveActivityDeliveryMarkPersistenceError_base: Schema.Class<LiveActivityDeliveryMarkPersistenceError, Schema.TaggedStruct<"LiveActivityDeliveryMarkPersistenceError", {
    readonly operation: Schema.Literals<readonly ["mark-delivery", "mark-start-queued", "clear-start-queued", "invalidate-delivery-token"]>;
    readonly userId: Schema.String;
    readonly deviceId: Schema.String;
    readonly kind: Schema.NullOr<Schema.Literals<readonly ["live_activity_start", "live_activity_update", "live_activity_end", "push_notification"]>>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class LiveActivityDeliveryMarkPersistenceError extends LiveActivityDeliveryMarkPersistenceError_base {
    get message(): string;
}
export interface DeviceRow {
    readonly user_id: string;
    readonly device_id: string;
    readonly platform: "ios" | "android";
    readonly ios_major_version: number | null;
    readonly app_version: string | null;
    readonly bundle_id: string | null;
    readonly aps_environment: "sandbox" | "production" | null;
    readonly push_token: string | null;
    readonly push_to_start_token: string | null;
    readonly preferences_json: string;
}
export interface LiveActivityRow {
    readonly activity_push_token: string | null;
    readonly remote_start_queued_at: string | null;
    readonly remote_started_at: string | null;
    readonly ended_at: string | null;
    readonly last_aggregate_json: string | null;
    readonly last_live_activity_delivery_at: string | null;
}
export type TargetRow = DeviceRow & LiveActivityRow;
declare const LiveActivities_base: Context.ServiceClass<LiveActivities, "t3code-relay/agentActivity/LiveActivities", {
    readonly register: (input: {
        readonly userId: string;
        readonly registration: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<void, LiveActivityRegistrationPersistenceError>;
    readonly listTargets: (input: {
        readonly userId: string;
    }) => Effect.Effect<readonly TargetRow[], LiveActivityTargetListPersistenceError>;
    readonly listIdleArmedTargets: (input: {
        readonly deliveredBefore: string;
    }) => Effect.Effect<readonly {
        readonly user_id: string;
        readonly device_id: string;
    }[], LiveActivityIdleTargetListPersistenceError>;
    readonly markDelivery: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly kind: RelayDeliveryKind;
        readonly aggregate: RelayAgentActivityAggregateState | null;
        readonly deliveredAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly markStartQueued: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly queuedAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly clearStartQueued: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly invalidateDeliveryToken: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly kind: RelayDeliveryKind;
        readonly invalidatedAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
}>;
export declare class LiveActivities extends LiveActivities_base {
}
export declare const make: Effect.Effect<{
    readonly register: (input: {
        readonly userId: string;
        readonly registration: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<void, LiveActivityRegistrationPersistenceError>;
    readonly listTargets: (input: {
        readonly userId: string;
    }) => Effect.Effect<ReadonlyArray<TargetRow>, LiveActivityTargetListPersistenceError>;
    readonly listIdleArmedTargets: (input: {
        readonly deliveredBefore: string;
    }) => Effect.Effect<ReadonlyArray<{
        readonly user_id: string;
        readonly device_id: string;
    }>, LiveActivityIdleTargetListPersistenceError>;
    readonly markDelivery: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly kind: RelayDeliveryKind;
        readonly aggregate: RelayAgentActivityAggregateState | null;
        readonly deliveredAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly markStartQueued: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly queuedAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly clearStartQueued: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
    readonly invalidateDeliveryToken: (input: {
        readonly userId: string;
        readonly deviceId: string;
        readonly kind: RelayDeliveryKind;
        readonly invalidatedAt: string;
    }) => Effect.Effect<void, LiveActivityDeliveryMarkPersistenceError>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<LiveActivities, never, RelayDb.RelayDb>;
export {};
