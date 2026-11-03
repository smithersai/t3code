import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as ServerSecretStore from "../auth/ServerSecretStore.ts";
export declare const CLOUD_MINT_PUBLIC_KEY = "cloud-mint-ed25519-public-key";
export declare const CLOUD_ENDPOINT_RUNTIME_CONFIG = "cloud-endpoint-runtime-config";
export declare const CLOUD_ENDPOINT_CONFIRMED_ORIGIN = "cloud-endpoint-confirmed-origin";
export declare const CLOUD_LINKED_USER_ID = "cloud-linked-user-id";
export declare const RELAY_URL_SECRET = "cloud-relay-url";
export declare const RELAY_ISSUER_SECRET = "cloud-relay-issuer";
export declare const RELAY_ENVIRONMENT_CREDENTIAL_SECRET = "cloud-relay-environment-credential";
export declare const PUBLISH_AGENT_ACTIVITY_SECRET = "cloud-publish-agent-activity";
export declare const HOLD_WEBHOOKS_WHILE_OFFLINE_SECRET = "cloud-hold-webhooks-while-offline";
export declare const CLOUD_LINK_REVOKED = "cloud-link-revoked";
export declare const encodeEndpointRuntimeConfigJson: (input: {
    providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
    connectorToken: string;
    tunnelId?: string | undefined;
    tunnelName?: string | undefined;
}, options?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<string, Schema.SchemaError, never>;
export declare const decodeRuntimeConfig: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
    connectorToken: string;
    tunnelId?: string | undefined;
    tunnelName?: string | undefined;
}>;
export declare const ManagedEndpointConfirmedOrigin: Schema.Struct<{
    readonly config: Schema.Struct<{
        readonly providerKind: Schema.mutableKey<Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>>;
        readonly connectorToken: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelId: Schema.mutableKey<Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly tunnelName: Schema.mutableKey<Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
}>;
export declare const encodeConfirmedOriginJson: (input: {
    readonly config: {
        providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        connectorToken: string;
        tunnelId?: string | undefined;
        tunnelName?: string | undefined;
    };
    readonly origin: {
        readonly localHttpHost: string;
        readonly localHttpPort: number;
    };
}, options?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<string, Schema.SchemaError, never>;
export declare const decodeConfirmedOrigin: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    readonly config: {
        providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        connectorToken: string;
        tunnelId?: string | undefined;
        tunnelName?: string | undefined;
    };
    readonly origin: {
        readonly localHttpHost: string;
        readonly localHttpPort: number;
    };
}>;
export declare function isAgentActivityPublishingEnabledValue(value: string | null): boolean;
/**
 * Mirrors the per-publish gate in AgentAwarenessRelay, so the descriptor
    capability never advertises publishing that the publisher would skip.
 */
export declare const readAgentActivityPublishingActive: (secrets: ServerSecretStore.ServerSecretStore["Service"]) => Effect.Effect<boolean>;
export declare const readRelayConnection: Effect.Effect<{
    url: string;
    environmentCredential: string;
} | null, never, ServerSecretStore.ServerSecretStore>;
export declare const readHoldWebhooksWhileOffline: Effect.Effect<boolean, never, ServerSecretStore.ServerSecretStore>;
