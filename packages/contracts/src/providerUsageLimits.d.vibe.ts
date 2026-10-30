import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.js";
/** Stable per-provider ids let sparse updates merge with full probes. */
export declare const ServerProviderUsageWindow: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly usedPercent: Schema.Number;
    readonly resetsAt: Schema.optional<Schema.String>;
    readonly windowDurationMins: Schema.optional<Schema.Int>;
}>;
export type ServerProviderUsageWindow = typeof ServerProviderUsageWindow.Type;
export declare const ServerProviderResetCredits: Schema.Struct<{
    readonly availableCount: Schema.Int;
    readonly nextExpiresAt: Schema.optional<Schema.String>;
    /** Pins hub redemption to the displayed credit, including retries from another client. */
    readonly nextCreditId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ServerProviderResetCredits = typeof ServerProviderResetCredits.Type;
/** Clear bars for unavailable accounts; retain last good bars after a failed probe. */
export declare const ServerProviderUsageLimits: Schema.Struct<{
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
        /** Pins hub redemption to the displayed credit, including retries from another client. */
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
export type ServerProviderUsageLimits = typeof ServerProviderUsageLimits.Type;
/** Partial updates merge windows by id; omitted windows remain unchanged. */
export declare const ProviderUsageLimitsUpdate: Schema.Struct<{
    readonly windows: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly usedPercent: Schema.Number;
        readonly resetsAt: Schema.optional<Schema.String>;
        readonly windowDurationMins: Schema.optional<Schema.Int>;
    }>>;
}>;
export type ProviderUsageLimitsUpdate = typeof ProviderUsageLimitsUpdate.Type;
export declare const UsageLimitSourceAccount: Schema.Struct<{
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
            /** Pins hub redemption to the displayed credit, including retries from another client. */
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
}>;
export type UsageLimitSourceAccount = typeof UsageLimitSourceAccount.Type;
export declare const UsageLimitSourceSnapshot: Schema.Struct<{
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
                /** Pins hub redemption to the displayed credit, including retries from another client. */
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
}>;
export type UsageLimitSourceSnapshot = typeof UsageLimitSourceSnapshot.Type;
export declare const UsageLimitSourceSnapshots: ForwardCompatibleArray<Schema.Struct<{
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
                /** Pins hub redemption to the displayed credit, including retries from another client. */
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
export type UsageLimitSourceSnapshots = typeof UsageLimitSourceSnapshots.Type;
export declare const UsageLimitSourceConsumeResetCreditInput: Schema.Struct<{
    readonly sourceId: Schema.brand<Schema.String, "UsageLimitSourceId">;
    readonly accountId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly creditId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type UsageLimitSourceConsumeResetCreditInput = typeof UsageLimitSourceConsumeResetCreditInput.Type;
export declare const ProviderConsumeResetCreditInput: Schema.Union<readonly [Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>, Schema.Struct<{
    readonly sourceId: Schema.brand<Schema.String, "UsageLimitSourceId">;
    readonly accountId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly creditId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type ProviderConsumeResetCreditInput = typeof ProviderConsumeResetCreditInput.Type;
declare const UsageLimitSourceError_base: Schema.Class<UsageLimitSourceError, Schema.TaggedStruct<"UsageLimitSourceError", {
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class UsageLimitSourceError extends UsageLimitSourceError_base {
    get message(): string;
}
export declare const ProviderConsumeResetCreditOutcome: Schema.Literals<readonly ["reset", "nothingToReset", "noCredit", "alreadyRedeemed"]>;
export type ProviderConsumeResetCreditOutcome = typeof ProviderConsumeResetCreditOutcome.Type;
export declare const ProviderConsumeResetCreditResult: Schema.Struct<{
    readonly outcome: Schema.Literals<readonly ["reset", "nothingToReset", "noCredit", "alreadyRedeemed"]>;
    readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProviderConsumeResetCreditResult = typeof ProviderConsumeResetCreditResult.Type;
export declare const UsageLimitsReport: Schema.Struct<{
    readonly createdAt: Schema.String;
    readonly accounts: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly plan: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly email: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly sourceLabel: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly instanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
        readonly resetCreditInput: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        }>, Schema.Struct<{
            readonly sourceId: Schema.brand<Schema.String, "UsageLimitSourceId">;
            readonly accountId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly creditId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>>;
        readonly displayName: Schema.optional<Schema.String>;
        readonly accentColor: Schema.optional<Schema.String>;
        readonly limits: Schema.Struct<{
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
                /** Pins hub redemption to the displayed credit, including retries from another client. */
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
    readonly notices: Schema.$Array<Schema.String>;
}>;
export type UsageLimitsReport = typeof UsageLimitsReport.Type;
export {};
