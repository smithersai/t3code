import * as Schema from "effect/Schema";
export declare const settings: Schema.Struct<{
    readonly accessToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly email: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly apiToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
}>;
export type BitbucketSettings = typeof settings.Type;
export declare const definition: {
    readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
    readonly label: "Bitbucket";
    readonly pickerLabel: "Bitbucket";
    readonly icon: import("@t3tools/source-control-core/shared/definition").SourceControlIcon;
    readonly changeRequest: {
        readonly shortLabel: "PR";
        readonly shortLabelWithArticle: "a PR";
        readonly singular: "pull request";
        readonly plural: "pull requests";
    };
    readonly repositoryPathHint: "workspace/repository";
    readonly publicHost: "bitbucket.org";
    readonly publishDescription: "bitbucket.org";
    readonly publishHost: () => string;
    readonly newRepositoryOwner: () => null;
    readonly defaultCloneTransport: "ssh";
    readonly changeRequestUrl: ({ host, repository, number, webUrl }: import("@t3tools/source-control-core/shared/definition").ChangeRequestUrlInput) => string;
    readonly parseChangeRequestUrl: (url: URL) => import("@t3tools/source-control-core/shared/definition").ParsedChangeRequestUrl | null;
    readonly changeRequestUrlFromReferenceAutolink: () => null;
    readonly changeRequestActions: Set<"close" | "merge">;
    readonly checkoutCommand: ({ number, headBranch, headRepositoryNameWithOwner }: import("@t3tools/source-control-core/shared/definition").ChangeRequestCheckoutInput) => string | null;
    readonly authorProfileUrl: () => null;
    readonly reviewSummaryRequired: () => false;
    readonly checkoutCommandArgument: () => null;
    readonly isChangeRequestReference: () => false;
    readonly checkoutChangeRequestHost: () => null;
    readonly recognizeRemote: ({ host, hostname }: import("@t3tools/source-control-core/shared/definition").GitRemoteHost) => {
        kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        name: string;
        baseUrl: string;
    } | null;
    readonly isChangeRequestInRepository: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    readonly canReadChangeRequestOnHost: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    readonly settings: Schema.Struct<{
        readonly accessToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly email: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly apiToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    }>;
};
