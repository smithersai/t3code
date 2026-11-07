import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
declare const GrokUsageResponse: Schema.Struct<{
    readonly config: Schema.optional<Schema.Struct<{
        readonly creditUsagePercent: Schema.optional<Schema.Number>;
        readonly currentPeriod: Schema.optional<Schema.Struct<{
            readonly type: Schema.optional<Schema.String>;
            readonly start: Schema.optional<Schema.Unknown>;
            readonly end: Schema.optional<Schema.String>;
        }>>;
    }>>;
}>;
/** @throws {never} */
export declare function grokUsageResponseToLimits(response: typeof GrokUsageResponse.Type, checkedAt: string): {
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
export declare const readGrokAccount: (environment?: NodeJS.ProcessEnv | undefined) => Effect.Effect<{
    email: string | undefined;
    usageLimits: {
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
}, never, FileSystem.FileSystem | HttpClient.HttpClient | Path.Path>;
export {};
