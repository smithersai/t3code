import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as ServerSecretStore from "../../../auth/ServerSecretStore.ts";
import * as ServerConfig from "../../../config.ts";
import * as DocumentText from "../../../provider/DocumentText.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
export declare const AttachmentToolkit: Toolkit.Toolkit<{
    readonly t3_attachment_discard: Tool.Tool<"t3_attachment_discard", {
        readonly parameters: Schema.Struct<{
            readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly success: Schema.Struct<{}>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | ServerConfig.ServerConfig | ServerSecretStore.ServerSecretStore | ThreadManagementService.ThreadManagementService>;
    readonly t3_attachment_prepare_upload: Tool.Tool<"t3_attachment_prepare_upload", {
        readonly parameters: Schema.Struct<{
            readonly upload: Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.optionalKey<Schema.Literal<"image">>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.Literals<readonly ["image/gif", "image/jpeg", "image/png", "image/webp"]>;
                readonly sizeBytes: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
            }>]>;
        }>;
        readonly success: Schema.Struct<{
            readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly relativeUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly expiresAt: Schema.Number;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | ServerConfig.ServerConfig | ServerSecretStore.ServerSecretStore | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_send_attachments: Tool.Tool<"t3_thread_send_attachments", {
        readonly parameters: Schema.Struct<{
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly message: Schema.optional<Schema.String>;
            readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"image">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
            }>]>>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
            readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            readonly status: Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | DocumentText.DocumentText | FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | ServerConfig.ServerConfig | ServerSecretStore.ServerSecretStore | ThreadManagementService.ThreadManagementService>;
}>;
