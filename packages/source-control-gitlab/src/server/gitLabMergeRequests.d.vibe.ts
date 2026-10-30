import * as Cause from "effect/Cause";
import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
export interface NormalizedGitLabMergeRequestRecord {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly baseRefName: string;
    readonly headRefName: string;
    readonly headSha?: string;
    readonly state: "open" | "closed" | "merged";
    readonly isDraft?: boolean;
    readonly closedAt?: string | null;
    readonly mergedAt?: string | null;
    readonly updatedAt: Option.Option<DateTime.Utc>;
    readonly isCrossRepository?: boolean;
    readonly headRepositoryNameWithOwner?: string | null;
    readonly headRepositoryOwnerLogin?: string | null;
}
export declare function decodeGitLabMergeRequestListJson(raw: string): Result.Result<ReadonlyArray<NormalizedGitLabMergeRequestRecord>, Cause.Cause<Schema.SchemaError>>;
export declare function decodeGitLabMergeRequestJson(raw: string): Result.Result<NormalizedGitLabMergeRequestRecord, Cause.Cause<Schema.SchemaError>>;
