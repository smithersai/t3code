import { type EnvironmentId, type ProviderConsumeResetCreditInput, type ProviderInstanceId, type ServerProvider, type ServerProviderUsageLimits, type ServerProviderUsageWindow, type UsageLimitSourceSnapshots, type UsageLimitsReport } from "@t3tools/contracts";
export declare const CHATGPT_USAGE_URL = "https://chatgpt.com/#settings/Usage";
export declare const CHATGPT_USAGE_LIMIT_CODE = "subscription_sharing_usage_limit_exceeded";
/** A ChatGPT Business admin caps plan use in other apps; only the admin can raise it. */
export declare const CHATGPT_WORKSPACE_USAGE_LIMIT_CODE = "subscription_sharing_workplace_individual_usage_limit_exceeded";
/** OpenAI's partner guidelines fix this wording; the user sends it to their admin themselves. */
export declare const CHATGPT_WORKSPACE_ADMIN_REQUEST = "I've reached the limit for using my ChatGPT plan in T3 Code. Could you increase our workspace's usage limits so I can continue?\n\nGo to admin.openai.com \u2192 Workspace \u2192 Usage limits. Thank you!";
export declare function usesChatGptSharing(provider: ServerProvider | null | undefined): boolean;
export declare const CURSOR_USAGE_WINDOWS: readonly [{
    readonly id: "totalPercentUsed";
    readonly label: "Overall";
    readonly description: "Combined usage across both allowances, not a third quota.";
}, {
    readonly id: "autoPercentUsed";
    readonly label: "Cursor Models";
    readonly description: "Grok and Composer use this first. Auto can use either pool.";
}, {
    readonly id: "apiPercentUsed";
    readonly label: "Other Models";
    readonly description: "Claude, GPT, and Gemini use this pool. Grok and Composer fall back here.";
}];
export declare function cursorUsageWindowDetails(id: string): {
    readonly id: "totalPercentUsed";
    readonly label: "Overall";
    readonly description: "Combined usage across both allowances, not a third quota.";
} | {
    readonly id: "autoPercentUsed";
    readonly label: "Cursor Models";
    readonly description: "Grok and Composer use this first. Auto can use either pool.";
} | {
    readonly id: "apiPercentUsed";
    readonly label: "Other Models";
    readonly description: "Claude, GPT, and Gemini use this pool. Grok and Composer fall back here.";
} | undefined;
export type LimitPresentations = ReadonlyMap<EnvironmentId, {
    readonly entry: {
        readonly target: {
            readonly label: string;
        };
    };
    readonly serverConfig: {
        readonly providers: readonly ServerProvider[];
        readonly usageLimitSources?: UsageLimitSourceSnapshots | undefined;
    } | null;
}>;
export declare function collectExternalUsageLinks(presentations: LimitPresentations): {
    readonly label: string;
    readonly url: string;
    readonly message: string | undefined;
    readonly accounts: readonly string[];
}[];
export interface LimitAccount {
    readonly key: string;
    readonly driver: ServerProvider["driver"];
    readonly displayName: string | null;
    readonly email: string | undefined;
    readonly plan: string | undefined;
    readonly accentColor: string | undefined;
    readonly environments: ReadonlyArray<{
        readonly environmentId: EnvironmentId;
        readonly label: string;
    }>;
    readonly sourceLabel: string | null;
    readonly redeem: {
        readonly environmentId: EnvironmentId;
        readonly input: ProviderConsumeResetCreditInput;
    } | null;
    readonly limits: ServerProviderUsageLimits;
}
export declare function collectLimitAccounts(presentations: LimitPresentations): readonly LimitAccount[];
export declare function collectLimitNotices(presentations: LimitPresentations): readonly string[];
export interface LimitPoolMember {
    readonly account: LimitAccount;
    readonly window: ServerProviderUsageWindow;
    readonly refillPercent: number;
}
export interface LimitPoolWindow {
    readonly id: string;
    readonly kind: ServerProviderUsageWindow["kind"];
    readonly label: string;
    readonly members: readonly LimitPoolMember[];
    readonly columns: ReadonlyArray<LimitPoolMember | {
        readonly account: LimitAccount;
        readonly window: null;
    }>;
    readonly remainingPercent: number;
    readonly usedPercent: number;
    readonly pace: LimitPace | null;
    readonly resets: ReadonlyArray<{
        readonly member: LimitPoolMember;
        readonly at: number;
        readonly restoresPercent: number;
    }>;
}
export interface LimitPool {
    readonly driver: ServerProvider["driver"];
    readonly accounts: readonly LimitAccount[];
    readonly windows: readonly LimitPoolWindow[];
}
export declare function displayLimitWindows(pool: LimitPool): readonly LimitPoolWindow[];
export declare function collectLimitPools(accounts: readonly LimitAccount[], now: number): readonly LimitPool[];
export declare function limitsNotice(limits: ServerProviderUsageLimits): string | null;
export declare function remainingPercent(window: ServerProviderUsageWindow): number;
export declare function elapsedShare(window: ServerProviderUsageWindow, now: number): number | null;
export declare function paceRemainingPercent(window: ServerProviderUsageWindow, now: number): number | null;
export type LimitPace = "ahead" | "on" | "under";
export declare function paceOf(window: ServerProviderUsageWindow, now: number): LimitPace | null;
export declare function formatDuration(ms: number): string;
export declare function formatResetsIn(window: ServerProviderUsageWindow, now: number): string | null;
export declare const USAGE_LIMITS_COMMAND: {
    name: string;
    description: string;
};
export declare function isUsageLimitsCommand(prompt: string): boolean;
export declare function hasProviderUsageLimits(driver: ServerProvider["driver"], providers: readonly ServerProvider[], sources: UsageLimitSourceSnapshots): boolean;
export declare function sameUsageLimitCommandCoverage(previous: UsageLimitSourceSnapshots, next: UsageLimitSourceSnapshots): boolean;
/** Advertise on workspace catalogs too, which replace the global command list. */
export declare function withUsageLimitsCommands(providers: readonly ServerProvider[], sources: UsageLimitSourceSnapshots): ServerProvider[];
export declare function collectProviderUsageLimits(instanceId: ProviderInstanceId, providers: readonly ServerProvider[], sources: UsageLimitSourceSnapshots, now: number): UsageLimitsReport | null;
