import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as ServerConfig from "../../../config.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
import * as DeviceService from "../../../device/DeviceService.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as ProjectService from "../../../project/ProjectService.ts";
export declare const DeviceScreenshotTool: Tool.Tool<"device_screenshot", {
    readonly parameters: Schema.Struct<{
        readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly success: Schema.Struct<{
        readonly device: Schema.Struct<{
            readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly version: Schema.String;
            readonly booted: Schema.Boolean;
            readonly physical: Schema.Boolean;
        }>;
        readonly screenshot: Schema.Struct<{
            readonly mimeType: Schema.Literal<"image/png">;
            readonly data: Schema.String;
            readonly width: Schema.Int;
            readonly height: Schema.Int;
        }>;
    }>;
    readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
    readonly failureMode: "error";
}, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
export declare const DeviceStandardToolkit: Toolkit.Toolkit<{
    readonly device_close: Tool.Tool<"device_close", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shutdown: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.$Record<Schema.String, Schema.Never>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly device_list: Tool.Tool<"device_list", {
        readonly parameters: Schema.Struct<{
            readonly hostId: Schema.optional<Schema.String>;
        }>;
        readonly success: Schema.Struct<{
            readonly hostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
                readonly detail: Schema.optional<Schema.String>;
                readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly hosts: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platforms: Schema.$Array<Schema.Struct<{
                    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                    readonly available: Schema.Boolean;
                    readonly reason: Schema.optional<Schema.String>;
                }>>;
                readonly tools: Schema.optional<Schema.Struct<{
                    readonly hub: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                    readonly agent: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                }>>;
                readonly toolInspectionError: Schema.optional<Schema.String>;
                readonly hubInstalled: Schema.Boolean;
                readonly agentDeviceInstalled: Schema.Boolean;
                readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platforms: Schema.$Array<Schema.Struct<{
                    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                    readonly available: Schema.Boolean;
                    readonly reason: Schema.optional<Schema.String>;
                }>>;
                readonly tools: Schema.optional<Schema.Struct<{
                    readonly hub: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                    readonly agent: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                }>>;
                readonly toolInspectionError: Schema.optional<Schema.String>;
                readonly hubInstalled: Schema.Boolean;
                readonly agentDeviceInstalled: Schema.Boolean;
                readonly kind: Schema.Literal<"eas">;
            }>]>>;
            readonly devices: Schema.$Array<Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>>;
            readonly open: Schema.$Array<Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly device_open: Tool.Tool<"device_open", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly platform: Schema.optional<Schema.Literals<readonly ["ios", "android"]>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly device: Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>;
            readonly agentDevice: Schema.Struct<{
                readonly command: Schema.String;
                readonly targetArgs: Schema.$Array<Schema.String>;
            }>;
            readonly quickStart: Schema.String;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | Path.Path | ProjectService.ProjectService | ServerConfig.ServerConfig | ThreadManagementService.ThreadManagementService>;
}>;
export declare const DeviceScreenshotToolkit: Toolkit.Toolkit<{
    readonly device_screenshot: Tool.Tool<"device_screenshot", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly device: Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>;
            readonly screenshot: Schema.Struct<{
                readonly mimeType: Schema.Literal<"image/png">;
                readonly data: Schema.String;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
export declare const DeviceToolkit: Toolkit.Toolkit<{
    readonly device_close: Tool.Tool<"device_close", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shutdown: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.$Record<Schema.String, Schema.Never>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly device_list: Tool.Tool<"device_list", {
        readonly parameters: Schema.Struct<{
            readonly hostId: Schema.optional<Schema.String>;
        }>;
        readonly success: Schema.Struct<{
            readonly hostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
                readonly detail: Schema.optional<Schema.String>;
                readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly hosts: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platforms: Schema.$Array<Schema.Struct<{
                    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                    readonly available: Schema.Boolean;
                    readonly reason: Schema.optional<Schema.String>;
                }>>;
                readonly tools: Schema.optional<Schema.Struct<{
                    readonly hub: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                    readonly agent: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                }>>;
                readonly toolInspectionError: Schema.optional<Schema.String>;
                readonly hubInstalled: Schema.Boolean;
                readonly agentDeviceInstalled: Schema.Boolean;
                readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platforms: Schema.$Array<Schema.Struct<{
                    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                    readonly available: Schema.Boolean;
                    readonly reason: Schema.optional<Schema.String>;
                }>>;
                readonly tools: Schema.optional<Schema.Struct<{
                    readonly hub: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                    readonly agent: Schema.Struct<{
                        readonly requiredVersion: Schema.String;
                        readonly installedVersions: Schema.$Array<Schema.String>;
                        readonly runningVersion: Schema.NullOr<Schema.String>;
                    }>;
                }>>;
                readonly toolInspectionError: Schema.optional<Schema.String>;
                readonly hubInstalled: Schema.Boolean;
                readonly agentDeviceInstalled: Schema.Boolean;
                readonly kind: Schema.Literal<"eas">;
            }>]>>;
            readonly devices: Schema.$Array<Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>>;
            readonly open: Schema.$Array<Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly device_open: Tool.Tool<"device_open", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly platform: Schema.optional<Schema.Literals<readonly ["ios", "android"]>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly device: Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>;
            readonly agentDevice: Schema.Struct<{
                readonly command: Schema.String;
                readonly targetArgs: Schema.$Array<Schema.String>;
            }>;
            readonly quickStart: Schema.String;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | Path.Path | ProjectService.ProjectService | ServerConfig.ServerConfig | ThreadManagementService.ThreadManagementService>;
    readonly device_screenshot: Tool.Tool<"device_screenshot", {
        readonly parameters: Schema.Struct<{
            readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly device: Schema.Struct<{
                readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly platform: Schema.Literals<readonly ["ios", "android"]>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly version: Schema.String;
                readonly booted: Schema.Boolean;
                readonly physical: Schema.Boolean;
            }>;
            readonly screenshot: Schema.Struct<{
                readonly mimeType: Schema.Literal<"image/png">;
                readonly data: Schema.String;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").DeviceToolUnavailableError, typeof import("@t3tools/contracts").DeviceHostUnavailableError, typeof import("@t3tools/contracts").DevicePlatformUnavailableError, typeof import("@t3tools/contracts").DeviceNotFoundError, typeof import("@t3tools/contracts").DeviceBootError, typeof import("@t3tools/contracts").DeviceOperationError, typeof import("@t3tools/contracts").DeviceActionUnavailableError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, DeviceService.DeviceService | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
