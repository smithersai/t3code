import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as FileSystem from "effect/FileSystem";
import * as DocumentText from "../../../provider/DocumentText.ts";
import * as ServerConfig from "../../../config.ts";
import * as ServerSettings from "../../../serverSettings.ts";
import * as ThreadLaunchService from "../../../orchestration-v2/ThreadLaunchService.ts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Schema from "effect/Schema";
import * as ProjectService from "../../../project/ProjectService.ts";
import * as ManagedProjectFolders from "../../../project/ManagedProjectFolders.vibe";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as SourceControlRepositoryService from "../../../sourceControl/SourceControlRepositoryService.ts";
import * as GitVcsDriver from "../../../vcs/GitVcsDriver.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
export declare const ProjectToolkit: Toolkit.Toolkit<{
    readonly t3_project_clone: Tool.Tool<"t3_project_clone", {
        readonly parameters: Schema.Struct<{
            readonly provider: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly remoteUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly destinationPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly protocol: Schema.optional<Schema.Literals<readonly ["auto", "ssh", "https"]>>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly repository: Schema.NullOr<Schema.Struct<{
                readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
                readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | SourceControlRepositoryService.SourceControlRepositoryService | ThreadManagementService.ThreadManagementService>;
    readonly t3_project_create: Tool.Tool<"t3_project_create", {
        readonly parameters: Schema.Struct<{
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
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
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly workspaceRoot: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
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
            }>]>>>, import("@t3tools/contracts").ForwardCompatibleUnion<readonly [Schema.Struct<{
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
            readonly commitError: Schema.optional<Schema.String>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | ManagedProjectFolders.ManagedProjectFolders | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_project_delete: Tool.Tool<"t3_project_delete", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
            readonly force: Schema.optionalKey<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
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
            }>]>>>, import("@t3tools/contracts").ForwardCompatibleUnion<readonly [Schema.Struct<{
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
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_project_list: Tool.Tool<"t3_project_list", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly cursor: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
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
                }>]>>>, import("@t3tools/contracts").ForwardCompatibleUnion<readonly [Schema.Struct<{
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
            readonly nextCursor: Schema.NullOr<Schema.Int>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_project_read: Tool.Tool<"t3_project_read", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        }>;
        readonly success: Schema.Struct<{
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
            }>]>>>, import("@t3tools/contracts").ForwardCompatibleUnion<readonly [Schema.Struct<{
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
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_project_update: Tool.Tool<"t3_project_update", {
        readonly parameters: Schema.Struct<{
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
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        }>;
        readonly success: Schema.Struct<{
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
            }>]>>>, import("@t3tools/contracts").ForwardCompatibleUnion<readonly [Schema.Struct<{
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
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly t3_thread_launch: Tool.Tool<"t3_thread_launch", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
            readonly scratch: Schema.optional<Schema.Boolean>;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
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
            readonly runtimeMode: Schema.optional<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            readonly interactionMode: Schema.optional<Schema.Literals<readonly ["default", "plan"]>>;
            readonly workspaceStrategy: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"root">;
                readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"existing_worktree">;
                readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"worktree">;
                readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly startFromOrigin: Schema.optional<Schema.Boolean>;
            }>]>>;
            readonly message: Schema.optional<Schema.String>;
            readonly attachments: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"image">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
            }>]>>>;
            readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Set by a linked environment launching its agent's delegated task here; ignored otherwise. */
            readonly delegatedFrom: Schema.optional<Schema.Struct<{
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly title: Schema.String;
            }>>;
        }>;
        readonly success: Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly link: Schema.optional<Schema.String>;
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
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
            readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly status: Schema.NullOr<Schema.Literals<readonly ["preparing", "queued", "starting", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, Crypto.Crypto | DocumentText.DocumentText | FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | ManagedProjectFolders.ManagedProjectFolders | McpInvocationContext.McpInvocationContext | ProjectService.ProjectService | ServerConfig.ServerConfig | ServerSettings.ServerSettingsService | ThreadLaunchService.ThreadLaunchService | ThreadManagementService.ThreadManagementService>;
}>;
