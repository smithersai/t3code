import type { SdkCredentialStore, SdkLoginOptions, SdkLoginResult } from "@cursor/sdk";
import { ProviderSetupError, type ProviderInstanceId } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import type { ProviderAuthController } from "@t3tools/provider-core/server/auth";
export interface CursorAuth {
    readonly controller: ProviderAuthController;
    readonly readApiKey: Effect.Effect<string | undefined, ProviderSetupError>;
    readonly requireApiKey: Effect.Effect<string, ProviderSetupError>;
    readonly usesApiKey: boolean;
    readonly withAccess: <A, E, R>(task: Effect.Effect<A, E, R>) => Effect.Effect<A, E | ProviderSetupError, R | Scope.Scope>;
}
export interface CursorAuthOptions {
    readonly instanceId: ProviderInstanceId;
    readonly displayName: string;
    readonly enabled: boolean;
    readonly apiKey?: string;
    readonly store: SdkCredentialStore;
    readonly credentialBinding?: NonNullable<ProviderAuthController["credentialBinding"]>;
    readonly onChanged: (signedIn: boolean) => Effect.Effect<void, ProviderSetupError>;
    readonly login?: (options: SdkLoginOptions) => Promise<SdkLoginResult>;
}
export declare const makeCursorAuth: (options: CursorAuthOptions) => Effect.Effect<{
    controller: ProviderAuthController;
    readApiKey: Effect.Effect<string | undefined, ProviderSetupError, never>;
    requireApiKey: Effect.Effect<string, ProviderSetupError, never>;
    withAccess: <A, E, R>(task: Effect.Effect<A, E, R>) => Effect.Effect<A, E | ProviderSetupError, R | Scope.Scope>;
    usesApiKey: boolean;
}, never, Crypto.Crypto | Scope.Scope>;
