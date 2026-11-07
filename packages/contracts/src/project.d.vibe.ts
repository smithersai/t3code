import * as Schema from "effect/Schema";
import { ForwardCompatibleUnion } from "./baseSchemas.vibe";
export declare const ProjectScriptIcon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
export type ProjectScriptIcon = typeof ProjectScriptIcon.Type;
export declare const ProjectScript: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
    readonly runOnWorktreeCreate: Schema.Boolean;
    readonly runOnSettle: Schema.optional<Schema.Boolean>;
    readonly async: Schema.optional<Schema.Boolean>;
    readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
}>;
export type ProjectScript = typeof ProjectScript.Type;
export declare const ProjectIconColor: Schema.Literals<readonly ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]>;
export type ProjectIconColor = typeof ProjectIconColor.Type;
export declare const ProjectMonogramText: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const ProjectFaviconPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ProjectFaviconPath = typeof ProjectFaviconPath.Type;
export declare const ProjectIconOverride: Schema.Union<readonly [Schema.Struct<{
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
}>]>;
export type ProjectIconOverride = typeof ProjectIconOverride.Type;
export declare const StoredProjectIcon: Schema.decodeTo<Schema.toType<Schema.Union<readonly [Schema.Struct<{
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
}>]>>, Schema.Union<readonly [Schema.Struct<{
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
}>]>, never, never>;
export declare const ReceivedProjectIcon: Schema.decodeTo<Schema.NullOr<Schema.toType<Schema.Union<readonly [Schema.Struct<{
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
}>]>>>, ForwardCompatibleUnion<readonly [Schema.Struct<{
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
}>], "kind">, never, never>;
export declare const Project: Schema.Struct<{
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
    }>]>>>, ForwardCompatibleUnion<readonly [Schema.Struct<{
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
    readonly deletedAt: Schema.NullOr<Schema.String>;
}>;
export type Project = typeof Project.Type;
export declare const ProjectSnapshot: Schema.Struct<{
    readonly projects: Schema.$Array<Schema.Struct<{
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
        }>]>>>, ForwardCompatibleUnion<readonly [Schema.Struct<{
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
        readonly deletedAt: Schema.NullOr<Schema.String>;
    }>>;
    readonly updatedAt: Schema.String;
}>;
export type ProjectSnapshot = typeof ProjectSnapshot.Type;
export declare const ProjectChange: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"project.upserted">;
    readonly project: Schema.Struct<{
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
        }>]>>>, ForwardCompatibleUnion<readonly [Schema.Struct<{
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
        readonly deletedAt: Schema.NullOr<Schema.String>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"project.deleted">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly deletedAt: Schema.String;
}>]>;
export type ProjectChange = typeof ProjectChange.Type;
export declare const ProjectCreatePayload: Schema.Struct<{
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createWorkspaceRootIfMissing: Schema.optional<Schema.Boolean>;
    readonly defaultModelSelection: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
    }>, never, never>>>;
    readonly scripts: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
}>;
export type ProjectCreatePayload = typeof ProjectCreatePayload.Type;
export declare const ProjectUpdatePayload: Schema.Struct<{
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly defaultModelSelection: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
    }>, never, never>>>;
    readonly autoPull: Schema.optional<Schema.Boolean>;
    readonly projectIcon: Schema.optional<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>>;
    readonly faviconPath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly defaultThreadEnvMode: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>>;
    readonly scripts: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
}>;
export type ProjectUpdatePayload = typeof ProjectUpdatePayload.Type;
export declare const ProjectMutation: Schema.Union<readonly [Schema.Struct<{
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createWorkspaceRootIfMissing: Schema.optional<Schema.Boolean>;
    readonly defaultModelSelection: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
    }>, never, never>>>;
    readonly scripts: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
    readonly type: Schema.Literal<"project.create">;
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, Schema.Struct<{
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly defaultModelSelection: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
    }>, never, never>>>;
    readonly autoPull: Schema.optional<Schema.Boolean>;
    readonly projectIcon: Schema.optional<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>>;
    readonly faviconPath: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly defaultThreadEnvMode: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>>;
    readonly scripts: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
    readonly type: Schema.Literal<"project.update">;
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"project.delete">;
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly force: Schema.optional<Schema.Boolean>;
}>]>;
export type ProjectMutation = typeof ProjectMutation.Type;
declare const ProjectMutationError_base: Schema.Class<ProjectMutationError, Schema.TaggedStruct<"ProjectMutationError", {
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly message: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectMutationError extends ProjectMutationError_base {
}
export declare const ProjectEntryKind: Schema.Literals<readonly ["file", "directory"]>;
export type ProjectEntryKind = typeof ProjectEntryKind.Type;
export declare const ProjectSearchEntriesInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly query: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly limit: Schema.Int;
    readonly kind: Schema.optional<Schema.Literals<readonly ["file", "directory"]>>;
    readonly imageOnly: Schema.optional<Schema.Boolean>;
}>;
export type ProjectSearchEntriesInput = typeof ProjectSearchEntriesInput.Type;
export declare const ProjectEntry: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["file", "directory"]>;
    readonly ignored: Schema.optional<Schema.Boolean>;
}>;
export type ProjectEntry = typeof ProjectEntry.Type;
export declare const ProjectSearchEntriesResult: Schema.Struct<{
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["file", "directory"]>;
        readonly ignored: Schema.optional<Schema.Boolean>;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type ProjectSearchEntriesResult = typeof ProjectSearchEntriesResult.Type;
export declare const ProjectSearchContentsInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly query: Schema.String;
    readonly limit: Schema.Int;
    readonly caseSensitive: Schema.Boolean;
    readonly wholeWord: Schema.Boolean;
    readonly useRegex: Schema.Boolean;
}>;
export type ProjectSearchContentsInput = typeof ProjectSearchContentsInput.Type;
export declare const ProjectContentMatchRange: Schema.Struct<{
    readonly start: Schema.Int;
    readonly end: Schema.Int;
}>;
export type ProjectContentMatchRange = typeof ProjectContentMatchRange.Type;
export declare const ProjectContentMatch: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly lineNumber: Schema.Int;
    readonly lineContent: Schema.String;
    readonly matchRanges: Schema.$Array<Schema.Struct<{
        readonly start: Schema.Int;
        readonly end: Schema.Int;
    }>>;
}>;
export type ProjectContentMatch = typeof ProjectContentMatch.Type;
export declare const ProjectSearchContentsResult: Schema.Struct<{
    readonly matches: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly lineNumber: Schema.Int;
        readonly lineContent: Schema.String;
        readonly matchRanges: Schema.$Array<Schema.Struct<{
            readonly start: Schema.Int;
            readonly end: Schema.Int;
        }>>;
    }>>;
    readonly truncated: Schema.Boolean;
    readonly regexFallbackError: Schema.optional<Schema.String>;
}>;
export type ProjectSearchContentsResult = typeof ProjectSearchContentsResult.Type;
export declare const ProjectListEntriesInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly directoryPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProjectListEntriesInput = typeof ProjectListEntriesInput.Type;
export declare const ProjectListEntriesResult: Schema.Struct<{
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["file", "directory"]>;
        readonly ignored: Schema.optional<Schema.Boolean>;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type ProjectListEntriesResult = typeof ProjectListEntriesResult.Type;
export declare const ProjectListIgnoredFilesInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProjectListIgnoredFilesInput = typeof ProjectListIgnoredFilesInput.Type;
export declare const ProjectIgnoredFile: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly byteLength: Schema.Int;
}>;
export type ProjectIgnoredFile = typeof ProjectIgnoredFile.Type;
export declare const ProjectListIgnoredFilesResult: Schema.Struct<{
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly byteLength: Schema.Int;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type ProjectListIgnoredFilesResult = typeof ProjectListIgnoredFilesResult.Type;
export declare const ProjectEntriesFailure: Schema.Literals<readonly ["workspace_root_not_found", "workspace_root_create_failed", "workspace_root_stat_failed", "workspace_root_not_directory", "search_index_create_failed", "search_index_scan_timed_out", "search_index_search_failed", "directory_list_failed"]>;
export type ProjectEntriesFailure = typeof ProjectEntriesFailure.Type;
type ProjectEntriesFailureContext = {
    readonly failure: ProjectEntriesFailure;
    readonly normalizedCwd?: string;
    readonly timeout?: string;
    readonly detail?: string;
    readonly cause?: unknown;
};
declare const ProjectSearchEntriesError_base: Schema.Class<ProjectSearchEntriesError, Schema.TaggedStruct<"ProjectSearchEntriesError", {
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly queryLength: Schema.optional<Schema.Int>;
    readonly limit: Schema.optional<Schema.Int>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["workspace_root_not_found", "workspace_root_create_failed", "workspace_root_stat_failed", "workspace_root_not_directory", "search_index_create_failed", "search_index_scan_timed_out", "search_index_search_failed", "directory_list_failed"]>>;
    readonly normalizedCwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeout: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectSearchEntriesError extends ProjectSearchEntriesError_base {
    /** @throws {never} */
    constructor(props: ProjectEntriesFailureContext & {
        readonly cwd: string;
        readonly queryLength: number;
        readonly limit: number;
    });
}
declare const ProjectSearchContentsError_base: Schema.Class<ProjectSearchContentsError, Schema.TaggedStruct<"ProjectSearchContentsError", {
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly queryLength: Schema.optional<Schema.Int>;
    readonly limit: Schema.optional<Schema.Int>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["workspace_root_not_found", "workspace_root_create_failed", "workspace_root_stat_failed", "workspace_root_not_directory", "search_index_create_failed", "search_index_scan_timed_out", "search_index_search_failed", "directory_list_failed"]>>;
    readonly normalizedCwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeout: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectSearchContentsError extends ProjectSearchContentsError_base {
    /** @throws {never} */
    constructor(props: ProjectEntriesFailureContext & {
        readonly cwd: string;
        readonly queryLength: number;
        readonly limit: number;
    });
}
declare const ProjectListEntriesError_base: Schema.Class<ProjectListEntriesError, Schema.TaggedStruct<"ProjectListEntriesError", {
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["workspace_root_not_found", "workspace_root_create_failed", "workspace_root_stat_failed", "workspace_root_not_directory", "search_index_create_failed", "search_index_scan_timed_out", "search_index_search_failed", "directory_list_failed"]>>;
    readonly normalizedCwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeout: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectListEntriesError extends ProjectListEntriesError_base {
    /** @throws {never} */
    constructor(props: ProjectEntriesFailureContext & {
        readonly cwd: string;
    });
}
export declare const ProjectReadFileInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly relativePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly allowMissing: Schema.optional<Schema.Boolean>;
}>;
export type ProjectReadFileInput = typeof ProjectReadFileInput.Type;
export declare const ProjectReadFileResult: Schema.Struct<{
    readonly relativePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly contents: Schema.String;
    readonly byteLength: Schema.Int;
    readonly truncated: Schema.Boolean;
    readonly exists: Schema.optional<Schema.Boolean>;
}>;
export type ProjectReadFileResult = typeof ProjectReadFileResult.Type;
export declare const ProjectFileFailure: Schema.Literals<readonly ["workspace_path_outside_root", "resolved_path_outside_root", "path_not_file", "binary_file", "operation_failed"]>;
export type ProjectFileFailure = typeof ProjectFileFailure.Type;
export declare const ProjectFileOperation: Schema.Literals<readonly ["realpath-workspace-root", "realpath-target", "open", "stat", "read", "close", "make-directory", "write-file"]>;
export type ProjectFileOperation = typeof ProjectFileOperation.Type;
type ProjectFileFailureContext = {
    readonly cwd: string;
    readonly relativePath: string;
    readonly failure: ProjectFileFailure;
    readonly resolvedPath?: string;
    readonly resolvedWorkspaceRoot?: string;
    readonly operation?: ProjectFileOperation;
    readonly operationPath?: string;
    readonly cause?: unknown;
};
declare const ProjectReadFileError_base: Schema.Class<ProjectReadFileError, Schema.TaggedStruct<"ProjectReadFileError", {
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly relativePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["workspace_path_outside_root", "resolved_path_outside_root", "path_not_file", "binary_file", "operation_failed"]>>;
    readonly resolvedPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly resolvedWorkspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly operation: Schema.optional<Schema.Literals<readonly ["realpath-workspace-root", "realpath-target", "open", "stat", "read", "close", "make-directory", "write-file"]>>;
    readonly operationPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectReadFileError extends ProjectReadFileError_base {
    /** @throws {never} */
    constructor(props: ProjectFileFailureContext);
}
export declare const ProjectWriteFileInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly relativePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly contents: Schema.String;
}>;
export type ProjectWriteFileInput = typeof ProjectWriteFileInput.Type;
export declare const ProjectWriteFileResult: Schema.Struct<{
    readonly relativePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProjectWriteFileResult = typeof ProjectWriteFileResult.Type;
export declare const ProjectEnsureScratchResult: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>;
export type ProjectEnsureScratchResult = typeof ProjectEnsureScratchResult.Type;
export declare const ProjectCreateNewInput: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProjectCreateNewInput = typeof ProjectCreateNewInput.Type;
export declare const ProjectCreateNewResult: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** The project and its files exist either way. */
    readonly commitError: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProjectCreateNewResult = typeof ProjectCreateNewResult.Type;
declare const ProjectWriteFileError_base: Schema.Class<ProjectWriteFileError, Schema.TaggedStruct<"ProjectWriteFileError", {
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly relativePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["workspace_path_outside_root", "resolved_path_outside_root", "path_not_file", "binary_file", "operation_failed"]>>;
    readonly resolvedPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly resolvedWorkspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly operation: Schema.optional<Schema.Literals<readonly ["realpath-workspace-root", "realpath-target", "open", "stat", "read", "close", "make-directory", "write-file"]>>;
    readonly operationPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectWriteFileError extends ProjectWriteFileError_base {
    /** @throws {never} */
    constructor(props: ProjectFileFailureContext);
}
export {};
