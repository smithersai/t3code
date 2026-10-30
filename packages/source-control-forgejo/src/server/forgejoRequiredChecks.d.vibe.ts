import * as Schema from "effect/Schema";
import type { PullRequestCheck } from "@t3tools/contracts";
export declare const ForgejoBranchStatusChecks: Schema.Struct<{
    readonly enable_status_check: Schema.optional<Schema.Boolean>;
    readonly status_check_contexts: Schema.optional<Schema.NullOr<Schema.$Array<Schema.String>>>;
}>;
export declare function markRequiredForgejoChecks(checks: ReadonlyArray<PullRequestCheck>, branch: typeof ForgejoBranchStatusChecks.Type): ReadonlyArray<PullRequestCheck>;
