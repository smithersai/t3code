import { type EnvironmentId, OrchestratorMcpFailure, type ProviderInteractionMode, type RuntimeMode } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as PeerLinks from "./PeerLinks.vibe";
/** The limits a call carries to the peer: the calling agent's modes here. */
export interface PeerCallLimits {
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
}
declare const PeerMcpClient_base: Context.ServiceClass<PeerMcpClient, "t3/peer/PeerMcpClient", {
    /** Calls `tool` on the peer and decodes its structured result with `success`. */
    readonly call: <S extends Schema.Decoder<unknown>>(input: {
        readonly environmentId: EnvironmentId;
        readonly tool: string;
        readonly arguments: Record<string, unknown>;
        readonly limits: PeerCallLimits;
        readonly success: S;
    }) => Effect.Effect<S["Type"], OrchestratorMcpFailure>;
}>;
/**
 * Calls a linked environment's T3 MCP tools as this environment's outside
 * agent. Each call carries the calling agent's limits in `T3-Mode-Limit`, so
 * the peer enforces the narrower of those and the link's own access.
 */
export declare class PeerMcpClient extends PeerMcpClient_base {
}
export declare const layer: Layer.Layer<PeerMcpClient, never, HttpClient.HttpClient | PeerLinks.PeerLinks>;
export {};
