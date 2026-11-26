import type { PullRequestDetail, PullRequestMergeMethod } from "@t3tools/contracts";

import { allowedMergeMethods, canPerformPullRequestAction } from "./pullRequestActions";

// Throws when the fresh detail no longer allows `method`; the merge command reports the error.
export function resolveFreshMergeMethod(
  fresh: PullRequestDetail,
  method: PullRequestMergeMethod,
  terminology: { readonly singular: string },
): PullRequestMergeMethod {
  if (!canPerformPullRequestAction(fresh, "merge") || !allowedMergeMethods(fresh).includes(method))
    throw new Error(`The ${terminology.singular} changed. Refresh before merging.`);
  return method;
}
