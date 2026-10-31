import * as Schema from "effect/Schema";
import type { ChangeRequest } from "@t3tools/contracts";
export declare const ForgejoPullRequestSchema: Schema.Struct<{
    readonly number: Schema.Int;
    readonly title: Schema.String;
    readonly html_url: Schema.String;
    readonly state: Schema.String;
    readonly merged: Schema.Boolean;
    readonly draft: Schema.optional<Schema.Boolean>;
    readonly base: Schema.Struct<{
        readonly ref: Schema.String;
        readonly sha: Schema.String;
        readonly repo: Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.String;
            readonly owner: Schema.Struct<{
                readonly login: Schema.String;
            }>;
        }>>;
    }>;
    readonly head: Schema.Struct<{
        readonly ref: Schema.String;
        readonly sha: Schema.String;
        readonly repo: Schema.NullOr<Schema.Struct<{
            readonly full_name: Schema.String;
            readonly owner: Schema.Struct<{
                readonly login: Schema.String;
            }>;
        }>>;
    }>;
    readonly closed_at: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly merged_at: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly updated_at: Schema.optional<Schema.OptionFromNullOr<Schema.DateTimeUtcFromString>>;
}>;
export declare function toForgejoChangeRequest(raw: typeof ForgejoPullRequestSchema.Type): ChangeRequest;
