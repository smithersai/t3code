import { type CloudLinkTarget } from "./linkEnvironment.vibe";
export declare function readCachedPrimaryCloudLinkState(target: CloudLinkTarget): {
    readonly linked: boolean;
    readonly cloudUserId: string | null;
    readonly relayUrl: string | null;
    readonly relayIssuer: string | null;
    readonly managedTunnelActive?: boolean | undefined;
    readonly publishAgentActivity: boolean;
    readonly holdWebhooksWhileOffline?: boolean | undefined;
    readonly linkRevoked?: boolean | undefined;
    readonly reachability?: {
        readonly status: "reachable";
        readonly checkedAt: string;
        readonly readyConnections: number | null;
        readonly protocol: string | null;
    } | {
        readonly status: "unreachable";
        readonly checkedAt: string;
        readonly cause: "connector_not_ready" | "connector_not_running" | "dns_failed" | "edge_unreachable" | "no_connector" | "not_linked" | "origin_unreachable" | "timeout" | "unexpected_response";
        readonly reason: string;
        readonly hint: string | null;
        readonly fix: string;
    } | undefined;
} | null;
export declare function usePrimaryCloudLinkState(): {
    data: {
        readonly linked: boolean;
        readonly cloudUserId: string | null;
        readonly relayUrl: string | null;
        readonly relayIssuer: string | null;
        readonly managedTunnelActive?: boolean | undefined;
        readonly publishAgentActivity: boolean;
        readonly holdWebhooksWhileOffline?: boolean | undefined;
        readonly linkRevoked?: boolean | undefined;
        readonly reachability?: {
            readonly status: "reachable";
            readonly checkedAt: string;
            readonly readyConnections: number | null;
            readonly protocol: string | null;
        } | {
            readonly status: "unreachable";
            readonly checkedAt: string;
            readonly cause: "connector_not_ready" | "connector_not_running" | "dns_failed" | "edge_unreachable" | "no_connector" | "not_linked" | "origin_unreachable" | "timeout" | "unexpected_response";
            readonly reason: string;
            readonly hint: string | null;
            readonly fix: string;
        } | undefined;
    } | null;
    error: string | null;
    isPending: boolean;
    refresh: () => void;
    target: {
        environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        label: string;
        httpBaseUrl: string;
        wsBaseUrl: string;
    } | null;
};
