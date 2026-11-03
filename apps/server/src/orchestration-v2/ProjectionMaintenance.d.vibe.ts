import { ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import * as EventStore from "./EventStore.ts";
import * as ProjectionStore from "./ProjectionStore.ts";
export interface ProjectionVerificationV2 {
    readonly valid: boolean;
    readonly schemaVersion: number;
    readonly expectedSequence: number;
    readonly projectionSequence: number;
    readonly unreadableThreadIds: ReadonlyArray<ThreadId>;
    readonly missingThreadIds: ReadonlyArray<ThreadId>;
    readonly unexpectedThreadIds: ReadonlyArray<ThreadId>;
}
declare const ProjectionMaintenanceError_base: Schema.Class<ProjectionMaintenanceError, Schema.TaggedStruct<"ProjectionMaintenanceError", {
    readonly operation: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectionMaintenanceError extends ProjectionMaintenanceError_base {
}
export interface ProjectionMaintenanceV2Shape {
    readonly verify: Effect.Effect<ProjectionVerificationV2, ProjectionMaintenanceError>;
    readonly rebuild: Effect.Effect<ProjectionVerificationV2, ProjectionMaintenanceError>;
    readonly compactEventStore: (betweenPages?: Effect.Effect<void>) => Effect.Effect<{
        readonly deletedEventCount: number;
        readonly deletedReceiptCount: number;
        readonly reclaimableBytes: number;
    }, ProjectionMaintenanceError>;
}
declare const ProjectionMaintenanceV2_base: Context.ServiceClass<ProjectionMaintenanceV2, "t3/orchestration-v2/ProjectionMaintenance/ProjectionMaintenanceV2", ProjectionMaintenanceV2Shape>;
export declare class ProjectionMaintenanceV2 extends ProjectionMaintenanceV2_base {
}
export declare const layer: Layer.Layer<ProjectionMaintenanceV2, never, EventStore.EventStoreV2 | ProjectionStore.ProjectionStoreV2 | SqlClient.SqlClient>;
export {};
