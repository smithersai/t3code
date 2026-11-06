import type { PullRequestReviewCommentDraft } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import type { PullRequestParams } from "./usePullRequestDiff";
export type PendingReviewComment = PullRequestReviewCommentDraft & {
    readonly id: string;
    readonly headSha: string;
    readonly code: string;
};
export type ReviewDraft = {
    readonly summary: string;
    readonly comment: string;
    readonly comments: readonly PendingReviewComment[];
};
export declare const EMPTY_REVIEW_DRAFT: ReviewDraft;
export declare function pullRequestReviewKey(params: PullRequestParams): string;
export declare const ReviewDraftDocument: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly drafts: Schema.$Record<Schema.String, Schema.Struct<{
        readonly summary: Schema.String;
        readonly comment: Schema.String;
        readonly comments: Schema.$Array<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly oldPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly position: Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"added">;
                readonly newLine: Schema.Int;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"deleted">;
                readonly oldLine: Schema.Int;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"context">;
                readonly oldLine: Schema.Int;
                readonly newLine: Schema.Int;
                readonly side: Schema.Literals<readonly ["left", "right"]>;
            }>]>;
            readonly startPosition: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"added">;
                readonly newLine: Schema.Int;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"deleted">;
                readonly oldLine: Schema.Int;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"context">;
                readonly oldLine: Schema.Int;
                readonly newLine: Schema.Int;
                readonly side: Schema.Literals<readonly ["left", "right"]>;
            }>]>>;
            readonly body: Schema.String;
            readonly id: Schema.String;
            readonly headSha: Schema.String;
            readonly code: Schema.String;
        }>>;
    }>>;
}>;
export declare function clearSubmittedReview(current: ReviewDraft, submitted: ReviewDraft): ReviewDraft;
