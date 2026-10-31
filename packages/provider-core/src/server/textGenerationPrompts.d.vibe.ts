import * as Schema from "effect/Schema";
import type { BranchNamingOptions, ChatAttachment } from "@t3tools/contracts";
import type { ReviewGuideStackLayer } from "./textGeneration.js";
import type { TextGenerationPolicy } from "@t3tools/provider-core/server/textGenerationPolicy";
export interface CommitMessagePromptInput {
    branch: string | null;
    stagedSummary: string;
    stagedPatch: string;
    includeBranch?: boolean;
    policy?: TextGenerationPolicy | undefined;
}
export declare function buildCommitMessagePrompt(input: CommitMessagePromptInput): {
    prompt: string;
    outputSchema: Schema.Struct<{
        readonly subject: Schema.String;
        readonly body: Schema.String;
    }>;
};
export interface PrContentPromptInput {
    baseBranch: string;
    headBranch: string;
    commitSummary: string;
    diffSummary: string;
    diffPatch: string;
    changeRequestTemplate?: string | undefined;
    threadContext?: string | undefined;
    policy?: TextGenerationPolicy | undefined;
}
export declare function buildPrContentPrompt(input: PrContentPromptInput): {
    prompt: string;
    outputSchema: Schema.Struct<{
        readonly title: Schema.String;
        readonly body: Schema.String;
    }>;
};
export interface ReviewGuidePromptInput {
    number: number;
    title: string;
    description: string;
    baseBranch: string;
    baseCommit: string;
    settledReview: string;
    instructions?: string | undefined;
    stack?: ReadonlyArray<ReviewGuideStackLayer> | undefined;
}
export declare function buildReviewGuidePrompt(input: ReviewGuidePromptInput): {
    prompt: string;
    outputSchema: Schema.Struct<{
        readonly stops: Schema.$Array<Schema.Struct<{
            readonly title: Schema.String;
            readonly summary: Schema.String;
            readonly attention: Schema.NullOr<Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
                readonly note: Schema.String;
            }>>;
            readonly excerpts: Schema.$Array<Schema.Struct<{
                readonly path: Schema.String;
                readonly side: Schema.Literals<readonly ["new", "old"]>;
                readonly start: Schema.Int;
                readonly end: Schema.Int;
                readonly caption: Schema.String;
            }>>;
            readonly files: Schema.$Array<Schema.Struct<{
                readonly path: Schema.String;
                readonly note: Schema.String;
            }>>;
            readonly notes: Schema.$Array<Schema.Struct<{
                readonly path: Schema.String;
                readonly line: Schema.Int;
                readonly title: Schema.String;
                readonly body: Schema.String;
            }>>;
            readonly questions: Schema.$Array<Schema.String>;
        }>>;
    }>;
};
export interface BranchNamePromptInput {
    naming?: BranchNamingOptions | undefined;
    message: string;
    attachments?: ReadonlyArray<ChatAttachment> | undefined;
    policy?: TextGenerationPolicy | undefined;
}
export declare function buildBranchNamePrompt(input: BranchNamePromptInput): {
    prompt: string;
    outputSchema: Schema.Struct<{
        readonly branch: Schema.String;
    }>;
};
export interface ThreadTitlePromptInput {
    linkedContext?: string | undefined;
    message: string;
    previousTitle?: string | undefined;
    forkSource?: ThreadTitleForkSource | undefined;
    attachments?: ReadonlyArray<ChatAttachment> | undefined;
    instructions?: string | undefined;
}
/** The thread a fork branched from, and its conversation up to the fork point. */
export interface ThreadTitleForkSource {
    title: string;
    history: string;
}
export declare function buildThreadTitlePrompt(input: ThreadTitlePromptInput): {
    prompt: string;
    outputSchema: Schema.Struct<{
        readonly title: Schema.String;
        readonly needsRefinement: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>;
};
