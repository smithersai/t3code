import * as Schema from "effect/Schema";
export declare const RESOURCE_MONITOR_PROTOCOL_VERSION: 3;
export declare const HostResourcesSnapshot: Schema.Struct<{
    readonly sampledAt: Schema.Int;
    readonly cpuUtilization: Schema.NullOr<Schema.Number>;
    readonly cpuCount: Schema.Int;
    readonly availableMemoryBytes: Schema.Int;
    readonly totalMemoryBytes: Schema.Int;
}>;
export type HostResourcesSnapshot = typeof HostResourcesSnapshot.Type;
export declare const ResourceTelemetryIoSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
export type ResourceTelemetryIoSemantics = typeof ResourceTelemetryIoSemantics.Type;
export declare const ResourceTelemetryProcessCategory: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
export type ResourceTelemetryProcessCategory = typeof ResourceTelemetryProcessCategory.Type;
export declare const ResourceTelemetrySourceStatus: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
export type ResourceTelemetrySourceStatus = typeof ResourceTelemetrySourceStatus.Type;
export declare const ResourceTelemetryProcessIdentity: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly startTimeMs: Schema.Int;
}>;
export type ResourceTelemetryProcessIdentity = typeof ResourceTelemetryProcessIdentity.Type;
export declare const ResourceMonitorExternalProcess: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly startTimeMs: Schema.optionalKey<Schema.Int>;
}>;
export type ResourceMonitorExternalProcess = typeof ResourceMonitorExternalProcess.Type;
export declare const ResourceMonitorCapabilities: Schema.Struct<{
    readonly cumulativeCpuTime: Schema.Boolean;
    readonly currentCpuPercent: Schema.Boolean;
    readonly residentMemory: Schema.Boolean;
    readonly virtualMemory: Schema.Boolean;
    readonly ioBytes: Schema.Boolean;
    readonly processStartTime: Schema.Boolean;
    readonly processTree: Schema.Boolean;
}>;
export type ResourceMonitorCapabilities = typeof ResourceMonitorCapabilities.Type;
export declare const ResourceMonitorProcessSample: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly ppid: Schema.Int;
    readonly startTimeMs: Schema.Int;
    readonly runTimeMs: Schema.Int;
    readonly name: Schema.String;
    readonly command: Schema.String;
    readonly status: Schema.String;
    readonly cpuPercent: Schema.Number;
    readonly cpuTimeMs: Schema.Int;
    readonly residentBytes: Schema.Int;
    readonly virtualBytes: Schema.Int;
    readonly ioReadBytes: Schema.Int;
    readonly ioWriteBytes: Schema.Int;
    readonly ioSemantics: Schema.Literals<readonly ["storage", "all-io"]>;
}>;
export type ResourceMonitorProcessSample = typeof ResourceMonitorProcessSample.Type;
export declare const ResourceMonitorConfigureCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"configure">;
    readonly rootPid: Schema.Int;
    readonly sampleIntervalMs: Schema.Int;
    readonly externalProcesses: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>;
}>;
export type ResourceMonitorConfigureCommand = typeof ResourceMonitorConfigureCommand.Type;
export declare const ResourceMonitorSetExternalProcessesCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setExternalProcesses">;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>;
}>;
export type ResourceMonitorSetExternalProcessesCommand = typeof ResourceMonitorSetExternalProcessesCommand.Type;
export declare const ResourceMonitorSampleNowCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"sampleNow">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ResourceMonitorSampleNowCommand = typeof ResourceMonitorSampleNowCommand.Type;
export declare const ResourceMonitorProcessTableCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"processTable">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ResourceMonitorProcessTableCommand = typeof ResourceMonitorProcessTableCommand.Type;
export declare const ResourceMonitorSetSampleIntervalCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setSampleInterval">;
    readonly sampleIntervalMs: Schema.Int;
}>;
export type ResourceMonitorSetSampleIntervalCommand = typeof ResourceMonitorSetSampleIntervalCommand.Type;
export declare const ResourceMonitorSetStreamingCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setStreaming">;
    readonly enabled: Schema.Boolean;
}>;
export type ResourceMonitorSetStreamingCommand = typeof ResourceMonitorSetStreamingCommand.Type;
export declare const ResourceMonitorReadHistoryCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"readHistory">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly windowMs: Schema.Int;
}>;
export type ResourceMonitorReadHistoryCommand = typeof ResourceMonitorReadHistoryCommand.Type;
export declare const ResourceMonitorShutdownCommand: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"shutdown">;
}>;
export type ResourceMonitorShutdownCommand = typeof ResourceMonitorShutdownCommand.Type;
export declare const ResourceMonitorCommand: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"configure">;
    readonly rootPid: Schema.Int;
    readonly sampleIntervalMs: Schema.Int;
    readonly externalProcesses: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setExternalProcesses">;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setSampleInterval">;
    readonly sampleIntervalMs: Schema.Int;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"setStreaming">;
    readonly enabled: Schema.Boolean;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"sampleNow">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"processTable">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"readHistory">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly windowMs: Schema.Int;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"shutdown">;
}>]>;
export type ResourceMonitorCommand = typeof ResourceMonitorCommand.Type;
export declare const ResourceMonitorHelloEvent: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"hello">;
    readonly sidecarVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sidecarPid: Schema.Int;
    readonly platform: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly arch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly capabilities: Schema.Struct<{
        readonly cumulativeCpuTime: Schema.Boolean;
        readonly currentCpuPercent: Schema.Boolean;
        readonly residentMemory: Schema.Boolean;
        readonly virtualMemory: Schema.Boolean;
        readonly ioBytes: Schema.Boolean;
        readonly processStartTime: Schema.Boolean;
        readonly processTree: Schema.Boolean;
    }>;
}>;
export type ResourceMonitorHelloEvent = typeof ResourceMonitorHelloEvent.Type;
export declare const ResourceMonitorSnapshotEvent: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"snapshot">;
    readonly sequence: Schema.Int;
    readonly sampledAtUnixMs: Schema.Int;
    readonly collectionDurationMicros: Schema.Int;
    readonly scannedProcessCount: Schema.Int;
    readonly retainedProcessCount: Schema.Int;
    readonly inaccessibleProcessCount: Schema.Int;
    readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly externalProcesses: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>>;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly ppid: Schema.Int;
        readonly startTimeMs: Schema.Int;
        readonly runTimeMs: Schema.Int;
        readonly name: Schema.String;
        readonly command: Schema.String;
        readonly status: Schema.String;
        readonly cpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly residentBytes: Schema.Int;
        readonly virtualBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioSemantics: Schema.Literals<readonly ["storage", "all-io"]>;
    }>>;
}>;
export type ResourceMonitorSnapshotEvent = typeof ResourceMonitorSnapshotEvent.Type;
export declare const ResourceMonitorProcessTableEntry: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly ppid: Schema.Int;
    readonly name: Schema.String;
}>;
export type ResourceMonitorProcessTableEntry = typeof ResourceMonitorProcessTableEntry.Type;
export declare const ResourceMonitorProcessTableEvent: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"processTable">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly ppid: Schema.Int;
        readonly name: Schema.String;
    }>>;
}>;
export type ResourceMonitorProcessTableEvent = typeof ResourceMonitorProcessTableEvent.Type;
export declare const ResourceMonitorHistoryChunkEvent: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"historyChunk">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly done: Schema.Boolean;
    readonly snapshots: Schema.$Array<Schema.Struct<{
        readonly version: Schema.Literal<3>;
        readonly type: Schema.Literal<"snapshot">;
        readonly sequence: Schema.Int;
        readonly sampledAtUnixMs: Schema.Int;
        readonly collectionDurationMicros: Schema.Int;
        readonly scannedProcessCount: Schema.Int;
        readonly retainedProcessCount: Schema.Int;
        readonly inaccessibleProcessCount: Schema.Int;
        readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly externalProcesses: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly pid: Schema.Int;
            readonly startTimeMs: Schema.optionalKey<Schema.Int>;
        }>>>;
        readonly processes: Schema.$Array<Schema.Struct<{
            readonly pid: Schema.Int;
            readonly ppid: Schema.Int;
            readonly startTimeMs: Schema.Int;
            readonly runTimeMs: Schema.Int;
            readonly name: Schema.String;
            readonly command: Schema.String;
            readonly status: Schema.String;
            readonly cpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly residentBytes: Schema.Int;
            readonly virtualBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioSemantics: Schema.Literals<readonly ["storage", "all-io"]>;
        }>>;
    }>>;
}>;
export type ResourceMonitorHistoryChunkEvent = typeof ResourceMonitorHistoryChunkEvent.Type;
export declare const ResourceMonitorErrorEvent: Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"error">;
    readonly code: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly recoverable: Schema.Boolean;
}>;
export type ResourceMonitorErrorEvent = typeof ResourceMonitorErrorEvent.Type;
export declare const ResourceMonitorEvent: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"hello">;
    readonly sidecarVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sidecarPid: Schema.Int;
    readonly platform: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly arch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly capabilities: Schema.Struct<{
        readonly cumulativeCpuTime: Schema.Boolean;
        readonly currentCpuPercent: Schema.Boolean;
        readonly residentMemory: Schema.Boolean;
        readonly virtualMemory: Schema.Boolean;
        readonly ioBytes: Schema.Boolean;
        readonly processStartTime: Schema.Boolean;
        readonly processTree: Schema.Boolean;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"snapshot">;
    readonly sequence: Schema.Int;
    readonly sampledAtUnixMs: Schema.Int;
    readonly collectionDurationMicros: Schema.Int;
    readonly scannedProcessCount: Schema.Int;
    readonly retainedProcessCount: Schema.Int;
    readonly inaccessibleProcessCount: Schema.Int;
    readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly externalProcesses: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.optionalKey<Schema.Int>;
    }>>>;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly ppid: Schema.Int;
        readonly startTimeMs: Schema.Int;
        readonly runTimeMs: Schema.Int;
        readonly name: Schema.String;
        readonly command: Schema.String;
        readonly status: Schema.String;
        readonly cpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly residentBytes: Schema.Int;
        readonly virtualBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioSemantics: Schema.Literals<readonly ["storage", "all-io"]>;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"processTable">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly ppid: Schema.Int;
        readonly name: Schema.String;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"historyChunk">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly done: Schema.Boolean;
    readonly snapshots: Schema.$Array<Schema.Struct<{
        readonly version: Schema.Literal<3>;
        readonly type: Schema.Literal<"snapshot">;
        readonly sequence: Schema.Int;
        readonly sampledAtUnixMs: Schema.Int;
        readonly collectionDurationMicros: Schema.Int;
        readonly scannedProcessCount: Schema.Int;
        readonly retainedProcessCount: Schema.Int;
        readonly inaccessibleProcessCount: Schema.Int;
        readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly externalProcesses: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly pid: Schema.Int;
            readonly startTimeMs: Schema.optionalKey<Schema.Int>;
        }>>>;
        readonly processes: Schema.$Array<Schema.Struct<{
            readonly pid: Schema.Int;
            readonly ppid: Schema.Int;
            readonly startTimeMs: Schema.Int;
            readonly runTimeMs: Schema.Int;
            readonly name: Schema.String;
            readonly command: Schema.String;
            readonly status: Schema.String;
            readonly cpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly residentBytes: Schema.Int;
            readonly virtualBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioSemantics: Schema.Literals<readonly ["storage", "all-io"]>;
        }>>;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<3>;
    readonly type: Schema.Literal<"error">;
    readonly code: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly recoverable: Schema.Boolean;
}>]>;
export type ResourceMonitorEvent = typeof ResourceMonitorEvent.Type;
export declare const DesktopElectronProcessType: Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>;
export type DesktopElectronProcessType = typeof DesktopElectronProcessType.Type;
export declare const DesktopElectronProcessMetric: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly creationTimeMs: Schema.Int;
    readonly type: Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly serviceName: Schema.optionalKey<Schema.String>;
    readonly cpuPercent: Schema.Number;
    readonly cumulativeCpuSeconds: Schema.optionalKey<Schema.Number>;
    readonly idleWakeupsPerSecond: Schema.Number;
    readonly workingSetBytes: Schema.Int;
    readonly peakWorkingSetBytes: Schema.Int;
}>;
export type DesktopElectronProcessMetric = typeof DesktopElectronProcessMetric.Type;
export declare const DesktopHostTelemetrySnapshot: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopTelemetry">;
    readonly sequence: Schema.Int;
    readonly sampledAtUnixMs: Schema.Int;
    readonly electronPid: Schema.Int;
    readonly power: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
        readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly idleSeconds: Schema.NullOr<Schema.Number>;
        readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly suspended: Schema.Boolean;
        readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
        readonly stale: Schema.Boolean;
        readonly updatedAt: Schema.DateTimeUtcFromString;
    }>;
    readonly speedLimitPercent: Schema.OptionFromNullOr<Schema.Number>;
    readonly electronProcesses: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly creationTimeMs: Schema.Int;
        readonly type: Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly serviceName: Schema.optionalKey<Schema.String>;
        readonly cpuPercent: Schema.Number;
        readonly cumulativeCpuSeconds: Schema.optionalKey<Schema.Number>;
        readonly idleWakeupsPerSecond: Schema.Number;
        readonly workingSetBytes: Schema.Int;
        readonly peakWorkingSetBytes: Schema.Int;
    }>>;
}>;
export type DesktopHostTelemetrySnapshot = typeof DesktopHostTelemetrySnapshot.Type;
export declare const DesktopHostTelemetryHello: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopTelemetryHello">;
    readonly electronPid: Schema.Int;
}>;
export type DesktopHostTelemetryHello = typeof DesktopHostTelemetryHello.Type;
export declare const DesktopUpdateRemoteOutcome: Schema.Literals<readonly ["ready-to-install", "up-to-date", "failed"]>;
export type DesktopUpdateRemoteOutcome = typeof DesktopUpdateRemoteOutcome.Type;
export declare const DesktopUpdateStatusReport: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopUpdateStatus">;
    readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly outcome: Schema.optionalKey<Schema.Literals<readonly ["ready-to-install", "up-to-date", "failed"]>>;
    readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly state: Schema.Struct<{
        readonly enabled: Schema.Boolean;
        readonly status: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
        readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
        readonly currentVersion: Schema.String;
        readonly hostArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly appArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly runningUnderArm64Translation: Schema.Boolean;
        readonly availableVersion: Schema.NullOr<Schema.String>;
        readonly downloadedVersion: Schema.NullOr<Schema.String>;
        readonly releaseNotes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.String;
            readonly items: Schema.$Array<Schema.String>;
            readonly totalItems: Schema.Number;
        }>>;
        readonly omittedReleaseCount: Schema.Number;
        readonly downloadPercent: Schema.NullOr<Schema.Number>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.String>;
        readonly errorContext: Schema.NullOr<Schema.Literals<readonly ["check", "download", "install"]>>;
        readonly canRetry: Schema.Boolean;
        readonly notAppliedVersion: Schema.optionalKey<Schema.String>;
    }>;
}>;
export type DesktopUpdateStatusReport = typeof DesktopUpdateStatusReport.Type;
export declare const DesktopHostTelemetryMessage: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopTelemetryHello">;
    readonly electronPid: Schema.Int;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopTelemetry">;
    readonly sequence: Schema.Int;
    readonly sampledAtUnixMs: Schema.Int;
    readonly electronPid: Schema.Int;
    readonly power: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
        readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly idleSeconds: Schema.NullOr<Schema.Number>;
        readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly suspended: Schema.Boolean;
        readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
        readonly stale: Schema.Boolean;
        readonly updatedAt: Schema.DateTimeUtcFromString;
    }>;
    readonly speedLimitPercent: Schema.OptionFromNullOr<Schema.Number>;
    readonly electronProcesses: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly creationTimeMs: Schema.Int;
        readonly type: Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly serviceName: Schema.optionalKey<Schema.String>;
        readonly cpuPercent: Schema.Number;
        readonly cumulativeCpuSeconds: Schema.optionalKey<Schema.Number>;
        readonly idleWakeupsPerSecond: Schema.Number;
        readonly workingSetBytes: Schema.Int;
        readonly peakWorkingSetBytes: Schema.Int;
    }>>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"desktopUpdateStatus">;
    readonly requestId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly outcome: Schema.optionalKey<Schema.Literals<readonly ["ready-to-install", "up-to-date", "failed"]>>;
    readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly state: Schema.Struct<{
        readonly enabled: Schema.Boolean;
        readonly status: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
        readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
        readonly currentVersion: Schema.String;
        readonly hostArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly appArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly runningUnderArm64Translation: Schema.Boolean;
        readonly availableVersion: Schema.NullOr<Schema.String>;
        readonly downloadedVersion: Schema.NullOr<Schema.String>;
        readonly releaseNotes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.String;
            readonly items: Schema.$Array<Schema.String>;
            readonly totalItems: Schema.Number;
        }>>;
        readonly omittedReleaseCount: Schema.Number;
        readonly downloadPercent: Schema.NullOr<Schema.Number>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.String>;
        readonly errorContext: Schema.NullOr<Schema.Literals<readonly ["check", "download", "install"]>>;
        readonly canRetry: Schema.Boolean;
        readonly notAppliedVersion: Schema.optionalKey<Schema.String>;
    }>;
}>]>;
export type DesktopHostTelemetryMessage = typeof DesktopHostTelemetryMessage.Type;
export declare const DesktopTelemetrySetDiagnosticsDemand: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"setDiagnosticsDemand">;
    readonly enabled: Schema.Boolean;
}>;
export type DesktopTelemetrySetDiagnosticsDemand = typeof DesktopTelemetrySetDiagnosticsDemand.Type;
export declare const DesktopTelemetrySetHostPowerIntervals: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"setHostPowerIntervals">;
    readonly activeIntervalMs: Schema.Int;
    readonly idleIntervalMs: Schema.Int;
}>;
export type DesktopTelemetrySetHostPowerIntervals = typeof DesktopTelemetrySetHostPowerIntervals.Type;
/** Runs check/download/quit-and-install without local confirmation; the remote RPC click supplies consent. */
export declare const DesktopTelemetryRequestDesktopUpdate: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"requestDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DesktopTelemetryRequestDesktopUpdate = typeof DesktopTelemetryRequestDesktopUpdate.Type;
export declare const DesktopTelemetryCommitDesktopUpdate: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"commitDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DesktopTelemetryCommitDesktopUpdate = typeof DesktopTelemetryCommitDesktopUpdate.Type;
export declare const DesktopTelemetryCancelDesktopUpdate: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"cancelDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DesktopTelemetryCancelDesktopUpdate = typeof DesktopTelemetryCancelDesktopUpdate.Type;
export declare const DesktopTelemetryControlMessage: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"setDiagnosticsDemand">;
    readonly enabled: Schema.Boolean;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"setHostPowerIntervals">;
    readonly activeIntervalMs: Schema.Int;
    readonly idleIntervalMs: Schema.Int;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"requestDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"commitDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"cancelDesktopUpdate">;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type DesktopTelemetryControlMessage = typeof DesktopTelemetryControlMessage.Type;
export declare const ResourceTelemetryProcess: Schema.Struct<{
    readonly identity: Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.Int;
    }>;
    readonly ppid: Schema.Int;
    readonly childPids: Schema.$Array<Schema.Int>;
    readonly depth: Schema.Int;
    readonly name: Schema.String;
    readonly command: Schema.String;
    readonly status: Schema.String;
    readonly category: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
    readonly electronType: Schema.optionalKey<Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>>;
    readonly electronServiceName: Schema.optionalKey<Schema.String>;
    readonly cpuPercent: Schema.Number;
    readonly cpuTimeMs: Schema.Int;
    readonly residentBytes: Schema.Int;
    readonly peakResidentBytes: Schema.Int;
    readonly virtualBytes: Schema.Int;
    readonly ioReadBytes: Schema.Int;
    readonly ioWriteBytes: Schema.Int;
    readonly ioReadBytesPerSecond: Schema.Number;
    readonly ioWriteBytesPerSecond: Schema.Number;
    readonly ioSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
    readonly idleWakeupsPerSecond: Schema.optionalKey<Schema.Number>;
    readonly runTimeMs: Schema.Int;
    readonly firstSeenAt: Schema.DateTimeUtc;
    readonly lastSeenAt: Schema.DateTimeUtc;
}>;
export type ResourceTelemetryProcess = typeof ResourceTelemetryProcess.Type;
export declare const ResourceTelemetryAggregate: Schema.Struct<{
    readonly processCount: Schema.Int;
    readonly currentCpuPercent: Schema.Number;
    readonly cpuTimeMs: Schema.Int;
    readonly currentRssBytes: Schema.Int;
    readonly peakRssBytes: Schema.Int;
    readonly ioReadBytes: Schema.Int;
    readonly ioWriteBytes: Schema.Int;
    readonly ioReadBytesPerSecond: Schema.Number;
    readonly ioWriteBytesPerSecond: Schema.Number;
    readonly processStarts: Schema.Int;
    readonly processExits: Schema.Int;
}>;
export type ResourceTelemetryAggregate = typeof ResourceTelemetryAggregate.Type;
export declare const ResourceTelemetryGroups: Schema.Struct<{
    readonly backend: Schema.Struct<{
        readonly processCount: Schema.Int;
        readonly currentCpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly currentRssBytes: Schema.Int;
        readonly peakRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioReadBytesPerSecond: Schema.Number;
        readonly ioWriteBytesPerSecond: Schema.Number;
        readonly processStarts: Schema.Int;
        readonly processExits: Schema.Int;
    }>;
    readonly electron: Schema.Struct<{
        readonly processCount: Schema.Int;
        readonly currentCpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly currentRssBytes: Schema.Int;
        readonly peakRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioReadBytesPerSecond: Schema.Number;
        readonly ioWriteBytesPerSecond: Schema.Number;
        readonly processStarts: Schema.Int;
        readonly processExits: Schema.Int;
    }>;
    readonly monitor: Schema.Struct<{
        readonly processCount: Schema.Int;
        readonly currentCpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly currentRssBytes: Schema.Int;
        readonly peakRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioReadBytesPerSecond: Schema.Number;
        readonly ioWriteBytesPerSecond: Schema.Number;
        readonly processStarts: Schema.Int;
        readonly processExits: Schema.Int;
    }>;
    readonly allT3: Schema.Struct<{
        readonly processCount: Schema.Int;
        readonly currentCpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly currentRssBytes: Schema.Int;
        readonly peakRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioReadBytesPerSecond: Schema.Number;
        readonly ioWriteBytesPerSecond: Schema.Number;
        readonly processStarts: Schema.Int;
        readonly processExits: Schema.Int;
    }>;
}>;
export type ResourceTelemetryGroups = typeof ResourceTelemetryGroups.Type;
export declare const ResourceTelemetrySourceHealth: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
    readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
    readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ResourceTelemetrySourceHealth = typeof ResourceTelemetrySourceHealth.Type;
export declare const ResourceTelemetryHealth: Schema.Struct<{
    readonly native: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
        readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
        readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly desktop: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
        readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
        readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly sidecarVersion: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly sidecarPid: Schema.Option<Schema.Int>;
    readonly restartCount: Schema.Int;
    readonly collectionDurationMicros: Schema.Int;
    readonly scannedProcessCount: Schema.Int;
    readonly retainedProcessCount: Schema.Int;
    readonly inaccessibleProcessCount: Schema.Int;
}>;
export type ResourceTelemetryHealth = typeof ResourceTelemetryHealth.Type;
export declare const ResourceAttributionEntry: Schema.Struct<{
    readonly component: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly operation: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly logicalReadBytes: Schema.Int;
    readonly logicalWriteBytes: Schema.Int;
    readonly count: Schema.Int;
    readonly durationMs: Schema.Int;
}>;
export type ResourceAttributionEntry = typeof ResourceAttributionEntry.Type;
export declare const ResourceAttributionSnapshot: Schema.Struct<{
    readonly readAt: Schema.DateTimeUtc;
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly component: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly operation: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly logicalReadBytes: Schema.Int;
        readonly logicalWriteBytes: Schema.Int;
        readonly count: Schema.Int;
        readonly durationMs: Schema.Int;
    }>>;
}>;
export type ResourceAttributionSnapshot = typeof ResourceAttributionSnapshot.Type;
export declare const ResourceTelemetrySnapshot: Schema.Struct<{
    readonly readAt: Schema.DateTimeUtc;
    readonly sampleIntervalMs: Schema.Int;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly identity: Schema.Struct<{
            readonly pid: Schema.Int;
            readonly startTimeMs: Schema.Int;
        }>;
        readonly ppid: Schema.Int;
        readonly childPids: Schema.$Array<Schema.Int>;
        readonly depth: Schema.Int;
        readonly name: Schema.String;
        readonly command: Schema.String;
        readonly status: Schema.String;
        readonly category: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
        readonly electronType: Schema.optionalKey<Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>>;
        readonly electronServiceName: Schema.optionalKey<Schema.String>;
        readonly cpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly residentBytes: Schema.Int;
        readonly peakResidentBytes: Schema.Int;
        readonly virtualBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioReadBytesPerSecond: Schema.Number;
        readonly ioWriteBytesPerSecond: Schema.Number;
        readonly ioSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
        readonly idleWakeupsPerSecond: Schema.optionalKey<Schema.Number>;
        readonly runTimeMs: Schema.Int;
        readonly firstSeenAt: Schema.DateTimeUtc;
        readonly lastSeenAt: Schema.DateTimeUtc;
    }>>;
    readonly groups: Schema.Struct<{
        readonly backend: Schema.Struct<{
            readonly processCount: Schema.Int;
            readonly currentCpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly currentRssBytes: Schema.Int;
            readonly peakRssBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioReadBytesPerSecond: Schema.Number;
            readonly ioWriteBytesPerSecond: Schema.Number;
            readonly processStarts: Schema.Int;
            readonly processExits: Schema.Int;
        }>;
        readonly electron: Schema.Struct<{
            readonly processCount: Schema.Int;
            readonly currentCpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly currentRssBytes: Schema.Int;
            readonly peakRssBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioReadBytesPerSecond: Schema.Number;
            readonly ioWriteBytesPerSecond: Schema.Number;
            readonly processStarts: Schema.Int;
            readonly processExits: Schema.Int;
        }>;
        readonly monitor: Schema.Struct<{
            readonly processCount: Schema.Int;
            readonly currentCpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly currentRssBytes: Schema.Int;
            readonly peakRssBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioReadBytesPerSecond: Schema.Number;
            readonly ioWriteBytesPerSecond: Schema.Number;
            readonly processStarts: Schema.Int;
            readonly processExits: Schema.Int;
        }>;
        readonly allT3: Schema.Struct<{
            readonly processCount: Schema.Int;
            readonly currentCpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly currentRssBytes: Schema.Int;
            readonly peakRssBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioReadBytesPerSecond: Schema.Number;
            readonly ioWriteBytesPerSecond: Schema.Number;
            readonly processStarts: Schema.Int;
            readonly processExits: Schema.Int;
        }>;
    }>;
    readonly power: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
        readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly idleSeconds: Schema.NullOr<Schema.Number>;
        readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly suspended: Schema.Boolean;
        readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
        readonly stale: Schema.Boolean;
        readonly updatedAt: Schema.DateTimeUtc;
    }>;
    readonly speedLimitPercent: Schema.Option<Schema.Number>;
    readonly attribution: Schema.Struct<{
        readonly readAt: Schema.DateTimeUtc;
        readonly entries: Schema.$Array<Schema.Struct<{
            readonly component: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly operation: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logicalReadBytes: Schema.Int;
            readonly logicalWriteBytes: Schema.Int;
            readonly count: Schema.Int;
            readonly durationMs: Schema.Int;
        }>>;
    }>;
    readonly health: Schema.Struct<{
        readonly native: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
            readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
            readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly desktop: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
            readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
            readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly sidecarVersion: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly sidecarPid: Schema.Option<Schema.Int>;
        readonly restartCount: Schema.Int;
        readonly collectionDurationMicros: Schema.Int;
        readonly scannedProcessCount: Schema.Int;
        readonly retainedProcessCount: Schema.Int;
        readonly inaccessibleProcessCount: Schema.Int;
    }>;
}>;
export type ResourceTelemetrySnapshot = typeof ResourceTelemetrySnapshot.Type;
export declare const ResourceTelemetryHistoryInput: Schema.Struct<{
    readonly windowMs: Schema.Int;
    readonly bucketMs: Schema.Int;
}>;
export type ResourceTelemetryHistoryInput = typeof ResourceTelemetryHistoryInput.Type;
export declare const ResourceTelemetryHistoryBucket: Schema.Struct<{
    readonly startedAt: Schema.DateTimeUtc;
    readonly endedAt: Schema.DateTimeUtc;
    readonly avgCpuPercent: Schema.Number;
    readonly maxCpuPercent: Schema.Number;
    readonly maxRssBytes: Schema.Int;
    readonly ioReadBytes: Schema.Int;
    readonly ioWriteBytes: Schema.Int;
    readonly maxProcessCount: Schema.Int;
}>;
export type ResourceTelemetryHistoryBucket = typeof ResourceTelemetryHistoryBucket.Type;
export declare const ResourceTelemetryProcessSummary: Schema.Struct<{
    readonly identity: Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.Int;
    }>;
    readonly ppid: Schema.Int;
    readonly depth: Schema.Int;
    readonly name: Schema.String;
    readonly command: Schema.String;
    readonly category: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
    readonly firstSeenAt: Schema.DateTimeUtc;
    readonly lastSeenAt: Schema.DateTimeUtc;
    readonly currentCpuPercent: Schema.Number;
    readonly avgCpuPercent: Schema.Number;
    readonly maxCpuPercent: Schema.Number;
    readonly cpuTimeMs: Schema.Int;
    readonly currentRssBytes: Schema.Int;
    readonly peakRssBytes: Schema.Int;
    readonly ioReadBytes: Schema.Int;
    readonly ioWriteBytes: Schema.Int;
    readonly ioSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
    readonly sampleCount: Schema.Int;
}>;
export type ResourceTelemetryProcessSummary = typeof ResourceTelemetryProcessSummary.Type;
export declare const ResourceTelemetryHistory: Schema.Struct<{
    readonly readAt: Schema.DateTimeUtc;
    readonly windowMs: Schema.Int;
    readonly bucketMs: Schema.Int;
    readonly sampleIntervalMs: Schema.Int;
    readonly retainedSampleCount: Schema.Int;
    readonly buckets: Schema.$Array<Schema.Struct<{
        readonly startedAt: Schema.DateTimeUtc;
        readonly endedAt: Schema.DateTimeUtc;
        readonly avgCpuPercent: Schema.Number;
        readonly maxCpuPercent: Schema.Number;
        readonly maxRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly maxProcessCount: Schema.Int;
    }>>;
    readonly topProcesses: Schema.$Array<Schema.Struct<{
        readonly identity: Schema.Struct<{
            readonly pid: Schema.Int;
            readonly startTimeMs: Schema.Int;
        }>;
        readonly ppid: Schema.Int;
        readonly depth: Schema.Int;
        readonly name: Schema.String;
        readonly command: Schema.String;
        readonly category: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
        readonly firstSeenAt: Schema.DateTimeUtc;
        readonly lastSeenAt: Schema.DateTimeUtc;
        readonly currentCpuPercent: Schema.Number;
        readonly avgCpuPercent: Schema.Number;
        readonly maxCpuPercent: Schema.Number;
        readonly cpuTimeMs: Schema.Int;
        readonly currentRssBytes: Schema.Int;
        readonly peakRssBytes: Schema.Int;
        readonly ioReadBytes: Schema.Int;
        readonly ioWriteBytes: Schema.Int;
        readonly ioSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
        readonly sampleCount: Schema.Int;
    }>>;
    readonly health: Schema.Struct<{
        readonly native: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
            readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
            readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly desktop: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
            readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
            readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly sidecarVersion: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly sidecarPid: Schema.Option<Schema.Int>;
        readonly restartCount: Schema.Int;
        readonly collectionDurationMicros: Schema.Int;
        readonly scannedProcessCount: Schema.Int;
        readonly retainedProcessCount: Schema.Int;
        readonly inaccessibleProcessCount: Schema.Int;
    }>;
}>;
export type ResourceTelemetryHistory = typeof ResourceTelemetryHistory.Type;
export declare const ResourceTelemetryRetryResult: Schema.Struct<{
    readonly accepted: Schema.Boolean;
    readonly snapshot: Schema.Struct<{
        readonly readAt: Schema.DateTimeUtc;
        readonly sampleIntervalMs: Schema.Int;
        readonly processes: Schema.$Array<Schema.Struct<{
            readonly identity: Schema.Struct<{
                readonly pid: Schema.Int;
                readonly startTimeMs: Schema.Int;
            }>;
            readonly ppid: Schema.Int;
            readonly childPids: Schema.$Array<Schema.Int>;
            readonly depth: Schema.Int;
            readonly name: Schema.String;
            readonly command: Schema.String;
            readonly status: Schema.String;
            readonly category: Schema.Literals<readonly ["server", "server-child", "provider-root", "terminal-root", "electron-main", "electron-renderer", "electron-gpu", "electron-utility", "resource-monitor", "unknown-t3"]>;
            readonly electronType: Schema.optionalKey<Schema.Literals<readonly ["Browser", "Tab", "Utility", "Zygote", "Sandbox helper", "GPU", "Pepper Plugin", "Pepper Plugin Broker", "Unknown"]>>;
            readonly electronServiceName: Schema.optionalKey<Schema.String>;
            readonly cpuPercent: Schema.Number;
            readonly cpuTimeMs: Schema.Int;
            readonly residentBytes: Schema.Int;
            readonly peakResidentBytes: Schema.Int;
            readonly virtualBytes: Schema.Int;
            readonly ioReadBytes: Schema.Int;
            readonly ioWriteBytes: Schema.Int;
            readonly ioReadBytesPerSecond: Schema.Number;
            readonly ioWriteBytesPerSecond: Schema.Number;
            readonly ioSemantics: Schema.Literals<readonly ["storage", "logical", "all-io", "unavailable"]>;
            readonly idleWakeupsPerSecond: Schema.optionalKey<Schema.Number>;
            readonly runTimeMs: Schema.Int;
            readonly firstSeenAt: Schema.DateTimeUtc;
            readonly lastSeenAt: Schema.DateTimeUtc;
        }>>;
        readonly groups: Schema.Struct<{
            readonly backend: Schema.Struct<{
                readonly processCount: Schema.Int;
                readonly currentCpuPercent: Schema.Number;
                readonly cpuTimeMs: Schema.Int;
                readonly currentRssBytes: Schema.Int;
                readonly peakRssBytes: Schema.Int;
                readonly ioReadBytes: Schema.Int;
                readonly ioWriteBytes: Schema.Int;
                readonly ioReadBytesPerSecond: Schema.Number;
                readonly ioWriteBytesPerSecond: Schema.Number;
                readonly processStarts: Schema.Int;
                readonly processExits: Schema.Int;
            }>;
            readonly electron: Schema.Struct<{
                readonly processCount: Schema.Int;
                readonly currentCpuPercent: Schema.Number;
                readonly cpuTimeMs: Schema.Int;
                readonly currentRssBytes: Schema.Int;
                readonly peakRssBytes: Schema.Int;
                readonly ioReadBytes: Schema.Int;
                readonly ioWriteBytes: Schema.Int;
                readonly ioReadBytesPerSecond: Schema.Number;
                readonly ioWriteBytesPerSecond: Schema.Number;
                readonly processStarts: Schema.Int;
                readonly processExits: Schema.Int;
            }>;
            readonly monitor: Schema.Struct<{
                readonly processCount: Schema.Int;
                readonly currentCpuPercent: Schema.Number;
                readonly cpuTimeMs: Schema.Int;
                readonly currentRssBytes: Schema.Int;
                readonly peakRssBytes: Schema.Int;
                readonly ioReadBytes: Schema.Int;
                readonly ioWriteBytes: Schema.Int;
                readonly ioReadBytesPerSecond: Schema.Number;
                readonly ioWriteBytesPerSecond: Schema.Number;
                readonly processStarts: Schema.Int;
                readonly processExits: Schema.Int;
            }>;
            readonly allT3: Schema.Struct<{
                readonly processCount: Schema.Int;
                readonly currentCpuPercent: Schema.Number;
                readonly cpuTimeMs: Schema.Int;
                readonly currentRssBytes: Schema.Int;
                readonly peakRssBytes: Schema.Int;
                readonly ioReadBytes: Schema.Int;
                readonly ioWriteBytes: Schema.Int;
                readonly ioReadBytesPerSecond: Schema.Number;
                readonly ioWriteBytesPerSecond: Schema.Number;
                readonly processStarts: Schema.Int;
                readonly processExits: Schema.Int;
            }>;
        }>;
        readonly power: Schema.Struct<{
            readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
            readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
            readonly idleSeconds: Schema.NullOr<Schema.Number>;
            readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
            readonly suspended: Schema.Boolean;
            readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
            readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
            readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
            readonly stale: Schema.Boolean;
            readonly updatedAt: Schema.DateTimeUtc;
        }>;
        readonly speedLimitPercent: Schema.Option<Schema.Number>;
        readonly attribution: Schema.Struct<{
            readonly readAt: Schema.DateTimeUtc;
            readonly entries: Schema.$Array<Schema.Struct<{
                readonly component: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly operation: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logicalReadBytes: Schema.Int;
                readonly logicalWriteBytes: Schema.Int;
                readonly count: Schema.Int;
                readonly durationMs: Schema.Int;
            }>>;
        }>;
        readonly health: Schema.Struct<{
            readonly native: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
                readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
                readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly desktop: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["starting", "healthy", "degraded", "unavailable", "stopped"]>;
                readonly lastSampleAt: Schema.Option<Schema.DateTimeUtc>;
                readonly lastError: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly sidecarVersion: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly sidecarPid: Schema.Option<Schema.Int>;
            readonly restartCount: Schema.Int;
            readonly collectionDurationMicros: Schema.Int;
            readonly scannedProcessCount: Schema.Int;
            readonly retainedProcessCount: Schema.Int;
            readonly inaccessibleProcessCount: Schema.Int;
        }>;
    }>;
}>;
export type ResourceTelemetryRetryResult = typeof ResourceTelemetryRetryResult.Type;
