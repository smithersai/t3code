import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as HttpClient from "effect/http/HttpClient";
/** External OpenCode servers own their credentials; never read the host's account for them. */
export declare const readOpenCodeGoUsageLimits: (input: {
    readonly enabled: boolean;
    readonly serverUrl: string;
    readonly environment: NodeJS.ProcessEnv;
}) => Effect.Effect<{
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
}, never, Crypto.Crypto | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path>;
