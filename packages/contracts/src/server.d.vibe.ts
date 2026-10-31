import * as Schema from "effect/Schema";
import { type EnvironmentMachineKind, ExecutionEnvironmentDescriptor } from "./environment.vibe";
import { ForwardCompatibleArray } from "./baseSchemas.js";
import { ServerSettings } from "./settings.vibe";
export declare const ServerConfigIssue: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"keybindings.malformed-config">;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"keybindings.invalid-entry">;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly index: Schema.Number;
}>]>;
export type ServerConfigIssue = typeof ServerConfigIssue.Type;
export declare const ServerProviderState: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
export type ServerProviderState = typeof ServerProviderState.Type;
export declare const ServerProviderAuthStatus: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
export type ServerProviderAuthStatus = typeof ServerProviderAuthStatus.Type;
export declare const ServerProviderAuth: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
    readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly action: Schema.optional<Schema.Struct<{
        readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly message: Schema.String;
        readonly createdAt: Schema.optionalKey<Schema.String>;
        readonly expiresAt: Schema.optionalKey<Schema.String>;
    }>>;
    readonly canLogout: Schema.optional<Schema.Boolean>;
    readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerProviderAuth = typeof ServerProviderAuth.Type;
export declare const ServerProviderModel: Schema.Struct<{
    readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly badge: Schema.optional<Schema.Literal<"new">>;
    readonly isCustom: Schema.Boolean;
    readonly isDefault: Schema.optional<Schema.Boolean>;
    readonly isLegacy: Schema.optional<Schema.Boolean>;
    readonly capabilities: Schema.NullOr<Schema.Struct<{
        readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"select">;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly isDefault: Schema.optional<Schema.Boolean>;
            }>>;
            readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>, Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"boolean">;
            readonly currentValue: Schema.optional<Schema.Boolean>;
        }>]>>>;
    }>>;
}>;
export type ServerProviderModel = typeof ServerProviderModel.Type;
export declare const ServerProviderUpdateRequiredModel: Schema.Struct<{
    readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly badge: Schema.optional<Schema.Literal<"new">>;
    readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerProviderUpdateRequiredModel = typeof ServerProviderUpdateRequiredModel.Type;
export declare const ServerProviderSlashCommandInput: Schema.Struct<{
    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerProviderSlashCommandInput = typeof ServerProviderSlashCommandInput.Type;
export declare const ServerProviderSlashCommand: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly input: Schema.optional<Schema.Struct<{
        readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type ServerProviderSlashCommand = typeof ServerProviderSlashCommand.Type;
export declare const ServerProviderSkill: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly enabled: Schema.Boolean;
    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
    readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
    /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
    readonly userInvocable: Schema.optional<Schema.Boolean>;
}>;
export type ServerProviderSkill = typeof ServerProviderSkill.Type;
export declare const ServerProviderWorkspaceSnapshot: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly checkedAt: Schema.String;
    readonly slashCommands: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly input: Schema.optional<Schema.Struct<{
            readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>;
    readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
    readonly skills: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly enabled: Schema.Boolean;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
        readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
        /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
        readonly userInvocable: Schema.optional<Schema.Boolean>;
    }>>;
    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"select">;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly isDefault: Schema.optional<Schema.Boolean>;
        }>>;
        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>, Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.optional<Schema.Boolean>;
    }>]>>>;
}>;
export type ServerProviderWorkspaceSnapshot = typeof ServerProviderWorkspaceSnapshot.Type;
export declare const PROVIDER_WORKSPACE_SNAPSHOT_TTL_MS: number;
export declare function isProviderWorkspaceSnapshotCurrent(snapshot: Pick<ServerProviderWorkspaceSnapshot, "checkedAt">, nowMs: number): boolean;
/** Unavailable snapshots must set installed and enabled false. */
export declare const ServerProviderAvailability: Schema.Literals<readonly ["available", "unavailable"]>;
export type ServerProviderAvailability = typeof ServerProviderAvailability.Type;
export declare const ServerProviderContinuation: Schema.Struct<{
    readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerProviderContinuation = typeof ServerProviderContinuation.Type;
export declare const ServerProviderCompatibilityStatus: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
export declare const ServerProviderCompatibilityAdvisory: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
    readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
    readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerProviderCompatibilityAdvisory = typeof ServerProviderCompatibilityAdvisory.Type;
export declare const ServerProviderVersionAdvisoryStatus: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
export type ServerProviderVersionAdvisoryStatus = typeof ServerProviderVersionAdvisoryStatus.Type;
export declare const ServerProviderVersionAdvisory: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
    readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
    readonly checkedAt: Schema.NullOr<Schema.String>;
    readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerProviderVersionAdvisory = typeof ServerProviderVersionAdvisory.Type;
export declare const ServerProviderUpdateStatus: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
export type ServerProviderUpdateStatus = typeof ServerProviderUpdateStatus.Type;
export declare const ServerProviderUpdateState: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
    readonly startedAt: Schema.NullOr<Schema.String>;
    readonly finishedAt: Schema.NullOr<Schema.String>;
    readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly output: Schema.NullOr<Schema.String>;
}>;
export type ServerProviderUpdateState = typeof ServerProviderUpdateState.Type;
export declare const ServerProvider: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly continuation: Schema.optional<Schema.Struct<{
        readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
    readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
    readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
    readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
    readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
    readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
    readonly setup: Schema.optional<Schema.Struct<{
        readonly canAuthenticate: Schema.Boolean;
        readonly canInstall: Schema.Boolean;
        readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly nativeSessions: Schema.optional<Schema.Struct<{
        readonly canList: Schema.Boolean;
        readonly canLoad: Schema.Boolean;
        readonly canResume: Schema.Boolean;
        readonly canDelete: Schema.optional<Schema.Boolean>;
    }>>;
    readonly configurableProviders: Schema.optional<Schema.Boolean>;
    readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
        readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly enabled: Schema.Boolean;
    readonly installed: Schema.Boolean;
    readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
    readonly auth: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
        readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.String;
            readonly message: Schema.String;
            readonly createdAt: Schema.optionalKey<Schema.String>;
            readonly expiresAt: Schema.optionalKey<Schema.String>;
        }>>;
        readonly canLogout: Schema.optional<Schema.Boolean>;
        readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly checkedAt: Schema.String;
    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
    readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly models: Schema.$Array<Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly badge: Schema.optional<Schema.Literal<"new">>;
        readonly isCustom: Schema.Boolean;
        readonly isDefault: Schema.optional<Schema.Boolean>;
        readonly isLegacy: Schema.optional<Schema.Boolean>;
        readonly capabilities: Schema.NullOr<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>>;
    readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly badge: Schema.optional<Schema.Literal<"new">>;
        readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly input: Schema.optional<Schema.Struct<{
            readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>, never>;
    readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly enabled: Schema.Boolean;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
        readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
        /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
        readonly userInvocable: Schema.optional<Schema.Boolean>;
    }>>, never>;
    readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly checkedAt: Schema.String;
        readonly slashCommands: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>;
        readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
        readonly skills: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>;
        readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"select">;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly isDefault: Schema.optional<Schema.Boolean>;
            }>>;
            readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>, Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"boolean">;
            readonly currentValue: Schema.optional<Schema.Boolean>;
        }>]>>>;
    }>>>;
    readonly usageLimits: Schema.optional<Schema.Struct<{
        readonly checkedAt: Schema.String;
        readonly windows: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly usedPercent: Schema.Number;
            readonly resetsAt: Schema.optional<Schema.String>;
            readonly windowDurationMins: Schema.optional<Schema.Int>;
        }>>;
        readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resetCredits: Schema.optional<Schema.Struct<{
            readonly availableCount: Schema.Int;
            readonly nextExpiresAt: Schema.optional<Schema.String>;
            readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly externalUsage: Schema.optional<Schema.Struct<{
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly unavailable: Schema.optional<Schema.Struct<{
            readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>>;
    readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
        readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
        readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly updateState: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
        readonly startedAt: Schema.NullOr<Schema.String>;
        readonly finishedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly output: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type ServerProvider = typeof ServerProvider.Type;
export declare const ServerProviders: ForwardCompatibleArray<Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly continuation: Schema.optional<Schema.Struct<{
        readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
    readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
    readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
    readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
    readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
    readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
    readonly setup: Schema.optional<Schema.Struct<{
        readonly canAuthenticate: Schema.Boolean;
        readonly canInstall: Schema.Boolean;
        readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly nativeSessions: Schema.optional<Schema.Struct<{
        readonly canList: Schema.Boolean;
        readonly canLoad: Schema.Boolean;
        readonly canResume: Schema.Boolean;
        readonly canDelete: Schema.optional<Schema.Boolean>;
    }>>;
    readonly configurableProviders: Schema.optional<Schema.Boolean>;
    readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
        readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly enabled: Schema.Boolean;
    readonly installed: Schema.Boolean;
    readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
    readonly auth: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
        readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly action: Schema.optional<Schema.Struct<{
            readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.String;
            readonly message: Schema.String;
            readonly createdAt: Schema.optionalKey<Schema.String>;
            readonly expiresAt: Schema.optionalKey<Schema.String>;
        }>>;
        readonly canLogout: Schema.optional<Schema.Boolean>;
        readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly checkedAt: Schema.String;
    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
    readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly models: Schema.$Array<Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly badge: Schema.optional<Schema.Literal<"new">>;
        readonly isCustom: Schema.Boolean;
        readonly isDefault: Schema.optional<Schema.Boolean>;
        readonly isLegacy: Schema.optional<Schema.Boolean>;
        readonly capabilities: Schema.NullOr<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>>;
    readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly badge: Schema.optional<Schema.Literal<"new">>;
        readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly input: Schema.optional<Schema.Struct<{
            readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>, never>;
    readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly enabled: Schema.Boolean;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
        readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
        /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
        readonly userInvocable: Schema.optional<Schema.Boolean>;
    }>>, never>;
    readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly checkedAt: Schema.String;
        readonly slashCommands: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>;
        readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
        readonly skills: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>;
        readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"select">;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly isDefault: Schema.optional<Schema.Boolean>;
            }>>;
            readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>, Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"boolean">;
            readonly currentValue: Schema.optional<Schema.Boolean>;
        }>]>>>;
    }>>>;
    readonly usageLimits: Schema.optional<Schema.Struct<{
        readonly checkedAt: Schema.String;
        readonly windows: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly usedPercent: Schema.Number;
            readonly resetsAt: Schema.optional<Schema.String>;
            readonly windowDurationMins: Schema.optional<Schema.Int>;
        }>>;
        readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resetCredits: Schema.optional<Schema.Struct<{
            readonly availableCount: Schema.Int;
            readonly nextExpiresAt: Schema.optional<Schema.String>;
            readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly externalUsage: Schema.optional<Schema.Struct<{
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly unavailable: Schema.optional<Schema.Struct<{
            readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>>;
    readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
        readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
        readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly updateState: Schema.optionalKey<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
        readonly startedAt: Schema.NullOr<Schema.String>;
        readonly finishedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly output: Schema.NullOr<Schema.String>;
    }>>;
}>>;
export type ServerProviders = typeof ServerProviders.Type;
export declare const isProviderAvailable: (snapshot: ServerProvider) => boolean;
/** Legacy producers omit this field and support text generation. */
export declare const isProviderTextGenerationCapable: (snapshot: ServerProvider) => boolean;
export declare const OtlpEndpointSource: Schema.Literals<readonly ["environment", "bootstrap", "settings"]>;
export type OtlpEndpointSource = typeof OtlpEndpointSource.Type;
export declare const ServerObservability: Schema.Struct<{
    readonly logsDirectoryPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly localTracingEnabled: Schema.Boolean;
    readonly otlpTracesUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpTracesSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
    readonly otlpTracesVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpTracesEnabled: Schema.Boolean;
    readonly otlpMetricsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpMetricsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
    readonly otlpMetricsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpMetricsEnabled: Schema.Boolean;
    readonly otlpLogsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpLogsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
    readonly otlpLogsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly otlpLogsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
}>;
export type ServerObservability = typeof ServerObservability.Type;
export declare const OtlpSignal: Schema.Literals<readonly ["traces", "metrics", "logs"]>;
export type OtlpSignal = typeof OtlpSignal.Type;
export declare const OtlpEndpointCheckInput: Schema.Struct<{
    readonly signal: Schema.Literals<readonly ["traces", "metrics", "logs"]>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type OtlpEndpointCheckInput = typeof OtlpEndpointCheckInput.Type;
export declare const OtlpEndpointCheckResult: Schema.Union<readonly [Schema.TaggedStruct<"Accepted", {
    readonly latencyMs: Schema.Number;
}>, Schema.TaggedStruct<"Rejected", {
    readonly status: Schema.Number;
}>, Schema.TaggedStruct<"Unreachable", {
    readonly timedOut: Schema.Boolean;
}>]>;
export type OtlpEndpointCheckResult = typeof OtlpEndpointCheckResult.Type;
/** The client tells the server what it is, so the triage context can name it. */
export declare const ServerPrepareTriageInput: Schema.Struct<{
    readonly client: Schema.Struct<{
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly deviceType: Schema.optionalKey<Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>>;
        readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly osMajorVersion: Schema.optionalKey<Schema.Int>;
        readonly deviceModel: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly surface: Schema.optionalKey<Schema.Literals<readonly ["web", "desktop", "mobile", "cli"]>>;
        readonly webDeployment: Schema.optionalKey<Schema.Literals<readonly ["hosted", "server"]>>;
        readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appVersion: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ServerPrepareTriageInput = typeof ServerPrepareTriageInput.Type;
export declare const ServerPrepareTriageResult: Schema.Struct<{
    /** Composer text that links the session's prompt file. */
    readonly prompt: Schema.String;
}>;
export type ServerPrepareTriageResult = typeof ServerPrepareTriageResult.Type;
/**
 * The prompt file links as a chip in the user's message; clients spot a triage
 * draft by it.
 */
export declare const TRIAGE_PROMPT_FILE_NAME = "triage-playbook.md";
declare const ServerPrepareTriageError_base: Schema.Class<ServerPrepareTriageError, Schema.TaggedStruct<"ServerPrepareTriageError", {
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerPrepareTriageError extends ServerPrepareTriageError_base {
    get message(): string;
}
export declare const ServerTraceDiagnosticsErrorKind: Schema.Literals<readonly ["trace-file-not-found", "trace-file-read-failed"]>;
export type ServerTraceDiagnosticsErrorKind = typeof ServerTraceDiagnosticsErrorKind.Type;
export declare const ServerTraceDiagnosticsSpanSummary: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly count: Schema.Int;
    readonly failureCount: Schema.Int;
    readonly totalDurationMs: Schema.Number;
    readonly averageDurationMs: Schema.Number;
    readonly maxDurationMs: Schema.Number;
}>;
export type ServerTraceDiagnosticsSpanSummary = typeof ServerTraceDiagnosticsSpanSummary.Type;
export declare const ServerTraceDiagnosticsFailureSummary: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly count: Schema.Int;
    readonly lastSeenAt: Schema.DateTimeUtc;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerTraceDiagnosticsFailureSummary = typeof ServerTraceDiagnosticsFailureSummary.Type;
export declare const ServerTraceDiagnosticsRecentFailure: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly durationMs: Schema.Number;
    readonly endedAt: Schema.DateTimeUtc;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerTraceDiagnosticsRecentFailure = typeof ServerTraceDiagnosticsRecentFailure.Type;
export declare const ServerTraceDiagnosticsSpanOccurrence: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly durationMs: Schema.Number;
    readonly endedAt: Schema.DateTimeUtc;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerTraceDiagnosticsSpanOccurrence = typeof ServerTraceDiagnosticsSpanOccurrence.Type;
export declare const ServerTraceDiagnosticsLogEvent: Schema.Struct<{
    readonly spanName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly level: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly seenAt: Schema.DateTimeUtc;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerTraceDiagnosticsLogEvent = typeof ServerTraceDiagnosticsLogEvent.Type;
export declare const ServerTraceDiagnosticsResult: Schema.Struct<{
    readonly traceFilePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scannedFilePaths: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly readAt: Schema.DateTimeUtc;
    readonly recordCount: Schema.Int;
    readonly parseErrorCount: Schema.Int;
    readonly firstSpanAt: Schema.Option<Schema.DateTimeUtc>;
    readonly lastSpanAt: Schema.Option<Schema.DateTimeUtc>;
    readonly failureCount: Schema.Int;
    readonly interruptionCount: Schema.Int;
    readonly slowSpanThresholdMs: Schema.Int;
    readonly slowSpanCount: Schema.Int;
    readonly logLevelCounts: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Int>;
    readonly topSpansByCount: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly count: Schema.Int;
        readonly failureCount: Schema.Int;
        readonly totalDurationMs: Schema.Number;
        readonly averageDurationMs: Schema.Number;
        readonly maxDurationMs: Schema.Number;
    }>>;
    readonly slowestSpans: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly durationMs: Schema.Number;
        readonly endedAt: Schema.DateTimeUtc;
        readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly commonFailures: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly cause: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly count: Schema.Int;
        readonly lastSeenAt: Schema.DateTimeUtc;
        readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly latestFailures: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly cause: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly durationMs: Schema.Number;
        readonly endedAt: Schema.DateTimeUtc;
        readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly latestWarningAndErrorLogs: Schema.$Array<Schema.Struct<{
        readonly spanName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly level: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly seenAt: Schema.DateTimeUtc;
        readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly spanId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly partialFailure: Schema.Option<Schema.Boolean>;
    readonly error: Schema.Option<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["trace-file-not-found", "trace-file-read-failed"]>;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type ServerTraceDiagnosticsResult = typeof ServerTraceDiagnosticsResult.Type;
export declare const ServerProcessSignal: Schema.Literals<readonly ["SIGINT", "SIGKILL"]>;
export type ServerProcessSignal = typeof ServerProcessSignal.Type;
export declare const ServerProcessDiagnosticsEntry: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly startTimeMs: Schema.Int;
    readonly ppid: Schema.Int;
    readonly pgid: Schema.Option<Schema.Int>;
    readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cpuPercent: Schema.Number;
    readonly rssBytes: Schema.Int;
    readonly elapsed: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly depth: Schema.Int;
    readonly childPids: Schema.$Array<Schema.Int>;
}>;
export type ServerProcessDiagnosticsEntry = typeof ServerProcessDiagnosticsEntry.Type;
export declare const ServerProcessDiagnosticsResult: Schema.Struct<{
    readonly serverPid: Schema.Int;
    readonly readAt: Schema.DateTimeUtc;
    readonly processCount: Schema.Int;
    readonly totalRssBytes: Schema.Int;
    readonly totalCpuPercent: Schema.Number;
    readonly processes: Schema.$Array<Schema.Struct<{
        readonly pid: Schema.Int;
        readonly startTimeMs: Schema.Int;
        readonly ppid: Schema.Int;
        readonly pgid: Schema.Option<Schema.Int>;
        readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly cpuPercent: Schema.Number;
        readonly rssBytes: Schema.Int;
        readonly elapsed: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly depth: Schema.Int;
        readonly childPids: Schema.$Array<Schema.Int>;
    }>>;
    readonly error: Schema.Option<Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type ServerProcessDiagnosticsResult = typeof ServerProcessDiagnosticsResult.Type;
export declare const ServerProcessResourceHistoryInput: Schema.Struct<{
    readonly windowMs: Schema.Int;
    readonly bucketMs: Schema.Int;
}>;
export type ServerProcessResourceHistoryInput = typeof ServerProcessResourceHistoryInput.Type;
export declare const ServerProcessResourceHistoryBucket: Schema.Struct<{
    readonly startedAt: Schema.DateTimeUtc;
    readonly endedAt: Schema.DateTimeUtc;
    readonly avgCpuPercent: Schema.Number;
    readonly maxCpuPercent: Schema.Number;
    readonly maxRssBytes: Schema.Int;
    readonly maxProcessCount: Schema.Int;
}>;
export type ServerProcessResourceHistoryBucket = typeof ServerProcessResourceHistoryBucket.Type;
export declare const ServerProcessResourceHistorySummary: Schema.Struct<{
    readonly processKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly pid: Schema.Int;
    readonly ppid: Schema.Int;
    readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly depth: Schema.Int;
    readonly isServerRoot: Schema.Boolean;
    readonly firstSeenAt: Schema.DateTimeUtc;
    readonly lastSeenAt: Schema.DateTimeUtc;
    readonly currentCpuPercent: Schema.Number;
    readonly avgCpuPercent: Schema.Number;
    readonly maxCpuPercent: Schema.Number;
    readonly cpuSecondsApprox: Schema.Number;
    readonly currentRssBytes: Schema.Int;
    readonly maxRssBytes: Schema.Int;
    readonly sampleCount: Schema.Int;
}>;
export type ServerProcessResourceHistorySummary = typeof ServerProcessResourceHistorySummary.Type;
export declare const ServerProcessResourceHistoryFailureTag: Schema.Literals<readonly ["ProcessDiagnosticsQueryTimeoutError", "ProcessDiagnosticsQueryFailedError", "ProcessDiagnosticsServerProcessSignalError", "ProcessDiagnosticsNotDescendantError", "ProcessDiagnosticsSignalFailedError"]>;
export type ServerProcessResourceHistoryFailureTag = typeof ServerProcessResourceHistoryFailureTag.Type;
export declare const ServerProcessResourceHistoryResult: Schema.Struct<{
    readonly readAt: Schema.DateTimeUtc;
    readonly windowMs: Schema.Int;
    readonly bucketMs: Schema.Int;
    readonly sampleIntervalMs: Schema.Int;
    readonly retainedSampleCount: Schema.Int;
    readonly totalCpuSecondsApprox: Schema.Number;
    readonly buckets: Schema.$Array<Schema.Struct<{
        readonly startedAt: Schema.DateTimeUtc;
        readonly endedAt: Schema.DateTimeUtc;
        readonly avgCpuPercent: Schema.Number;
        readonly maxCpuPercent: Schema.Number;
        readonly maxRssBytes: Schema.Int;
        readonly maxProcessCount: Schema.Int;
    }>>;
    readonly topProcesses: Schema.$Array<Schema.Struct<{
        readonly processKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly pid: Schema.Int;
        readonly ppid: Schema.Int;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly depth: Schema.Int;
        readonly isServerRoot: Schema.Boolean;
        readonly firstSeenAt: Schema.DateTimeUtc;
        readonly lastSeenAt: Schema.DateTimeUtc;
        readonly currentCpuPercent: Schema.Number;
        readonly avgCpuPercent: Schema.Number;
        readonly maxCpuPercent: Schema.Number;
        readonly cpuSecondsApprox: Schema.Number;
        readonly currentRssBytes: Schema.Int;
        readonly maxRssBytes: Schema.Int;
        readonly sampleCount: Schema.Int;
    }>>;
    readonly error: Schema.Option<Schema.Struct<{
        readonly failureTag: Schema.Literals<readonly ["ProcessDiagnosticsQueryTimeoutError", "ProcessDiagnosticsQueryFailedError", "ProcessDiagnosticsServerProcessSignalError", "ProcessDiagnosticsNotDescendantError", "ProcessDiagnosticsSignalFailedError"]>;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type ServerProcessResourceHistoryResult = typeof ServerProcessResourceHistoryResult.Type;
export declare const ServerSignalProcessInput: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly startTimeMs: Schema.Int;
    readonly signal: Schema.Literals<readonly ["SIGINT", "SIGKILL"]>;
}>;
export type ServerSignalProcessInput = typeof ServerSignalProcessInput.Type;
export declare const ServerSignalProcessResult: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly signal: Schema.Literals<readonly ["SIGINT", "SIGKILL"]>;
    readonly signaled: Schema.Boolean;
    readonly message: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerSignalProcessResult = typeof ServerSignalProcessResult.Type;
export declare const EnvironmentThemeColor: Schema.String;
export type EnvironmentThemeColor = typeof EnvironmentThemeColor.Type;
/** Reserve appearance keywords so published themes cannot replace stock preferences. */
export declare const EnvironmentThemeId: Schema.String;
export type EnvironmentThemeId = typeof EnvironmentThemeId.Type;
export declare const EnvironmentThemeFile: Schema.Struct<{
    version: Schema.optional<Schema.Literal<1>>;
    name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    appearance: Schema.Literals<readonly ["light", "dark"]>;
    /** Derive the palette from canvas/accent, then overlay colors; without them, colors is the palette. */
    canvas: Schema.optional<Schema.String>;
    accent: Schema.optional<Schema.String>;
    colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    variants: Schema.optional<Schema.Struct<{
        readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>>;
}>;
export type EnvironmentThemeFile = typeof EnvironmentThemeFile.Type;
export declare const EnvironmentTheme: Schema.Struct<{
    readonly version: Schema.optional<Schema.Literal<1>>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
    readonly canvas: Schema.optional<Schema.String>;
    readonly accent: Schema.optional<Schema.String>;
    readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly variants: Schema.optional<Schema.Struct<{
        readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>>;
    readonly id: Schema.String;
}>;
export type EnvironmentTheme = typeof EnvironmentTheme.Type;
export declare function environmentThemeFileHasColors(file: EnvironmentThemeFile): boolean;
/** tailnet means this machine's Tailscale interface; other private addresses are lan. */
export declare const ServerDirectEndpointKind: Schema.Literals<readonly ["lan", "tailnet"]>;
export type ServerDirectEndpointKind = typeof ServerDirectEndpointKind.Type;
export declare const ServerDirectEndpoint: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["lan", "tailnet"]>;
    readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ServerDirectEndpoint = typeof ServerDirectEndpoint.Type;
/**
 * A stretch where the server's event loop could not run, so it answered
 * nothing and clients may have dropped the connection.
 */
export declare const ServerEventLoopStall: Schema.Struct<{
    readonly detectedAt: Schema.String;
    readonly durationMs: Schema.Int;
    /** One-minute load average when the stall was seen. Absent on Windows, which has none. */
    readonly loadAverage: Schema.optionalKey<Schema.Number>;
    readonly cpuCount: Schema.Int;
}>;
export type ServerEventLoopStall = typeof ServerEventLoopStall.Type;
export declare const ServerConfig: Schema.Struct<{
    readonly environment: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly auth: Schema.Struct<{
        readonly policy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
        readonly bootstrapMethods: Schema.$Array<Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>>;
        readonly sessionMethods: Schema.$Array<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
        readonly sessionCookieName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly serverUpdateScope: Schema.optionalKey<Schema.Literal<"environment:maintain">>;
    }>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly keybindingsConfigPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly keybindings: Schema.Codec<readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], never, never>;
    readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.malformed-config">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.invalid-entry">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly index: Schema.Number;
    }>]>>;
    readonly providers: ForwardCompatibleArray<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly continuation: Schema.optional<Schema.Struct<{
            readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
        readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
        readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
        readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
        readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
        readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
        readonly setup: Schema.optional<Schema.Struct<{
            readonly canAuthenticate: Schema.Boolean;
            readonly canInstall: Schema.Boolean;
            readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly nativeSessions: Schema.optional<Schema.Struct<{
            readonly canList: Schema.Boolean;
            readonly canLoad: Schema.Boolean;
            readonly canResume: Schema.Boolean;
            readonly canDelete: Schema.optional<Schema.Boolean>;
        }>>;
        readonly configurableProviders: Schema.optional<Schema.Boolean>;
        readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
            readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly enabled: Schema.Boolean;
        readonly installed: Schema.Boolean;
        readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
        readonly auth: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
            readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.String;
                readonly message: Schema.String;
                readonly createdAt: Schema.optionalKey<Schema.String>;
                readonly expiresAt: Schema.optionalKey<Schema.String>;
            }>>;
            readonly canLogout: Schema.optional<Schema.Boolean>;
            readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
            readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly checkedAt: Schema.String;
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
        readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly models: Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly isCustom: Schema.Boolean;
            readonly isDefault: Schema.optional<Schema.Boolean>;
            readonly isLegacy: Schema.optional<Schema.Boolean>;
            readonly capabilities: Schema.NullOr<Schema.Struct<{
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>;
        }>>;
        readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>, never>;
        readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly slashCommands: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>;
            readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
            readonly skills: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>;
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>>;
        readonly usageLimits: Schema.optional<Schema.Struct<{
            readonly checkedAt: Schema.String;
            readonly windows: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
            readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly resetCredits: Schema.optional<Schema.Struct<{
                readonly availableCount: Schema.Int;
                readonly nextExpiresAt: Schema.optional<Schema.String>;
                readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly externalUsage: Schema.optional<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly unavailable: Schema.optional<Schema.Struct<{
                readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>>;
        readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
            readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
            readonly checkedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
            readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly updateState: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
            readonly startedAt: Schema.NullOr<Schema.String>;
            readonly finishedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly output: Schema.NullOr<Schema.String>;
        }>>;
    }>>;
    readonly availableEditors: ForwardCompatibleArray<Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>>;
    readonly remoteOpenTargets: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["tailscale", "mdns"]>;
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly username: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>>;
    /** Hints only; verify each address answers as this environment. */
    readonly directEndpoints: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["lan", "tailnet"]>;
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly observability: Schema.Struct<{
        readonly logsDirectoryPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localTracingEnabled: Schema.Boolean;
        readonly otlpTracesUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpTracesSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
        readonly otlpTracesVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpTracesEnabled: Schema.Boolean;
        readonly otlpMetricsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpMetricsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
        readonly otlpMetricsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpMetricsEnabled: Schema.Boolean;
        readonly otlpLogsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpLogsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
        readonly otlpLogsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpLogsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>;
    readonly settings: Schema.Struct<{
        readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>, never>;
        readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        }>>>, never>;
        readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.Literal<"off">;
        }>, Schema.Struct<{
            readonly mode: Schema.Literal<"custom">;
            readonly rules: Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.Boolean;
                readonly worktreeOnDelete: Schema.Boolean;
                readonly worktreeUnchanged: Schema.Boolean;
            }>;
        }>]>>, never>;
        readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
            readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
            readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        }>, never>;
        readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
        readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>>>, never>;
        readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
        readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
            worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>>;
            defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
            newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
            worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
            defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
            defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
            enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
            enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
            textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
            threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
            removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
            branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
            branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
            sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
            sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
            sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
            continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
            responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
            providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
            }>>>;
        }>>, never>;
        readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly port: Schema.optional<Schema.Int>;
        }>>, never>;
        readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.Literal<"eas">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
        }>>, never>;
        readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
        readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
        readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
        readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
            readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
            readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
            readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
            readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
            }>, never>;
        }>, never>;
        readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
        readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
        readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
        readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
        readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
        readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
        readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>, never>;
        readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
        readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
        readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
        readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.withDecodingDefault<Schema.String, never>;
                readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
            }>>>;
            readonly enabled: Schema.optionalKey<Schema.Boolean>;
            readonly config: Schema.optionalKey<Schema.Unknown>;
        }>>, never>;
        readonly observability: Schema.withDecodingDefault<Schema.Struct<{
            readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        }>, never>;
        readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
        readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, never>;
        readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
            readonly inputCostPerMillionTokens: Schema.Number;
            readonly outputCostPerMillionTokens: Schema.Number;
            readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
        }>>, never>;
        readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    }>;
    readonly shellResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
    /**
     * The shell can leave idle subagent children out of snapshots (`omitIdleSubagents`), and
     * `getThreadFamily` and `getWorktreeThreadIds` serve the rows it leaves out.
     */
    readonly shellThreadFamilies: Schema.optionalKey<Schema.Boolean>;
    /**
     * The shell can leave older settled threads out of snapshots (`omitOlderSettled`), and
     * `getOlderSettledThreads` serves them. Only servers that also advertise `shellThreadFamilies`.
     */
    readonly shellOlderSettled: Schema.optionalKey<Schema.Boolean>;
    readonly shellRevealInFileManager: Schema.optionalKey<Schema.Boolean>;
    readonly shellRevealInFileManagerKind: Schema.optionalKey<Schema.Literals<readonly ["finder", "file-explorer", "files"]>>;
    readonly threadResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
    /** Send window fields only when advertised. */
    readonly threadSnapshotPagination: Schema.optionalKey<Schema.Boolean>;
    readonly reasoningMessages: Schema.optionalKey<Schema.Boolean>;
    readonly threadFind: Schema.optionalKey<Schema.Boolean>;
    readonly threadFindProgressive: Schema.optionalKey<Schema.Boolean>;
    readonly scratchWorkspaceRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly newProjectsRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /**
     * The latest stall long enough to notice, sent only for a few minutes after
     * it. A client that reconnects reads it to say why the host stopped
     * answering. Clients do not cache it, since it describes the host at connect.
     */
    readonly lastEventLoopStall: Schema.optionalKey<Schema.Struct<{
        readonly detectedAt: Schema.String;
        readonly durationMs: Schema.Int;
        /** One-minute load average when the stall was seen. Absent on Windows, which has none. */
        readonly loadAverage: Schema.optionalKey<Schema.Number>;
        readonly cpuCount: Schema.Int;
    }>>;
    /**
     * Never sent in a config snapshot: the theme stream emits the current set
     * before any change, so a snapshot carrying it too would hand every
     * subscriber the same array twice per connect.
     */
    readonly environmentThemes: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly version: Schema.optional<Schema.Literal<1>>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
        readonly canvas: Schema.optional<Schema.String>;
        readonly accent: Schema.optional<Schema.String>;
        readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly variants: Schema.optional<Schema.Struct<{
            readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>>;
        readonly id: Schema.String;
    }>>>;
    /** Stream-only and opt-in; the source stream emits the current set on subscribe. */
    readonly usageLimitSources: Schema.optional<ForwardCompatibleArray<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
        readonly kind: Schema.Literal<"cliproxy">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly checkedAt: Schema.String;
        readonly accounts: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly usageLimits: Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>;
        }>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>>;
}>;
export type ServerConfig = typeof ServerConfig.Type;
export declare function resolveEnvironmentMachineKind(config: {
    readonly environment: Pick<ExecutionEnvironmentDescriptor, "platform">;
    readonly settings?: Pick<ServerSettings, "environmentIcon">;
} | null): EnvironmentMachineKind;
export declare const ServerUpsertKeybindingInput: Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly when: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly replace: Schema.optional<Schema.Struct<{
        readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
        readonly when: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type ServerUpsertKeybindingInput = typeof ServerUpsertKeybindingInput.Type;
export declare const ServerRemoveKeybindingInput: Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly when: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerRemoveKeybindingInput = typeof ServerRemoveKeybindingInput.Type;
export declare const ServerUpsertKeybindingResult: Schema.Struct<{
    readonly keybindings: Schema.Codec<readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], never, never>;
    readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.malformed-config">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.invalid-entry">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly index: Schema.Number;
    }>]>>;
}>;
export type ServerUpsertKeybindingResult = typeof ServerUpsertKeybindingResult.Type;
export declare const ServerRemoveKeybindingResult: Schema.Struct<{
    readonly keybindings: Schema.Codec<readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], never, never>;
    readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.malformed-config">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.invalid-entry">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly index: Schema.Number;
    }>]>>;
}>;
export type ServerRemoveKeybindingResult = typeof ServerRemoveKeybindingResult.Type;
export declare const ServerConfigUpdatedPayload: Schema.Struct<{
    readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.malformed-config">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.invalid-entry">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly index: Schema.Number;
    }>]>>;
    readonly providers: ForwardCompatibleArray<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly continuation: Schema.optional<Schema.Struct<{
            readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
        readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
        readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
        readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
        readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
        readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
        readonly setup: Schema.optional<Schema.Struct<{
            readonly canAuthenticate: Schema.Boolean;
            readonly canInstall: Schema.Boolean;
            readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly nativeSessions: Schema.optional<Schema.Struct<{
            readonly canList: Schema.Boolean;
            readonly canLoad: Schema.Boolean;
            readonly canResume: Schema.Boolean;
            readonly canDelete: Schema.optional<Schema.Boolean>;
        }>>;
        readonly configurableProviders: Schema.optional<Schema.Boolean>;
        readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
            readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly enabled: Schema.Boolean;
        readonly installed: Schema.Boolean;
        readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
        readonly auth: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
            readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.String;
                readonly message: Schema.String;
                readonly createdAt: Schema.optionalKey<Schema.String>;
                readonly expiresAt: Schema.optionalKey<Schema.String>;
            }>>;
            readonly canLogout: Schema.optional<Schema.Boolean>;
            readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
            readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly checkedAt: Schema.String;
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
        readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly models: Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly isCustom: Schema.Boolean;
            readonly isDefault: Schema.optional<Schema.Boolean>;
            readonly isLegacy: Schema.optional<Schema.Boolean>;
            readonly capabilities: Schema.NullOr<Schema.Struct<{
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>;
        }>>;
        readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>, never>;
        readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly slashCommands: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>;
            readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
            readonly skills: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>;
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>>;
        readonly usageLimits: Schema.optional<Schema.Struct<{
            readonly checkedAt: Schema.String;
            readonly windows: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
            readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly resetCredits: Schema.optional<Schema.Struct<{
                readonly availableCount: Schema.Int;
                readonly nextExpiresAt: Schema.optional<Schema.String>;
                readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly externalUsage: Schema.optional<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly unavailable: Schema.optional<Schema.Struct<{
                readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>>;
        readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
            readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
            readonly checkedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
            readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly updateState: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
            readonly startedAt: Schema.NullOr<Schema.String>;
            readonly finishedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly output: Schema.NullOr<Schema.String>;
        }>>;
    }>>;
    readonly settings: Schema.optional<Schema.Struct<{
        readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>, never>;
        readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        }>>>, never>;
        readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.Literal<"off">;
        }>, Schema.Struct<{
            readonly mode: Schema.Literal<"custom">;
            readonly rules: Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.Boolean;
                readonly worktreeOnDelete: Schema.Boolean;
                readonly worktreeUnchanged: Schema.Boolean;
            }>;
        }>]>>, never>;
        readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
            readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
            readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        }>, never>;
        readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
        readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>>>, never>;
        readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
        readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
            worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>>;
            defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
            newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
            worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
            defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
            defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
            enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
            enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
            textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
            threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
            removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
            branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
            branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
            sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
            sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
            sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
            continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
            responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
            providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
            }>>>;
        }>>, never>;
        readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly port: Schema.optional<Schema.Int>;
        }>>, never>;
        readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.Literal<"eas">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
        }>>, never>;
        readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
        readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
        readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
        readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
            readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
            readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
            readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
            readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
            }>, never>;
        }>, never>;
        readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
        readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
        readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
        readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
        readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
        readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
        readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>, never>;
        readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
        readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
        readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
        readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.withDecodingDefault<Schema.String, never>;
                readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
            }>>>;
            readonly enabled: Schema.optionalKey<Schema.Boolean>;
            readonly config: Schema.optionalKey<Schema.Unknown>;
        }>>, never>;
        readonly observability: Schema.withDecodingDefault<Schema.Struct<{
            readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        }>, never>;
        readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
        readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, never>;
        readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
            readonly inputCostPerMillionTokens: Schema.Number;
            readonly outputCostPerMillionTokens: Schema.Number;
            readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
        }>>, never>;
        readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    }>>;
}>;
export type ServerConfigUpdatedPayload = typeof ServerConfigUpdatedPayload.Type;
export declare const ServerConfigKeybindingsUpdatedPayload: Schema.Struct<{
    readonly keybindings: Schema.Codec<readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("./keybindings.vibe").KeybindingWhenNode;
            readonly right: import("./keybindings.vibe").KeybindingWhenNode;
        } | undefined;
    }[], never, never>;
    readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.malformed-config">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"keybindings.invalid-entry">;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly index: Schema.Number;
    }>]>>;
}>;
export type ServerConfigKeybindingsUpdatedPayload = typeof ServerConfigKeybindingsUpdatedPayload.Type;
export declare const ServerConfigProviderStatusesPayload: Schema.Struct<{
    readonly providers: ForwardCompatibleArray<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly continuation: Schema.optional<Schema.Struct<{
            readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
        readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
        readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
        readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
        readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
        readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
        readonly setup: Schema.optional<Schema.Struct<{
            readonly canAuthenticate: Schema.Boolean;
            readonly canInstall: Schema.Boolean;
            readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly nativeSessions: Schema.optional<Schema.Struct<{
            readonly canList: Schema.Boolean;
            readonly canLoad: Schema.Boolean;
            readonly canResume: Schema.Boolean;
            readonly canDelete: Schema.optional<Schema.Boolean>;
        }>>;
        readonly configurableProviders: Schema.optional<Schema.Boolean>;
        readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
            readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly enabled: Schema.Boolean;
        readonly installed: Schema.Boolean;
        readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
        readonly auth: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
            readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.String;
                readonly message: Schema.String;
                readonly createdAt: Schema.optionalKey<Schema.String>;
                readonly expiresAt: Schema.optionalKey<Schema.String>;
            }>>;
            readonly canLogout: Schema.optional<Schema.Boolean>;
            readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
            readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly checkedAt: Schema.String;
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
        readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly models: Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly isCustom: Schema.Boolean;
            readonly isDefault: Schema.optional<Schema.Boolean>;
            readonly isLegacy: Schema.optional<Schema.Boolean>;
            readonly capabilities: Schema.NullOr<Schema.Struct<{
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>;
        }>>;
        readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>, never>;
        readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly slashCommands: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>;
            readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
            readonly skills: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>;
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>>;
        readonly usageLimits: Schema.optional<Schema.Struct<{
            readonly checkedAt: Schema.String;
            readonly windows: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
            readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly resetCredits: Schema.optional<Schema.Struct<{
                readonly availableCount: Schema.Int;
                readonly nextExpiresAt: Schema.optional<Schema.String>;
                readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly externalUsage: Schema.optional<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly unavailable: Schema.optional<Schema.Struct<{
                readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>>;
        readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
            readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
            readonly checkedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
            readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly updateState: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
            readonly startedAt: Schema.NullOr<Schema.String>;
            readonly finishedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly output: Schema.NullOr<Schema.String>;
        }>>;
    }>>;
}>;
export type ServerConfigProviderStatusesPayload = typeof ServerConfigProviderStatusesPayload.Type;
export declare const ServerConfigSettingsUpdatedPayload: Schema.Struct<{
    readonly settings: Schema.Struct<{
        readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>, never>;
        readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        }>>>, never>;
        readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.Literal<"off">;
        }>, Schema.Struct<{
            readonly mode: Schema.Literal<"custom">;
            readonly rules: Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.Boolean;
                readonly worktreeOnDelete: Schema.Boolean;
                readonly worktreeUnchanged: Schema.Boolean;
            }>;
        }>]>>, never>;
        readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
            readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
            readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        }>, never>;
        readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
        readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>>>, never>;
        readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
        readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
        readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
            worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>>;
            defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
            defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
            newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
            worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
            defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
            defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
            enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
            enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
            textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
            threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
            removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
            branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
            branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
            sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
            sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
            sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
            continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
            responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
            providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
            }>>>;
        }>>, never>;
        readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly port: Schema.optional<Schema.Int>;
        }>>, never>;
        readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly kind: Schema.Literal<"eas">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
            readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
        }>>, never>;
        readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
        readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
        readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
        readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
            readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
            readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
            readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
            readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
            }>, never>;
        }>, never>;
        readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
        readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
        readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
        readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
        readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
        readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
        readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
        readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>, never>;
        readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
        readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
        readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
        }>, never, never>>, never>;
        readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
        readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.withDecodingDefault<Schema.String, never>;
                readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
            }>>>;
            readonly enabled: Schema.optionalKey<Schema.Boolean>;
            readonly config: Schema.optionalKey<Schema.Unknown>;
        }>>, never>;
        readonly observability: Schema.withDecodingDefault<Schema.Struct<{
            readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        }>, never>;
        readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
        readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, never>;
        readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
            readonly inputCostPerMillionTokens: Schema.Number;
            readonly outputCostPerMillionTokens: Schema.Number;
            readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
        }>>, never>;
        readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    }>;
}>;
export type ServerConfigSettingsUpdatedPayload = typeof ServerConfigSettingsUpdatedPayload.Type;
export declare const ServerConfigStreamSnapshotEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"snapshot">;
    readonly config: Schema.Struct<{
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly auth: Schema.Struct<{
            readonly policy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
            readonly bootstrapMethods: Schema.$Array<Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>>;
            readonly sessionMethods: Schema.$Array<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
            readonly sessionCookieName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly serverUpdateScope: Schema.optionalKey<Schema.Literal<"environment:maintain">>;
        }>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly keybindingsConfigPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly keybindings: Schema.Codec<readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], never, never>;
        readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.malformed-config">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.invalid-entry">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly index: Schema.Number;
        }>]>>;
        readonly providers: ForwardCompatibleArray<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly continuation: Schema.optional<Schema.Struct<{
                readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
            readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
            readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
            readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
            readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
            readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
            readonly setup: Schema.optional<Schema.Struct<{
                readonly canAuthenticate: Schema.Boolean;
                readonly canInstall: Schema.Boolean;
                readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly nativeSessions: Schema.optional<Schema.Struct<{
                readonly canList: Schema.Boolean;
                readonly canLoad: Schema.Boolean;
                readonly canResume: Schema.Boolean;
                readonly canDelete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly configurableProviders: Schema.optional<Schema.Boolean>;
            readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
                readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly enabled: Schema.Boolean;
            readonly installed: Schema.Boolean;
            readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
            readonly auth: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
                readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.String;
                    readonly message: Schema.String;
                    readonly createdAt: Schema.optionalKey<Schema.String>;
                    readonly expiresAt: Schema.optionalKey<Schema.String>;
                }>>;
                readonly canLogout: Schema.optional<Schema.Boolean>;
                readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly checkedAt: Schema.String;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
            readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly models: Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly isCustom: Schema.Boolean;
                readonly isDefault: Schema.optional<Schema.Boolean>;
                readonly isLegacy: Schema.optional<Schema.Boolean>;
                readonly capabilities: Schema.NullOr<Schema.Struct<{
                    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"select">;
                        readonly options: Schema.$Array<Schema.Struct<{
                            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                            readonly isDefault: Schema.optional<Schema.Boolean>;
                        }>>;
                        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                    }>, Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"boolean">;
                        readonly currentValue: Schema.optional<Schema.Boolean>;
                    }>]>>>;
                }>>;
            }>>;
            readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>;
            readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>, never>;
            readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly checkedAt: Schema.String;
                readonly slashCommands: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly input: Schema.optional<Schema.Struct<{
                        readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                }>>;
                readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
                readonly skills: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly enabled: Schema.Boolean;
                    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                    readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                    /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                    readonly userInvocable: Schema.optional<Schema.Boolean>;
                }>>;
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>>;
            readonly usageLimits: Schema.optional<Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>>;
            readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
                readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
                readonly checkedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
                readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly updateState: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
                readonly startedAt: Schema.NullOr<Schema.String>;
                readonly finishedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly output: Schema.NullOr<Schema.String>;
            }>>;
        }>>;
        readonly availableEditors: ForwardCompatibleArray<Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>>;
        readonly remoteOpenTargets: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["tailscale", "mdns"]>;
            readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly username: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
        /** Hints only; verify each address answers as this environment. */
        readonly directEndpoints: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["lan", "tailnet"]>;
            readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly observability: Schema.Struct<{
            readonly logsDirectoryPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly localTracingEnabled: Schema.Boolean;
            readonly otlpTracesUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpTracesSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpTracesVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpTracesEnabled: Schema.Boolean;
            readonly otlpMetricsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpMetricsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpMetricsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpMetricsEnabled: Schema.Boolean;
            readonly otlpLogsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpLogsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpLogsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpLogsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>;
        readonly settings: Schema.Struct<{
            readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>, never>;
            readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
                readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            }>>>, never>;
            readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>, never>;
            readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            }>, never>;
            readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
            readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
            readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>>>, never>;
            readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
            readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
                worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.Literal<"off">;
                }>, Schema.Struct<{
                    readonly mode: Schema.Literal<"custom">;
                    readonly rules: Schema.Struct<{
                        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                        readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                        readonly worktreeOnMerge: Schema.Boolean;
                        readonly worktreeOnDelete: Schema.Boolean;
                        readonly worktreeUnchanged: Schema.Boolean;
                    }>;
                }>]>>>;
                defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
                defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
                newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
                worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
                defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
                defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
                enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
                enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
                textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
                threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
                removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
                branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
                branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
                sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
                sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
                sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
                continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
                responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
                providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                    readonly enabled: Schema.optionalKey<Schema.Boolean>;
                }>>>;
            }>>, never>;
            readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly port: Schema.optional<Schema.Int>;
            }>>, never>;
            readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.Literal<"eas">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
            }>>, never>;
            readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
            readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
            readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
            readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
                readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
                readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
                readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
                readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
                }>, never>;
            }>, never>;
            readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
            readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
            readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
            readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
            readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
            readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
            readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>, never>;
            readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
            readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
            readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
            readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.withDecodingDefault<Schema.String, never>;
                    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
                }>>>;
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
                readonly config: Schema.optionalKey<Schema.Unknown>;
            }>>, never>;
            readonly observability: Schema.withDecodingDefault<Schema.Struct<{
                readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            }>, never>;
            readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
            readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
                readonly kind: Schema.Literal<"cliproxy">;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, never>;
            readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly inputCostPerMillionTokens: Schema.Number;
                readonly outputCostPerMillionTokens: Schema.Number;
                readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
                readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            }>>, never>;
            readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        }>;
        readonly shellResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
        /**
         * The shell can leave idle subagent children out of snapshots (`omitIdleSubagents`), and
         * `getThreadFamily` and `getWorktreeThreadIds` serve the rows it leaves out.
         */
        readonly shellThreadFamilies: Schema.optionalKey<Schema.Boolean>;
        /**
         * The shell can leave older settled threads out of snapshots (`omitOlderSettled`), and
         * `getOlderSettledThreads` serves them. Only servers that also advertise `shellThreadFamilies`.
         */
        readonly shellOlderSettled: Schema.optionalKey<Schema.Boolean>;
        readonly shellRevealInFileManager: Schema.optionalKey<Schema.Boolean>;
        readonly shellRevealInFileManagerKind: Schema.optionalKey<Schema.Literals<readonly ["finder", "file-explorer", "files"]>>;
        readonly threadResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
        /** Send window fields only when advertised. */
        readonly threadSnapshotPagination: Schema.optionalKey<Schema.Boolean>;
        readonly reasoningMessages: Schema.optionalKey<Schema.Boolean>;
        readonly threadFind: Schema.optionalKey<Schema.Boolean>;
        readonly threadFindProgressive: Schema.optionalKey<Schema.Boolean>;
        readonly scratchWorkspaceRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly newProjectsRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /**
         * The latest stall long enough to notice, sent only for a few minutes after
         * it. A client that reconnects reads it to say why the host stopped
         * answering. Clients do not cache it, since it describes the host at connect.
         */
        readonly lastEventLoopStall: Schema.optionalKey<Schema.Struct<{
            readonly detectedAt: Schema.String;
            readonly durationMs: Schema.Int;
            /** One-minute load average when the stall was seen. Absent on Windows, which has none. */
            readonly loadAverage: Schema.optionalKey<Schema.Number>;
            readonly cpuCount: Schema.Int;
        }>>;
        /**
         * Never sent in a config snapshot: the theme stream emits the current set
         * before any change, so a snapshot carrying it too would hand every
         * subscriber the same array twice per connect.
         */
        readonly environmentThemes: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly version: Schema.optional<Schema.Literal<1>>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
            readonly canvas: Schema.optional<Schema.String>;
            readonly accent: Schema.optional<Schema.String>;
            readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly variants: Schema.optional<Schema.Struct<{
                readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>;
            readonly id: Schema.String;
        }>>>;
        /** Stream-only and opt-in; the source stream emits the current set on subscribe. */
        readonly usageLimitSources: Schema.optional<ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly accounts: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly usageLimits: Schema.Struct<{
                    readonly checkedAt: Schema.String;
                    readonly windows: ForwardCompatibleArray<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly usedPercent: Schema.Number;
                        readonly resetsAt: Schema.optional<Schema.String>;
                        readonly windowDurationMins: Schema.optional<Schema.Int>;
                    }>>;
                    readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly resetCredits: Schema.optional<Schema.Struct<{
                        readonly availableCount: Schema.Int;
                        readonly nextExpiresAt: Schema.optional<Schema.String>;
                        readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                    readonly externalUsage: Schema.optional<Schema.Struct<{
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                    readonly unavailable: Schema.optional<Schema.Struct<{
                        readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                }>;
            }>>;
            readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
    }>;
}>;
export type ServerConfigStreamSnapshotEvent = typeof ServerConfigStreamSnapshotEvent.Type;
export declare const ServerConfigStreamKeybindingsUpdatedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"keybindingsUpdated">;
    readonly payload: Schema.Struct<{
        readonly keybindings: Schema.Codec<readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], never, never>;
        readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.malformed-config">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.invalid-entry">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly index: Schema.Number;
        }>]>>;
    }>;
}>;
export type ServerConfigStreamKeybindingsUpdatedEvent = typeof ServerConfigStreamKeybindingsUpdatedEvent.Type;
export declare const ServerConfigStreamProviderStatusesEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"providerStatuses">;
    readonly payload: Schema.Struct<{
        readonly providers: ForwardCompatibleArray<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly continuation: Schema.optional<Schema.Struct<{
                readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
            readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
            readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
            readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
            readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
            readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
            readonly setup: Schema.optional<Schema.Struct<{
                readonly canAuthenticate: Schema.Boolean;
                readonly canInstall: Schema.Boolean;
                readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly nativeSessions: Schema.optional<Schema.Struct<{
                readonly canList: Schema.Boolean;
                readonly canLoad: Schema.Boolean;
                readonly canResume: Schema.Boolean;
                readonly canDelete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly configurableProviders: Schema.optional<Schema.Boolean>;
            readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
                readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly enabled: Schema.Boolean;
            readonly installed: Schema.Boolean;
            readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
            readonly auth: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
                readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.String;
                    readonly message: Schema.String;
                    readonly createdAt: Schema.optionalKey<Schema.String>;
                    readonly expiresAt: Schema.optionalKey<Schema.String>;
                }>>;
                readonly canLogout: Schema.optional<Schema.Boolean>;
                readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly checkedAt: Schema.String;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
            readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly models: Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly isCustom: Schema.Boolean;
                readonly isDefault: Schema.optional<Schema.Boolean>;
                readonly isLegacy: Schema.optional<Schema.Boolean>;
                readonly capabilities: Schema.NullOr<Schema.Struct<{
                    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"select">;
                        readonly options: Schema.$Array<Schema.Struct<{
                            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                            readonly isDefault: Schema.optional<Schema.Boolean>;
                        }>>;
                        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                    }>, Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"boolean">;
                        readonly currentValue: Schema.optional<Schema.Boolean>;
                    }>]>>>;
                }>>;
            }>>;
            readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>;
            readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>, never>;
            readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly checkedAt: Schema.String;
                readonly slashCommands: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly input: Schema.optional<Schema.Struct<{
                        readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                }>>;
                readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
                readonly skills: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly enabled: Schema.Boolean;
                    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                    readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                    /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                    readonly userInvocable: Schema.optional<Schema.Boolean>;
                }>>;
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>>;
            readonly usageLimits: Schema.optional<Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>>;
            readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
                readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
                readonly checkedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
                readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly updateState: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
                readonly startedAt: Schema.NullOr<Schema.String>;
                readonly finishedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly output: Schema.NullOr<Schema.String>;
            }>>;
        }>>;
    }>;
}>;
export type ServerConfigStreamProviderStatusesEvent = typeof ServerConfigStreamProviderStatusesEvent.Type;
export declare const ServerConfigStreamSettingsUpdatedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"settingsUpdated">;
    readonly payload: Schema.Struct<{
        readonly settings: Schema.Struct<{
            readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>, never>;
            readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
                readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            }>>>, never>;
            readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>, never>;
            readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            }>, never>;
            readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
            readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
            readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>>>, never>;
            readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
            readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
                worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.Literal<"off">;
                }>, Schema.Struct<{
                    readonly mode: Schema.Literal<"custom">;
                    readonly rules: Schema.Struct<{
                        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                        readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                        readonly worktreeOnMerge: Schema.Boolean;
                        readonly worktreeOnDelete: Schema.Boolean;
                        readonly worktreeUnchanged: Schema.Boolean;
                    }>;
                }>]>>>;
                defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
                defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
                newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
                worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
                defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
                defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
                enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
                enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
                textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
                threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
                removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
                branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
                branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
                sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
                sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
                sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
                continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
                responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
                providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                    readonly enabled: Schema.optionalKey<Schema.Boolean>;
                }>>>;
            }>>, never>;
            readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly port: Schema.optional<Schema.Int>;
            }>>, never>;
            readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.Literal<"eas">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
            }>>, never>;
            readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
            readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
            readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
            readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
                readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
                readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
                readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
                readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
                }>, never>;
            }>, never>;
            readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
            readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
            readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
            readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
            readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
            readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
            readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>, never>;
            readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
            readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
            readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
            readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.withDecodingDefault<Schema.String, never>;
                    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
                }>>>;
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
                readonly config: Schema.optionalKey<Schema.Unknown>;
            }>>, never>;
            readonly observability: Schema.withDecodingDefault<Schema.Struct<{
                readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            }>, never>;
            readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
            readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
                readonly kind: Schema.Literal<"cliproxy">;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, never>;
            readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly inputCostPerMillionTokens: Schema.Number;
                readonly outputCostPerMillionTokens: Schema.Number;
                readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
                readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            }>>, never>;
            readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        }>;
    }>;
}>;
export type ServerConfigStreamSettingsUpdatedEvent = typeof ServerConfigStreamSettingsUpdatedEvent.Type;
export declare const ServerConfigEnvironmentThemesUpdatedPayload: Schema.Struct<{
    readonly themes: Schema.$Array<Schema.Struct<{
        readonly version: Schema.optional<Schema.Literal<1>>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
        readonly canvas: Schema.optional<Schema.String>;
        readonly accent: Schema.optional<Schema.String>;
        readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly variants: Schema.optional<Schema.Struct<{
            readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>>;
        readonly id: Schema.String;
    }>>;
}>;
export type ServerConfigEnvironmentThemesUpdatedPayload = typeof ServerConfigEnvironmentThemesUpdatedPayload.Type;
export declare const ServerConfigStreamEnvironmentThemesUpdatedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"environmentThemesUpdated">;
    readonly payload: Schema.Struct<{
        readonly themes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.optional<Schema.Literal<1>>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
            readonly canvas: Schema.optional<Schema.String>;
            readonly accent: Schema.optional<Schema.String>;
            readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly variants: Schema.optional<Schema.Struct<{
                readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>;
            readonly id: Schema.String;
        }>>;
    }>;
}>;
export type ServerConfigStreamEnvironmentThemesUpdatedEvent = typeof ServerConfigStreamEnvironmentThemesUpdatedEvent.Type;
export declare const ServerConfigUsageLimitSourcesUpdatedPayload: Schema.Struct<{
    readonly sources: ForwardCompatibleArray<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
        readonly kind: Schema.Literal<"cliproxy">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly checkedAt: Schema.String;
        readonly accounts: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly usageLimits: Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>;
        }>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type ServerConfigUsageLimitSourcesUpdatedPayload = typeof ServerConfigUsageLimitSourcesUpdatedPayload.Type;
export declare const ServerConfigStreamUsageLimitSourcesUpdatedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"usageLimitSourcesUpdated">;
    readonly payload: Schema.Struct<{
        readonly sources: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly accounts: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly usageLimits: Schema.Struct<{
                    readonly checkedAt: Schema.String;
                    readonly windows: ForwardCompatibleArray<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly usedPercent: Schema.Number;
                        readonly resetsAt: Schema.optional<Schema.String>;
                        readonly windowDurationMins: Schema.optional<Schema.Int>;
                    }>>;
                    readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly resetCredits: Schema.optional<Schema.Struct<{
                        readonly availableCount: Schema.Int;
                        readonly nextExpiresAt: Schema.optional<Schema.String>;
                        readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                    readonly externalUsage: Schema.optional<Schema.Struct<{
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                    readonly unavailable: Schema.optional<Schema.Struct<{
                        readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                }>;
            }>>;
            readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>;
}>;
export type ServerConfigStreamUsageLimitSourcesUpdatedEvent = typeof ServerConfigStreamUsageLimitSourcesUpdatedEvent.Type;
export declare const ServerConfigStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"snapshot">;
    readonly config: Schema.Struct<{
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly auth: Schema.Struct<{
            readonly policy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
            readonly bootstrapMethods: Schema.$Array<Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>>;
            readonly sessionMethods: Schema.$Array<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
            readonly sessionCookieName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly serverUpdateScope: Schema.optionalKey<Schema.Literal<"environment:maintain">>;
        }>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly keybindingsConfigPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly keybindings: Schema.Codec<readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], never, never>;
        readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.malformed-config">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.invalid-entry">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly index: Schema.Number;
        }>]>>;
        readonly providers: ForwardCompatibleArray<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly continuation: Schema.optional<Schema.Struct<{
                readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
            readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
            readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
            readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
            readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
            readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
            readonly setup: Schema.optional<Schema.Struct<{
                readonly canAuthenticate: Schema.Boolean;
                readonly canInstall: Schema.Boolean;
                readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly nativeSessions: Schema.optional<Schema.Struct<{
                readonly canList: Schema.Boolean;
                readonly canLoad: Schema.Boolean;
                readonly canResume: Schema.Boolean;
                readonly canDelete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly configurableProviders: Schema.optional<Schema.Boolean>;
            readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
                readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly enabled: Schema.Boolean;
            readonly installed: Schema.Boolean;
            readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
            readonly auth: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
                readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.String;
                    readonly message: Schema.String;
                    readonly createdAt: Schema.optionalKey<Schema.String>;
                    readonly expiresAt: Schema.optionalKey<Schema.String>;
                }>>;
                readonly canLogout: Schema.optional<Schema.Boolean>;
                readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly checkedAt: Schema.String;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
            readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly models: Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly isCustom: Schema.Boolean;
                readonly isDefault: Schema.optional<Schema.Boolean>;
                readonly isLegacy: Schema.optional<Schema.Boolean>;
                readonly capabilities: Schema.NullOr<Schema.Struct<{
                    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"select">;
                        readonly options: Schema.$Array<Schema.Struct<{
                            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                            readonly isDefault: Schema.optional<Schema.Boolean>;
                        }>>;
                        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                    }>, Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"boolean">;
                        readonly currentValue: Schema.optional<Schema.Boolean>;
                    }>]>>>;
                }>>;
            }>>;
            readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>;
            readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>, never>;
            readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly checkedAt: Schema.String;
                readonly slashCommands: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly input: Schema.optional<Schema.Struct<{
                        readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                }>>;
                readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
                readonly skills: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly enabled: Schema.Boolean;
                    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                    readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                    /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                    readonly userInvocable: Schema.optional<Schema.Boolean>;
                }>>;
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>>;
            readonly usageLimits: Schema.optional<Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>>;
            readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
                readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
                readonly checkedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
                readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly updateState: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
                readonly startedAt: Schema.NullOr<Schema.String>;
                readonly finishedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly output: Schema.NullOr<Schema.String>;
            }>>;
        }>>;
        readonly availableEditors: ForwardCompatibleArray<Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>>;
        readonly remoteOpenTargets: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["tailscale", "mdns"]>;
            readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly username: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
        /** Hints only; verify each address answers as this environment. */
        readonly directEndpoints: Schema.optionalKey<ForwardCompatibleArray<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["lan", "tailnet"]>;
            readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly observability: Schema.Struct<{
            readonly logsDirectoryPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly localTracingEnabled: Schema.Boolean;
            readonly otlpTracesUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpTracesSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpTracesVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpTracesEnabled: Schema.Boolean;
            readonly otlpMetricsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpMetricsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpMetricsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpMetricsEnabled: Schema.Boolean;
            readonly otlpLogsUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpLogsSource: Schema.optional<Schema.Literals<readonly ["environment", "bootstrap", "settings"]>>;
            readonly otlpLogsVariable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly otlpLogsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>;
        readonly settings: Schema.Struct<{
            readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>, never>;
            readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
                readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            }>>>, never>;
            readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>, never>;
            readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            }>, never>;
            readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
            readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
            readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>>>, never>;
            readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
            readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
                worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.Literal<"off">;
                }>, Schema.Struct<{
                    readonly mode: Schema.Literal<"custom">;
                    readonly rules: Schema.Struct<{
                        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                        readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                        readonly worktreeOnMerge: Schema.Boolean;
                        readonly worktreeOnDelete: Schema.Boolean;
                        readonly worktreeUnchanged: Schema.Boolean;
                    }>;
                }>]>>>;
                defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
                defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
                newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
                worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
                defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
                defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
                enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
                enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
                textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
                threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
                removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
                branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
                branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
                sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
                sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
                sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
                continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
                responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
                providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                    readonly enabled: Schema.optionalKey<Schema.Boolean>;
                }>>>;
            }>>, never>;
            readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly port: Schema.optional<Schema.Int>;
            }>>, never>;
            readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.Literal<"eas">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
            }>>, never>;
            readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
            readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
            readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
            readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
                readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
                readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
                readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
                readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
                }>, never>;
            }>, never>;
            readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
            readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
            readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
            readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
            readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
            readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
            readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>, never>;
            readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
            readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
            readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
            readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.withDecodingDefault<Schema.String, never>;
                    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
                }>>>;
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
                readonly config: Schema.optionalKey<Schema.Unknown>;
            }>>, never>;
            readonly observability: Schema.withDecodingDefault<Schema.Struct<{
                readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            }>, never>;
            readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
            readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
                readonly kind: Schema.Literal<"cliproxy">;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, never>;
            readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly inputCostPerMillionTokens: Schema.Number;
                readonly outputCostPerMillionTokens: Schema.Number;
                readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
                readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            }>>, never>;
            readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        }>;
        readonly shellResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
        /**
         * The shell can leave idle subagent children out of snapshots (`omitIdleSubagents`), and
         * `getThreadFamily` and `getWorktreeThreadIds` serve the rows it leaves out.
         */
        readonly shellThreadFamilies: Schema.optionalKey<Schema.Boolean>;
        /**
         * The shell can leave older settled threads out of snapshots (`omitOlderSettled`), and
         * `getOlderSettledThreads` serves them. Only servers that also advertise `shellThreadFamilies`.
         */
        readonly shellOlderSettled: Schema.optionalKey<Schema.Boolean>;
        readonly shellRevealInFileManager: Schema.optionalKey<Schema.Boolean>;
        readonly shellRevealInFileManagerKind: Schema.optionalKey<Schema.Literals<readonly ["finder", "file-explorer", "files"]>>;
        readonly threadResumeCompletionMarker: Schema.optionalKey<Schema.Boolean>;
        /** Send window fields only when advertised. */
        readonly threadSnapshotPagination: Schema.optionalKey<Schema.Boolean>;
        readonly reasoningMessages: Schema.optionalKey<Schema.Boolean>;
        readonly threadFind: Schema.optionalKey<Schema.Boolean>;
        readonly threadFindProgressive: Schema.optionalKey<Schema.Boolean>;
        readonly scratchWorkspaceRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly newProjectsRoot: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /**
         * The latest stall long enough to notice, sent only for a few minutes after
         * it. A client that reconnects reads it to say why the host stopped
         * answering. Clients do not cache it, since it describes the host at connect.
         */
        readonly lastEventLoopStall: Schema.optionalKey<Schema.Struct<{
            readonly detectedAt: Schema.String;
            readonly durationMs: Schema.Int;
            /** One-minute load average when the stall was seen. Absent on Windows, which has none. */
            readonly loadAverage: Schema.optionalKey<Schema.Number>;
            readonly cpuCount: Schema.Int;
        }>>;
        /**
         * Never sent in a config snapshot: the theme stream emits the current set
         * before any change, so a snapshot carrying it too would hand every
         * subscriber the same array twice per connect.
         */
        readonly environmentThemes: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly version: Schema.optional<Schema.Literal<1>>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
            readonly canvas: Schema.optional<Schema.String>;
            readonly accent: Schema.optional<Schema.String>;
            readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly variants: Schema.optional<Schema.Struct<{
                readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>;
            readonly id: Schema.String;
        }>>>;
        /** Stream-only and opt-in; the source stream emits the current set on subscribe. */
        readonly usageLimitSources: Schema.optional<ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly accounts: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly usageLimits: Schema.Struct<{
                    readonly checkedAt: Schema.String;
                    readonly windows: ForwardCompatibleArray<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly usedPercent: Schema.Number;
                        readonly resetsAt: Schema.optional<Schema.String>;
                        readonly windowDurationMins: Schema.optional<Schema.Int>;
                    }>>;
                    readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly resetCredits: Schema.optional<Schema.Struct<{
                        readonly availableCount: Schema.Int;
                        readonly nextExpiresAt: Schema.optional<Schema.String>;
                        readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                    readonly externalUsage: Schema.optional<Schema.Struct<{
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                    readonly unavailable: Schema.optional<Schema.Struct<{
                        readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                }>;
            }>>;
            readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"keybindingsUpdated">;
    readonly payload: Schema.Struct<{
        readonly keybindings: Schema.Codec<readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], readonly {
            readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
            readonly shortcut: {
                readonly key: string;
                readonly metaKey: boolean;
                readonly ctrlKey: boolean;
                readonly shiftKey: boolean;
                readonly altKey: boolean;
                readonly modKey: boolean;
            };
            readonly whenAst?: {
                readonly type: "identifier";
                readonly name: string;
            } | {
                readonly type: "not";
                readonly node: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "and";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | {
                readonly type: "or";
                readonly left: import("./keybindings.vibe").KeybindingWhenNode;
                readonly right: import("./keybindings.vibe").KeybindingWhenNode;
            } | undefined;
        }[], never, never>;
        readonly issues: ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.malformed-config">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"keybindings.invalid-entry">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly index: Schema.Number;
        }>]>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"providerStatuses">;
    readonly payload: Schema.Struct<{
        readonly providers: ForwardCompatibleArray<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly continuation: Schema.optional<Schema.Struct<{
                readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
            readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
            readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
            readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
            readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
            readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
            readonly setup: Schema.optional<Schema.Struct<{
                readonly canAuthenticate: Schema.Boolean;
                readonly canInstall: Schema.Boolean;
                readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly nativeSessions: Schema.optional<Schema.Struct<{
                readonly canList: Schema.Boolean;
                readonly canLoad: Schema.Boolean;
                readonly canResume: Schema.Boolean;
                readonly canDelete: Schema.optional<Schema.Boolean>;
            }>>;
            readonly configurableProviders: Schema.optional<Schema.Boolean>;
            readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
                readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly enabled: Schema.Boolean;
            readonly installed: Schema.Boolean;
            readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
            readonly auth: Schema.Struct<{
                readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
                readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly action: Schema.optional<Schema.Struct<{
                    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.String;
                    readonly message: Schema.String;
                    readonly createdAt: Schema.optionalKey<Schema.String>;
                    readonly expiresAt: Schema.optionalKey<Schema.String>;
                }>>;
                readonly canLogout: Schema.optional<Schema.Boolean>;
                readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly checkedAt: Schema.String;
            readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
            readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly models: Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly isCustom: Schema.Boolean;
                readonly isDefault: Schema.optional<Schema.Boolean>;
                readonly isLegacy: Schema.optional<Schema.Boolean>;
                readonly capabilities: Schema.NullOr<Schema.Struct<{
                    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"select">;
                        readonly options: Schema.$Array<Schema.Struct<{
                            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                            readonly isDefault: Schema.optional<Schema.Boolean>;
                        }>>;
                        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                    }>, Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly type: Schema.Literal<"boolean">;
                        readonly currentValue: Schema.optional<Schema.Boolean>;
                    }>]>>>;
                }>>;
            }>>;
            readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly badge: Schema.optional<Schema.Literal<"new">>;
                readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>;
            readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>, never>;
            readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly checkedAt: Schema.String;
                readonly slashCommands: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly input: Schema.optional<Schema.Struct<{
                        readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                }>>;
                readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
                readonly skills: Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly enabled: Schema.Boolean;
                    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                    readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                    /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                    readonly userInvocable: Schema.optional<Schema.Boolean>;
                }>>;
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>>;
            readonly usageLimits: Schema.optional<Schema.Struct<{
                readonly checkedAt: Schema.String;
                readonly windows: ForwardCompatibleArray<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly usedPercent: Schema.Number;
                    readonly resetsAt: Schema.optional<Schema.String>;
                    readonly windowDurationMins: Schema.optional<Schema.Int>;
                }>>;
                readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly resetCredits: Schema.optional<Schema.Struct<{
                    readonly availableCount: Schema.Int;
                    readonly nextExpiresAt: Schema.optional<Schema.String>;
                    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
                readonly externalUsage: Schema.optional<Schema.Struct<{
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
                readonly unavailable: Schema.optional<Schema.Struct<{
                    readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>>;
            readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
                readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
                readonly checkedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
                readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly updateState: Schema.optionalKey<Schema.Struct<{
                readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
                readonly startedAt: Schema.NullOr<Schema.String>;
                readonly finishedAt: Schema.NullOr<Schema.String>;
                readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly output: Schema.NullOr<Schema.String>;
            }>>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"settingsUpdated">;
    readonly payload: Schema.Struct<{
        readonly settings: Schema.Struct<{
            readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>>, never>;
            readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
                readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            }>>>, never>;
            readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.Literal<"off">;
            }>, Schema.Struct<{
                readonly mode: Schema.Literal<"custom">;
                readonly rules: Schema.Struct<{
                    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                    readonly worktreeOnMerge: Schema.Boolean;
                    readonly worktreeOnDelete: Schema.Boolean;
                    readonly worktreeUnchanged: Schema.Boolean;
                }>;
            }>]>>, never>;
            readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            }>, never>;
            readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
            readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
            readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>, never>;
            readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
                readonly runOnWorktreeCreate: Schema.Boolean;
                readonly runOnSettle: Schema.optional<Schema.Boolean>;
                readonly async: Schema.optional<Schema.Boolean>;
                readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
            }>>>>, never>;
            readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
            readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
            readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
                worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.Literal<"off">;
                }>, Schema.Struct<{
                    readonly mode: Schema.Literal<"custom">;
                    readonly rules: Schema.Struct<{
                        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                        readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                        readonly worktreeOnMerge: Schema.Boolean;
                        readonly worktreeOnDelete: Schema.Boolean;
                        readonly worktreeUnchanged: Schema.Boolean;
                    }>;
                }>]>>>;
                defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
                defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
                newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
                worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
                defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
                defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
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
                enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
                enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
                textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
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
                threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
                reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
                }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
                removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
                branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
                branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
                sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
                sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
                sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
                continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
                responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
                providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                    readonly enabled: Schema.optionalKey<Schema.Boolean>;
                }>>>;
            }>>, never>;
            readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly port: Schema.optional<Schema.Int>;
            }>>, never>;
            readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
                readonly kind: Schema.Literal<"eas">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
                readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
            }>>, never>;
            readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
            readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
            readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
            readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
                readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
                readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
                readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
                readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
                    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
                    readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
                    readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
                }>, never>;
            }>, never>;
            readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
            readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
            readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
            readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
            readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
            readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
            readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
            readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>, never>;
            readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
            readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
                readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
            readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
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
            }>, never, never>>, never>;
            readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
            readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.withDecodingDefault<Schema.String, never>;
                    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
                    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
                }>>>;
                readonly enabled: Schema.optionalKey<Schema.Boolean>;
                readonly config: Schema.optionalKey<Schema.Unknown>;
            }>>, never>;
            readonly observability: Schema.withDecodingDefault<Schema.Struct<{
                readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            }>, never>;
            readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
            readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
                readonly kind: Schema.Literal<"cliproxy">;
                readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
                readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            }>>, never>;
            readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
                readonly inputCostPerMillionTokens: Schema.Number;
                readonly outputCostPerMillionTokens: Schema.Number;
                readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
                readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
            }>>, never>;
            readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        }>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"environmentThemesUpdated">;
    readonly payload: Schema.Struct<{
        readonly themes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.optional<Schema.Literal<1>>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly appearance: Schema.Literals<readonly ["light", "dark"]>;
            readonly canvas: Schema.optional<Schema.String>;
            readonly accent: Schema.optional<Schema.String>;
            readonly colors: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly variants: Schema.optional<Schema.Struct<{
                readonly light: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly dark: Schema.optional<Schema.$Record<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>>;
            readonly id: Schema.String;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly type: Schema.Literal<"usageLimitSourcesUpdated">;
    readonly payload: Schema.Struct<{
        readonly sources: ForwardCompatibleArray<Schema.Struct<{
            readonly id: Schema.brand<Schema.String, "UsageLimitSourceId">;
            readonly kind: Schema.Literal<"cliproxy">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly accounts: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
                readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly usageLimits: Schema.Struct<{
                    readonly checkedAt: Schema.String;
                    readonly windows: ForwardCompatibleArray<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly usedPercent: Schema.Number;
                        readonly resetsAt: Schema.optional<Schema.String>;
                        readonly windowDurationMins: Schema.optional<Schema.Int>;
                    }>>;
                    readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly resetCredits: Schema.optional<Schema.Struct<{
                        readonly availableCount: Schema.Int;
                        readonly nextExpiresAt: Schema.optional<Schema.String>;
                        readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                    readonly externalUsage: Schema.optional<Schema.Struct<{
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                    readonly unavailable: Schema.optional<Schema.Struct<{
                        readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                }>;
            }>>;
            readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>;
}>]>;
export type ServerConfigStreamEvent = typeof ServerConfigStreamEvent.Type;
export declare const ServerSelfUpdateOutcome: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly fromVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly status: Schema.Literals<readonly ["committed", "rolled-back", "failed"]>;
    readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerSelfUpdateOutcome = typeof ServerSelfUpdateOutcome.Type;
export declare const ServerLifecycleReadyPayload: Schema.Struct<{
    readonly at: Schema.String;
    readonly environment: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly updateOutcome: Schema.optionalKey<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fromVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["committed", "rolled-back", "failed"]>;
        readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type ServerLifecycleReadyPayload = typeof ServerLifecycleReadyPayload.Type;
export declare const ServerLifecycleWelcomePayload: Schema.Struct<{
    readonly environment: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly projectName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly bootstrapStatus: Schema.optional<Schema.Literals<readonly ["pending", "complete"]>>;
    readonly bootstrapProjectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
    readonly bootstrapThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly bootstrapProjectCreated: Schema.optional<Schema.Boolean>;
    readonly bootstrapThreadCreated: Schema.optional<Schema.Boolean>;
}>;
export type ServerLifecycleWelcomePayload = typeof ServerLifecycleWelcomePayload.Type;
export declare const ServerLifecycleLegacyThreadMigrationPayload: Schema.Struct<{
    readonly status: Schema.Union<readonly [Schema.Literal<"running">, Schema.Literal<"complete">]>;
    readonly totalThreadCount: Schema.Int;
}>;
export type ServerLifecycleLegacyThreadMigrationPayload = typeof ServerLifecycleLegacyThreadMigrationPayload.Type;
export declare const ServerLifecycleStreamWelcomeEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"welcome">;
    readonly payload: Schema.Struct<{
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly projectName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly bootstrapStatus: Schema.optional<Schema.Literals<readonly ["pending", "complete"]>>;
        readonly bootstrapProjectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
        readonly bootstrapThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly bootstrapProjectCreated: Schema.optional<Schema.Boolean>;
        readonly bootstrapThreadCreated: Schema.optional<Schema.Boolean>;
    }>;
}>;
export type ServerLifecycleStreamWelcomeEvent = typeof ServerLifecycleStreamWelcomeEvent.Type;
export declare const ServerLifecycleStreamReadyEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"ready">;
    readonly payload: Schema.Struct<{
        readonly at: Schema.String;
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly updateOutcome: Schema.optionalKey<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fromVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["committed", "rolled-back", "failed"]>;
            readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>;
}>;
export type ServerLifecycleStreamReadyEvent = typeof ServerLifecycleStreamReadyEvent.Type;
export declare const ServerLifecycleStreamLegacyThreadMigrationEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"legacyThreadMigration">;
    readonly payload: Schema.Struct<{
        readonly status: Schema.Union<readonly [Schema.Literal<"running">, Schema.Literal<"complete">]>;
        readonly totalThreadCount: Schema.Int;
    }>;
}>;
export type ServerLifecycleStreamLegacyThreadMigrationEvent = typeof ServerLifecycleStreamLegacyThreadMigrationEvent.Type;
export declare const ServerLifecycleStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"welcome">;
    readonly payload: Schema.Struct<{
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly projectName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly bootstrapStatus: Schema.optional<Schema.Literals<readonly ["pending", "complete"]>>;
        readonly bootstrapProjectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
        readonly bootstrapThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly bootstrapProjectCreated: Schema.optional<Schema.Boolean>;
        readonly bootstrapThreadCreated: Schema.optional<Schema.Boolean>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"ready">;
    readonly payload: Schema.Struct<{
        readonly at: Schema.String;
        readonly environment: Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly platform: Schema.Struct<{
                readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
                readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
                readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
            }>;
            readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
            readonly capabilities: Schema.Struct<{
                readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
                readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
                readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
                readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
                readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                    readonly maxUploadBytes: Schema.Int;
                }>>;
                readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
                readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
                readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
                readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
                readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
                readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
                readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
                readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
                readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
                readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
                readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
                readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
                readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
                readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
                readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
                readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
                readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
                readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
                readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
                readonly threadStop: Schema.optionalKey<Schema.Boolean>;
                readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
                readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
                readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
                readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
                readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
                }>, Schema.Struct<{
                    readonly kind: Schema.Literal<"npm-global">;
                    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>>, Schema.Unknown, never, never>>;
                readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
                readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
                readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
                readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
                readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
                readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
                readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
                readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
                readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
                readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
                readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
                readonly linkFence: Schema.optionalKey<Schema.Boolean>;
                readonly triage: Schema.optionalKey<Schema.Boolean>;
            }>;
        }>;
        readonly updateOutcome: Schema.optionalKey<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fromVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["committed", "rolled-back", "failed"]>;
            readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly sequence: Schema.Int;
    readonly type: Schema.Literal<"legacyThreadMigration">;
    readonly payload: Schema.Struct<{
        readonly status: Schema.Union<readonly [Schema.Literal<"running">, Schema.Literal<"complete">]>;
        readonly totalThreadCount: Schema.Int;
    }>;
}>]>;
export type ServerLifecycleStreamEvent = typeof ServerLifecycleStreamEvent.Type;
export declare const ServerProviderUpdatedPayload: Schema.Struct<{
    readonly providers: ForwardCompatibleArray<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly iconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly badgeLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly continuation: Schema.optional<Schema.Struct<{
            readonly groupKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly showInteractionModeToggle: Schema.optional<Schema.Boolean>;
        readonly reportsContextWindow: Schema.optional<Schema.Boolean>;
        readonly supportedRuntimeModes: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
        readonly requiresNewThreadForModelChange: Schema.optional<Schema.Boolean>;
        readonly supportsConversationRollback: Schema.optional<Schema.Boolean>;
        readonly supportsTextGeneration: Schema.optional<Schema.Boolean>;
        readonly setup: Schema.optional<Schema.Struct<{
            readonly canAuthenticate: Schema.Boolean;
            readonly canInstall: Schema.Boolean;
            readonly documentationUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly nativeSessions: Schema.optional<Schema.Struct<{
            readonly canList: Schema.Boolean;
            readonly canLoad: Schema.Boolean;
            readonly canResume: Schema.Boolean;
            readonly canDelete: Schema.optional<Schema.Boolean>;
        }>>;
        readonly configurableProviders: Schema.optional<Schema.Boolean>;
        readonly runtimePaths: Schema.optionalKey<Schema.Struct<{
            readonly homePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shadowHomePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly enabled: Schema.Boolean;
        readonly installed: Schema.Boolean;
        readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installedVersion: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly status: Schema.Literals<readonly ["ready", "warning", "error", "disabled"]>;
        readonly auth: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
            readonly type: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly action: Schema.optional<Schema.Struct<{
                readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.String;
                readonly message: Schema.String;
                readonly createdAt: Schema.optionalKey<Schema.String>;
                readonly expiresAt: Schema.optionalKey<Schema.String>;
            }>>;
            readonly canLogout: Schema.optional<Schema.Boolean>;
            readonly subscriptionSharing: Schema.optional<Schema.Boolean>;
            readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly workspaceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly checkedAt: Schema.String;
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly availability: Schema.optional<Schema.Literals<readonly ["available", "unavailable"]>>;
        readonly unavailableReason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly models: Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly shortName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly subProvider: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly aliases: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly isCustom: Schema.Boolean;
            readonly isDefault: Schema.optional<Schema.Boolean>;
            readonly isLegacy: Schema.optional<Schema.Boolean>;
            readonly capabilities: Schema.NullOr<Schema.Struct<{
                readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"select">;
                    readonly options: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly isDefault: Schema.optional<Schema.Boolean>;
                    }>>;
                    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                }>, Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly type: Schema.Literal<"boolean">;
                    readonly currentValue: Schema.optional<Schema.Boolean>;
                }>]>>>;
            }>>;
        }>>;
        readonly updateRequiredModels: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly badge: Schema.optional<Schema.Literal<"new">>;
            readonly minVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly slashCommands: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly input: Schema.optional<Schema.Struct<{
                readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>, never>;
        readonly skills: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly enabled: Schema.Boolean;
            readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
            readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
            /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
            readonly userInvocable: Schema.optional<Schema.Boolean>;
        }>>, never>;
        readonly workspaceSnapshots: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly checkedAt: Schema.String;
            readonly slashCommands: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly input: Schema.optional<Schema.Struct<{
                    readonly hint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>>;
            }>>;
            readonly slashCommandsPending: Schema.optional<Schema.Boolean>;
            readonly skills: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly scope: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly enabled: Schema.Boolean;
                readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly shortDescription: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Claude disable-model-invocation: only users can invoke; composers must offer a slash command. */
                readonly userInvocationOnly: Schema.optional<Schema.Boolean>;
                /** Claude user-invocable:false: only agents can invoke; composers must hide the slash command. */
                readonly userInvocable: Schema.optional<Schema.Boolean>;
            }>>;
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>>;
        readonly usageLimits: Schema.optional<Schema.Struct<{
            readonly checkedAt: Schema.String;
            readonly windows: ForwardCompatibleArray<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
            readonly credentialFingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly resetCredits: Schema.optional<Schema.Struct<{
                readonly availableCount: Schema.Int;
                readonly nextExpiresAt: Schema.optional<Schema.String>;
                readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly externalUsage: Schema.optional<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly unavailable: Schema.optional<Schema.Struct<{
                readonly reason: Schema.Literals<readonly ["unsupported", "probeFailed"]>;
                readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>>;
        readonly versionAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "current", "behind_latest"]>;
            readonly currentVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly latestVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly updateCommand: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly canUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly canInstallVersion: Schema.optionalKey<Schema.Boolean>;
            readonly checkedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly compatibilityAdvisory: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
            readonly latestVersionStatus: Schema.optionalKey<Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly recommendedRange: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly updateState: Schema.optionalKey<Schema.Struct<{
            readonly status: Schema.Literals<readonly ["idle", "queued", "running", "succeeded", "failed", "unchanged"]>;
            readonly startedAt: Schema.NullOr<Schema.String>;
            readonly finishedAt: Schema.NullOr<Schema.String>;
            readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly output: Schema.NullOr<Schema.String>;
        }>>;
    }>>;
}>;
export type ServerProviderUpdatedPayload = typeof ServerProviderUpdatedPayload.Type;
export declare const ServerProviderUpdateInput: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly targetVersion: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
}>;
export type ServerProviderUpdateInput = typeof ServerProviderUpdateInput.Type;
declare const ServerProviderUpdateError_base: Schema.Class<ServerProviderUpdateError, Schema.TaggedStruct<"ServerProviderUpdateError", {
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerProviderUpdateError extends ServerProviderUpdateError_base {
    get message(): string;
}
export declare const ServerSelfUpdateInput: Schema.Struct<{
    /** Exact npm version, never a dist-tag, so server and client agree on the request. */
    readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly continueRunningThreads: Schema.optionalKey<Schema.Boolean>;
}>;
export type ServerSelfUpdateInput = typeof ServerSelfUpdateInput.Type;
export declare const ServerSelfUpdateResult: Schema.Struct<{
    readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly method: Schema.Literals<readonly ["boot-service", "respawn", "desktop-app"]>;
    readonly updateId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly desktopUpdateToken: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerSelfUpdateResult = typeof ServerSelfUpdateResult.Type;
export declare const DesktopUpdateCommitInput: Schema.Struct<{
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DesktopUpdateCommitInput = typeof DesktopUpdateCommitInput.Type;
export declare const ServerSelfUpdateProgressStage: Schema.Literals<readonly ["downloading", "installing"]>;
export type ServerSelfUpdateProgressStage = typeof ServerSelfUpdateProgressStage.Type;
export declare const ServerSelfUpdateProgressEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"progress">;
    readonly stage: Schema.Literals<readonly ["downloading", "installing"]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"complete">;
    readonly result: Schema.Struct<{
        readonly targetVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly method: Schema.Literals<readonly ["boot-service", "respawn", "desktop-app"]>;
        readonly updateId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly desktopUpdateToken: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>]>;
export type ServerSelfUpdateProgressEvent = typeof ServerSelfUpdateProgressEvent.Type;
declare const ServerSelfUpdateError_base: Schema.Class<ServerSelfUpdateError, Schema.TaggedStruct<"ServerSelfUpdateError", {
    readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerSelfUpdateError extends ServerSelfUpdateError_base {
    get message(): string;
}
export {};
