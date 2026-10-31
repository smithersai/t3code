import { SourceControlProviderKind } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { type ChangeRequest, SourceControlProviderError } from "@t3tools/contracts";
import * as AzureDevOpsCli from "./AzureDevOpsCli.js";
import * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
import { type SourceControlAuthProbeInput } from "@t3tools/source-control-core/server/discovery";
declare function parseAzureAuth(input: SourceControlAuthProbeInput): {
    readonly status: "authenticated" | "unauthenticated" | "unknown";
    readonly account: import("effect/Option").Option<string>;
    readonly host: import("effect/Option").Option<string>;
    readonly detail: import("effect/Option").Option<string>;
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
    probeTimeoutMs: number;
    parseAuth: typeof parseAzureAuth;
    installHint: string;
};
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
    }) => Effect.Effect<import("effect/Option").Option<string>>;
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
    }) => Effect.Effect<import("@t3tools/contracts").SourceControlRepositoryCloneUrls, SourceControlProviderError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: import("@t3tools/contracts").SourceControlRepositoryVisibility;
    }) => Effect.Effect<import("@t3tools/contracts").SourceControlRepositoryCloneUrls, SourceControlProviderError>;
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
}, never, AzureDevOpsCli.AzureDevOpsCli>;
export {};
