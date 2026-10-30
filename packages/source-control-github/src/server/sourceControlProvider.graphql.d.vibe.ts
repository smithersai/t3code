import { GraphQL, GraphQLGroup } from "effect/graphql";
import * as Schema from "effect/Schema";
/** A repository contains the content for a project. */
export declare const HeadRepositoryRepository: Schema.Struct<{
    /** The name of the repository. */
    readonly name: Schema.String;
    /** The repository's name with owner. */
    readonly nameWithOwner: Schema.String;
}>;
export interface HeadRepositoryRepository extends Schema.Struct.Type<typeof HeadRepositoryRepository.fields> {
}
/** Represents an owner of a Repository. */
export declare const RepositoryOwner: Schema.Struct<{
    readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
    /** The username used to login. */
    readonly login: Schema.String;
}>;
export interface RepositoryOwner extends Schema.Struct.Type<typeof RepositoryOwner.fields> {
}
/**
 * `fragment PullRequestNode on PullRequest`
 *
 * A repository pull request.
 */
export declare const PullRequestNode: Schema.Struct<{
    /** Identifies the pull request number. */
    readonly number: Schema.Number;
    /** Identifies the pull request title. */
    readonly title: Schema.String;
    /** The HTTP URL for this pull request. */
    readonly url: Schema.String;
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    readonly baseRefName: Schema.String;
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    readonly headRefName: Schema.String;
    /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
    readonly headRefOid: Schema.String;
    /** Identifies the state of the pull request. */
    readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
    /** Identifies if the pull request is a draft. */
    readonly isDraft: Schema.Boolean;
    /** The date and time that the pull request was merged. */
    readonly mergedAt: Schema.NullOr<Schema.String>;
    /** Identifies the date and time when the object was closed. */
    readonly closedAt: Schema.NullOr<Schema.String>;
    /** Identifies the date and time when the object was last updated. */
    readonly updatedAt: Schema.String;
    /** The head and base repositories are different. */
    readonly isCrossRepository: Schema.Boolean;
    /** The repository associated with this pull request's head Ref. */
    readonly headRepository: Schema.NullOr<Schema.Struct<{
        /** The name of the repository. */
        readonly name: Schema.String;
        /** The repository's name with owner. */
        readonly nameWithOwner: Schema.String;
    }>>;
    /** The owner of the repository associated with this pull request's head Ref. */
    readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
        readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
        /** The username used to login. */
        readonly login: Schema.String;
    }>>;
}>;
export interface PullRequestNode extends Schema.Struct.Type<typeof PullRequestNode.fields> {
}
/** The connection type for PullRequest. */
export declare const PullRequestConnection: Schema.Struct<{
    /** A list of nodes. */
    readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
        /** Identifies the pull request number. */
        readonly number: Schema.Number;
        /** Identifies the pull request title. */
        readonly title: Schema.String;
        /** The HTTP URL for this pull request. */
        readonly url: Schema.String;
        /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
        readonly baseRefName: Schema.String;
        /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefName: Schema.String;
        /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefOid: Schema.String;
        /** Identifies the state of the pull request. */
        readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
        /** Identifies if the pull request is a draft. */
        readonly isDraft: Schema.Boolean;
        /** The date and time that the pull request was merged. */
        readonly mergedAt: Schema.NullOr<Schema.String>;
        /** Identifies the date and time when the object was closed. */
        readonly closedAt: Schema.NullOr<Schema.String>;
        /** Identifies the date and time when the object was last updated. */
        readonly updatedAt: Schema.String;
        /** The head and base repositories are different. */
        readonly isCrossRepository: Schema.Boolean;
        /** The repository associated with this pull request's head Ref. */
        readonly headRepository: Schema.NullOr<Schema.Struct<{
            /** The name of the repository. */
            readonly name: Schema.String;
            /** The repository's name with owner. */
            readonly nameWithOwner: Schema.String;
        }>>;
        /** The owner of the repository associated with this pull request's head Ref. */
        readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
            readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
            /** The username used to login. */
            readonly login: Schema.String;
        }>>;
    }>>>>;
}>;
export interface PullRequestConnection extends Schema.Struct.Type<typeof PullRequestConnection.fields> {
}
/** A repository contains the content for a project. */
export declare const PullRequestsByHeadRepositoryRepository: Schema.Struct<{
    /** A list of pull requests that have been opened in the repository. */
    readonly pullRequests: Schema.Struct<{
        /** A list of nodes. */
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefOid: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was closed. */
            readonly closedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The head and base repositories are different. */
            readonly isCrossRepository: Schema.Boolean;
            /** The repository associated with this pull request's head Ref. */
            readonly headRepository: Schema.NullOr<Schema.Struct<{
                /** The name of the repository. */
                readonly name: Schema.String;
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>>;
            /** The owner of the repository associated with this pull request's head Ref. */
            readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
                readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
                /** The username used to login. */
                readonly login: Schema.String;
            }>>;
        }>>>>;
    }>;
}>;
export interface PullRequestsByHeadRepositoryRepository extends Schema.Struct.Type<typeof PullRequestsByHeadRepositoryRepository.fields> {
}
/** `query PullRequestsByHead` */
export declare const PullRequestsByHead: GraphQL.Operation<"query", "PullRequestsByHead", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    head: Schema.String;
    states: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Literals<readonly ["CLOSED", "MERGED", "OPEN"]>>>>;
    first: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** A list of pull requests that have been opened in the repository. */
        readonly pullRequests: Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the pull request number. */
                readonly number: Schema.Number;
                /** Identifies the pull request title. */
                readonly title: Schema.String;
                /** The HTTP URL for this pull request. */
                readonly url: Schema.String;
                /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
                readonly baseRefName: Schema.String;
                /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefName: Schema.String;
                /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefOid: Schema.String;
                /** Identifies the state of the pull request. */
                readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
                /** Identifies if the pull request is a draft. */
                readonly isDraft: Schema.Boolean;
                /** The date and time that the pull request was merged. */
                readonly mergedAt: Schema.NullOr<Schema.String>;
                /** Identifies the date and time when the object was closed. */
                readonly closedAt: Schema.NullOr<Schema.String>;
                /** Identifies the date and time when the object was last updated. */
                readonly updatedAt: Schema.String;
                /** The head and base repositories are different. */
                readonly isCrossRepository: Schema.Boolean;
                /** The repository associated with this pull request's head Ref. */
                readonly headRepository: Schema.NullOr<Schema.Struct<{
                    /** The name of the repository. */
                    readonly name: Schema.String;
                    /** The repository's name with owner. */
                    readonly nameWithOwner: Schema.String;
                }>>;
                /** The owner of the repository associated with this pull request's head Ref. */
                readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
                    readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
                    /** The username used to login. */
                    readonly login: Schema.String;
                }>>;
            }>>>>;
        }>;
    }>>;
}>, never>;
export declare namespace PullRequestsByHead {
    type Variables = typeof PullRequestsByHead.variables.Type;
    type Result = typeof PullRequestsByHead.result.Type;
}
/** A repository contains the content for a project. */
export declare const PullRequestByNumberRepositoryRepository: Schema.Struct<{
    /** Returns a single pull request from the current repository by number. */
    readonly pullRequest: Schema.NullOr<Schema.Struct<{
        /** Identifies the pull request number. */
        readonly number: Schema.Number;
        /** Identifies the pull request title. */
        readonly title: Schema.String;
        /** The HTTP URL for this pull request. */
        readonly url: Schema.String;
        /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
        readonly baseRefName: Schema.String;
        /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefName: Schema.String;
        /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
        readonly headRefOid: Schema.String;
        /** Identifies the state of the pull request. */
        readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
        /** Identifies if the pull request is a draft. */
        readonly isDraft: Schema.Boolean;
        /** The date and time that the pull request was merged. */
        readonly mergedAt: Schema.NullOr<Schema.String>;
        /** Identifies the date and time when the object was closed. */
        readonly closedAt: Schema.NullOr<Schema.String>;
        /** Identifies the date and time when the object was last updated. */
        readonly updatedAt: Schema.String;
        /** The head and base repositories are different. */
        readonly isCrossRepository: Schema.Boolean;
        /** The repository associated with this pull request's head Ref. */
        readonly headRepository: Schema.NullOr<Schema.Struct<{
            /** The name of the repository. */
            readonly name: Schema.String;
            /** The repository's name with owner. */
            readonly nameWithOwner: Schema.String;
        }>>;
        /** The owner of the repository associated with this pull request's head Ref. */
        readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
            readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
            /** The username used to login. */
            readonly login: Schema.String;
        }>>;
    }>>;
}>;
export interface PullRequestByNumberRepositoryRepository extends Schema.Struct.Type<typeof PullRequestByNumberRepositoryRepository.fields> {
}
/** `query PullRequestByNumber` */
export declare const PullRequestByNumber: GraphQL.Operation<"query", "PullRequestByNumber", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    number: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** Returns a single pull request from the current repository by number. */
        readonly pullRequest: Schema.NullOr<Schema.Struct<{
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefOid: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was closed. */
            readonly closedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The head and base repositories are different. */
            readonly isCrossRepository: Schema.Boolean;
            /** The repository associated with this pull request's head Ref. */
            readonly headRepository: Schema.NullOr<Schema.Struct<{
                /** The name of the repository. */
                readonly name: Schema.String;
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>>;
            /** The owner of the repository associated with this pull request's head Ref. */
            readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
                readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
                /** The username used to login. */
                readonly login: Schema.String;
            }>>;
        }>>;
    }>>;
}>, never>;
export declare namespace PullRequestByNumber {
    type Variables = typeof PullRequestByNumber.variables.Type;
    type Result = typeof PullRequestByNumber.result.Type;
}
/** Every operation in sourceControlProvider.graphql. */
export declare const SourceControlProviderGraphQLGroup: GraphQLGroup.GraphQLGroup<GraphQL.Operation<"query", "PullRequestByNumber", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    number: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** Returns a single pull request from the current repository by number. */
        readonly pullRequest: Schema.NullOr<Schema.Struct<{
            /** Identifies the pull request number. */
            readonly number: Schema.Number;
            /** Identifies the pull request title. */
            readonly title: Schema.String;
            /** The HTTP URL for this pull request. */
            readonly url: Schema.String;
            /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
            readonly baseRefName: Schema.String;
            /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefName: Schema.String;
            /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
            readonly headRefOid: Schema.String;
            /** Identifies the state of the pull request. */
            readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
            /** Identifies if the pull request is a draft. */
            readonly isDraft: Schema.Boolean;
            /** The date and time that the pull request was merged. */
            readonly mergedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was closed. */
            readonly closedAt: Schema.NullOr<Schema.String>;
            /** Identifies the date and time when the object was last updated. */
            readonly updatedAt: Schema.String;
            /** The head and base repositories are different. */
            readonly isCrossRepository: Schema.Boolean;
            /** The repository associated with this pull request's head Ref. */
            readonly headRepository: Schema.NullOr<Schema.Struct<{
                /** The name of the repository. */
                readonly name: Schema.String;
                /** The repository's name with owner. */
                readonly nameWithOwner: Schema.String;
            }>>;
            /** The owner of the repository associated with this pull request's head Ref. */
            readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
                readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
                /** The username used to login. */
                readonly login: Schema.String;
            }>>;
        }>>;
    }>>;
}>, never> | GraphQL.Operation<"query", "PullRequestsByHead", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    head: Schema.String;
    states: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Literals<readonly ["CLOSED", "MERGED", "OPEN"]>>>>;
    first: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** A list of pull requests that have been opened in the repository. */
        readonly pullRequests: Schema.Struct<{
            /** A list of nodes. */
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.NullOr<Schema.Struct<{
                /** Identifies the pull request number. */
                readonly number: Schema.Number;
                /** Identifies the pull request title. */
                readonly title: Schema.String;
                /** The HTTP URL for this pull request. */
                readonly url: Schema.String;
                /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
                readonly baseRefName: Schema.String;
                /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefName: Schema.String;
                /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
                readonly headRefOid: Schema.String;
                /** Identifies the state of the pull request. */
                readonly state: Schema.refine<"CLOSED" | "MERGED" | "OPEN", Schema.String>;
                /** Identifies if the pull request is a draft. */
                readonly isDraft: Schema.Boolean;
                /** The date and time that the pull request was merged. */
                readonly mergedAt: Schema.NullOr<Schema.String>;
                /** Identifies the date and time when the object was closed. */
                readonly closedAt: Schema.NullOr<Schema.String>;
                /** Identifies the date and time when the object was last updated. */
                readonly updatedAt: Schema.String;
                /** The head and base repositories are different. */
                readonly isCrossRepository: Schema.Boolean;
                /** The repository associated with this pull request's head Ref. */
                readonly headRepository: Schema.NullOr<Schema.Struct<{
                    /** The name of the repository. */
                    readonly name: Schema.String;
                    /** The repository's name with owner. */
                    readonly nameWithOwner: Schema.String;
                }>>;
                /** The owner of the repository associated with this pull request's head Ref. */
                readonly headRepositoryOwner: Schema.NullOr<Schema.Struct<{
                    readonly __typename: Schema.refine<"Organization" | "User", Schema.String>;
                    /** The username used to login. */
                    readonly login: Schema.String;
                }>>;
            }>>>>;
        }>;
    }>>;
}>, never>>;
