import type { AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import * as AsyncResult from "effect/reactivity/AsyncResult";
import * as Cause from "effect/Cause";

export function throwUnlessSuccess<A, E>(result: AtomCommandResult<A, E>): void {
  if (!AsyncResult.isSuccess(result)) throw Cause.squash(result.cause);
}
