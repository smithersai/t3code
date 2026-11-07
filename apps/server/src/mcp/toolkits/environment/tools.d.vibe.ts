import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as ServerEnvironment from "../../../environment/ServerEnvironment.ts";
import * as ThreadCommandExecutor from "../../../orchestration-v2/ThreadCommandExecutor.vibe";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as Settings from "../../../serverSettings.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
export declare const EnvironmentToolkit: Toolkit.Toolkit<{
    readonly t3_environment_preferences_update: Tool.Tool<"t3_environment_preferences_update", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly defaultThreadEnvMode: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>>;
            readonly newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
            readonly enableProviderUpdateChecks: Schema.optionalKey<Schema.Boolean>;
            readonly backgroundActivity: Schema.optionalKey<Schema.Struct<{
                readonly profile: Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>;
            }>>;
            readonly sourceControlWritingStyle: Schema.optionalKey<Schema.Struct<{
                readonly mode: Schema.optionalKey<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>>;
                readonly customInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly followChangeRequestTemplates: Schema.optionalKey<Schema.Boolean>;
            }>>;
        }>;
        readonly success: Schema.Struct<{
            defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
            newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
            enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
            backgroundActivity: Schema.Struct<{
                readonly profile: Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>;
            }>;
            sourceControlWritingStyle: Schema.Struct<{
                readonly mode: Schema.String;
                readonly followChangeRequestTemplates: Schema.Boolean;
                readonly customInstructions: Schema.String;
                readonly truncated: Schema.Boolean;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | ServerEnvironment.ServerEnvironment | Settings.ServerSettingsService | ThreadCommandExecutor.ThreadCommandExecutor | ThreadManagementService.ThreadManagementService>;
    readonly t3_environment_read: Tool.Tool<"t3_environment_read", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.String;
            readonly serverVersion: Schema.String;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly preferences: Schema.Struct<{
                defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
                newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
                enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
                backgroundActivity: Schema.Struct<{
                    readonly profile: Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>;
                }>;
                sourceControlWritingStyle: Schema.Struct<{
                    readonly mode: Schema.String;
                    readonly followChangeRequestTemplates: Schema.Boolean;
                    readonly customInstructions: Schema.String;
                    readonly truncated: Schema.Boolean;
                }>;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | ServerEnvironment.ServerEnvironment | Settings.ServerSettingsService | ThreadCommandExecutor.ThreadCommandExecutor | ThreadManagementService.ThreadManagementService>;
}>;
