import * as Effect from "effect/Effect";
import type { PullRequestViewerPermissions } from "@t3tools/contracts";
import * as BitbucketPullRequestApi from "./BitbucketPullRequestApi.ts";
import { type PullRequestProviderFailure, type PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
/**
 * Bitbucket lets the author of a pull request decline their own with no more than read access,
 * and the permission response says nothing about who opened this one — so withholding the
 * control from the one person entitled to it is the worse of the two mistakes.
 * @throws {never}
 */
export declare function bitbucketViewerPermissions(input: {
    readonly canWrite: boolean;
}): PullRequestViewerPermissions;
/** @throws {never} */
export declare function bitbucketProviderFailure(error: BitbucketPullRequestApi.BitbucketPullRequestApiError): PullRequestProviderFailure;
export declare const make: Effect.Effect<PullRequestProviderApi, never, BitbucketPullRequestApi.BitbucketPullRequestApi>;
