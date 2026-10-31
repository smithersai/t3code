import * as DateTime from "effect/DateTime";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
export interface NormalizedBitbucketPullRequestRecord {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly baseRefName: string;
    readonly headRefName: string;
    readonly headSha?: string;
    readonly state: "open" | "closed" | "merged";
    readonly isDraft?: boolean;
    readonly updatedAt: Option.Option<DateTime.Utc>;
    readonly isCrossRepository?: boolean;
    readonly headRepositoryNameWithOwner?: string | null;
    readonly headRepositoryOwnerLogin?: string | null;
}
export declare const BitbucketRepositoryRefSchema: Schema.Struct<{
    readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>>>;
}>;
export declare const BitbucketPullRequestBranchSchema: Schema.Struct<{
    readonly repository: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>>>;
    }>>>;
    readonly branch: Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
    readonly commit: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly hash: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>>;
}>;
export declare const BitbucketPullRequestSchema: Schema.Struct<{
    readonly id: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly draft: Schema.optional<Schema.Boolean>;
    readonly updated_on: Schema.optional<Schema.OptionFromNullOr<Schema.DateTimeUtcFromString>>;
    readonly links: Schema.Struct<{
        readonly html: Schema.Struct<{
            readonly href: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
    }>;
    readonly source: Schema.Struct<{
        readonly repository: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>>;
        }>>>;
        readonly branch: Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly commit: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly hash: Schema.optional<Schema.NullOr<Schema.String>>;
        }>>>;
    }>;
    readonly destination: Schema.Struct<{
        readonly repository: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>>;
        }>>>;
        readonly branch: Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly commit: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly hash: Schema.optional<Schema.NullOr<Schema.String>>;
        }>>>;
    }>;
}>;
export declare const BitbucketPullRequestListSchema: Schema.Struct<{
    readonly values: Schema.$Array<Schema.Struct<{
        readonly id: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly draft: Schema.optional<Schema.Boolean>;
        readonly updated_on: Schema.optional<Schema.OptionFromNullOr<Schema.DateTimeUtcFromString>>;
        readonly links: Schema.Struct<{
            readonly html: Schema.Struct<{
                readonly href: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>;
        }>;
        readonly source: Schema.Struct<{
            readonly repository: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>>>;
            }>>>;
            readonly branch: Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>;
            readonly commit: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly hash: Schema.optional<Schema.NullOr<Schema.String>>;
            }>>>;
        }>;
        readonly destination: Schema.Struct<{
            readonly repository: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly full_name: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly workspace: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly slug: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>>>;
            }>>>;
            readonly branch: Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>;
            readonly commit: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly hash: Schema.optional<Schema.NullOr<Schema.String>>;
            }>>>;
        }>;
    }>>;
    readonly next: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export declare function normalizeBitbucketPullRequestRecord(raw: Schema.Schema.Type<typeof BitbucketPullRequestSchema>): NormalizedBitbucketPullRequestRecord;
