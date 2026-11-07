import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as CursorKeychain from "./CursorKeychain.vibe";
declare const CursorUsageResponse: Schema.Struct<{
    readonly billingCycleEnd: Schema.optional<Schema.Union<readonly [Schema.String, Schema.Number]>>;
    readonly planUsage: Schema.optional<Schema.Struct<{
        readonly totalPercentUsed: Schema.optional<Schema.Number>;
        readonly autoPercentUsed: Schema.optional<Schema.Number>;
        readonly apiPercentUsed: Schema.optional<Schema.Number>;
    }>>;
}>;
/**
 * Cursor's dashboard percentages include bonus usage; spend / limit does not.
 * @throws {never}
 */
export declare function cursorUsageResponseToLimits(response: typeof CursorUsageResponse.Type, checkedAt: string): {
    readonly checkedAt: string;
    readonly windows: readonly {
        readonly id: string;
        readonly kind: "monthly" | "other" | "session" | "weekly";
        readonly label: string;
        readonly usedPercent: number;
        readonly resetsAt?: string | undefined;
        readonly windowDurationMins?: number | undefined;
    }[];
    readonly credentialFingerprint?: string | undefined;
    readonly resetCredits?: {
        readonly availableCount: number;
        readonly nextExpiresAt?: string | undefined;
        readonly nextCreditId?: string | undefined;
    } | undefined;
    readonly externalUsage?: {
        readonly label: string;
        readonly url: string;
    } | undefined;
    readonly unavailable?: {
        readonly reason: "probeFailed" | "unsupported";
        readonly message?: string | undefined;
    } | undefined;
};
export declare const readCursorUsageLimits: (settings: Pick<{
    readonly enabled: boolean;
    readonly binaryPath?: string;
    readonly apiEndpoint?: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, "apiEndpoint">, environment?: NodeJS.ProcessEnv | undefined, allowKeychain?: boolean) => Effect.Effect<{
    readonly checkedAt: string;
    readonly windows: readonly {
        readonly id: string;
        readonly kind: "monthly" | "other" | "session" | "weekly";
        readonly label: string;
        readonly usedPercent: number;
        readonly resetsAt?: string | undefined;
        readonly windowDurationMins?: number | undefined;
    }[];
    readonly credentialFingerprint?: string | undefined;
    readonly resetCredits?: {
        readonly availableCount: number;
        readonly nextExpiresAt?: string | undefined;
        readonly nextCreditId?: string | undefined;
    } | undefined;
    readonly externalUsage?: {
        readonly label: string;
        readonly url: string;
    } | undefined;
    readonly unavailable?: {
        readonly reason: "probeFailed" | "unsupported";
        readonly message?: string | undefined;
    } | undefined;
}, never, CursorKeychain.CursorKeychain | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path>;
export {};
