import { ProviderSetupError, type ProviderAuthInteraction, type ProviderAuthMethod, type ProviderAuthResponse, type ProviderInstanceId } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import type * as ProviderAuth from "./auth.js";
export interface ProviderAuthFlowContext {
    readonly flowId: string;
    readonly expiresAt: number;
    readonly returnUrl?: string;
    readonly callbackMode?: "server" | "client";
    readonly setInteraction: (interaction: ProviderAuthInteraction, respond?: (response: ProviderAuthResponse) => Effect.Effect<void, ProviderSetupError>, complete?: (callbackUrl: string) => Effect.Effect<void, ProviderSetupError>) => Effect.Effect<void>;
    readonly verifying: Effect.Effect<void>;
}
export declare const make: (options: {
    readonly instanceId: ProviderInstanceId;
    readonly credentialBinding: NonNullable<ProviderAuth.ProviderAuthController["credentialBinding"]>;
    readonly methods: Effect.Effect<ReadonlyArray<ProviderAuthMethod>, ProviderSetupError>;
    readonly defaultMethodId?: string;
    readonly refreshMethodsAfterAuth?: boolean;
    /** Fail with ProviderSetupError containing safe text for the user, never native token data. */
    readonly authenticate: (methodId: string, context: ProviderAuthFlowContext) => Effect.Effect<void, ProviderSetupError, Scope.Scope>;
    readonly logout: Effect.Effect<void | string, ProviderSetupError>;
    readonly timeoutMs?: number;
}) => Effect.Effect<ProviderAuth.ProviderAuthController, never, (Crypto.Crypto | Scope.Scope)>;
