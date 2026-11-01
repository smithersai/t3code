import * as Schema from "effect/Schema";
declare function parseChangeRequestUrl(url: URL): import("@t3tools/source-control-core/shared/definition").ParsedChangeRequestUrl | null;
export declare const settings: Schema.Struct<{
    readonly token: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
}>;
export type GitCafeSettings = typeof settings.Type;
export declare const definition: {
    readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
    readonly label: "GitCafe";
    readonly pickerLabel: "GitCafe";
    readonly icon: import("@t3tools/source-control-core/shared/definition").SourceControlIcon;
    readonly changeRequest: {
        readonly shortLabel: "PR";
        readonly shortLabelWithArticle: "a PR";
        readonly singular: "pull request";
        readonly plural: "pull requests";
    };
    readonly repositoryPathHint: "owner/repo";
    readonly publicHost: "git.cafe";
    readonly publishDescription: "git.cafe";
    readonly publishHost: () => string;
    readonly newRepositoryOwner: (account: string | null) => {
        owner: string;
    } | null;
    readonly defaultCloneTransport: "ssh";
    readonly changeRequestUrl: ({ host, repository, number, webUrl }: import("@t3tools/source-control-core/shared/definition").ChangeRequestUrlInput) => string;
    readonly parseChangeRequestUrl: typeof parseChangeRequestUrl;
    readonly changeRequestUrlFromReferenceAutolink: () => null;
    readonly changeRequestActions: Set<"close" | "draft" | "merge" | "ready" | "reopen" | "update-branch">;
    readonly checkoutCommand: ({ number }: import("@t3tools/source-control-core/shared/definition").ChangeRequestCheckoutInput) => string;
    readonly changeRequestCloseCommand: RegExp;
    readonly authorProfileUrl: () => null;
    readonly reviewSummaryRequired: () => false;
    readonly checkoutCommandArgument: () => null;
    readonly isChangeRequestReference: (url: string) => boolean;
    readonly checkoutChangeRequestHost: () => null;
    readonly recognizeRemote: ({ hostname }: import("@t3tools/source-control-core/shared/definition").GitRemoteHost) => {
        kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        name: string;
        baseUrl: string;
    } | null;
    readonly isChangeRequestInRepository: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    readonly canReadChangeRequestOnHost: (identity: import("@t3tools/source-control-core/shared/definition").ChangeRequestProjectIdentity, link: import("@t3tools/source-control-core/shared/definition").ChangeRequestLink) => boolean;
    readonly settings: Schema.Struct<{
        readonly token: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    }>;
};
export declare function parsePullRequestUrl(value: string): import("@t3tools/source-control-core/shared/definition").ParsedChangeRequestUrl | null;
export declare function canonicalizePullRequestUrl(value: string): string;
export {};
