import type { EnvironmentId, ResourceTelemetryHistoryInput, ResourceTelemetrySnapshot } from "@t3tools/contracts";
export interface ResourceTelemetryState {
    readonly data: ResourceTelemetrySnapshot | null;
    readonly error: string | null;
    readonly isPending: boolean;
    readonly refresh: () => void;
    readonly retry: () => Promise<ResourceTelemetrySnapshot>;
}
export declare function useResourceTelemetry(targetEnvironmentId?: EnvironmentId | null): ResourceTelemetryState;
export declare function useResourceTelemetryHistory(input: ResourceTelemetryHistoryInput, targetEnvironmentId?: EnvironmentId | null): import("../state/query.ts").EnvironmentQueryView<{
    readonly readAt: import("effect/DateTime").Utc;
    readonly windowMs: number;
    readonly bucketMs: number;
    readonly sampleIntervalMs: number;
    readonly retainedSampleCount: number;
    readonly buckets: readonly {
        readonly startedAt: import("effect/DateTime").Utc;
        readonly endedAt: import("effect/DateTime").Utc;
        readonly avgCpuPercent: number;
        readonly maxCpuPercent: number;
        readonly maxRssBytes: number;
        readonly ioReadBytes: number;
        readonly ioWriteBytes: number;
        readonly maxProcessCount: number;
    }[];
    readonly topProcesses: readonly {
        readonly identity: {
            readonly pid: number;
            readonly startTimeMs: number;
        };
        readonly ppid: number;
        readonly depth: number;
        readonly name: string;
        readonly command: string;
        readonly category: "electron-gpu" | "electron-main" | "electron-renderer" | "electron-utility" | "provider-root" | "resource-monitor" | "server" | "server-child" | "terminal-root" | "unknown-t3";
        readonly firstSeenAt: import("effect/DateTime").Utc;
        readonly lastSeenAt: import("effect/DateTime").Utc;
        readonly currentCpuPercent: number;
        readonly avgCpuPercent: number;
        readonly maxCpuPercent: number;
        readonly cpuTimeMs: number;
        readonly currentRssBytes: number;
        readonly peakRssBytes: number;
        readonly ioReadBytes: number;
        readonly ioWriteBytes: number;
        readonly ioSemantics: "all-io" | "logical" | "storage" | "unavailable";
        readonly sampleCount: number;
    }[];
    readonly health: {
        readonly native: {
            readonly status: "degraded" | "healthy" | "starting" | "stopped" | "unavailable";
            readonly lastSampleAt: import("effect/Option").Option<import("effect/DateTime").Utc>;
            readonly lastError: import("effect/Option").Option<string>;
        };
        readonly desktop: {
            readonly status: "degraded" | "healthy" | "starting" | "stopped" | "unavailable";
            readonly lastSampleAt: import("effect/Option").Option<import("effect/DateTime").Utc>;
            readonly lastError: import("effect/Option").Option<string>;
        };
        readonly sidecarVersion: import("effect/Option").Option<string>;
        readonly sidecarPid: import("effect/Option").Option<number>;
        readonly restartCount: number;
        readonly collectionDurationMicros: number;
        readonly scannedProcessCount: number;
        readonly retainedProcessCount: number;
        readonly inaccessibleProcessCount: number;
    };
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
