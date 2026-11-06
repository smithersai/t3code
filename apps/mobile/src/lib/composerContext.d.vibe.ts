import { ComposerContextId, type ComposerContextRecord, OrchestrationMessageContext, type PullRequestContextMetadata, type ReviewCommentContextRecord, type ScopedThreadRef, type ServerProviderSkill, type ThreadContextRecord, type EnvironmentContextRecord, type EnvironmentId } from "@t3tools/contracts";
import { type ComposerInlineToken } from "@t3tools/shared/composerInlineTokens";
export declare function composerContextSendBlockReason(context?: OrchestrationMessageContext): string | null;
export declare function composerMentionPath(source: string, context?: OrchestrationMessageContext): string | null;
export interface ComposerDocumentAttachment {
    readonly attachmentId: string;
    readonly name: string;
    readonly mimeType: string;
    readonly sizeBytes: number;
}
export declare function composerDocumentAttachment(source: string, context?: OrchestrationMessageContext): ComposerDocumentAttachment | null;
export declare function composerDocumentAttachmentRecord(record: ComposerContextRecord | undefined): ComposerDocumentAttachment | null;
export declare function createComposerContextHistory(): (text: string, current?: OrchestrationMessageContext) => {
    readonly version: 1;
    readonly guest?: {
        readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
        readonly name: string;
        readonly text: string;
        readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
    } | undefined;
    readonly records: readonly ({
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly attachmentId: string;
        readonly name: string;
        readonly mimeType: string;
        readonly sizeBytes: number;
        readonly kind: "image";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly attachmentId: string;
        readonly name: string;
        readonly mimeType: string;
        readonly sizeBytes: number;
        readonly kind: "file";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "terminal";
        readonly terminalId: string;
        readonly terminalLabel: string;
        readonly lineStart: number;
        readonly lineEnd: number;
        readonly text: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly pageUrl: string;
        readonly pageTitle: string | null;
        readonly tagName: string;
        readonly selector: string | null;
        readonly htmlPreview: string;
        readonly componentName: string | null;
        readonly source: {
            readonly functionName: string | null;
            readonly fileName: string | null;
            readonly lineNumber: number | null;
            readonly columnNumber: number | null;
        } | null;
        readonly styles: string;
        readonly kind: "element";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "mention";
        readonly path: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "skill";
        readonly name: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "thread";
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly title: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "environment";
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: string;
        readonly payload: unknown;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "preview-annotation";
        readonly annotationId: string;
        readonly pageUrl: string;
        readonly pageTitle: string | null;
        readonly comment: string;
        readonly targetSummary: string;
        readonly styleChanges: readonly string[];
        readonly elements?: readonly {
            readonly pageUrl: string;
            readonly pageTitle: string | null;
            readonly tagName: string;
            readonly selector: string | null;
            readonly htmlPreview: string;
            readonly componentName: string | null;
            readonly source: {
                readonly functionName: string | null;
                readonly fileName: string | null;
                readonly lineNumber: number | null;
                readonly columnNumber: number | null;
            } | null;
            readonly styles: string;
        }[] | undefined;
        readonly elementIds?: readonly string[] | undefined;
        readonly regionCount?: number | undefined;
        readonly strokeCount?: number | undefined;
        readonly styleChangeDetails?: readonly {
            readonly targetId: string;
            readonly selector: string | null;
            readonly property: string;
            readonly previousValue: string;
            readonly value: string;
        }[] | undefined;
        readonly screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "review-comment";
        readonly sectionId: string;
        readonly sectionTitle: string;
        readonly filePath: string;
        readonly startIndex: number;
        readonly endIndex: number;
        readonly rangeLabel: string;
        readonly text: string;
        readonly diff: string;
        readonly fenceLanguage?: string | undefined;
        readonly pullRequest?: {
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly headBranch: string;
            readonly baseBranch: string;
            readonly state: "closed" | "merged" | "open";
            readonly isDraft: boolean;
        } | undefined;
    })[];
} | undefined;
/** Same identity as web: one record per thread, so re-attaching reuses the chip. */
export declare function threadComposerContext(ref: ScopedThreadRef, title: string): ThreadContextRecord;
/** Same identity as web: one record per machine, so mentioning it again reuses the chip. */
export declare function environmentComposerContext(environmentId: EnvironmentId, label: string): EnvironmentContextRecord;
export declare function pullRequestComposerContext(pullRequest: PullRequestContextMetadata, id: string, filePath?: string): ReviewCommentContextRecord;
export declare function composerSkillLabels(skills: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName" | "enabled" | "userInvocable">>): Map<string, string>;
export declare function composerContextEditorTokens(text: string, tokens: readonly ComposerInlineToken[], knownSkills: {
    has(name: string): boolean;
}): ({
    kind: import("@t3tools/contracts").ComposerContextKind;
    contextId: ComposerContextId;
    label: string;
    image: boolean;
    source: string;
    start: number;
    end: number;
    type: "context";
    value: string;
} | ComposerInlineToken)[];
export declare function referencedComposerContext(text: string, context?: OrchestrationMessageContext): {
    readonly version: 1;
    readonly guest?: {
        readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
        readonly name: string;
        readonly text: string;
        readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
    } | undefined;
    readonly records: readonly ({
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly attachmentId: string;
        readonly name: string;
        readonly mimeType: string;
        readonly sizeBytes: number;
        readonly kind: "image";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly attachmentId: string;
        readonly name: string;
        readonly mimeType: string;
        readonly sizeBytes: number;
        readonly kind: "file";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "terminal";
        readonly terminalId: string;
        readonly terminalLabel: string;
        readonly lineStart: number;
        readonly lineEnd: number;
        readonly text: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly pageUrl: string;
        readonly pageTitle: string | null;
        readonly tagName: string;
        readonly selector: string | null;
        readonly htmlPreview: string;
        readonly componentName: string | null;
        readonly source: {
            readonly functionName: string | null;
            readonly fileName: string | null;
            readonly lineNumber: number | null;
            readonly columnNumber: number | null;
        } | null;
        readonly styles: string;
        readonly kind: "element";
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "mention";
        readonly path: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "skill";
        readonly name: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "thread";
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly title: string;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "environment";
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: string;
        readonly payload: unknown;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "preview-annotation";
        readonly annotationId: string;
        readonly pageUrl: string;
        readonly pageTitle: string | null;
        readonly comment: string;
        readonly targetSummary: string;
        readonly styleChanges: readonly string[];
        readonly elements?: readonly {
            readonly pageUrl: string;
            readonly pageTitle: string | null;
            readonly tagName: string;
            readonly selector: string | null;
            readonly htmlPreview: string;
            readonly componentName: string | null;
            readonly source: {
                readonly functionName: string | null;
                readonly fileName: string | null;
                readonly lineNumber: number | null;
                readonly columnNumber: number | null;
            } | null;
            readonly styles: string;
        }[] | undefined;
        readonly elementIds?: readonly string[] | undefined;
        readonly regionCount?: number | undefined;
        readonly strokeCount?: number | undefined;
        readonly styleChangeDetails?: readonly {
            readonly targetId: string;
            readonly selector: string | null;
            readonly property: string;
            readonly previousValue: string;
            readonly value: string;
        }[] | undefined;
        readonly screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
    } | {
        readonly version: 1;
        readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        readonly label: string;
        readonly kind: "review-comment";
        readonly sectionId: string;
        readonly sectionTitle: string;
        readonly filePath: string;
        readonly startIndex: number;
        readonly endIndex: number;
        readonly rangeLabel: string;
        readonly text: string;
        readonly diff: string;
        readonly fenceLanguage?: string | undefined;
        readonly pullRequest?: {
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly headBranch: string;
            readonly baseBranch: string;
            readonly state: "closed" | "merged" | "open";
            readonly isDraft: boolean;
        } | undefined;
    })[];
} | undefined;
/** Uploads change attachment ids; keep context bindings attached to the same ordered file. */
export declare function uploadedComposerContext(context: OrchestrationMessageContext | undefined, drafts: readonly {
    readonly id: string;
}[], uploaded: readonly {
    readonly id?: string;
}[]): OrchestrationMessageContext | undefined;
/** Imports with fresh identities so a pasted record cannot overwrite an existing snapshot. */
export declare function reidentifyComposerContext(text: string, records: readonly ComposerContextRecord[], createId: () => string): {
    text: string;
    context: {
        version: 1;
        records: ({
            version: 1;
            label: string;
            attachmentId: string;
            name: string;
            mimeType: string;
            sizeBytes: number;
            kind: "image";
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            attachmentId: string;
            name: string;
            mimeType: string;
            sizeBytes: number;
            kind: "file";
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "terminal";
            terminalId: string;
            terminalLabel: string;
            lineStart: number;
            lineEnd: number;
            text: string;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            pageUrl: string;
            pageTitle: string | null;
            tagName: string;
            selector: string | null;
            htmlPreview: string;
            componentName: string | null;
            source: {
                readonly functionName: string | null;
                readonly fileName: string | null;
                readonly lineNumber: number | null;
                readonly columnNumber: number | null;
            } | null;
            styles: string;
            kind: "element";
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "mention";
            path: string;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "skill";
            name: string;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "thread";
            environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            threadId: string & import("effect/Brand").Brand<"ThreadId">;
            title: string;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "environment";
            environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: string;
            payload: unknown;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        } | {
            version: 1;
            label: string;
            kind: "preview-annotation";
            annotationId: string;
            pageUrl: string;
            pageTitle: string | null;
            comment: string;
            targetSummary: string;
            styleChanges: readonly string[];
            elements?: readonly {
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
            }[] | undefined;
            elementIds?: readonly string[] | undefined;
            regionCount?: number | undefined;
            strokeCount?: number | undefined;
            styleChangeDetails?: readonly {
                readonly targetId: string;
                readonly selector: string | null;
                readonly property: string;
                readonly previousValue: string;
                readonly value: string;
            }[] | undefined;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
        } | {
            version: 1;
            label: string;
            kind: "review-comment";
            sectionId: string;
            sectionTitle: string;
            filePath: string;
            startIndex: number;
            endIndex: number;
            rangeLabel: string;
            text: string;
            diff: string;
            fenceLanguage?: string | undefined;
            pullRequest?: {
                readonly number: number;
                readonly title: string;
                readonly url: string;
                readonly headBranch: string;
                readonly baseBranch: string;
                readonly state: "closed" | "merged" | "open";
                readonly isDraft: boolean;
            } | undefined;
            contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
            screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
        })[];
    };
};
/** Keep queued records canonical; select wire format at dispatch against the host. */
export declare function serializeComposerMessageForServer(composerText: string, context: OrchestrationMessageContext | undefined, supportsInlineMessageContext: boolean): {
    text: string;
    context?: OrchestrationMessageContext;
};
