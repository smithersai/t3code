export { makeAggregateState, TERMINAL_AGENT_ACTIVITY_DISPLAY_TTL_MS } from "./agentActivityAggregate.vibe";
import type { RelayAgentActivityState, RelayDeliveryResult, RelayPublishResponse } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
export { isExpiredAgentActivityState } from "./agentActivityPayloads.vibe";
import * as AgentActivityRows from "./AgentActivityRows.vibe";
import * as EnvironmentLinks from "../environments/EnvironmentLinks.vibe";
import * as LiveActivities from "./LiveActivities.vibe";
import * as ApnsDeliveries from "./ApnsDeliveries.ts";
import * as FcmDeliveries from "./FcmDeliveries.ts";
export type AgentActivityPublishError = FcmDeliveries.FcmDeliveryError | AgentActivityRows.AgentActivityRowUpsertPersistenceError | AgentActivityRows.AgentActivityRowDeletePersistenceError | AgentActivityRows.AgentActivityRowListPersistenceError | EnvironmentLinks.EnvironmentLinkUserListPersistenceError | LiveActivities.LiveActivityTargetListPersistenceError | ApnsDeliveries.ApnsDeliveryError;
declare const AgentActivityPublisher_base: Context.ServiceClass<AgentActivityPublisher, "t3code-relay/agentActivity/AgentActivityPublisher", {
    readonly publish: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly threadId: string;
        readonly state: RelayAgentActivityState | null;
    }) => Effect.Effect<RelayPublishResponse, AgentActivityPublishError>;
    readonly replayForLiveActivityRegistration: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<RelayDeliveryResult | null, AgentActivityPublishError>;
    readonly endIdleLiveActivities: Effect.Effect<void, LiveActivities.LiveActivityIdleTargetListPersistenceError>;
}>;
export declare class AgentActivityPublisher extends AgentActivityPublisher_base {
}
export declare const make: Effect.Effect<{
    readonly publish: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly threadId: string;
        readonly state: RelayAgentActivityState | null;
    }) => Effect.Effect<RelayPublishResponse, AgentActivityPublishError>;
    readonly replayForLiveActivityRegistration: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<RelayDeliveryResult | null, AgentActivityPublishError>;
    readonly endIdleLiveActivities: Effect.Effect<void, LiveActivities.LiveActivityIdleTargetListPersistenceError>;
}, never, AgentActivityRows.AgentActivityRows | ApnsDeliveries.ApnsDeliveries | EnvironmentLinks.EnvironmentLinks | FcmDeliveries.FcmDeliveries | LiveActivities.LiveActivities>;
export declare const layer: Layer.Layer<AgentActivityPublisher, never, AgentActivityRows.AgentActivityRows | ApnsDeliveries.ApnsDeliveries | EnvironmentLinks.EnvironmentLinks | FcmDeliveries.FcmDeliveries | LiveActivities.LiveActivities>;
