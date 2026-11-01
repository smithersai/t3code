import * as Cause from "effect/Cause";
import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
export interface NormalizedAzureDevOpsPullRequestRecord {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly baseRefName: string;
    readonly headRefName: string;
    readonly headSha?: string;
    readonly state: "open" | "closed" | "merged";
    readonly isDraft?: boolean;
    readonly isCrossRepository: boolean;
    readonly closedAt?: string | null;
    readonly mergedAt?: string | null;
    readonly updatedAt: Option.Option<DateTime.Utc>;
}
export declare function azureDevOpsPullRequestWebUrl(input: {
    readonly pullRequestId: number;
    readonly webLink?: string | null | undefined;
    readonly repositoryWebUrl?: string | null | undefined;
    readonly restApiUrl?: string | null | undefined;
    readonly projectName?: string | null | undefined;
    readonly repositoryName?: string | null | undefined;
}): string;
export declare function decodeAzureDevOpsPullRequestListJson(raw: string): Result.Result<ReadonlyArray<NormalizedAzureDevOpsPullRequestRecord>, Cause.Cause<Schema.SchemaError>>;
export declare function decodeAzureDevOpsPullRequestJson(raw: string): Result.Result<NormalizedAzureDevOpsPullRequestRecord, Cause.Cause<Schema.SchemaError>>;
