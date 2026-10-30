import { GraphQL, GraphQLGroup } from "effect/graphql";
import * as Schema from "effect/Schema";
/** A repository contains the content for a project. */
export declare const HeadRepositoryRepository: Schema.Struct<{
    /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
    readonly viewerPermission: Schema.NullOr<Schema.refine<"ADMIN" | "MAINTAIN" | "READ" | "TRIAGE" | "TRIAGE_PLUS" | "WRITE", Schema.String>>;
}>;
export interface HeadRepositoryRepository extends Schema.Struct.Type<typeof HeadRepositoryRepository.fields> {
}
/** A repository pull request. */
export declare const PullRequest: Schema.Struct<{
    /** The repository associated with this pull request's head Ref. */
    readonly headRepository: Schema.NullOr<Schema.Struct<{
        /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
        readonly viewerPermission: Schema.NullOr<Schema.refine<"ADMIN" | "MAINTAIN" | "READ" | "TRIAGE" | "TRIAGE_PLUS" | "WRITE", Schema.String>>;
    }>>;
    /** Indicates whether maintainers can modify the pull request. */
    readonly maintainerCanModify: Schema.Boolean;
}>;
export interface PullRequest extends Schema.Struct.Type<typeof PullRequest.fields> {
}
/** A repository contains the content for a project. */
export declare const RepositoryRepository: Schema.Struct<{
    /** Returns a single pull request from the current repository by number. */
    readonly pullRequest: Schema.NullOr<Schema.Struct<{
        /** The repository associated with this pull request's head Ref. */
        readonly headRepository: Schema.NullOr<Schema.Struct<{
            /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
            readonly viewerPermission: Schema.NullOr<Schema.refine<"ADMIN" | "MAINTAIN" | "READ" | "TRIAGE" | "TRIAGE_PLUS" | "WRITE", Schema.String>>;
        }>>;
        /** Indicates whether maintainers can modify the pull request. */
        readonly maintainerCanModify: Schema.Boolean;
    }>>;
}>;
export interface RepositoryRepository extends Schema.Struct.Type<typeof RepositoryRepository.fields> {
}
/** `query PullRequestBranchAccess` */
export declare const PullRequestBranchAccess: GraphQL.Operation<"query", "PullRequestBranchAccess", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    number: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** Returns a single pull request from the current repository by number. */
        readonly pullRequest: Schema.NullOr<Schema.Struct<{
            /** The repository associated with this pull request's head Ref. */
            readonly headRepository: Schema.NullOr<Schema.Struct<{
                /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
                readonly viewerPermission: Schema.NullOr<Schema.refine<"ADMIN" | "MAINTAIN" | "READ" | "TRIAGE" | "TRIAGE_PLUS" | "WRITE", Schema.String>>;
            }>>;
            /** Indicates whether maintainers can modify the pull request. */
            readonly maintainerCanModify: Schema.Boolean;
        }>>;
    }>>;
}>, never>;
export declare namespace PullRequestBranchAccess {
    type Variables = typeof PullRequestBranchAccess.variables.Type;
    type Result = typeof PullRequestBranchAccess.result.Type;
}
/** Every operation in stackActions.graphql. */
export declare const StackActionsGraphQLGroup: GraphQLGroup.GraphQLGroup<GraphQL.Operation<"query", "PullRequestBranchAccess", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    number: Schema.Number;
}>, Schema.Struct<{
    /** Lookup a given repository by the owner and repository name. */
    readonly repository: Schema.NullOr<Schema.Struct<{
        /** Returns a single pull request from the current repository by number. */
        readonly pullRequest: Schema.NullOr<Schema.Struct<{
            /** The repository associated with this pull request's head Ref. */
            readonly headRepository: Schema.NullOr<Schema.Struct<{
                /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
                readonly viewerPermission: Schema.NullOr<Schema.refine<"ADMIN" | "MAINTAIN" | "READ" | "TRIAGE" | "TRIAGE_PLUS" | "WRITE", Schema.String>>;
            }>>;
            /** Indicates whether maintainers can modify the pull request. */
            readonly maintainerCanModify: Schema.Boolean;
        }>>;
    }>>;
}>, never>>;
