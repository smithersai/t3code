import type { DesktopSshEnvironmentTarget } from "@t3tools/contracts";
import { type ConnectionCatalogEntry, type ConnectionRoute } from "./catalog.vibe";
import { type ConnectionTarget } from "./model.vibe";
export type ConnectionRouteKind = "relay" | "loopback" | "lan" | "tailnet" | "vpn" | "public" | "ssh";
export declare const RELAY_ROUTE_ID = "relay";
/** @throws {never} */
export declare function connectionRouteId(target: ConnectionTarget): string;
/** @throws {never} */
export declare function connectionRoutes(entry: ConnectionCatalogEntry): ReadonlyArray<ConnectionRoute>;
/** @throws {never} */
export declare function entryWithRoutes(entry: ConnectionCatalogEntry, routes: ReadonlyArray<ConnectionRoute>): ConnectionCatalogEntry;
/** @throws {never} */
export declare function routeEntry(entry: ConnectionCatalogEntry, route: ConnectionRoute): ConnectionCatalogEntry;
/** @throws {never} */
export declare function routeHttpBaseUrl(route: ConnectionRoute): string | null;
/** @throws {never} */
export declare function connectionRouteKind(route: ConnectionRoute): ConnectionRouteKind;
/** @throws {never} */
export declare function insertRoute(routes: ReadonlyArray<ConnectionRoute>, route: ConnectionRoute): ReadonlyArray<ConnectionRoute>;
/** @throws {never} */
export declare function upsertRoute(routes: ReadonlyArray<ConnectionRoute>, route: ConnectionRoute): ReadonlyArray<ConnectionRoute>;
/** @throws {never} */
export declare function findRouteToSameAddress(routes: ReadonlyArray<ConnectionRoute>, route: ConnectionRoute): ConnectionRoute | undefined;
/** @throws {never} */
export declare function connectionRouteLabel(route: ConnectionRoute): string;
/** @throws {never} */
export declare function connectionRouteAddress(route: ConnectionRoute): string | null;
/**
 * Learned routes alone must not make relay environments manually retryable.
 * @throws {never}
 */
export declare const hasSavedBearerRoute: (entry: ConnectionCatalogEntry) => boolean;
/** @throws {never} */
export declare function hasRelayRoute(entry: Pick<ConnectionCatalogEntry, "target" | "alternateRoutes">): boolean;
/** @throws {never} */
export declare function mergeLearnedRoutes(input: {
    readonly entry: ConnectionCatalogEntry;
    readonly activeRoute: ConnectionRoute;
    readonly reported: ReadonlyArray<ReportedEndpoint>;
    /** Plain HTTP routes are unusable from an HTTPS page (mixed content). */
    readonly allowInsecure: boolean;
}): ReadonlyArray<ConnectionRoute> | null;
/**
 * Whether connecting over `route` would send a paired token over plain HTTP
 * that it wasn't paired over. Checked against the token the route borrows,
 * so a route learned before this rule existed is refused too.
 * @throws {never}
 */
export declare function sendsTokenInClear(routes: ReadonlyArray<ConnectionRoute>, route: ConnectionRoute, tailscale?: boolean): boolean;
/**
 * Routes a connect may use: none sends a paired token over plain HTTP it wasn't paired over.
 * @throws {never}
 */
export declare function usableRoutes(entry: ConnectionCatalogEntry): ReadonlyArray<ConnectionRoute>;
export interface ReportedEndpoint {
    readonly httpBaseUrl: string;
    readonly kind?: string;
}
/** @throws {never} */
export declare function credentialConnectionId(connectionId: string): string;
/** @throws {never} */
export declare function isLearned(route: ConnectionRoute): boolean;
/**
 * A learned route borrows the credential of the route it was learned over, so
 * it cannot outlive that route: removing T3 Connect also removes routes learned
 * through it, and removing a paired address removes routes that borrow its
 * token.
 * @throws {never}
 */
export declare function routesAfterRemoving(routes: ReadonlyArray<ConnectionRoute>, removedId: string): ReadonlyArray<ConnectionRoute>;
/** @throws {never} */
export declare function removedWithRelay(entry: ConnectionCatalogEntry): boolean;
/** @throws {never} */
export declare function sshTargetKey(target: DesktopSshEnvironmentTarget): string;
