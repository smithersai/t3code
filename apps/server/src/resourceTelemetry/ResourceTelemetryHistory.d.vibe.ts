import type { DesktopHostTelemetrySnapshot, ResourceMonitorSnapshotEvent, ResourceTelemetryHealth, ResourceTelemetryHistory, ResourceTelemetryHistoryBucket } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";
export declare function normalizeResourceTelemetryHistoryInput(input: {
    readonly windowMs: number;
    readonly bucketMs: number;
}): {
    readonly windowMs: number;
    readonly bucketMs: number;
};
export interface BuildResourceTelemetryHistoryInput {
    readonly readAt: DateTime.Utc;
    readonly windowMs: number;
    readonly bucketMs: number;
    readonly sampleIntervalMs: number;
    readonly serverPid: number;
    readonly sidecarPid: Option.Option<number>;
    readonly desktopSnapshot: Option.Option<DesktopHostTelemetrySnapshot>;
    readonly snapshots: ReadonlyArray<ResourceMonitorSnapshotEvent>;
    readonly health: ResourceTelemetryHealth;
}
export type ResourceTelemetryHistoryWithLegacyBuckets = ResourceTelemetryHistory & {
    readonly legacyBackendBuckets?: ReadonlyArray<ResourceTelemetryHistoryBucket>;
};
export declare function buildResourceTelemetryHistory(input: BuildResourceTelemetryHistoryInput): ResourceTelemetryHistoryWithLegacyBuckets & {
    readonly legacyBackendBuckets: ReadonlyArray<ResourceTelemetryHistoryBucket>;
};
