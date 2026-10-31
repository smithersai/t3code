import * as Cause from "effect/Cause";
import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
export interface NormalizedGitHubPullRequestRecord {
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
declare const GitHubPullRequestSchema: Schema.Struct<{
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseRefName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headRefName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headRefOid: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly state: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly isDraft: Schema.optional<Schema.Boolean>;
    readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly updatedAt: Schema.optional<Schema.OptionFromNullOr<Schema.DateTimeUtcFromString>>;
    readonly isCrossRepository: Schema.optional<Schema.Boolean>;
    readonly headRepository: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly nameWithOwner: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly name: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>>;
    readonly headRepositoryOwner: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly login: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>>;
}>;
export declare function normalizeGitHubPullRequestRecord(raw: Schema.Schema.Type<typeof GitHubPullRequestSchema>): NormalizedGitHubPullRequestRecord;
export declare function decodeGitHubPullRequestListJson(raw: string): Result.Result<ReadonlyArray<NormalizedGitHubPullRequestRecord>, Cause.Cause<Schema.SchemaError>>;
export {};
