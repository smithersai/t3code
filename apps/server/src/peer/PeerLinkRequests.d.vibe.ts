/**
 * Links an agent asks the user to make. The user picks the machine and access in a card, and
 * their client answers with its addresses and a pairing code that goes straight to
 * `PeerLinks.link`, never into the transcript or the agent's context. Asking does not wait
 * (provider CLIs abandon a long tool call): the answer reaches the agent as a notification.
 */
import { type OrchestratorMcpEnvironmentLinkInput, type OrchestratorMcpEnvironmentLinkResult, OrchestratorMcpFailure, PeerLinkRequestError, type PeerLinkRequestAnswerInput } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as McpInvocationContext from "../mcp/McpInvocationContext.ts";
import * as ThreadManagementService from "../orchestration-v2/ThreadManagementService.ts";
import * as PeerLinks from "./PeerLinks.vibe";
declare const PeerLinkRequests_base: Context.ServiceClass<PeerLinkRequests, "t3/peer/PeerLinkRequests", {
    /**
     * Shows a link card in the calling thread and returns at once. A retry
     * with the same clientRequestId and MCP credential returns the card's
     * current outcome.
     */
    readonly request: (scope: McpInvocationContext.McpInvocationScope, input: OrchestratorMcpEnvironmentLinkInput) => Effect.Effect<OrchestratorMcpEnvironmentLinkResult, OrchestratorMcpFailure>;
    /**
     * Answers a pending card and tells the agent. Linking uses the pairing
     * code once; a link the other environment refuses closes the card as
     * failed, with its reason.
     */
    readonly answer: (input: PeerLinkRequestAnswerInput) => Effect.Effect<void, PeerLinkRequestError>;
}>;
export declare class PeerLinkRequests extends PeerLinkRequests_base {
}
export declare const layer: Layer.Layer<PeerLinkRequests, never, Crypto.Crypto | PeerLinks.PeerLinks | ThreadManagementService.ThreadManagementService>;
export {};
