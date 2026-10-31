import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.js";
export declare const COMPOSER_CONTEXT_CLIPBOARD_MIME = "web application/x-t3-context-fragment+json";
export declare const ComposerContextClipboardFragment: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly source: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly messageId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
    }>;
    readonly records: Schema.compose<ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>, Schema.$Array<Schema.Unknown>>;
}>;
export type ComposerContextClipboardFragment = typeof ComposerContextClipboardFragment.Type;
