import * as Schema from "effect/Schema";
import type { PullRequestActor, PullRequestCheck, PullRequestComment, PullRequestCommit, PullRequestReaction, PullRequestReactionContent, PullRequestReviewThread } from "@t3tools/contracts";
export declare const ForgejoUser: Schema.Struct<{
    readonly login: Schema.String;
    readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
}>;
export declare const ForgejoLabel: Schema.Struct<{
    readonly id: Schema.Int;
    readonly name: Schema.String;
    readonly color: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly description: Schema.optional<Schema.NullOr<Schema.String>>;
}>;
export declare const ForgejoRepository: Schema.Struct<{
    readonly full_name: Schema.String;
    readonly permissions: Schema.optional<Schema.Struct<{
        readonly push: Schema.Boolean;
        readonly admin: Schema.Boolean;
    }>>;
    readonly archived: Schema.optional<Schema.Boolean>;
    readonly allow_merge_commits: Schema.optional<Schema.Boolean>;
    readonly allow_squash_merge: Schema.optional<Schema.Boolean>;
    readonly allow_rebase: Schema.optional<Schema.Boolean>;
    readonly allow_rebase_update: Schema.optional<Schema.Boolean>;
    readonly default_delete_branch_after_merge: Schema.optional<Schema.Boolean>;
}>;
export declare const ForgejoPullRequest: Schema.Struct<{
    readonly number: Schema.Int;
    readonly title: Schema.String;
    readonly body: Schema.NullOr<Schema.String>;
    readonly html_url: Schema.String;
    readonly user: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly state: Schema.String;
    readonly draft: Schema.optional<Schema.Boolean>;
    readonly merged: Schema.Boolean;
    readonly mergeable: Schema.optional<Schema.Boolean>;
    readonly is_locked: Schema.optional<Schema.Boolean>;
    readonly head: Schema.Struct<{
        readonly ref: Schema.String;
        readonly sha: Schema.String;
        readonly repo: Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.String;
            readonly permissions: Schema.optional<Schema.Struct<{
                readonly push: Schema.Boolean;
                readonly admin: Schema.Boolean;
            }>>;
            readonly archived: Schema.optional<Schema.Boolean>;
            readonly allow_merge_commits: Schema.optional<Schema.Boolean>;
            readonly allow_squash_merge: Schema.optional<Schema.Boolean>;
            readonly allow_rebase: Schema.optional<Schema.Boolean>;
            readonly allow_rebase_update: Schema.optional<Schema.Boolean>;
            readonly default_delete_branch_after_merge: Schema.optional<Schema.Boolean>;
        }>>;
    }>;
    readonly base: Schema.Struct<{
        readonly ref: Schema.String;
        readonly sha: Schema.String;
        readonly repo: Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.String;
            readonly permissions: Schema.optional<Schema.Struct<{
                readonly push: Schema.Boolean;
                readonly admin: Schema.Boolean;
            }>>;
            readonly archived: Schema.optional<Schema.Boolean>;
            readonly allow_merge_commits: Schema.optional<Schema.Boolean>;
            readonly allow_squash_merge: Schema.optional<Schema.Boolean>;
            readonly allow_rebase: Schema.optional<Schema.Boolean>;
            readonly allow_rebase_update: Schema.optional<Schema.Boolean>;
            readonly default_delete_branch_after_merge: Schema.optional<Schema.Boolean>;
        }>>;
    }>;
    readonly merge_base: Schema.optional<Schema.String>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly closed_at: Schema.NullOr<Schema.String>;
    readonly merged_at: Schema.NullOr<Schema.String>;
    readonly additions: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly deletions: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly changed_files: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly comments: Schema.optional<Schema.Int>;
    readonly labels: Schema.NullOr<Schema.$Array<Schema.Struct<{
        readonly id: Schema.Int;
        readonly name: Schema.String;
        readonly color: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly description: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>>;
    readonly requested_reviewers: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>>>;
}>;
export declare const ForgejoComment: Schema.Struct<{
    readonly id: Schema.Int;
    readonly body: Schema.String;
    readonly user: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly html_url: Schema.optional<Schema.String>;
}>;
export declare const ForgejoReview: Schema.Struct<{
    readonly id: Schema.Int;
    readonly body: Schema.String;
    readonly user: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly state: Schema.String;
    readonly submitted_at: Schema.String;
    readonly html_url: Schema.optional<Schema.String>;
    readonly comments_count: Schema.Int;
}>;
export declare const ForgejoReviewComment: Schema.Struct<{
    readonly id: Schema.Int;
    readonly body: Schema.String;
    readonly user: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly html_url: Schema.optional<Schema.String>;
    readonly path: Schema.String;
    readonly position: Schema.Int;
    readonly original_position: Schema.Int;
    readonly commit_id: Schema.String;
    readonly original_commit_id: Schema.String;
    readonly resolver: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
}>;
export declare const ForgejoCommit: Schema.Struct<{
    readonly sha: Schema.String;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly commit: Schema.Struct<{
        readonly message: Schema.String;
        readonly committer: Schema.Struct<{
            readonly date: Schema.String;
        }>;
    }>;
    readonly parents: Schema.$Array<Schema.Struct<{
        readonly sha: Schema.String;
    }>>;
    readonly stats: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>>>;
}>;
export declare const ForgejoStatus: Schema.Struct<{
    readonly context: Schema.String;
    readonly status: Schema.String;
    readonly description: Schema.NullOr<Schema.String>;
    readonly target_url: Schema.NullOr<Schema.String>;
    readonly updated_at: Schema.String;
}>;
export declare const ForgejoReaction: Schema.Struct<{
    readonly content: Schema.String;
    readonly user: Schema.NullOr<Schema.Struct<{
        readonly login: Schema.String;
        readonly full_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatar_url: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
}>;
export declare function forgejoActor(user: typeof ForgejoUser.Type | null | undefined): PullRequestActor | null;
export declare function forgejoChangeRequest(pr: typeof ForgejoPullRequest.Type): {
    number: number;
    title: string;
    url: string;
    author: {
        readonly isBot?: boolean | undefined;
        readonly login: string;
        readonly name: string | null;
        readonly avatarUrl: string | null;
    } | null;
    headBranch: string;
    baseBranch: string;
    headRepositoryNameWithOwner: string | null;
    state: "closed" | "merged" | "open";
    isDraft: boolean;
    mergeability: "mergeable" | "unknown";
    additions: number;
    deletions: number;
    createdAt: string;
    updatedAt: string;
    closedAt: string | null;
    mergedAt: string | null;
    reviewRequestLogins: string[];
    labels: {
        name: string;
        color: string | null;
    }[];
};
export declare function forgejoComment(comment: typeof ForgejoComment.Type): PullRequestComment;
export declare function forgejoReview(review: typeof ForgejoReview.Type): PullRequestComment;
export declare function forgejoReviewThread(comment: typeof ForgejoReviewComment.Type): PullRequestReviewThread;
export declare function forgejoCommit(commit: typeof ForgejoCommit.Type): PullRequestCommit;
export declare function forgejoChecks(statuses: ReadonlyArray<typeof ForgejoStatus.Type>, pullRequestUrl: string): ReadonlyArray<PullRequestCheck>;
export declare const FORGEJO_REACTIONS: Record<PullRequestReactionContent, string>;
export declare function forgejoReactions(reactions: ReadonlyArray<typeof ForgejoReaction.Type>, viewer: string): ReadonlyArray<PullRequestReaction>;
