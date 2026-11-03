import * as Schema from "effect/Schema";
import * as Effect from "effect/Effect";
import * as Path from "effect/Path";
import * as ProcessRunner from "../processRunner.ts";
export declare const deviceToolMaintenanceScript: string;
declare const DeviceToolMaintenanceError_base: Schema.Class<DeviceToolMaintenanceError, Schema.TaggedStruct<"DeviceToolMaintenanceError", {
    readonly operation: Schema.Literal<"prune">;
    readonly tool: Schema.Literals<readonly ["hub", "agent"]>;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
declare class DeviceToolMaintenanceError extends DeviceToolMaintenanceError_base {
    get message(): string;
}
export declare const pruneLocalDeviceTools: (baseDir: string, nodePath: string, tool: "agent" | "hub") => Effect.Effect<void, DeviceToolMaintenanceError | ProcessRunner.ProcessOutputLimitError | ProcessRunner.ProcessReadError | ProcessRunner.ProcessSpawnError | ProcessRunner.ProcessStdinError | ProcessRunner.ProcessTimeoutError, Path.Path | ProcessRunner.ProcessRunner>;
export {};
