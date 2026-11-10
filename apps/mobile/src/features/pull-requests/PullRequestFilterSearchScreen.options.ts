import type { EnvironmentId, PullRequestFilterOptionsInput } from "@t3tools/contracts";
import * as Option from "effect/Option";
import { AsyncResult, Atom } from "effect/reactivity";

import { composerPullRequests } from "../../state/pull-requests.vibe";

export const optionsFamily = Atom.family((key: string) => {
  const targets: readonly {
    readonly environmentId: EnvironmentId;
    readonly input: PullRequestFilterOptionsInput;
  }[] = JSON.parse(key);
  return Atom.make((get) => {
    const results = targets.map((target) => get(composerPullRequests.filterOptions(target)));
    return {
      values: results.flatMap((result) => Option.toArray(AsyncResult.value(result))),
      waiting: results.some((result) => result.waiting),
      failed: results.some(AsyncResult.isFailure),
    };
  });
});
