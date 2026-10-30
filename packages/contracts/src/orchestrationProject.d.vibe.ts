import * as Schema from "effect/Schema";
export declare const OrchestrationProjectShell: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repositoryIdentity: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly canonicalKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly locator: Schema.Struct<{
            readonly source: Schema.Literal<"git-remote">;
            readonly remoteName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly webUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly rootPath: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly displayName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly provider: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
        readonly owner: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly name: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly origin: Schema.optionalKey<Schema.Struct<{
            readonly canonicalKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly remoteUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly displayName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>>>;
    readonly defaultModelSelection: Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
    }>, never, never>>;
    readonly defaultThreadEnvMode: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>>;
    readonly autoPull: Schema.optional<Schema.Boolean>;
    readonly faviconPath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly projectIcon: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.NullOr<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"lucide">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.Literals<readonly ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"emoji">;
        readonly emoji: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"monogram">;
        readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.Literals<readonly ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]>;
    }>]>>>, import("./baseSchemas.js").ForwardCompatibleUnion<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"lucide">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.Literals<readonly ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]>;
        readonly monogramText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly monogram: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"emoji">;
        readonly emoji: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"monogram">;
        readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.Literals<readonly ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]>;
    }>], "kind">, never, never>>>;
    readonly scripts: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
}>;
export type OrchestrationProjectShell = typeof OrchestrationProjectShell.Type;
