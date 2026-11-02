import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.ts";
/** Image and file records reference `ChatAttachment` ids, never bytes. */
export declare const COMPOSER_CONTEXT_KINDS: readonly ["image", "file", "terminal", "element", "preview-annotation", "review-comment", "mention", "skill", "thread", "environment"];
export type KnownComposerContextKind = (typeof COMPOSER_CONTEXT_KINDS)[number];
export declare const COMPOSER_CONTEXT_LABEL_MAX_CHARS = 200;
export declare const COMPOSER_CONTEXT_TERMINAL_TEXT_MAX_CHARS = 64000;
export declare const COMPOSER_CONTEXT_REVIEW_TEXT_MAX_CHARS = 16000;
export declare const COMPOSER_CONTEXT_REVIEW_DIFF_MAX_CHARS = 32000;
export declare const ComposerContextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
export type ComposerContextId = typeof ComposerContextId.Type;
export declare const ComposerContextReferenceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextReferenceId">;
export type ComposerContextReferenceId = typeof ComposerContextReferenceId.Type;
export declare const ComposerContextKind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ComposerContextKind = typeof ComposerContextKind.Type;
export declare const PullRequestContextMetadata: Schema.Struct<{
    readonly number: Schema.Int;
    readonly title: Schema.String;
    readonly url: Schema.String;
    readonly headBranch: Schema.String;
    readonly baseBranch: Schema.String;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.Boolean;
}>;
export type PullRequestContextMetadata = typeof PullRequestContextMetadata.Type;
export declare const ImageContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly kind: Schema.Literal<"image">;
}>;
export type ImageContextRecord = typeof ImageContextRecord.Type;
export declare const FileContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly kind: Schema.Literal<"file">;
}>;
export type FileContextRecord = typeof FileContextRecord.Type;
export declare const TerminalContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.Literal<"terminal">;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalLabel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly lineStart: Schema.Int;
    readonly lineEnd: Schema.Int;
    readonly text: Schema.String;
}>;
export type TerminalContextRecord = typeof TerminalContextRecord.Type;
export declare const ElementContextSource: Schema.Struct<{
    readonly functionName: Schema.NullOr<Schema.String>;
    readonly fileName: Schema.NullOr<Schema.String>;
    readonly lineNumber: Schema.NullOr<Schema.Int>;
    readonly columnNumber: Schema.NullOr<Schema.Int>;
}>;
export type ElementContextSource = typeof ElementContextSource.Type;
export declare const ElementContextDetails: Schema.Struct<{
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
}>;
export type ElementContextDetails = typeof ElementContextDetails.Type;
export declare const ElementContextRecord: Schema.Struct<{
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
}>;
export type ElementContextRecord = typeof ElementContextRecord.Type;
export declare const PreviewAnnotationContextRecord: Schema.Struct<{
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
}>;
export type PreviewAnnotationContextRecord = typeof PreviewAnnotationContextRecord.Type;
export declare const ReviewCommentContextRecord: Schema.Struct<{
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
}>;
export type ReviewCommentContextRecord = typeof ReviewCommentContextRecord.Type;
export declare const MentionContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.Literal<"mention">;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type MentionContextRecord = typeof MentionContextRecord.Type;
export declare const SkillContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.Literal<"skill">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type SkillContextRecord = typeof SkillContextRecord.Type;
export declare const ThreadContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.Literal<"thread">;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly title: Schema.String;
}>;
export type ThreadContextRecord = typeof ThreadContextRecord.Type;
/**
 * One of the user's machines (a T3 Code environment), mentioned so the agent
 * links it or works there. Only identity travels: the agent links it by id,
 * and the user's client supplies its addresses.
 */
export declare const EnvironmentContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.Literal<"environment">;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type EnvironmentContextRecord = typeof EnvironmentContextRecord.Type;
/** Excludes known discriminators so malformed known records fail their own schema. */
export declare const UnknownContextRecord: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
    readonly label: Schema.String;
    readonly kind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly payload: Schema.Unknown;
}>;
export type UnknownContextRecord = typeof UnknownContextRecord.Type;
export declare const KnownComposerContextRecord: Schema.Union<readonly [Schema.Struct<{
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
}>]>;
export type KnownComposerContextRecord = typeof KnownComposerContextRecord.Type;
export declare const ComposerContextRecord: Schema.Union<readonly [Schema.Struct<{
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
}>]>;
export type ComposerContextRecord = typeof ComposerContextRecord.Type;
export declare const COMPOSER_CONTEXT_MAX_RECORDS = 200;
/**
 * Marks a user message as a guest's, sent by the owner. The message `text` keeps the attributed
 * form the agent reads; clients show `text` here with `name` beside it. Only the server sets it.
 */
export declare const GuestMessageAttribution: Schema.Struct<{
    readonly guestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly text: Schema.String;
    /** The link the guest used. Only that link's guest may load the message's files. */
    readonly shareId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">>;
}>;
export type GuestMessageAttribution = typeof GuestMessageAttribution.Type;
/** Structured context riding on a user message. Undecodable records are dropped, not fatal. */
export declare const OrchestrationMessageContext: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly guest: Schema.optional<Schema.Struct<{
        readonly guestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly text: Schema.String;
        /** The link the guest used. Only that link's guest may load the message's files. */
        readonly shareId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">>;
    }>>;
    readonly records: Schema.decodeTo<ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
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
}>;
export type OrchestrationMessageContext = typeof OrchestrationMessageContext.Type;
