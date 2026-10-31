import * as Schema from "effect/Schema";
import { type PullRequestActor, type PullRequestCheck, type PullRequestChecksState, type PullRequestReactionContent, type PullRequestReviewerCandidate, type PullRequestViewerPermissions } from "@t3tools/contracts";
import type { ProviderChangeRequest, ProviderChangeRequestActivity, ProviderChangeRequestStack, ProviderDiffSlice } from "@t3tools/source-control-core/server/PullRequestProvider";
export declare const GitCafePull: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly draft: Schema.Boolean;
    readonly sourceBranch: Schema.String;
    readonly targetBranch: Schema.String;
    readonly headOid: Schema.NullOr<Schema.String>;
    readonly author: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"local">;
        readonly actorId: Schema.String;
        readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly displayName: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
        readonly bot: Schema.optional<Schema.Boolean>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"github">;
        readonly actorId: Schema.String;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
        readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly actorId: Schema.optional<Schema.String>;
        }>>>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"unavailable">;
        readonly actorId: Schema.String;
    }>]>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly version: Schema.Int;
    readonly reviewers: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly actor: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
    }>>>;
    readonly labels: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>>;
}>;
export type GitCafePull = typeof GitCafePull.Type;
export declare const GitCafePulls: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly draft: Schema.Boolean;
        readonly sourceBranch: Schema.String;
        readonly targetBranch: Schema.String;
        readonly headOid: Schema.NullOr<Schema.String>;
        readonly author: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
        readonly createdAt: Schema.String;
        readonly updatedAt: Schema.String;
        readonly version: Schema.Int;
        readonly reviewers: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly actor: Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"local">;
                readonly actorId: Schema.String;
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly displayName: Schema.NullOr<Schema.String>;
                readonly avatarUrl: Schema.NullOr<Schema.String>;
                readonly bot: Schema.optional<Schema.Boolean>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"github">;
                readonly actorId: Schema.String;
                readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly avatarUrl: Schema.NullOr<Schema.String>;
                readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
                readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly actorId: Schema.optional<Schema.String>;
                }>>>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"unavailable">;
                readonly actorId: Schema.String;
            }>]>;
        }>>>;
        readonly labels: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly color: Schema.NullOr<Schema.String>;
        }>>>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
export declare const GitCafePullDetail: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly draft: Schema.Boolean;
    readonly sourceBranch: Schema.String;
    readonly targetBranch: Schema.String;
    readonly headOid: Schema.NullOr<Schema.String>;
    readonly author: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"local">;
        readonly actorId: Schema.String;
        readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly displayName: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
        readonly bot: Schema.optional<Schema.Boolean>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"github">;
        readonly actorId: Schema.String;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
        readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly actorId: Schema.optional<Schema.String>;
        }>>>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"unavailable">;
        readonly actorId: Schema.String;
    }>]>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly version: Schema.Int;
    readonly reviewers: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly actor: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
    }>>>;
    readonly labels: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>>;
    readonly description: Schema.NullOr<Schema.String>;
    readonly closedAt: Schema.NullOr<Schema.String>;
    readonly mergedAt: Schema.NullOr<Schema.String>;
    readonly sourceRepo: Schema.NullOr<Schema.Struct<{
        readonly owner: Schema.String;
        readonly name: Schema.String;
    }>>;
    readonly observedBaseOid: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly mergeRoute: Schema.optional<Schema.Literals<readonly ["native", "provider", "unsupported"]>>;
    readonly lockedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly viewerActorId: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly providerMerge: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly mergedAt: Schema.String;
    }>>>;
    readonly capabilities: Schema.Struct<{
        readonly comment: Schema.Boolean;
        readonly review: Schema.Boolean;
        readonly merge: Schema.Boolean;
        readonly edit: Schema.Boolean;
        readonly moderate: Schema.Boolean;
    }>;
}>;
export type GitCafePullDetail = typeof GitCafePullDetail.Type;
export declare const GitCafeComments: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.optional<Schema.Int>;
        readonly author: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
        readonly body: Schema.NullOr<Schema.String>;
        readonly createdAt: Schema.String;
        readonly path: Schema.NullOr<Schema.String>;
        readonly line: Schema.NullOr<Schema.Int>;
        readonly side: Schema.NullOr<Schema.Literals<readonly ["left", "right"]>>;
        readonly commitOid: Schema.NullOr<Schema.String>;
        readonly resolvedAt: Schema.NullOr<Schema.String>;
        readonly capabilities: Schema.optional<Schema.Struct<{
            readonly edit: Schema.Boolean;
            readonly hide: Schema.Boolean;
            readonly unhide: Schema.Boolean;
            readonly delete: Schema.Boolean;
            readonly resolve: Schema.Boolean;
            readonly unresolve: Schema.Boolean;
        }>>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
export declare const GitCafeReviews: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly author: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
        readonly body: Schema.NullOr<Schema.String>;
        readonly verdict: Schema.Literals<readonly ["approve", "request_changes", "comment"]>;
        readonly dismissedAt: Schema.NullOr<Schema.String>;
        readonly createdAt: Schema.String;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
export declare const GitCafeCommits: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly oid: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly summary: Schema.String;
        readonly time: Schema.Finite;
    }>>;
    readonly truncated: Schema.Boolean;
    readonly next: Schema.NullOr<Schema.String>;
    readonly headOid: Schema.String;
}>;
export declare const GitCafeLabels: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
        readonly description: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
/** A pull request's reviewers and its reviewer candidates, each actor under its id. */
export declare const GitCafeActorEntries: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly actor: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
export declare const GitCafeReactions: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly subject: Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["issue", "issue_comment", "pull_request", "pull_request_comment"]>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly emoji: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"unicode">;
            readonly value: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"custom">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>;
        readonly count: Schema.Int;
        readonly viewerReactionId: Schema.NullOr<Schema.String>;
        readonly reactors: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"local">;
            readonly actorId: Schema.String;
            readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly displayName: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly bot: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"github">;
            readonly actorId: Schema.String;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
            readonly accountType: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly linkedProfile: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly actorId: Schema.optional<Schema.String>;
            }>>>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"unavailable">;
            readonly actorId: Schema.String;
        }>]>>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
declare const GitCafeStack: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly revision: Schema.Int;
    readonly landingBase: Schema.String;
    readonly members: Schema.$Array<Schema.Struct<{
        readonly pullRequestNumber: Schema.Int;
        readonly title: Schema.String;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly draft: Schema.Boolean;
        readonly sourceBranch: Schema.String;
        readonly headOid: Schema.optional<Schema.String>;
        readonly position: Schema.Int;
    }>>;
}>;
export type GitCafeStack = typeof GitCafeStack.Type;
export declare const GitCafeStackEnvelope: Schema.Struct<{
    readonly stack: Schema.NullOr<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly revision: Schema.Int;
        readonly landingBase: Schema.String;
        readonly members: Schema.$Array<Schema.Struct<{
            readonly pullRequestNumber: Schema.Int;
            readonly title: Schema.String;
            readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
            readonly draft: Schema.Boolean;
            readonly sourceBranch: Schema.String;
            readonly headOid: Schema.optional<Schema.String>;
            readonly position: Schema.Int;
        }>>;
    }>>;
}>;
declare const GitCafeDiffFile: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly oldPath: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly status: Schema.optional<Schema.Literals<readonly ["added", "deleted", "modified", "typeChanged", "conflicted", "renamed", "copied"]>>;
    readonly additions: Schema.optional<Schema.Int>;
    readonly deletions: Schema.optional<Schema.Int>;
    readonly binary: Schema.optional<Schema.Boolean>;
    readonly tooLarge: Schema.optional<Schema.Boolean>;
    readonly hunksOmitted: Schema.optional<Schema.Boolean>;
    readonly isSubmodule: Schema.optional<Schema.Boolean>;
    readonly oldOid: Schema.optional<Schema.String>;
    readonly newOid: Schema.optional<Schema.String>;
    readonly hunks: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly oldStart: Schema.Int;
        readonly oldLines: Schema.Int;
        readonly newStart: Schema.Int;
        readonly newLines: Schema.Int;
        readonly lines: Schema.$Array<Schema.Struct<{
            readonly origin: Schema.String;
            readonly content: Schema.String;
        }>>;
    }>>>;
}>;
export type GitCafeDiffFile = typeof GitCafeDiffFile.Type;
export declare const GitCafeDiffFiles: Schema.$Array<Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly oldPath: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly status: Schema.optional<Schema.Literals<readonly ["added", "deleted", "modified", "typeChanged", "conflicted", "renamed", "copied"]>>;
    readonly additions: Schema.optional<Schema.Int>;
    readonly deletions: Schema.optional<Schema.Int>;
    readonly binary: Schema.optional<Schema.Boolean>;
    readonly tooLarge: Schema.optional<Schema.Boolean>;
    readonly hunksOmitted: Schema.optional<Schema.Boolean>;
    readonly isSubmodule: Schema.optional<Schema.Boolean>;
    readonly oldOid: Schema.optional<Schema.String>;
    readonly newOid: Schema.optional<Schema.String>;
    readonly hunks: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly oldStart: Schema.Int;
        readonly oldLines: Schema.Int;
        readonly newStart: Schema.Int;
        readonly newLines: Schema.Int;
        readonly lines: Schema.$Array<Schema.Struct<{
            readonly origin: Schema.String;
            readonly content: Schema.String;
        }>>;
    }>>>;
}>>;
export declare const GitCafeDiff: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly oldPath: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly status: Schema.optional<Schema.Literals<readonly ["added", "deleted", "modified", "typeChanged", "conflicted", "renamed", "copied"]>>;
        readonly additions: Schema.optional<Schema.Int>;
        readonly deletions: Schema.optional<Schema.Int>;
        readonly binary: Schema.optional<Schema.Boolean>;
        readonly tooLarge: Schema.optional<Schema.Boolean>;
        readonly hunksOmitted: Schema.optional<Schema.Boolean>;
        readonly isSubmodule: Schema.optional<Schema.Boolean>;
        readonly oldOid: Schema.optional<Schema.String>;
        readonly newOid: Schema.optional<Schema.String>;
        readonly hunks: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly oldStart: Schema.Int;
            readonly oldLines: Schema.Int;
            readonly newStart: Schema.Int;
            readonly newLines: Schema.Int;
            readonly lines: Schema.$Array<Schema.Struct<{
                readonly origin: Schema.String;
                readonly content: Schema.String;
            }>>;
        }>>>;
    }>>;
    readonly truncated: Schema.optional<Schema.Boolean>;
}>;
export declare const GitCafeChecks: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly id: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly provider: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly githubApp: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["queued", "in_progress", "completed"]>;
        readonly conclusion: Schema.NullOr<Schema.String>;
        readonly summary: Schema.NullOr<Schema.String>;
        readonly detailsUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
/** A user search answer and a collaborator page carry the same fields a picker shows. */
export declare const GitCafePeople: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly handle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly displayName: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly avatarUrl: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    readonly next: Schema.NullOr<Schema.String>;
}>;
export declare function toPeople(people: typeof GitCafePeople.Type, host: string): ReadonlyArray<PullRequestActor>;
interface RepositoryOnHost {
    readonly repository: string;
    readonly host: string;
}
export declare function toReviewers(pull: Pick<GitCafePull, "reviewers">, host: string): ReadonlyArray<PullRequestActor>;
export declare function toReviewerCandidates(candidates: typeof GitCafeActorEntries.Type, input: {
    readonly requested: ReadonlySet<string>;
    readonly authorActorId: string;
    readonly host: string;
}): ReadonlyArray<PullRequestReviewerCandidate>;
export declare function toChangeRequest(pull: GitCafePull, target: RepositoryOnHost): ProviderChangeRequest;
export declare function toViewerPermissions(detail: GitCafePullDetail): PullRequestViewerPermissions;
export declare const REACTION_EMOJI: Readonly<Record<PullRequestReactionContent, string>>;
export declare function reactionContent(emoji: string): PullRequestReactionContent | undefined;
export declare function toActivity(input: {
    readonly comments: typeof GitCafeComments.Type;
    readonly reviews: typeof GitCafeReviews.Type;
    readonly commits: typeof GitCafeCommits.Type;
    readonly reactions?: typeof GitCafeReactions.Type;
    readonly headOid?: string;
    readonly host: string;
}): ProviderChangeRequestActivity;
export declare function toStack(stack: GitCafeStack, target: RepositoryOnHost): ProviderChangeRequestStack;
export declare function toDiff(diff: typeof GitCafeDiff.Type): ProviderDiffSlice;
/**
 * GitCafe lists every run of a commit's checks, so a re-run arrives beside the run it replaced.
 * The newest run is the check's state; an older failure is history, not a failing check. Runs whose
 * order cannot be told apart are all kept, so no failure is hidden. Two reporters may share a check
 * name, so a run only replaces runs from the same provider and GitHub app.
 */
export declare function toChecks(checks: typeof GitCafeChecks.Type): ReadonlyArray<PullRequestCheck>;
export declare function checksStateOf(checks: ReadonlyArray<PullRequestCheck>): PullRequestChecksState | null;
export {};
