import { type PullRequestAction, type PullRequestReviewVerdict, type RepositoryIdentity, SourceControlProviderKind, type SourceControlProviderInfo } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
/**
 * The two strings are what `changeRequestHost` and the project's `repositoryIdentity` produce
 * from a git remote — lower case, no port, the full path below the host — because links are
 * matched against those. `authority` keeps the port for hosts whose identity includes it.
 */
export interface ChangeRequestLink {
    readonly host: string;
    readonly repository: string;
    readonly number: number;
    readonly authority?: string;
}
export interface ParsedChangeRequestUrl extends ChangeRequestLink {
    /** The repository's browser URL, without query or hash. */
    readonly repositoryUrl: string;
}
export interface ChangeRequestTerminology {
    readonly shortLabel: string;
    /** Spelled out because the article follows how the label is said: "an MR". */
    readonly shortLabelWithArticle: string;
    readonly singular: string;
    readonly plural: string;
}
export interface ChangeRequestUrlInput {
    readonly host: string;
    readonly repository: string;
    readonly number: number;
    readonly remoteUrl?: string | undefined;
    /** The repository's browser URL; when given, the result is this plus the host's route. */
    readonly webUrl?: string | undefined;
}
export type ChangeRequestProjectIdentity = Pick<RepositoryIdentity, "canonicalKey" | "locator" | "webUrl" | "displayName" | "owner" | "name">;
export type ChangeRequestHostIdentity = {
    readonly canonicalKey?: string | undefined;
    readonly locator?: {
        readonly remoteUrl: string;
    } | undefined;
} | null | undefined;
export type RepositorySelectorIdentity = Pick<RepositoryIdentity, "provider" | "displayName" | "owner" | "name">;
/** A git remote's host, as `recognizeRemote` reads it. */
export interface GitRemoteHost {
    /** Trimmed. */
    readonly remoteUrl: string;
    /** Lower case. Keeps the port of an HTTP remote, never an SSH one. */
    readonly host: string;
    /** `host` without its port. */
    readonly hostname: string;
}
export interface ChangeRequestCheckoutInput {
    readonly number: number;
    readonly headBranch: string;
    readonly headRepositoryNameWithOwner?: string | null | undefined;
    readonly repositoryUrl?: string | null | undefined;
}
/** Media a host serves only to a request carrying a credential, as `mediaUrl` reads it. */
export interface SourceControlMediaUrl {
    /** The canonical URL to fetch, the same for every spelling of one file. */
    readonly fetchUrl: string;
    /** A file name for the media, safe to put in a path or a download. */
    readonly fileName: string;
    /** Set when the URL alone says what the media is, as an extensionless upload can. */
    readonly kind?: "image" | "video";
}
export interface ReferenceAutolink {
    /** Where `text` starts in the string that was searched. */
    readonly index: number;
    readonly text: string;
    /** What to show for the link, which can be shorter than `text`, as for a commit SHA. */
    readonly label: string;
    readonly url: string;
    readonly kind: "reference" | "commit" | "mention";
}
/**
 * A host's mark as data, so web and mobile draw the same artwork without React in the host's
 * package. Paths only: a circle or rectangle is written as a path.
 */
export interface SourceControlIcon {
    readonly viewBox: string;
    /** Always in user space, as `gradientUnits="userSpaceOnUse"`. */
    readonly gradients?: ReadonlyArray<SourceControlIconGradient>;
    readonly paths: ReadonlyArray<SourceControlIconPath>;
}
export interface SourceControlIconGradient {
    /** Unique within the icon; renderers make it unique on the page. */
    readonly id: string;
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
    readonly transform?: string;
    readonly stops: ReadonlyArray<{
        readonly offset: number;
        readonly color: string;
        readonly opacity?: number;
    }>;
}
/** A colour, `currentColor` for a mark drawn in the text colour, or one of the icon's gradients. */
export type SourceControlIconPaint = string | {
    readonly gradient: string;
};
export interface SourceControlIconPath {
    readonly d: string;
    /** Absent means unfilled. */
    readonly fill?: SourceControlIconPaint;
    readonly fillRule?: "evenodd" | "nonzero";
    readonly fillOpacity?: number;
    readonly stroke?: string;
    readonly strokeWidth?: number;
}
/**
 * Whether the mark is drawn in the text colour alone, so a client may tint it.
 * @throws {never}
 */
export declare function isMonochromeSourceControlIcon(icon: SourceControlIcon): boolean;
/**
 * For a host whose server signs in per hostname, with a saved token or one of a CLI's logins.
 * Its `settings` include `hostCredentialSettingsFields`, and clients show controls for those
 * instead of the generic settings form.
 */
export interface SourceControlHostCredentials {
    /** The command name, as `gh`. */
    readonly cliName: string;
    /** The CLI's product name, as `GitHub CLI`. */
    readonly cliLabel: string;
    readonly loginCommand: string;
    /** The variable the server reads a token from, which a saved token takes precedence over. */
    readonly tokenEnvVar: string;
    /** What a token must be granted, completing "Give it …". */
    readonly tokenAccess: string;
    /** @throws {never} */
    readonly newTokenUrl: (host: string) => string;
}
export declare const SourceControlHostName: Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>;
export declare const HostAccountChoice: Schema.Struct<{
    readonly account: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
}>;
export type HostAccountChoice = typeof HostAccountChoice.Type;
/** Per-hostname settings of a host with `credentials`, keyed by lower-case hostname. */
export declare const hostCredentialSettingsFields: {
    hosts: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, Schema.Struct<{
        readonly account: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>, never>;
    tokens: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
};
export declare const HostCredentialSettings: Schema.Struct<{
    hosts: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, Schema.Struct<{
        readonly account: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>, never>;
    tokens: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
}>;
export type HostCredentialSettings = typeof HostCredentialSettings.Type;
/**
 * What the server and every client know about a forge. It is plain data and pure functions so
 * one copy serves both sides; a lint rule keeps UI runtimes out of `shared/`.
 */
export interface SourceControlDefinition {
    readonly kind: SourceControlProviderKind;
    readonly label: string;
    readonly pickerLabel: string;
    /** Null for a host without a mark of its own; clients draw a generic change request glyph. */
    readonly icon: SourceControlIcon | null;
    /** Further words settings search finds this host by, besides its label. */
    readonly searchKeywords?: ReadonlyArray<string>;
    readonly credentials?: SourceControlHostCredentials;
    readonly changeRequest: ChangeRequestTerminology;
    readonly repositoryPathHint: string;
    readonly publicHost: string | null;
    readonly publishDescription: string;
    /** @throws {never} */
    readonly publishHost: (signedInHost: string | null) => string;
    /** @throws {never} */
    readonly newRepositoryOwner: (account: string | null) => {
        readonly owner: string | null;
    } | null;
    readonly defaultCloneTransport: "https" | "ssh";
    /** @throws {never} */
    readonly changeRequestUrl: (input: ChangeRequestUrlInput) => string | null;
    /**
     * Null when the URL is not one of this host's change requests.
     * @throws {never}
     */
    readonly parseChangeRequestUrl: (url: URL) => ParsedChangeRequestUrl | null;
    /**
     * The change request URL a bare `#123` autolink might name, for hosts that write every
     * reference through their issue route. Only a candidate: the caller must read it as a change
     * request before treating it as one.
     * @throws {never}
     */
    readonly changeRequestUrlFromReferenceAutolink: (url: URL) => string | null;
    /**
     * The actions this host can take on a change request, the same list its server provider
     * declares in `capabilities.actions`.
     */
    readonly changeRequestActions: ReadonlySet<PullRequestAction>;
    /** @throws {never} */
    readonly checkoutCommand: (changeRequest: ChangeRequestCheckoutInput) => string | null;
    /**
     * Matches a shell command that merges or closes a change request with this host's CLI, which
     * sends T3 no notification of its own. Absent for a host with no such CLI.
     */
    readonly changeRequestCloseCommand?: RegExp;
    /**
     * Matches a shell command that opens a change request with this host's CLI and prints its URL
     * on a line of its own. Absent for a host with no such CLI.
     */
    readonly changeRequestCreateCommand?: RegExp;
    /** @throws {never} */
    readonly authorProfileUrl: (login: string, repositoryUrl: string) => string | null;
    /**
     * The references this host's own renderer links in plain text, such as `#12` or a commit SHA,
     * resolved against `repositoryUrl`, in the order they appear. Absent for a host whose grammar
     * T3 does not apply.
     * @throws {never}
     */
    readonly referenceAutolinks?: (text: string, repositoryUrl: string) => ReadonlyArray<ReferenceAutolink>;
    /**
     * Where the host lists a change request's checks. Absent means the change request's own page.
     * @throws {never}
     */
    readonly changeRequestChecksUrl?: (changeRequestUrl: string) => string;
    /**
     * The actions a server too old to report `capabilities.actions` could still take on this host's
     * change requests. Absent means none.
     */
    readonly changeRequestActionsWhenUnreported?: ReadonlySet<PullRequestAction>;
    /**
     * `host` when the server lists change requests in many repositories on this host with one read,
     * so a page's size bounds the rows of every repository together. Absent means one read per
     * repository.
     */
    readonly changeRequestListScope?: "host" | "repository";
    /** @throws {never} */
    readonly reviewSummaryRequired: (verdict: PullRequestReviewVerdict) => boolean;
    /** @throws {never} */
    readonly checkoutCommandArgument: (input: string) => string | null;
    /** @throws {never} */
    readonly isChangeRequestReference: (url: string) => boolean;
    /** @throws {never} */
    readonly isChangeRequestInRepository: (identity: ChangeRequestProjectIdentity, link: ChangeRequestLink) => boolean;
    /** @throws {never} */
    readonly canReadChangeRequestOnHost: (identity: ChangeRequestProjectIdentity, link: ChangeRequestLink) => boolean;
    /** @throws {never} */
    readonly checkoutChangeRequestHost: (identity: ChangeRequestProjectIdentity) => string | null;
    /**
     * The ref the target repository publishes change request `number`'s head under, which names the
     * head even when it lives in a fork. Absent for a host that publishes none.
     * @throws {never}
     */
    readonly changeRequestHeadRef?: (number: number) => string;
    /**
     * Null when this host does not claim the remote. Asked in the registry's recognition order.
     * @throws {never}
     */
    readonly recognizeRemote: (remote: GitRemoteHost) => SourceControlProviderInfo | null;
    /**
     * The host change requests in the project are listed and keyed under.
     * @throws {never}
     */
    readonly changeRequestHost?: (identity: ChangeRequestHostIdentity) => string;
    /**
     * What the host's tools take to select the project's repository. Absent means the repository
     * path, `owner/name`.
     * @throws {never}
     */
    readonly repositorySelector?: (identity: RepositorySelectorIdentity) => string | null;
    /**
     * For a host that spells one repository differently over SSH and on the web: the web spelling
     * of the `host/path` key `normalizeGitRemoteUrl` made from a remote that names a host. Null when
     * the key is not this host's. Persisted repository keys are built with it, so its output must
     * not change.
     * @throws {never}
     */
    readonly repositoryKeyFromRemote?: (key: string) => string | null;
    /**
     * For a host with more than one spelling of a repository key: the one every spelling compares
     * equal under. Null when the key is not this host's.
     * @throws {never}
     */
    readonly canonicalRepositoryKey?: (key: string) => string | null;
    /**
     * Null when `url` is not media this host keeps behind a credential. A client cannot load such
     * media itself, so it asks the server, whose driver for this host fetches it.
     * @throws {never}
     */
    readonly mediaUrl?: (url: URL) => SourceControlMediaUrl | null;
    readonly settings?: SourceControlHostSettingsSchema;
}
export type SourceControlHostSettingsSchema = {
    readonly fields: Readonly<Record<string, Schema.Top>>;
} & Schema.Decoder<object>;
/**
 * Reads a change request from `url` with `route`, whose first group is the repository path and
 * second the number.
 * @throws {never}
 */
export declare function parseChangeRequestPath(url: URL, route: RegExp): ParsedChangeRequestUrl | null;
/** @throws {never} */
export declare function changeRequestUrlBelow(webUrl: string, route: string): string;
/**
 * An HTTP remote on `host` names the server's web origin, port included; SSH remotes do not.
 * @throws {never}
 */
export declare function remoteWebOrigin(host: string, remoteUrl: string | undefined): string;
/** @throws {never} */
export declare function defineSourceControl<const Definition extends SourceControlDefinition>(definition: Definition): Definition;
/** @throws {never} */
export declare function isChangeRequestAuthorityOfProject(identity: ChangeRequestProjectIdentity, link: ChangeRequestLink): boolean;
/**
 * The host of the project's repository key, or `kind` when the key has none.
 * @throws {never}
 */
export declare function projectChangeRequestHost<const Kind extends string | undefined>(identity: ChangeRequestHostIdentity, kind: Kind): string | Kind;
/**
 * `projectHost` is the project's `changeRequestHost`.
 * @throws {never}
 */
export declare function isChangeRequestOnProjectHost(projectHost: string, identity: ChangeRequestProjectIdentity, link: ChangeRequestLink): boolean;
/** @throws {never} */
export declare function isChangeRequestInProjectRepository(projectHost: string, identity: ChangeRequestProjectIdentity, link: ChangeRequestLink): boolean;
/**
 * Null when the remote names no host, such as a local path.
 * @throws {never}
 */
export declare function parseGitRemoteHost(remoteUrl: string): GitRemoteHost | null;
/**
 * What a remote on a host no definition claims reads as.
 * @throws {never}
 */
export declare function unknownRemoteProvider(remote: GitRemoteHost): SourceControlProviderInfo;
/**
 * What `definition` alone makes of a remote, for a host's own code that asks only about itself.
 * @throws {never}
 */
export declare function recognizeRemoteWith(definition: Pick<SourceControlDefinition, "recognizeRemote">, remoteUrl: string): SourceControlProviderInfo | null;
export declare const UNKNOWN_SOURCE_CONTROL_CLIENT: SourceControlDefinition;
export interface ParsedChangeRequest {
    readonly definition: SourceControlDefinition;
    readonly link: ParsedChangeRequestUrl;
}
export interface SourceControlMedia extends SourceControlMediaUrl {
    readonly definition: SourceControlDefinition;
}
export interface SourceControlDefinitionRegistry {
    readonly definitions: ReadonlyArray<SourceControlDefinition>;
    /** @throws {never} */
    readonly get: (kind: string | null | undefined) => SourceControlDefinition;
    /** @throws {never} */
    readonly find: (kind: string) => SourceControlDefinition | undefined;
    /** @throws {never} */
    readonly findByPublicHost: (hostname: string) => SourceControlDefinition | undefined;
    /**
     * The host whose `publicHost` is `hostname` or a parent domain of it, such as GitHub for
     * `gist.github.com`: which host a link is on, not one T3 can read from.
     * @throws {never}
     */
    readonly findByPublicDomain: (hostname: string) => SourceControlDefinition | undefined;
    /**
     * The first host, in registry order, that reads `url` as one of its change requests.
     * @throws {never}
     */
    readonly parseChangeRequestUrl: (url: string) => ParsedChangeRequest | null;
    /** @throws {never} */
    readonly findByChangeRequestUrl: (url: string) => SourceControlDefinition | undefined;
    /** @throws {never} */
    readonly hostLabelForChangeRequestUrl: (url: string) => string;
    /** @throws {never} */
    readonly isSameChangeRequest: (left: string, right: string) => boolean;
    /** @throws {never} */
    readonly changeRequestUrlFromReferenceAutolink: (url: string) => string | null;
    /**
     * The host a remote is on, from the first definition in recognition order that claims it, or an
     * unknown host. Null when the remote names no host.
     * @throws {never}
     */
    readonly recognizeRemote: (remoteUrl: string) => SourceControlProviderInfo | null;
    /**
     * `normalizeGitRemoteUrl`, in the spelling the remote's host uses on the web.
     * @throws {never}
     */
    readonly repositoryKeyFromRemote: (remoteUrl: string) => string;
    /** @throws {never} */
    readonly canonicalRepositoryKey: (key: string) => string;
    /**
     * The host that has more than one spelling of `key`, if any does.
     * @throws {never}
     */
    readonly findByRepositoryKey: (key: string) => SourceControlDefinition | undefined;
    /** @throws {never} */
    readonly repositorySelector: (identity: RepositorySelectorIdentity | null | undefined) => string | null;
    /** @throws {never} */
    readonly changeRequestHost: <const Kind extends string | undefined>(identity: ChangeRequestHostIdentity, kind: Kind) => string | Kind;
    /**
     * The first host, in registry order, that keeps `url` behind a credential.
     * @throws {never}
     */
    readonly mediaUrl: (url: string) => SourceControlMedia | null;
}
/**
 * `definitions` sets display order and the fallback for repositories with an unknown host.
 * Claim host-specific URL routes before hosts that accept them on any hostname.
 * Remote recognition needs a separate order because one hostname can carry several hosts' labels.
 * @throws {never}
 */
export declare function makeSourceControlDefinitionRegistry(definitions: ReadonlyArray<SourceControlDefinition>, options?: {
    readonly claimChangeRequestUrlsFirst?: ReadonlyArray<SourceControlProviderKind>;
    readonly recognizeRemotesIn?: ReadonlyArray<SourceControlProviderKind>;
}): SourceControlDefinitionRegistry;
/** @throws {never} */
export declare function readSourceControlHostSettings<S extends SourceControlHostSettingsSchema>(schema: S, saved: unknown): S["Type"];
