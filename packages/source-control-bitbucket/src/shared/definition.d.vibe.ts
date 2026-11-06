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
    /** @throws {never} */
    readonly publishHost: () => string;
    /** @throws {never} */
    readonly newRepositoryOwner: () => null;
    readonly defaultCloneTransport: "ssh";
    /** @throws {never} */
    readonly changeRequestUrl: ({ host, repository, number, webUrl }: import("@t3tools/source-control-core/shared/definition").ChangeRequestUrlInput) => string;
    /** @throws {never} */
    readonly parseChangeRequestUrl: (url: URL) => import("@t3tools/source-control-core/shared/definition").ParsedChangeRequestUrl | null;
    /** @throws {never} */
    readonly changeRequestUrlFromReferenceAutolink: () => null;
    readonly changeRequestActions: Set<"close" | "merge">;
    /** @throws {never} */
    readonly checkoutCommand: ({ number, headBranch, headRepositoryNameWithOwner }: import("@t3tools/source-control-core/shared/definition").ChangeRequestCheckoutInput) => string | null;
    /** @throws {never} */
    readonly authorProfileUrl: () => null;
    /** @throws {never} */
    readonly reviewSummaryRequired: () => false;
    /** @throws {never} */
    readonly checkoutCommandArgument: () => null;
    /** @throws {never} */
    readonly isChangeRequestReference: () => false;
    /** @throws {never} */
    readonly checkoutChangeRequestHost: () => null;
    /** @throws {never} */
    readonly recognizeRemote: ({ host, hostname }: import("@t3tools/source-control-core/shared/definition").GitRemoteHost) => {
        kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        name: string;
        baseUrl: string;
    } | null;
    /** @throws {never} */
    readonly isChangeRequestInRepository: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    /** @throws {never} */
    readonly canReadChangeRequestOnHost: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    readonly settings: Schema.Struct<{
        readonly accessToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly email: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly apiToken: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    }>;
};
