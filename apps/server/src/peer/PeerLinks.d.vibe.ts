import { EnvironmentId, type PeerLink, type PeerLinkCreateInput, PeerLinkError, type PeerLinkSummary } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as SqlClient from "effect/sql/SqlClient";
import * as HttpClient from "effect/http/HttpClient";
import * as ServerSecretStore from "../auth/ServerSecretStore.ts";
import * as ServerEnvironment from "../environment/ServerEnvironment.ts";
import * as ServerSettings from "../serverSettings.ts";
/** A usable link: where to reach the peer and the token to send there. */
export interface ResolvedPeerLink {
    readonly link: PeerLink;
    /** The first address that answered as this peer. */
    readonly url: string;
    readonly token: string;
}
export declare const LINKED_ENVIRONMENTS_OFF = "Linked environments is off on this machine. Turn it on in Settings \u2192 Labs.";
declare const PeerLinks_base: Context.ServiceClass<PeerLinks, "t3/peer/PeerLinks", {
    /** Whether the Linked environments beta (Settings → Labs) is on here. */
    readonly enabled: Effect.Effect<boolean>;
    readonly link: (input: PeerLinkCreateInput) => Effect.Effect<PeerLink, PeerLinkError>;
    /**
     * The environment answering at `url`, or nothing when it is not a usable
     * address or does not answer as T3 Code. Sends no credential.
     */
    readonly describe: (url: string) => Effect.Effect<Option.Option<{
        readonly environmentId: EnvironmentId;
        readonly label: string;
    }>>;
    readonly list: Effect.Effect<readonly PeerLinkSummary[], PeerLinkError>;
    /** The stored link, without asking the peer whether it answers. */
    readonly get: (environmentId: EnvironmentId) => Effect.Effect<Option.Option<PeerLink>, PeerLinkError>;
    /** Forgets the link here. The peer still lists the session until it is revoked there. */
    readonly unlink: (environmentId: EnvironmentId) => Effect.Effect<boolean, PeerLinkError>;
    /** An address that answers as the linked peer, with its token, ready to call. */
    readonly resolve: (environmentId: EnvironmentId) => Effect.Effect<ResolvedPeerLink, PeerLinkError>;
    /** Records the outcome of a call, so listing shows whether the peer answered last time. */
    readonly recordOutcome: (environmentId: EnvironmentId, outcome: {
        readonly error: string | null;
    }) => Effect.Effect<void>;
}>;
/**
 * Links from this environment to others. Linking signs this environment in to
 * the peer's `/mcp` as an outside agent with a pairing code from the peer, the
 * same MCP OAuth flow an outside agent uses, without a browser. The peer's
 * session token is kept in the server secret store; the table keeps the rest.
 */
export declare class PeerLinks extends PeerLinks_base {
}
export declare const layer: Layer.Layer<PeerLinks, never, Crypto.Crypto | HttpClient.HttpClient | ServerEnvironment.ServerEnvironment | ServerSecretStore.ServerSecretStore | ServerSettings.ServerSettingsService | SqlClient.SqlClient>;
export {};
