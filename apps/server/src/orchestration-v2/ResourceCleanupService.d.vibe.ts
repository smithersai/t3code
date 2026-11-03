import { ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ServerConfig from "../config.ts";
import * as PreviewManager from "../preview/Manager.ts";
import * as ScheduledTaskService from "../scheduledTasks/ScheduledTaskService.ts";
import * as TerminalManager from "../terminal/Manager.ts";
declare const ResourceCleanupError_base: Schema.Class<ResourceCleanupError, Schema.TaggedStruct<"ResourceCleanupError", {
    readonly operation: Schema.Literals<readonly ["terminal", "preview", "attachment", "scheduled-tasks"]>;
    readonly threadId: Schema.optional<Schema.String>;
    readonly attachmentId: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ResourceCleanupError extends ResourceCleanupError_base {
}
declare const ResourceCleanupService_base: Context.Reference<{
    readonly cleanupScheduledTasks: (threadId: ThreadId) => Effect.Effect<void, ResourceCleanupError>;
    readonly cleanupTerminals: (threadId: string) => Effect.Effect<void, ResourceCleanupError>;
    readonly cleanupPreviews: (threadId: string) => Effect.Effect<void, ResourceCleanupError>;
    readonly cleanupAttachments: (attachmentIds: ReadonlyArray<string>) => Effect.Effect<void, ResourceCleanupError>;
}>;
export declare class ResourceCleanupService extends ResourceCleanupService_base {
}
export declare const layer: Layer.Layer<never, never, FileSystem.FileSystem | PreviewManager.PreviewManager | ScheduledTaskService.ScheduledTaskService | ServerConfig.ServerConfig | TerminalManager.TerminalManager>;
export {};
