import { type SourceControlProviderDiscoverySpec } from "@t3tools/source-control-core/server/discovery";
import type { SourceControlDriverInstance } from "@t3tools/source-control-core/server/driver";
import type { PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
import type * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
/**
 * A pull request provider that can do everything and holds nothing: lists are empty, writes
 * succeed, and reads a test did not supply die.
 */
export declare function fakePullRequestProvider(kind: string, overrides?: Partial<PullRequestProviderApi>): PullRequestProviderApi;
type SourceControlProviderService = SourceControlProvider.SourceControlProvider["Service"];
/** A source control provider whose every operation dies unless the test supplies it. */
export declare function fakeSourceControlProvider(kind: string, overrides?: Partial<SourceControlProviderService>): SourceControlProviderService;
/** Discovery over an API integration that reports an unknown sign-in. */
export declare function fakeDiscovery(kind: string, overrides?: Partial<Extract<SourceControlProviderDiscoverySpec, {
    readonly type: "api";
}>>): SourceControlProviderDiscoverySpec;
export interface FakeSourceControlDriverOptions {
    readonly sourceControl?: Partial<SourceControlProviderService>;
    /** Null for a host whose pull requests this build cannot read. */
    readonly pullRequests?: Partial<PullRequestProviderApi> | null;
    readonly discovery?: SourceControlProviderDiscoverySpec;
    readonly fetchMedia?: SourceControlDriverInstance["fetchMedia"];
}
/** A driver instance for a host named `kind` that needs none of the server's services. */
export declare function fakeSourceControlDriverInstance(kind: string, options?: FakeSourceControlDriverOptions): SourceControlDriverInstance;
export {};
