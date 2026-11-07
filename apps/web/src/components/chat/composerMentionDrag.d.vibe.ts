import { PullRequestContextMetadata } from "@t3tools/contracts";
export declare const COMPOSER_MENTION_DRAG_TYPE = "application/x-t3code-composer-mention";
export declare const COMPOSER_PULL_REQUEST_DRAG_TYPE = "application/x-t3code-pull-request";
export declare const encodePullRequestDragPayload: (input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: "closed" | "merged" | "open";
    readonly isDraft: boolean;
}, options?: import("effect/SchemaAST").ParseOptions) => string;
export declare function composerMentionFromTreePath(treePath: string): string | null;
export declare function dataTransferHasComposerMention(types: ReadonlyArray<string>): boolean;
export interface ComposerMentionDragTransfer {
    readonly types: ReadonlyArray<string>;
    getData(format: string): string;
    dropEffect: string;
}
export interface ComposerMentionDragEvent {
    readonly dataTransfer: ComposerMentionDragTransfer;
    readonly nativeEvent: {
        stopPropagation(): void;
    };
    preventDefault(): void;
    stopPropagation(): void;
}
/** Insertion focuses next frame; synchronous focus would overwrite the unreconciled mention. */
export interface ComposerMentionDropHost {
    insertMentionAtEnd(text: string): boolean;
    insertPullRequestAtEnd(pullRequest: PullRequestContextMetadata): boolean;
    setDragActive(active: boolean): void;
    onInsertRejected(): void;
}
export interface ComposerMentionDragHandlers {
    onDragEnter(event: ComposerMentionDragEvent): void;
    onDragOver(event: ComposerMentionDragEvent): void;
    onDrop(event: ComposerMentionDragEvent): void;
}
export declare function makeComposerMentionDragHandlers(host: ComposerMentionDropHost): ComposerMentionDragHandlers;
