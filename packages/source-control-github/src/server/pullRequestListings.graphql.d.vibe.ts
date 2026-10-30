import { GraphQL, GraphQLGroup } from "effect/graphql";
import * as Schema from "effect/Schema";
/** A stack of PullRequests */
export declare const PullRequestStack: Schema.Struct<{
    /** A number uniquely identifying the stack within its repository */
    readonly number: Schema.Number;
    /** The total number of pull requests in the stack */
    readonly size: Schema.Number;
    /** The branch that the stack's pull requests target */
    readonly baseRefName: Schema.String;
}>;
export interface PullRequestStack extends Schema.Struct.Type<typeof PullRequestStack.fields> {
}
/** A member of a PullRequestStack */
export declare const PullRequestStackEntry: Schema.Struct<{
    /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
    readonly position: Schema.Number;
}>;
export interface PullRequestStackEntry extends Schema.Struct.Type<typeof PullRequestStackEntry.fields> {
}
/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export declare const AuthorUser: Schema.Struct<{
    readonly __typename: Schema.Literal<"User">;
    /** The username used to login. */
    readonly login: Schema.String;
    /** A URL pointing to the user's public avatar. */
    readonly avatarUrl: Schema.String;
    /** The user's public profile name. */
    readonly name: Schema.NullOr<Schema.String>;
}>;
export interface AuthorUser extends Schema.Struct.Type<typeof AuthorUser.fields> {
}
/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export declare const ActorOther: Schema.Struct<{
    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
    /** The username of the actor. */
    readonly login: Schema.String;
    /** A URL pointing to the actor's public avatar. */
    readonly avatarUrl: Schema.String;
}>;
export interface ActorOther extends Schema.Struct.Type<typeof ActorOther.fields> {
}
/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export declare const Actor: Schema.Struct<{
    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
    /** The username of the actor. */
    readonly login: Schema.String;
}>;
export interface Actor extends Schema.Struct.Type<typeof Actor.fields> {
}
/** A review object for a given pull request. */
export declare const PullRequestReview: Schema.Struct<{
    /** Identifies the current state of the pull request review. */
    readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
    /** The actor who authored the comment. */
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
        /** The username of the actor. */
        readonly login: Schema.String;
    }>>;
}>;
export interface PullRequestReview extends Schema.Struct.Type<typeof PullRequestReview.fields> {
}
/** The connection type for PullRequestReview. */
export declare const PullRequestReviewConnection: Schema.Struct<{
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** Identifies the current state of the pull request review. */
        readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
        /** The actor who authored the comment. */
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
            /** The username of the actor. */
            readonly login: Schema.String;
        }>>;
    }>>>>;
}>;
export interface PullRequestReviewConnection extends Schema.Struct.Type<typeof PullRequestReviewConnection.fields> {
}
/** A repository contains the content for a project. */
export declare const PullRequestRowRepositoryRepository: Schema.Struct<{
    /** The repository's name with owner. */
    readonly nameWithOwner: Schema.String;
}>;
export interface PullRequestRowRepositoryRepository extends Schema.Struct.Type<typeof PullRequestRowRepositoryRepository.fields> {
}
/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export declare const RequestedReviewerUser: Schema.Struct<{
    readonly __typename: Schema.Literal<"User">;
    /** The username used to login. */
    readonly login: Schema.String;
}>;
export interface RequestedReviewerUser extends Schema.Struct.Type<typeof RequestedReviewerUser.fields> {
}
/** A team of users in an organization. */
export declare const Team: Schema.Struct<{
    readonly __typename: Schema.Literal<"Team">;
    /** The slug corresponding to the team. */
    readonly slug: Schema.String;
}>;
export interface Team extends Schema.Struct.Type<typeof Team.fields> {
}
/** Types that can be requested reviewers. */
export declare const RequestedReviewerOther: Schema.Struct<{
    readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
}>;
export interface RequestedReviewerOther extends Schema.Struct.Type<typeof RequestedReviewerOther.fields> {
}
/** A request for a user to review a pull request. */
export declare const ReviewRequest: Schema.Struct<{
    /** The reviewer that is requested. */
    readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly __typename: Schema.Literal<"User">;
        /** The username used to login. */
        readonly login: Schema.String;
    }>, Schema.Struct<{
        readonly __typename: Schema.Literal<"Team">;
        /** The slug corresponding to the team. */
        readonly slug: Schema.String;
    }>, Schema.Struct<{
        readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
    }>]>>;
}>;
export interface ReviewRequest extends Schema.Struct.Type<typeof ReviewRequest.fields> {
}
/** The connection type for ReviewRequest. */
export declare const ReviewRequestConnection: Schema.Struct<{
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** The reviewer that is requested. */
        readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly __typename: Schema.Literal<"User">;
            /** The username used to login. */
            readonly login: Schema.String;
        }>, Schema.Struct<{
            readonly __typename: Schema.Literal<"Team">;
            /** The slug corresponding to the team. */
            readonly slug: Schema.String;
        }>, Schema.Struct<{
            readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
        }>]>>;
    }>>>>;
}>;
export interface ReviewRequestConnection extends Schema.Struct.Type<typeof ReviewRequestConnection.fields> {
}
/** A label for categorizing Issues, Pull Requests, Milestones, or Discussions with a given Repository. */
export declare const Label: Schema.Struct<{
    /** Identifies the label name. */
    readonly name: Schema.String;
    /** Identifies the label color. */
    readonly color: Schema.String;
}>;
export interface Label extends Schema.Struct.Type<typeof Label.fields> {
}
/** The connection type for Label. */
export declare const LabelConnection: Schema.Struct<{
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** Identifies the label name. */
        readonly name: Schema.String;
        /** Identifies the label color. */
        readonly color: Schema.String;
    }>>>>;
}>;
export interface LabelConnection extends Schema.Struct.Type<typeof LabelConnection.fields> {
}
/** Represents the rollup for both the check runs and status for a commit. */
export declare const StatusCheckRollup: Schema.Struct<{
    /** The combined status for the commit. */
    readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
}>;
export interface StatusCheckRollup extends Schema.Struct.Type<typeof StatusCheckRollup.fields> {
}
/** Represents a Git commit. */
export declare const Commit: Schema.Struct<{
    /** Check and Status rollup information for this commit. */
    readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
        /** The combined status for the commit. */
        readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
    }>>;
}>;
export interface Commit extends Schema.Struct.Type<typeof Commit.fields> {
}
/** Represents a Git commit part of a pull request. */
export declare const PullRequestCommit: Schema.Struct<{
    /** The Git commit object */
    readonly commit: Schema.Struct<{
        /** Check and Status rollup information for this commit. */
        readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
            /** The combined status for the commit. */
            readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
        }>>;
    }>;
}>;
export interface PullRequestCommit extends Schema.Struct.Type<typeof PullRequestCommit.fields> {
}
/** The connection type for PullRequestCommit. */
export declare const PullRequestCommitConnection: Schema.Struct<{
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** The Git commit object */
        readonly commit: Schema.Struct<{
            /** Check and Status rollup information for this commit. */
            readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                /** The combined status for the commit. */
                readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
            }>>;
        }>;
    }>>>>;
}>;
export interface PullRequestCommitConnection extends Schema.Struct.Type<typeof PullRequestCommitConnection.fields> {
}
/**
 * `fragment PullRequestRow on PullRequest`
 *
 * A repository pull request.
 */
export declare const PullRequestRow: Schema.Struct<{
    /** The stack this Pull Request belongs to, or null if it is not part of a stack */
    readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        /** A number uniquely identifying the stack within its repository */
        readonly number: Schema.Number;
        /** The total number of pull requests in the stack */
        readonly size: Schema.Number;
        /** The branch that the stack's pull requests target */
        readonly baseRefName: Schema.String;
    }>>>;
    /** The stack entry for this Pull Request, or null if it is not part of a stack */
    readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
        readonly position: Schema.Number;
    }>>>;
    /** Identifies the pull request number. */
    readonly number: Schema.Number;
    /** Identifies the pull request title. */
    readonly title: Schema.String;
    /** The HTTP URL for this pull request. */
    readonly url: Schema.String;
    /** The actor who authored the comment. */
    readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly __typename: Schema.Literal<"User">;
        /** The username used to login. */
        readonly login: Schema.String;
        /** A URL pointing to the user's public avatar. */
        readonly avatarUrl: Schema.String;
        /** The user's public profile name. */
        readonly name: Schema.NullOr<Schema.String>;
    }>, Schema.Struct<{
        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
        /** The username of the actor. */
        readonly login: Schema.String;
        /** A URL pointing to the actor's public avatar. */
        readonly avatarUrl: Schema.String;
    }>]>>;
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    readonly headRefName: Schema.String;
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    readonly baseRefName: Schema.String;
    /** Identifies the state of the pull request. */
    readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
    /** Identifies if the pull request is a draft. */
    readonly isDraft: Schema.Boolean;
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
    /** The current status of this pull request with respect to code review. */
    readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
    /** A list of latest reviews per user associated with the pull request that are not also pending review. */
    readonly latestReviews: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** Identifies the current state of the pull request review. */
            readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
            /** The actor who authored the comment. */
            readonly author: Schema.NullOr<Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                /** The username of the actor. */
                readonly login: Schema.String;
            }>>;
        }>>>>;
    }>>;
    /** The number of additions in this pull request. */
    readonly additions: Schema.optionalKey<Schema.Number>;
    /** The number of deletions in this pull request. */
    readonly deletions: Schema.optionalKey<Schema.Number>;
    /** Identifies the date and time when the object was created. */
    readonly createdAt: Schema.String;
    /** Identifies the date and time when the object was last updated. */
    readonly updatedAt: Schema.String;
    /** The date and time that the pull request was merged. */
    readonly mergedAt: Schema.NullOr<Schema.String>;
    /** The repository associated with this node. */
    readonly repository: Schema.Struct<{
        /** The repository's name with owner. */
        readonly nameWithOwner: Schema.String;
    }>;
    /** A list of review requests associated with the pull request. */
    readonly reviewRequests: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** The reviewer that is requested. */
            readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly __typename: Schema.Literal<"User">;
                /** The username used to login. */
                readonly login: Schema.String;
            }>, Schema.Struct<{
                readonly __typename: Schema.Literal<"Team">;
                /** The slug corresponding to the team. */
                readonly slug: Schema.String;
            }>, Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
            }>]>>;
        }>>>>;
    }>>;
    /** A list of labels associated with the object. */
    readonly labels: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** Identifies the label name. */
            readonly name: Schema.String;
            /** Identifies the label color. */
            readonly color: Schema.String;
        }>>>>;
    }>>;
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    readonly commits: Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** The Git commit object */
            readonly commit: Schema.Struct<{
                /** Check and Status rollup information for this commit. */
                readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                    /** The combined status for the commit. */
                    readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                }>>;
            }>;
        }>>>>;
    }>;
}>;
export interface PullRequestRow extends Schema.Struct.Type<typeof PullRequestRow.fields> {
}
/** Information about pagination in a connection. */
export declare const PageInfo: Schema.Struct<{
    /** When paginating forwards, are there more items? */
    readonly hasNextPage: Schema.Boolean;
    /** When paginating forwards, the cursor to continue. */
    readonly endCursor: Schema.NullOr<Schema.String>;
}>;
export interface PageInfo extends Schema.Struct.Type<typeof PageInfo.fields> {
}
/** A repository pull request. */
export declare const PullRequest: Schema.Struct<{
    /** The stack this Pull Request belongs to, or null if it is not part of a stack */
    readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        /** A number uniquely identifying the stack within its repository */
        readonly number: Schema.Number;
        /** The total number of pull requests in the stack */
        readonly size: Schema.Number;
        /** The branch that the stack's pull requests target */
        readonly baseRefName: Schema.String;
    }>>>;
    /** The stack entry for this Pull Request, or null if it is not part of a stack */
    readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
        readonly position: Schema.Number;
    }>>>;
    /** Identifies the pull request number. */
    readonly number: Schema.Number;
    /** Identifies the pull request title. */
    readonly title: Schema.String;
    /** The HTTP URL for this pull request. */
    readonly url: Schema.String;
    /** The actor who authored the comment. */
    readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly __typename: Schema.Literal<"User">;
        /** The username used to login. */
        readonly login: Schema.String;
        /** A URL pointing to the user's public avatar. */
        readonly avatarUrl: Schema.String;
        /** The user's public profile name. */
        readonly name: Schema.NullOr<Schema.String>;
    }>, Schema.Struct<{
        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
        /** The username of the actor. */
        readonly login: Schema.String;
        /** A URL pointing to the actor's public avatar. */
        readonly avatarUrl: Schema.String;
    }>]>>;
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    readonly headRefName: Schema.String;
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    readonly baseRefName: Schema.String;
    /** Identifies the state of the pull request. */
    readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
    /** Identifies if the pull request is a draft. */
    readonly isDraft: Schema.Boolean;
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
    /** The current status of this pull request with respect to code review. */
    readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
    /** A list of latest reviews per user associated with the pull request that are not also pending review. */
    readonly latestReviews: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** Identifies the current state of the pull request review. */
            readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
            /** The actor who authored the comment. */
            readonly author: Schema.NullOr<Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                /** The username of the actor. */
                readonly login: Schema.String;
            }>>;
        }>>>>;
    }>>;
    /** The number of additions in this pull request. */
    readonly additions: Schema.optionalKey<Schema.Number>;
    /** The number of deletions in this pull request. */
    readonly deletions: Schema.optionalKey<Schema.Number>;
    /** Identifies the date and time when the object was created. */
    readonly createdAt: Schema.String;
    /** Identifies the date and time when the object was last updated. */
    readonly updatedAt: Schema.String;
    /** The date and time that the pull request was merged. */
    readonly mergedAt: Schema.NullOr<Schema.String>;
    /** The repository associated with this node. */
    readonly repository: Schema.Struct<{
        /** The repository's name with owner. */
        readonly nameWithOwner: Schema.String;
    }>;
    /** A list of review requests associated with the pull request. */
    readonly reviewRequests: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** The reviewer that is requested. */
            readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly __typename: Schema.Literal<"User">;
                /** The username used to login. */
                readonly login: Schema.String;
            }>, Schema.Struct<{
                readonly __typename: Schema.Literal<"Team">;
                /** The slug corresponding to the team. */
                readonly slug: Schema.String;
            }>, Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
            }>]>>;
        }>>>>;
    }>>;
    /** A list of labels associated with the object. */
    readonly labels: Schema.NullOr<Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** Identifies the label name. */
            readonly name: Schema.String;
            /** Identifies the label color. */
            readonly color: Schema.String;
        }>>>>;
    }>>;
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    readonly commits: Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** The Git commit object */
            readonly commit: Schema.Struct<{
                /** Check and Status rollup information for this commit. */
                readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                    /** The combined status for the commit. */
                    readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                }>>;
            }>;
        }>>>>;
    }>;
    readonly __typename: Schema.Literal<"PullRequest">;
}>;
export interface PullRequest extends Schema.Struct.Type<typeof PullRequest.fields> {
}
/** The results of a search. */
export declare const SearchResultItemOther: Schema.Struct<{
    readonly __typename: Schema.refine<"App" | "Discussion" | "Issue" | "MarketplaceListing" | "Organization" | "Repository" | "User", Schema.String>;
}>;
export interface SearchResultItemOther extends Schema.Struct.Type<typeof SearchResultItemOther.fields> {
}
/**
 * A list of results that matched against a search query. Regardless of the number
 * of matches, a maximum of 1,000 results will be available across all types,
 * potentially split across many pages.
 */
export declare const SearchResultItemConnection: Schema.Struct<{
    /** Information to aid in pagination. */
    readonly pageInfo: Schema.Struct<{
        /** When paginating forwards, are there more items? */
        readonly hasNextPage: Schema.Boolean;
        /** When paginating forwards, the cursor to continue. */
        readonly endCursor: Schema.NullOr<Schema.String>;
    }>;
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        /** The stack this Pull Request belongs to, or null if it is not part of a stack */
        readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            /** A number uniquely identifying the stack within its repository */
            readonly number: Schema.Number;
            /** The total number of pull requests in the stack */
            readonly size: Schema.Number;
            /** The branch that the stack's pull requests target */
            readonly baseRefName: Schema.String;
        }>>>;
        /** The stack entry for this Pull Request, or null if it is not part of a stack */
        readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
            readonly position: Schema.Number;
        }>>>;
        /** Identifies the pull request number. */
        readonly number: Schema.Number;
        /** Identifies the pull request title. */
        readonly title: Schema.String;
        /** The HTTP URL for this pull request. */
        readonly url: Schema.String;
        /** The actor who authored the comment. */
        readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly __typename: Schema.Literal<"User">;
            /** The username used to login. */
            readonly login: Schema.String;
            /** A URL pointing to the user's public avatar. */
            readonly avatarUrl: Schema.String;
            /** The user's public profile name. */
            readonly name: Schema.NullOr<Schema.String>;
        }>, Schema.Struct<{
            readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
            /** The username of the actor. */
            readonly login: Schema.String;
            /** A URL pointing to the actor's public avatar. */
            readonly avatarUrl: Schema.String;
        }>]>>;
        /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefName: Schema.String;
        /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
        readonly baseRefName: Schema.String;
        /** Identifies the state of the pull request. */
        readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
        /** Identifies if the pull request is a draft. */
        readonly isDraft: Schema.Boolean;
        /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
        readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
        /** The current status of this pull request with respect to code review. */
        readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
        /** A list of latest reviews per user associated with the pull request that are not also pending review. */
        readonly latestReviews: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the current state of the pull request review. */
                readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                /** The actor who authored the comment. */
                readonly author: Schema.NullOr<Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                    /** The username of the actor. */
                    readonly login: Schema.String;
                }>>;
            }>>>>;
        }>>;
        /** The number of additions in this pull request. */
        readonly additions: Schema.optionalKey<Schema.Number>;
        /** The number of deletions in this pull request. */
        readonly deletions: Schema.optionalKey<Schema.Number>;
        /** Identifies the date and time when the object was created. */
        readonly createdAt: Schema.String;
        /** Identifies the date and time when the object was last updated. */
        readonly updatedAt: Schema.String;
        /** The date and time that the pull request was merged. */
        readonly mergedAt: Schema.NullOr<Schema.String>;
        /** The repository associated with this node. */
        readonly repository: Schema.Struct<{
            /** The repository's name with owner. */
            readonly nameWithOwner: Schema.String;
        }>;
        /** A list of review requests associated with the pull request. */
        readonly reviewRequests: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The reviewer that is requested. */
                readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly __typename: Schema.Literal<"User">;
                    /** The username used to login. */
                    readonly login: Schema.String;
                }>, Schema.Struct<{
                    readonly __typename: Schema.Literal<"Team">;
                    /** The slug corresponding to the team. */
                    readonly slug: Schema.String;
                }>, Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                }>]>>;
            }>>>>;
        }>>;
        /** A list of labels associated with the object. */
        readonly labels: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the label name. */
                readonly name: Schema.String;
                /** Identifies the label color. */
                readonly color: Schema.String;
            }>>>>;
        }>>;
        /** A list of commits present in this pull request's head branch not present in the base branch. */
        readonly commits: Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The Git commit object */
                readonly commit: Schema.Struct<{
                    /** Check and Status rollup information for this commit. */
                    readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                        /** The combined status for the commit. */
                        readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                    }>>;
                }>;
            }>>>>;
        }>;
        readonly __typename: Schema.Literal<"PullRequest">;
    }>, Schema.Struct<{
        readonly __typename: Schema.refine<"App" | "Discussion" | "Issue" | "MarketplaceListing" | "Organization" | "Repository" | "User", Schema.String>;
    }>]>>>>;
}>;
export interface SearchResultItemConnection extends Schema.Struct.Type<typeof SearchResultItemConnection.fields> {
}
/** `query PullRequestSearch` */
export declare const PullRequestSearch: GraphQL.Operation<"query", "PullRequestSearch", Schema.Struct<{
    q: Schema.String;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    /** Perform a search across resources, returning a maximum of 1,000 results. */
    readonly search: Schema.Struct<{
        /** Information to aid in pagination. */
        readonly pageInfo: Schema.Struct<{
            /** When paginating forwards, are there more items? */
            readonly hasNextPage: Schema.Boolean;
            /** When paginating forwards, the cursor to continue. */
            readonly endCursor: Schema.NullOr<Schema.String>;
        }>;
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            /** The stack this Pull Request belongs to, or null if it is not part of a stack */
            readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** A number uniquely identifying the stack within its repository */
                readonly number: Schema.Number;
                /** The total number of pull requests in the stack */
                readonly size: Schema.Number;
                /** The branch that the stack's pull requests target */
                readonly baseRefName: Schema.String;
            }>>>;
            /** The stack entry for this Pull Request, or null if it is not part of a stack */
            readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
                readonly position: Schema.Number;
            }>>>;
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** The actor who authored the comment. */
            readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly __typename: Schema.Literal<"User">;
                /** The username used to login. */
                readonly login: Schema.String;
                /** A URL pointing to the user's public avatar. */
                readonly avatarUrl: Schema.String;
                /** The user's public profile name. */
                readonly name: Schema.NullOr<Schema.String>;
            }>, Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
                /** The username of the actor. */
                readonly login: Schema.String;
                /** A URL pointing to the actor's public avatar. */
                readonly avatarUrl: Schema.String;
            }>]>>;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
            readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
            /** The current status of this pull request with respect to code review. */
            readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
            /** A list of latest reviews per user associated with the pull request that are not also pending review. */
            readonly latestReviews: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the current state of the pull request review. */
                    readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                    /** The actor who authored the comment. */
                    readonly author: Schema.NullOr<Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                        /** The username of the actor. */
                        readonly login: Schema.String;
                    }>>;
                }>>>>;
            }>>;
            /** The number of additions in this pull request. */
            readonly additions: Schema.optionalKey<Schema.Number>;
            /** The number of deletions in this pull request. */
            readonly deletions: Schema.optionalKey<Schema.Number>;
            /** Identifies the date and time when the object was created. */
            readonly createdAt: Schema.String;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** The repository associated with this node. */
            readonly repository: Schema.Struct<{
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>;
            /** A list of review requests associated with the pull request. */
            readonly reviewRequests: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The reviewer that is requested. */
                    readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                        readonly __typename: Schema.Literal<"User">;
                        /** The username used to login. */
                        readonly login: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.Literal<"Team">;
                        /** The slug corresponding to the team. */
                        readonly slug: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                    }>]>>;
                }>>>>;
            }>>;
            /** A list of labels associated with the object. */
            readonly labels: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the label name. */
                    readonly name: Schema.String;
                    /** Identifies the label color. */
                    readonly color: Schema.String;
                }>>>>;
            }>>;
            /** A list of commits present in this pull request's head branch not present in the base branch. */
            readonly commits: Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The Git commit object */
                    readonly commit: Schema.Struct<{
                        /** Check and Status rollup information for this commit. */
                        readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                            /** The combined status for the commit. */
                            readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                        }>>;
                    }>;
                }>>>>;
            }>;
            readonly __typename: Schema.Literal<"PullRequest">;
        }>, Schema.Struct<{
            readonly __typename: Schema.refine<"App" | "Discussion" | "Issue" | "MarketplaceListing" | "Organization" | "Repository" | "User", Schema.String>;
        }>]>>>>;
    }>;
}>, never>;
export declare namespace PullRequestSearch {
    type Variables = typeof PullRequestSearch.variables.Type;
    type Result = typeof PullRequestSearch.result.Type;
}
/** The connection type for PullRequest. */
export declare const PullRequestConnection: Schema.Struct<{
    /** Information to aid in pagination. */
    readonly pageInfo: Schema.Struct<{
        /** When paginating forwards, are there more items? */
        readonly hasNextPage: Schema.Boolean;
        /** When paginating forwards, the cursor to continue. */
        readonly endCursor: Schema.NullOr<Schema.String>;
    }>;
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** The stack this Pull Request belongs to, or null if it is not part of a stack */
        readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            /** A number uniquely identifying the stack within its repository */
            readonly number: Schema.Number;
            /** The total number of pull requests in the stack */
            readonly size: Schema.Number;
            /** The branch that the stack's pull requests target */
            readonly baseRefName: Schema.String;
        }>>>;
        /** The stack entry for this Pull Request, or null if it is not part of a stack */
        readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
            readonly position: Schema.Number;
        }>>>;
        /** Identifies the pull request number. */
        readonly number: Schema.Number;
        /** Identifies the pull request title. */
        readonly title: Schema.String;
        /** The HTTP URL for this pull request. */
        readonly url: Schema.String;
        /** The actor who authored the comment. */
        readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly __typename: Schema.Literal<"User">;
            /** The username used to login. */
            readonly login: Schema.String;
            /** A URL pointing to the user's public avatar. */
            readonly avatarUrl: Schema.String;
            /** The user's public profile name. */
            readonly name: Schema.NullOr<Schema.String>;
        }>, Schema.Struct<{
            readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
            /** The username of the actor. */
            readonly login: Schema.String;
            /** A URL pointing to the actor's public avatar. */
            readonly avatarUrl: Schema.String;
        }>]>>;
        /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefName: Schema.String;
        /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
        readonly baseRefName: Schema.String;
        /** Identifies the state of the pull request. */
        readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
        /** Identifies if the pull request is a draft. */
        readonly isDraft: Schema.Boolean;
        /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
        readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
        /** The current status of this pull request with respect to code review. */
        readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
        /** A list of latest reviews per user associated with the pull request that are not also pending review. */
        readonly latestReviews: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the current state of the pull request review. */
                readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                /** The actor who authored the comment. */
                readonly author: Schema.NullOr<Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                    /** The username of the actor. */
                    readonly login: Schema.String;
                }>>;
            }>>>>;
        }>>;
        /** The number of additions in this pull request. */
        readonly additions: Schema.optionalKey<Schema.Number>;
        /** The number of deletions in this pull request. */
        readonly deletions: Schema.optionalKey<Schema.Number>;
        /** Identifies the date and time when the object was created. */
        readonly createdAt: Schema.String;
        /** Identifies the date and time when the object was last updated. */
        readonly updatedAt: Schema.String;
        /** The date and time that the pull request was merged. */
        readonly mergedAt: Schema.NullOr<Schema.String>;
        /** The repository associated with this node. */
        readonly repository: Schema.Struct<{
            /** The repository's name with owner. */
            readonly nameWithOwner: Schema.String;
        }>;
        /** A list of review requests associated with the pull request. */
        readonly reviewRequests: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The reviewer that is requested. */
                readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly __typename: Schema.Literal<"User">;
                    /** The username used to login. */
                    readonly login: Schema.String;
                }>, Schema.Struct<{
                    readonly __typename: Schema.Literal<"Team">;
                    /** The slug corresponding to the team. */
                    readonly slug: Schema.String;
                }>, Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                }>]>>;
            }>>>>;
        }>>;
        /** A list of labels associated with the object. */
        readonly labels: Schema.NullOr<Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the label name. */
                readonly name: Schema.String;
                /** Identifies the label color. */
                readonly color: Schema.String;
            }>>>>;
        }>>;
        /** A list of commits present in this pull request's head branch not present in the base branch. */
        readonly commits: Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The Git commit object */
                readonly commit: Schema.Struct<{
                    /** Check and Status rollup information for this commit. */
                    readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                        /** The combined status for the commit. */
                        readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                    }>>;
                }>;
            }>>>>;
        }>;
    }>>>>;
}>;
export interface PullRequestConnection extends Schema.Struct.Type<typeof PullRequestConnection.fields> {
}
/** A repository contains the content for a project. */
export declare const PullRequestListRepositoryRepository: Schema.Struct<{
    /** A list of pull requests that have been opened in the repository. */
    readonly pullRequests: Schema.Struct<{
        /** Information to aid in pagination. */
        readonly pageInfo: Schema.Struct<{
            /** When paginating forwards, are there more items? */
            readonly hasNextPage: Schema.Boolean;
            /** When paginating forwards, the cursor to continue. */
            readonly endCursor: Schema.NullOr<Schema.String>;
        }>;
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** The stack this Pull Request belongs to, or null if it is not part of a stack */
            readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** A number uniquely identifying the stack within its repository */
                readonly number: Schema.Number;
                /** The total number of pull requests in the stack */
                readonly size: Schema.Number;
                /** The branch that the stack's pull requests target */
                readonly baseRefName: Schema.String;
            }>>>;
            /** The stack entry for this Pull Request, or null if it is not part of a stack */
            readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
                readonly position: Schema.Number;
            }>>>;
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** The actor who authored the comment. */
            readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly __typename: Schema.Literal<"User">;
                /** The username used to login. */
                readonly login: Schema.String;
                /** A URL pointing to the user's public avatar. */
                readonly avatarUrl: Schema.String;
                /** The user's public profile name. */
                readonly name: Schema.NullOr<Schema.String>;
            }>, Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
                /** The username of the actor. */
                readonly login: Schema.String;
                /** A URL pointing to the actor's public avatar. */
                readonly avatarUrl: Schema.String;
            }>]>>;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
            readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
            /** The current status of this pull request with respect to code review. */
            readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
            /** A list of latest reviews per user associated with the pull request that are not also pending review. */
            readonly latestReviews: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the current state of the pull request review. */
                    readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                    /** The actor who authored the comment. */
                    readonly author: Schema.NullOr<Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                        /** The username of the actor. */
                        readonly login: Schema.String;
                    }>>;
                }>>>>;
            }>>;
            /** The number of additions in this pull request. */
            readonly additions: Schema.optionalKey<Schema.Number>;
            /** The number of deletions in this pull request. */
            readonly deletions: Schema.optionalKey<Schema.Number>;
            /** Identifies the date and time when the object was created. */
            readonly createdAt: Schema.String;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** The repository associated with this node. */
            readonly repository: Schema.Struct<{
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>;
            /** A list of review requests associated with the pull request. */
            readonly reviewRequests: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The reviewer that is requested. */
                    readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                        readonly __typename: Schema.Literal<"User">;
                        /** The username used to login. */
                        readonly login: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.Literal<"Team">;
                        /** The slug corresponding to the team. */
                        readonly slug: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                    }>]>>;
                }>>>>;
            }>>;
            /** A list of labels associated with the object. */
            readonly labels: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the label name. */
                    readonly name: Schema.String;
                    /** Identifies the label color. */
                    readonly color: Schema.String;
                }>>>>;
            }>>;
            /** A list of commits present in this pull request's head branch not present in the base branch. */
            readonly commits: Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The Git commit object */
                    readonly commit: Schema.Struct<{
                        /** Check and Status rollup information for this commit. */
                        readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                            /** The combined status for the commit. */
                            readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                        }>>;
                    }>;
                }>>>>;
            }>;
        }>>>>;
    }>;
}>;
export interface PullRequestListRepositoryRepository extends Schema.Struct.Type<typeof PullRequestListRepositoryRepository.fields> {
}
/** `query PullRequestList` */
export declare const PullRequestList: GraphQL.Operation<"query", "PullRequestList", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    states: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Literals<readonly ["CLOSED", "MERGED", "OPEN"]>>>>;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** A list of pull requests that have been opened in the repository. */
        readonly pullRequests: Schema.Struct<{
            /** Information to aid in pagination. */
            readonly pageInfo: Schema.Struct<{
                /** When paginating forwards, are there more items? */
                readonly hasNextPage: Schema.Boolean;
                /** When paginating forwards, the cursor to continue. */
                readonly endCursor: Schema.NullOr<Schema.String>;
            }>;
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The stack this Pull Request belongs to, or null if it is not part of a stack */
                readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                    /** A number uniquely identifying the stack within its repository */
                    readonly number: Schema.Number;
                    /** The total number of pull requests in the stack */
                    readonly size: Schema.Number;
                    /** The branch that the stack's pull requests target */
                    readonly baseRefName: Schema.String;
                }>>>;
                /** The stack entry for this Pull Request, or null if it is not part of a stack */
                readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                    /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
                    readonly position: Schema.Number;
                }>>>;
                /** Identifies the pull request number. */
                readonly number: Schema.Number;
                /** Identifies the pull request title. */
                readonly title: Schema.String;
                /** The HTTP URL for this pull request. */
                readonly url: Schema.String;
                /** The actor who authored the comment. */
                readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly __typename: Schema.Literal<"User">;
                    /** The username used to login. */
                    readonly login: Schema.String;
                    /** A URL pointing to the user's public avatar. */
                    readonly avatarUrl: Schema.String;
                    /** The user's public profile name. */
                    readonly name: Schema.NullOr<Schema.String>;
                }>, Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
                    /** The username of the actor. */
                    readonly login: Schema.String;
                    /** A URL pointing to the actor's public avatar. */
                    readonly avatarUrl: Schema.String;
                }>]>>;
                /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefName: Schema.String;
                /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
                readonly baseRefName: Schema.String;
                /** Identifies the state of the pull request. */
                readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
                /** Identifies if the pull request is a draft. */
                readonly isDraft: Schema.Boolean;
                /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
                readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
                /** The current status of this pull request with respect to code review. */
                readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
                /** A list of latest reviews per user associated with the pull request that are not also pending review. */
                readonly latestReviews: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** Identifies the current state of the pull request review. */
                        readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                        /** The actor who authored the comment. */
                        readonly author: Schema.NullOr<Schema.Struct<{
                            readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                            /** The username of the actor. */
                            readonly login: Schema.String;
                        }>>;
                    }>>>>;
                }>>;
                /** The number of additions in this pull request. */
                readonly additions: Schema.optionalKey<Schema.Number>;
                /** The number of deletions in this pull request. */
                readonly deletions: Schema.optionalKey<Schema.Number>;
                /** Identifies the date and time when the object was created. */
                readonly createdAt: Schema.String;
                /** Identifies the date and time when the object was last updated. */
                readonly updatedAt: Schema.String;
                /** The date and time that the pull request was merged. */
                readonly mergedAt: Schema.NullOr<Schema.String>;
                /** The repository associated with this node. */
                readonly repository: Schema.Struct<{
                    /** The repository's name with owner. */
                    readonly nameWithOwner: Schema.String;
                }>;
                /** A list of review requests associated with the pull request. */
                readonly reviewRequests: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** The reviewer that is requested. */
                        readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                            readonly __typename: Schema.Literal<"User">;
                            /** The username used to login. */
                            readonly login: Schema.String;
                        }>, Schema.Struct<{
                            readonly __typename: Schema.Literal<"Team">;
                            /** The slug corresponding to the team. */
                            readonly slug: Schema.String;
                        }>, Schema.Struct<{
                            readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                        }>]>>;
                    }>>>>;
                }>>;
                /** A list of labels associated with the object. */
                readonly labels: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** Identifies the label name. */
                        readonly name: Schema.String;
                        /** Identifies the label color. */
                        readonly color: Schema.String;
                    }>>>>;
                }>>;
                /** A list of commits present in this pull request's head branch not present in the base branch. */
                readonly commits: Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** The Git commit object */
                        readonly commit: Schema.Struct<{
                            /** Check and Status rollup information for this commit. */
                            readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                                /** The combined status for the commit. */
                                readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                            }>>;
                        }>;
                    }>>>>;
                }>;
            }>>>>;
        }>;
    }>>;
}>, never>;
export declare namespace PullRequestList {
    type Variables = typeof PullRequestList.variables.Type;
    type Result = typeof PullRequestList.result.Type;
}
/** Every operation in pullRequestListings.graphql. */
export declare const PullRequestListingsGraphQLGroup: GraphQLGroup.GraphQLGroup<GraphQL.Operation<"query", "PullRequestList", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    states: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Literals<readonly ["CLOSED", "MERGED", "OPEN"]>>>>;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** A list of pull requests that have been opened in the repository. */
        readonly pullRequests: Schema.Struct<{
            /** Information to aid in pagination. */
            readonly pageInfo: Schema.Struct<{
                /** When paginating forwards, are there more items? */
                readonly hasNextPage: Schema.Boolean;
                /** When paginating forwards, the cursor to continue. */
                readonly endCursor: Schema.NullOr<Schema.String>;
            }>;
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** The stack this Pull Request belongs to, or null if it is not part of a stack */
                readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                    /** A number uniquely identifying the stack within its repository */
                    readonly number: Schema.Number;
                    /** The total number of pull requests in the stack */
                    readonly size: Schema.Number;
                    /** The branch that the stack's pull requests target */
                    readonly baseRefName: Schema.String;
                }>>>;
                /** The stack entry for this Pull Request, or null if it is not part of a stack */
                readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                    /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
                    readonly position: Schema.Number;
                }>>>;
                /** Identifies the pull request number. */
                readonly number: Schema.Number;
                /** Identifies the pull request title. */
                readonly title: Schema.String;
                /** The HTTP URL for this pull request. */
                readonly url: Schema.String;
                /** The actor who authored the comment. */
                readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly __typename: Schema.Literal<"User">;
                    /** The username used to login. */
                    readonly login: Schema.String;
                    /** A URL pointing to the user's public avatar. */
                    readonly avatarUrl: Schema.String;
                    /** The user's public profile name. */
                    readonly name: Schema.NullOr<Schema.String>;
                }>, Schema.Struct<{
                    readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
                    /** The username of the actor. */
                    readonly login: Schema.String;
                    /** A URL pointing to the actor's public avatar. */
                    readonly avatarUrl: Schema.String;
                }>]>>;
                /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefName: Schema.String;
                /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
                readonly baseRefName: Schema.String;
                /** Identifies the state of the pull request. */
                readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
                /** Identifies if the pull request is a draft. */
                readonly isDraft: Schema.Boolean;
                /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
                readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
                /** The current status of this pull request with respect to code review. */
                readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
                /** A list of latest reviews per user associated with the pull request that are not also pending review. */
                readonly latestReviews: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** Identifies the current state of the pull request review. */
                        readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                        /** The actor who authored the comment. */
                        readonly author: Schema.NullOr<Schema.Struct<{
                            readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                            /** The username of the actor. */
                            readonly login: Schema.String;
                        }>>;
                    }>>>>;
                }>>;
                /** The number of additions in this pull request. */
                readonly additions: Schema.optionalKey<Schema.Number>;
                /** The number of deletions in this pull request. */
                readonly deletions: Schema.optionalKey<Schema.Number>;
                /** Identifies the date and time when the object was created. */
                readonly createdAt: Schema.String;
                /** Identifies the date and time when the object was last updated. */
                readonly updatedAt: Schema.String;
                /** The date and time that the pull request was merged. */
                readonly mergedAt: Schema.NullOr<Schema.String>;
                /** The repository associated with this node. */
                readonly repository: Schema.Struct<{
                    /** The repository's name with owner. */
                    readonly nameWithOwner: Schema.String;
                }>;
                /** A list of review requests associated with the pull request. */
                readonly reviewRequests: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** The reviewer that is requested. */
                        readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                            readonly __typename: Schema.Literal<"User">;
                            /** The username used to login. */
                            readonly login: Schema.String;
                        }>, Schema.Struct<{
                            readonly __typename: Schema.Literal<"Team">;
                            /** The slug corresponding to the team. */
                            readonly slug: Schema.String;
                        }>, Schema.Struct<{
                            readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                        }>]>>;
                    }>>>>;
                }>>;
                /** A list of labels associated with the object. */
                readonly labels: Schema.NullOr<Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** Identifies the label name. */
                        readonly name: Schema.String;
                        /** Identifies the label color. */
                        readonly color: Schema.String;
                    }>>>>;
                }>>;
                /** A list of commits present in this pull request's head branch not present in the base branch. */
                readonly commits: Schema.Struct<{
                    /** A list of nodes. */
                    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                        /** The Git commit object */
                        readonly commit: Schema.Struct<{
                            /** Check and Status rollup information for this commit. */
                            readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                                /** The combined status for the commit. */
                                readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                            }>>;
                        }>;
                    }>>>>;
                }>;
            }>>>>;
        }>;
    }>>;
}>, never> | GraphQL.Operation<"query", "PullRequestSearch", Schema.Struct<{
    q: Schema.String;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    /** Perform a search across resources, returning a maximum of 1,000 results. */
    readonly search: Schema.Struct<{
        /** Information to aid in pagination. */
        readonly pageInfo: Schema.Struct<{
            /** When paginating forwards, are there more items? */
            readonly hasNextPage: Schema.Boolean;
            /** When paginating forwards, the cursor to continue. */
            readonly endCursor: Schema.NullOr<Schema.String>;
        }>;
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            /** The stack this Pull Request belongs to, or null if it is not part of a stack */
            readonly stack: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** A number uniquely identifying the stack within its repository */
                readonly number: Schema.Number;
                /** The total number of pull requests in the stack */
                readonly size: Schema.Number;
                /** The branch that the stack's pull requests target */
                readonly baseRefName: Schema.String;
            }>>>;
            /** The stack entry for this Pull Request, or null if it is not part of a stack */
            readonly stackEntry: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
                /** This entry's position in the stack, where 1 is the closest to the base branch, 2 is stacked on top of 1, etc. */
                readonly position: Schema.Number;
            }>>>;
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** The actor who authored the comment. */
            readonly author: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly __typename: Schema.Literal<"User">;
                /** The username used to login. */
                readonly login: Schema.String;
                /** A URL pointing to the user's public avatar. */
                readonly avatarUrl: Schema.String;
                /** The user's public profile name. */
                readonly name: Schema.NullOr<Schema.String>;
            }>, Schema.Struct<{
                readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization", Schema.String>;
                /** The username of the actor. */
                readonly login: Schema.String;
                /** A URL pointing to the actor's public avatar. */
                readonly avatarUrl: Schema.String;
            }>]>>;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
            readonly mergeable: Schema.refine<"CONFLICTING" | "MERGEABLE" | "UNKNOWN", Schema.String>;
            /** The current status of this pull request with respect to code review. */
            readonly reviewDecision: Schema.NullOr<Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "REVIEW_REQUIRED", Schema.String>>;
            /** A list of latest reviews per user associated with the pull request that are not also pending review. */
            readonly latestReviews: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the current state of the pull request review. */
                    readonly state: Schema.refine<"APPROVED" | "CHANGES_REQUESTED" | "COMMENTED" | "DISMISSED" | "PENDING", Schema.String>;
                    /** The actor who authored the comment. */
                    readonly author: Schema.NullOr<Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User", Schema.String>;
                        /** The username of the actor. */
                        readonly login: Schema.String;
                    }>>;
                }>>>>;
            }>>;
            /** The number of additions in this pull request. */
            readonly additions: Schema.optionalKey<Schema.Number>;
            /** The number of deletions in this pull request. */
            readonly deletions: Schema.optionalKey<Schema.Number>;
            /** Identifies the date and time when the object was created. */
            readonly createdAt: Schema.String;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** The repository associated with this node. */
            readonly repository: Schema.Struct<{
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>;
            /** A list of review requests associated with the pull request. */
            readonly reviewRequests: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The reviewer that is requested. */
                    readonly requestedReviewer: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                        readonly __typename: Schema.Literal<"User">;
                        /** The username used to login. */
                        readonly login: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.Literal<"Team">;
                        /** The slug corresponding to the team. */
                        readonly slug: Schema.String;
                    }>, Schema.Struct<{
                        readonly __typename: Schema.refine<"Bot" | "EnterpriseTeam" | "Mannequin", Schema.String>;
                    }>]>>;
                }>>>>;
            }>>;
            /** A list of labels associated with the object. */
            readonly labels: Schema.NullOr<Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** Identifies the label name. */
                    readonly name: Schema.String;
                    /** Identifies the label color. */
                    readonly color: Schema.String;
                }>>>>;
            }>>;
            /** A list of commits present in this pull request's head branch not present in the base branch. */
            readonly commits: Schema.Struct<{
                /** A list of nodes. */
                readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                    /** The Git commit object */
                    readonly commit: Schema.Struct<{
                        /** Check and Status rollup information for this commit. */
                        readonly statusCheckRollup: Schema.NullOr<Schema.Struct<{
                            /** The combined status for the commit. */
                            readonly state: Schema.refine<"ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS", Schema.String>;
                        }>>;
                    }>;
                }>>>>;
            }>;
            readonly __typename: Schema.Literal<"PullRequest">;
        }>, Schema.Struct<{
            readonly __typename: Schema.refine<"App" | "Discussion" | "Issue" | "MarketplaceListing" | "Organization" | "Repository" | "User", Schema.String>;
        }>]>>>>;
    }>;
}>, never>>;
