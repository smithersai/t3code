import { SourceControlProviderKind } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import { SourceControlProviderError, type ChangeRequest, type SourceControlRepositoryCloneUrls } from "@t3tools/contracts";
import * as GitHubRest from "./GitHubRest.vibe";
import * as GitHubRequestPolicy from "./GitHubRequestPolicy.vibe";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
import * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
import { type SourceControlAuthProbeInput } from "@t3tools/source-control-core/server/discovery";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import * as GitHubClient from "../shared/definition.ts";
/** @throws {never} */
export declare function parseGitHubAuth(input: SourceControlAuthProbeInput, settings?: GitHubClient.GitHubSettings): {
    readonly status: "authenticated" | "unauthenticated" | "unknown";
    readonly account: Option.Option<string>;
    readonly host: Option.Option<string>;
    readonly detail: Option.Option<string>;
    readonly accounts?: readonly {
        readonly host: string;
        readonly account: string;
        readonly active: boolean;
        readonly authenticated: boolean;
        readonly error?: string;
        readonly environmentVariable?: string;
    }[];
};
export declare const discovery: {
    type: "cli";
    kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
    label: string;
    executable: string;
    versionArgs: string[];
    authArgs: string[];
    parseAuth: typeof parseGitHubAuth;
    installHint: string;
};
export declare const makeDiscovery: Effect.Effect<{
    type: "managed-cli";
    kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
    label: string;
    installHint: string;
    probe: (cwd: string) => Effect.Effect<{
        readonly label: string;
        readonly executable?: string | undefined;
        readonly status: "available" | "missing";
        readonly version: Option.Option<string>;
        readonly installHint: string;
        readonly detail: Option.Option<string>;
        readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly auth: {
            readonly status: "authenticated" | "unauthenticated" | "unknown";
            readonly account: Option.Option<string>;
            readonly host: Option.Option<string>;
            readonly detail: Option.Option<string>;
            readonly accounts?: readonly {
                readonly host: string;
                readonly account: string;
                readonly active: boolean;
                readonly authenticated: boolean;
                readonly error?: string;
                readonly environmentVariable?: string;
            }[];
        };
    }, never, never>;
    refineUnknownRemote: ({ context }: {
        readonly cwd: string;
        readonly context: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<{
        readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly name: "GitHub Self-Hosted";
        readonly baseUrl: string;
    } | null, GitHubRequestPolicy.GitHubApiAuthenticationError | GitHubRequestPolicy.GitHubApiNotFoundError | GitHubRequestPolicy.GitHubApiRateLimitError | GitHubRequestPolicy.GitHubApiRequestError | GitHubRequestPolicy.GitHubApiResponseError | import("./GitHubCredentials.vibe").GitHubCliFailedError | SourceControlRateLimit.SourceControlRateLimitPausedError, never>;
}, never, GitHubRest.GitHubRest | SourceControlHost.SourceControlHost>;
/** @throws {never} */
export declare function pullRequestCheckoutBranchName(input: {
    readonly headRefName: string;
    readonly headOwner: string | null;
    readonly isCrossRepository: boolean;
    readonly defaultBranch: string | null;
}): string;
export declare const make: Effect.Effect<{
    readonly kind: SourceControlProviderKind;
    readonly headBranchProbe?: (input: {
        readonly headSelectors: ReadonlyArray<string>;
        readonly state: "open" | "all";
    }) => {
        readonly headSelectors: ReadonlyArray<string>;
        readonly limit: number;
    };
    readonly readChangeRequestTemplate?: (input: {
        readonly cwd: string;
        readonly treeish: string;
    }) => Effect.Effect<Option.Option<string>>;
    readonly repositoryNameFromRemoteUrl?: (url: string) => string | null;
    readonly refineRepositoryIdentity?: (input: {
        readonly identity: import("@t3tools/contracts").RepositoryIdentity;
        readonly resolveContext: (input: {
            readonly cwd: string;
            readonly context: SourceControlProvider.SourceControlProviderContext;
        }) => Effect.Effect<SourceControlProvider.SourceControlProviderContext | null, SourceControlProviderError>;
    }) => Effect.Effect<import("@t3tools/contracts").RepositoryIdentity, SourceControlProviderError>;
    readonly resolveRemoteWebHost?: (input: {
        readonly cwd: string;
        readonly context: SourceControlProvider.SourceControlProviderContext;
        readonly resolveContext: (input: {
            readonly cwd: string;
            readonly context: SourceControlProvider.SourceControlProviderContext;
        }) => Effect.Effect<SourceControlProvider.SourceControlProviderContext | null, SourceControlProviderError>;
    }) => Effect.Effect<string | null, SourceControlProviderError>;
    readonly resolveLink?: SourceControlProvider.ResolveSourceControlLink;
    readonly createsChangeRequestsIn?: (input: {
        readonly cwd: string;
        readonly context: SourceControlProvider.SourceControlProviderContext;
        readonly repository: string | null;
    }) => Effect.Effect<boolean>;
    readonly recordBranchBase?: (input: {
        readonly cwd: string;
        readonly branch: string;
        readonly baseBranch: string;
    }) => Effect.Effect<void>;
    readonly listChangeRequests: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly headSelector: string;
        readonly state: import("@t3tools/contracts").ChangeRequestState | "all";
        readonly limit?: number;
    }) => Effect.Effect<ReadonlyArray<ChangeRequest>, SourceControlProviderError>;
    readonly getChangeRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
    }) => Effect.Effect<ChangeRequest, SourceControlProviderError>;
    readonly createChangeRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly baseRefName: string;
        readonly headSelector: string;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, SourceControlProviderError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly repository: string;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, SourceControlProviderError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: import("@t3tools/contracts").SourceControlRepositoryVisibility;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, SourceControlProviderError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<string | null, SourceControlProviderError>;
    readonly checkoutChangeRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
        readonly force?: boolean;
    }) => Effect.Effect<void, SourceControlProviderError>;
}, never, FileSystem.FileSystem | GitHubRequestPolicy.GitHubRequestPolicy | GitHubRest.GitHubRest | import("effect/http/HttpClient").HttpClient | SourceControlHost.SourceControlHost>;
