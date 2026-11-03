import { UsageLimitSourceError, type ProviderConsumeResetCreditResult, type UsageLimitSourceAccount } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import { HttpClient } from "effect/http";
export declare const makeCliproxyApi: Effect.Effect<{
    readAccounts: (config: {
        readonly kind: "cliproxy";
        readonly label?: string | undefined;
        readonly url: string;
        readonly managementKey: string;
        readonly enabled: boolean;
    }) => Effect.Effect<ReadonlyArray<UsageLimitSourceAccount>, UsageLimitSourceError>;
    consume: (config: {
        readonly kind: "cliproxy";
        readonly label?: string | undefined;
        readonly url: string;
        readonly managementKey: string;
        readonly enabled: boolean;
    }, accountId: string, creditId: string) => Effect.Effect<ProviderConsumeResetCreditResult, UsageLimitSourceError>;
}, never, Crypto.Crypto | HttpClient.HttpClient>;
