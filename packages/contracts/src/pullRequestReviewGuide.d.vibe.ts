import * as Schema from "effect/Schema";
export declare const PullRequestReviewGuideAttention: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
    readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestReviewGuideAttention = typeof PullRequestReviewGuideAttention.Type;
export declare const PullRequestReviewGuideExcerpt: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly side: Schema.Literals<readonly ["new", "old"]>;
    readonly start: Schema.Int;
    readonly end: Schema.Int;
    readonly caption: Schema.String;
}>;
export type PullRequestReviewGuideExcerpt = typeof PullRequestReviewGuideExcerpt.Type;
export declare const PullRequestReviewGuideNote: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly line: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly body: Schema.String;
}>;
export type PullRequestReviewGuideNote = typeof PullRequestReviewGuideNote.Type;
export declare const PullRequestReviewGuideStop: Schema.Struct<{
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly summary: Schema.String;
    readonly attention: Schema.NullOr<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
        readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly excerpts: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly side: Schema.Literals<readonly ["new", "old"]>;
        readonly start: Schema.Int;
        readonly end: Schema.Int;
        readonly caption: Schema.String;
    }>>;
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly note: Schema.optionalKey<Schema.String>;
    }>>;
    readonly notes: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly line: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly body: Schema.String;
    }>>;
    readonly questions: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestReviewGuideStop = typeof PullRequestReviewGuideStop.Type;
export declare const PullRequestReviewGuide: Schema.Struct<{
    readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly generatedAt: Schema.String;
    readonly modelSelection: Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>;
    readonly stops: Schema.$Array<Schema.Struct<{
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly summary: Schema.String;
        readonly attention: Schema.NullOr<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
            readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly excerpts: Schema.$Array<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly side: Schema.Literals<readonly ["new", "old"]>;
            readonly start: Schema.Int;
            readonly end: Schema.Int;
            readonly caption: Schema.String;
        }>>;
        readonly files: Schema.$Array<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly note: Schema.optionalKey<Schema.String>;
        }>>;
        readonly notes: Schema.$Array<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly line: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly body: Schema.String;
        }>>;
        readonly questions: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type PullRequestReviewGuide = typeof PullRequestReviewGuide.Type;
export declare const PullRequestReviewGuideRun: Schema.Union<readonly [Schema.TaggedStruct<"Running", {
    readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly startedAt: Schema.String;
}>, Schema.TaggedStruct<"Failed", {
    readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly failedAt: Schema.String;
    readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type PullRequestReviewGuideRun = typeof PullRequestReviewGuideRun.Type;
export declare const PullRequestReviewGuideResult: Schema.Struct<{
    readonly guide: Schema.NullOr<Schema.Struct<{
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly generatedAt: Schema.String;
        readonly modelSelection: Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>;
        readonly stops: Schema.$Array<Schema.Struct<{
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly summary: Schema.String;
            readonly attention: Schema.NullOr<Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
                readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly excerpts: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly side: Schema.Literals<readonly ["new", "old"]>;
                readonly start: Schema.Int;
                readonly end: Schema.Int;
                readonly caption: Schema.String;
            }>>;
            readonly files: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly note: Schema.optionalKey<Schema.String>;
            }>>;
            readonly notes: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly line: Schema.Int;
                readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly body: Schema.String;
            }>>;
            readonly questions: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>>;
    readonly run: Schema.NullOr<Schema.Union<readonly [Schema.TaggedStruct<"Running", {
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly startedAt: Schema.String;
    }>, Schema.TaggedStruct<"Failed", {
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly failedAt: Schema.String;
        readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>>;
    readonly currentHeadSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestReviewGuideResult = typeof PullRequestReviewGuideResult.Type;
