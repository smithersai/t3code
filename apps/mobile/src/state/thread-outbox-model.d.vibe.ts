import type { EnvironmentShellStatus } from "@t3tools/client-runtime/state/shell";
import type { ThreadFamilyRead } from "@t3tools/client-runtime/state/threads";
import { CommandId, EnvironmentId, MessageId, OrchestrationMessageContext, ThreadId, type ModelSelection as ModelSelectionType, type ProjectId as ProjectIdType, type ProviderInteractionMode as ProviderInteractionModeType, type RuntimeMode as RuntimeModeType, type ServerProvider } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import type { ComposerDispatchMode } from "@t3tools/client-runtime/state/composer-dispatch";
import type { DraftComposerAttachment } from "../lib/composerImages";
export declare const QueuedThreadMessageSchema: Schema.Struct<{
    readonly schemaVersion: Schema.Literals<readonly [1, 2, 3, 4]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly text: Schema.String;
    readonly context: Schema.optional<Schema.Struct<{
        readonly version: Schema.Literal<1>;
        readonly guest: Schema.optional<Schema.Struct<{
            readonly guestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly text: Schema.String;
            readonly shareId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">>;
        }>>;
        readonly records: Schema.decodeTo<import("@t3tools/contracts").ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly kind: Schema.Literal<"image">;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly kind: Schema.Literal<"file">;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"terminal">;
            readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly terminalLabel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly lineStart: Schema.Int;
            readonly lineEnd: Schema.Int;
            readonly text: Schema.String;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly pageUrl: Schema.String;
            readonly pageTitle: Schema.NullOr<Schema.String>;
            readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly selector: Schema.NullOr<Schema.String>;
            readonly htmlPreview: Schema.String;
            readonly componentName: Schema.NullOr<Schema.String>;
            readonly source: Schema.NullOr<Schema.Struct<{
                readonly functionName: Schema.NullOr<Schema.String>;
                readonly fileName: Schema.NullOr<Schema.String>;
                readonly lineNumber: Schema.NullOr<Schema.Int>;
                readonly columnNumber: Schema.NullOr<Schema.Int>;
            }>>;
            readonly styles: Schema.String;
            readonly kind: Schema.Literal<"element">;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"preview-annotation">;
            readonly annotationId: Schema.String;
            readonly pageUrl: Schema.String;
            readonly pageTitle: Schema.NullOr<Schema.String>;
            readonly comment: Schema.String;
            readonly targetSummary: Schema.String;
            readonly styleChanges: Schema.$Array<Schema.String>;
            readonly elements: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly pageUrl: Schema.String;
                readonly pageTitle: Schema.NullOr<Schema.String>;
                readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly selector: Schema.NullOr<Schema.String>;
                readonly htmlPreview: Schema.String;
                readonly componentName: Schema.NullOr<Schema.String>;
                readonly source: Schema.NullOr<Schema.Struct<{
                    readonly functionName: Schema.NullOr<Schema.String>;
                    readonly fileName: Schema.NullOr<Schema.String>;
                    readonly lineNumber: Schema.NullOr<Schema.Int>;
                    readonly columnNumber: Schema.NullOr<Schema.Int>;
                }>>;
                readonly styles: Schema.String;
            }>>>;
            readonly elementIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
            readonly regionCount: Schema.optionalKey<Schema.Int>;
            readonly strokeCount: Schema.optionalKey<Schema.Int>;
            readonly styleChangeDetails: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly targetId: Schema.String;
                readonly selector: Schema.NullOr<Schema.String>;
                readonly property: Schema.String;
                readonly previousValue: Schema.String;
                readonly value: Schema.String;
            }>>>;
            readonly screenshotContextId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">>;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"review-comment">;
            readonly sectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sectionTitle: Schema.String;
            readonly filePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly startIndex: Schema.Int;
            readonly endIndex: Schema.Int;
            readonly rangeLabel: Schema.String;
            readonly text: Schema.String;
            readonly diff: Schema.String;
            readonly fenceLanguage: Schema.optionalKey<Schema.String>;
            readonly pullRequest: Schema.optionalKey<Schema.Struct<{
                readonly number: Schema.Int;
                readonly title: Schema.String;
                readonly url: Schema.String;
                readonly headBranch: Schema.String;
                readonly baseBranch: Schema.String;
                readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
                readonly isDraft: Schema.Boolean;
            }>>;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"mention">;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"skill">;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"thread">;
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly title: Schema.String;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.Literal<"environment">;
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        }>, Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
            readonly label: Schema.String;
            readonly kind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly payload: Schema.Unknown;
        }>]>>, Schema.$Array<Schema.Unknown>, never, never>;
    }>>;
    readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.String;
        readonly previewUri: Schema.String;
        readonly type: Schema.Literal<"image">;
        readonly name: Schema.String;
        readonly mimeType: Schema.String;
        readonly sizeBytes: Schema.Number;
        readonly fileUri: Schema.optional<Schema.String>;
        readonly dataUrl: Schema.optional<Schema.String>;
        readonly uploadedAttachmentId: Schema.optional<Schema.String>;
        readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    }>, Schema.Struct<{
        readonly id: Schema.String;
        readonly type: Schema.Literal<"file">;
        readonly name: Schema.String;
        readonly mimeType: Schema.String;
        readonly sizeBytes: Schema.Number;
        readonly fileUri: Schema.String;
        readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
        readonly uploadedAttachmentId: Schema.optional<Schema.String>;
        readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    }>]>>;
    readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>;
    readonly dispatchMode: Schema.optional<Schema.Literals<readonly ["auto", "queue", "steer", "restart"]>>;
    readonly runtimeMode: Schema.optional<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
    readonly interactionMode: Schema.optional<Schema.Literals<readonly ["default", "plan"]>>;
    readonly creation: Schema.optional<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly projectTitle: Schema.optional<Schema.String>;
        readonly projectCwd: Schema.optional<Schema.String>;
        readonly workspaceMode: Schema.Literals<readonly ["local", "worktree"]>;
        readonly branch: Schema.NullOr<Schema.String>;
        readonly worktreePath: Schema.NullOr<Schema.String>;
        readonly startFromOrigin: Schema.optional<Schema.Boolean>;
        readonly pullRequestReference: Schema.optional<Schema.String>;
    }>>;
    readonly createdAt: Schema.String;
}>;
export interface QueuedThreadCreation {
    readonly projectId: ProjectIdType;
    readonly projectTitle?: string;
    readonly projectCwd?: string;
    readonly workspaceMode: "local" | "worktree";
    readonly branch: string | null;
    readonly worktreePath: string | null;
    readonly startFromOrigin?: boolean;
    readonly pullRequestReference?: string;
}
export interface QueuedThreadMessage {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly messageId: MessageId;
    readonly commandId: CommandId;
    readonly text: string;
    readonly context?: OrchestrationMessageContext;
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly modelSelection?: ModelSelectionType;
    readonly runtimeMode?: RuntimeModeType;
    readonly interactionMode?: ProviderInteractionModeType;
    /** Captured at enqueue because draining may occur long after the tap. */
    readonly dispatchMode?: ComposerDispatchMode;
    readonly creation?: QueuedThreadCreation;
    readonly createdAt: string;
}
export interface ThreadSettingsSnapshot {
    readonly modelSelection: ModelSelectionType;
    readonly runtimeMode: RuntimeModeType;
    readonly interactionMode: ProviderInteractionModeType;
}
export declare function resolveQueuedThreadSettings(message: QueuedThreadMessage, thread: ThreadSettingsSnapshot, providers?: ReadonlyArray<Pick<ServerProvider, "instanceId" | "showInteractionModeToggle">>): ThreadSettingsSnapshot;
export declare function modelSelectionsEqual(left: ModelSelectionType, right: ModelSelectionType): boolean;
export declare function encodeQueuedThreadMessage(message: QueuedThreadMessage): unknown;
export declare function decodeQueuedThreadMessage(value: unknown): QueuedThreadMessage;
export declare function groupQueuedThreadMessages(messages: ReadonlyArray<QueuedThreadMessage>): Record<string, ReadonlyArray<QueuedThreadMessage>>;
export declare function flattenQueuedThreadMessages(queues: Record<string, ReadonlyArray<QueuedThreadMessage>>): ReadonlyArray<QueuedThreadMessage>;
export declare function threadOutboxRetryDelayMs(attempt: number): number;
export type ThreadOutboxDeliveryAction = "wait" | "remove" | "send";
export declare function resolveThreadOutboxDeliveryAction(input: {
    readonly isCreation: boolean;
    readonly threadExists: boolean;
    readonly shellStatus: EnvironmentShellStatus;
    readonly environmentConnected: boolean;
    readonly threadBusy: boolean;
    /**
     * Set when the shell can leave idle subagent children out: absence alone is not deletion there,
     * only a settled family read without the row is.
     */
    readonly familyRead?: ThreadFamilyRead;
}): ThreadOutboxDeliveryAction;
export type ThreadOutboxDispatchStep = {
    readonly step: "wait";
} | {
    readonly step: "remove";
} | {
    readonly step: "retry";
} | {
    readonly step: "restore";
    readonly reason: string;
} | {
    readonly step: "send";
};
export declare function resolveThreadOutboxDispatchStep(input: {
    readonly deliveryAction: ThreadOutboxDeliveryAction;
    readonly fileAttachments: ReadonlyArray<{
        readonly name: string;
        readonly sizeBytes: number;
    }>;
    readonly serverConfig: {
        readonly maxFileUploadBytes: number | undefined;
    } | null;
}): ThreadOutboxDispatchStep;
export declare function isQueuedThreadCreationSendable(message: QueuedThreadMessage): boolean;
/** Dispatch/auth rejections invalidate payloads; other typed failures may be disconnected transports and must retry. */
export declare function shouldRetryThreadOutboxDelivery(error: unknown): boolean;
export type ThreadOutboxCommandStage = "settings-sync" | "start-turn";
export type ThreadOutboxFailureAction = "retry" | "restore";
export declare function resolveThreadOutboxFailureAction(input: {
    readonly stage: ThreadOutboxCommandStage;
    readonly error: unknown;
    readonly interrupted: boolean;
}): ThreadOutboxFailureAction;
