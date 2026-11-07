import { RelayDpopAccessTokenScope, type RelayPublicClientId, type RelayEnvironmentLinkChallengeRequest } from "@t3tools/contracts/relay";
import { RelayJwtError } from "@t3tools/shared/relayJwt";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayConfiguration from "../Config.vibe";
export declare const RELAY_DPOP_ACCESS_TOKEN_TTL = "30 minutes";
declare const LinkChallengeClaims: Schema.Struct<{
    readonly kind: Schema.Literal<"environment_link_challenge">;
    readonly iss: Schema.String;
    readonly aud: Schema.String;
    readonly sub: Schema.String;
    readonly jti: Schema.String;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly notificationsEnabled: Schema.Boolean;
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly managedTunnelsEnabled: Schema.Boolean;
}>;
export type LinkChallengeClaims = typeof LinkChallengeClaims.Type;
declare const RelayDpopAccessTokenClaims: Schema.Struct<{
    readonly iss: Schema.String;
    readonly aud: Schema.String;
    readonly sub: Schema.String;
    readonly jti: Schema.String;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly client_id: Schema.Literals<readonly ["t3-mobile", "t3-web"]>;
    readonly scope: Schema.String;
    readonly cnf: Schema.Struct<{
        readonly jkt: Schema.String;
    }>;
}>;
export type RelayDpopAccessTokenClaims = Omit<typeof RelayDpopAccessTokenClaims.Type, "scope"> & {
    readonly scope: ReadonlyArray<RelayDpopAccessTokenScope>;
};
/** @throws {never} */
declare function resolveDpopAccessTokenScopes(input: {
    readonly clientId: RelayPublicClientId;
    readonly scope: string;
}): ReadonlyArray<RelayDpopAccessTokenScope> | null;
declare const RelayTokens_base: Context.ServiceClass<RelayTokens, "t3code-relay/auth/RelayTokens", {
    readonly resolveDpopAccessTokenScopes: typeof resolveDpopAccessTokenScopes;
    readonly issueLinkChallenge: (input: {
        readonly userId: string;
        readonly request: RelayEnvironmentLinkChallengeRequest;
        readonly jti: string;
        readonly issuedAtEpochSeconds: number;
        readonly expiresAtEpochSeconds: number;
    }) => Effect.Effect<string, RelayJwtError>;
    readonly verifyLinkChallenge: (input: {
        readonly token: string;
        readonly userId: string;
        readonly request: RelayEnvironmentLinkChallengeRequest;
        readonly nowEpochSeconds: number;
    }) => Effect.Effect<LinkChallengeClaims | null>;
    readonly issueDpopAccessToken: (input: {
        readonly userId: string;
        readonly proofKeyThumbprint: string;
        readonly jti: string;
        readonly issuedAtEpochSeconds: number;
        readonly expiresAtEpochSeconds: number;
        readonly clientId: RelayPublicClientId;
        readonly scopes: readonly RelayDpopAccessTokenScope[];
    }) => Effect.Effect<string, RelayJwtError>;
    readonly verifyDpopAccessToken: (input: {
        readonly token: string;
        readonly nowEpochSeconds: number;
    }) => Effect.Effect<RelayDpopAccessTokenClaims | null>;
}>;
export declare class RelayTokens extends RelayTokens_base {
}
export declare const layer: Layer.Layer<RelayTokens, never, RelayConfiguration.RelayConfiguration>;
export {};
