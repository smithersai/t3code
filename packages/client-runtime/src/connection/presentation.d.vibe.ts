import type { ServerConfig } from "@t3tools/contracts";
import type { ConnectionCatalogEntry } from "./catalog.vibe";
import type { ConnectionTarget, SupervisorConnectionState } from "./model.vibe";
export type EnvironmentConnectionPhase = "available" | "offline" | "connecting" | "reconnecting" | "connected" | "error" | "unsupported";
export interface EnvironmentConnectionPresentation {
    readonly phase: EnvironmentConnectionPhase;
    readonly error: string | null;
    readonly traceId: string | null;
}
/**
 * Provider statuses are pushed every few minutes with fresh `checkedAt` stamps, and every root
 * coordinator reads environment presentations. Leaving them out keeps a presentation stable
 * across those pushes; provider readers subscribe to the server's providers atom instead.
 */
export type EnvironmentServerConfig = Omit<ServerConfig, "providers">;
export interface EnvironmentPresentation {
    readonly entry: ConnectionCatalogEntry;
    readonly connection: EnvironmentConnectionPresentation;
    readonly serverConfig: EnvironmentServerConfig | null;
}
/** @throws {never} */
export declare function presentConnectionState(state: SupervisorConnectionState): EnvironmentConnectionPresentation;
/** @throws {never} */
export declare function connectionStatusText(connection: EnvironmentConnectionPresentation): string;
/** @throws {never} */
export declare function connectionStatusTitle(connection: EnvironmentConnectionPresentation): string;
/** @throws {never} */
export declare function presentEnvironmentConnection(state: SupervisorConnectionState): EnvironmentConnectionPresentation;
/**
 * SSH connections ride a local forward that disappears with the client, so they have no stable
 * address.
 * @throws {never}
 */
export declare function environmentMcpUrl(input: {
    readonly entry: ConnectionCatalogEntry;
    readonly relayHttpBaseUrl?: string | undefined;
    readonly connectedTarget?: ConnectionTarget | null | undefined;
}): string | null;
/** @throws {never} */
export declare function connectionCatalogDisplayUrl(entry: ConnectionCatalogEntry): string | null;
