import { ApplicationProjectEvent, type ApplicationStoredEvent, CommandId, OrchestrationV2StoredEvent, ThreadId, type OrchestrationV2DomainEvent } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as SqlClient from "effect/sql/SqlClient";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";
import { type OrchestrationEventStoreError } from "./Errors.vibe";
export type UnsequencedProjectEvent = ApplicationProjectEvent extends infer Event ? Event extends ApplicationProjectEvent ? Omit<Event, "sequence"> : never : never;
declare const OrchestrationEventStore_base: Context.ServiceClass<OrchestrationEventStore, "t3/persistence/OrchestrationEventStore", {
    readonly appendProjectEvent: (event: UnsequencedProjectEvent) => Effect.Effect<ApplicationProjectEvent, OrchestrationEventStoreError>;
    readonly appendAgentEvents: (input: {
        readonly commandId?: CommandId;
        readonly events: readonly OrchestrationV2DomainEvent[];
    }) => Effect.Effect<readonly OrchestrationV2StoredEvent[], OrchestrationEventStoreError>;
    /** Unknown event types fail unless skipUnknownEventTypes logs and drops them; only client replay may opt in. */
    readonly readAgentEvents: (input?: {
        readonly afterSequence?: number;
        readonly throughSequence?: number;
        readonly threadId?: ThreadId;
        readonly commandId?: CommandId;
        readonly eventType?: OrchestrationV2DomainEvent["type"];
        readonly limit?: number;
        readonly skipUnknownEventTypes?: boolean;
    }) => Stream.Stream<OrchestrationV2StoredEvent, OrchestrationEventStoreError>;
    readonly getAgentReplayStats: (input: {
        readonly threadId: ThreadId;
        readonly afterSequence: number;
        readonly throughSequence: number;
        readonly maxEvents: number;
    }) => Effect.Effect<{
        readonly eventCount: number;
        readonly rawPayloadBytes: number;
        readonly hasCreateEvent: boolean;
    }, OrchestrationEventStoreError>;
    readonly getReplayStats: (input: {
        readonly afterSequence: number;
        readonly throughSequence: number;
    }) => Effect.Effect<{
        readonly eventCount: number;
        readonly rawPayloadBytes: number;
    }, OrchestrationEventStoreError>;
    readonly latestAgentSequence: (threadId?: ThreadId) => Effect.Effect<number, OrchestrationEventStoreError>;
    readonly latestApplicationSequence: Effect.Effect<number, OrchestrationEventStoreError>;
    /** Unknown event types fail unless skipUnknownEventTypes logs and drops them; only client replay may opt in. */
    readonly readApplicationEvents: (input: {
        readonly afterSequence: number;
        readonly throughSequence: number;
        readonly skipUnknownEventTypes?: boolean;
    }) => Stream.Stream<ApplicationStoredEvent, OrchestrationEventStoreError>;
    /** Publish only after the surrounding event/projection transaction commits. */
    readonly publishCommitted: (events: readonly ApplicationStoredEvent[]) => Effect.Effect<void>;
    readonly streamApplicationEvents: (input?: {
        readonly afterSequence?: number;
    }) => Stream.Stream<ApplicationStoredEvent, OrchestrationEventStoreError>;
    readonly streamProjectedApplicationEvents: <A extends {
        readonly sequence: number;
    }>(input: {
        readonly afterSequence?: number;
        readonly project: (event: ApplicationStoredEvent) => A;
        readonly filter?: (event: ApplicationStoredEvent) => boolean;
    }) => Stream.Stream<A, OrchestrationEventStoreError>;
}>;
export declare class OrchestrationEventStore extends OrchestrationEventStore_base {
}
export declare const layer: Layer.Layer<OrchestrationEventStore, never, SqlClient.SqlClient>;
export {};
