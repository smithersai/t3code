import { type AuthMcpClientAccess, type EnvironmentId, type EnvironmentMachineKind, type OrchestrationV2TurnItem, type PeerLinkRequestAnswerInput, type PeerLinkSummary, type ServerConfig } from "@t3tools/contracts";
import type { EnvironmentPresentation } from "./connection/presentation.js";
import type { RelayDiscoveredEnvironment } from "./relay/discovery.js";
export type LinkRequestItem = Extract<OrchestrationV2TurnItem, {
    readonly type: "link_request";
}>;
/** Whether an environment offers links: it supports them and its Linked environments beta is on. */
export declare const offersLinkedEnvironments: (config: Pick<ServerConfig, "environment" | "settings"> | null | undefined) => boolean;
/** The access a request opens with: the agent's suggestion, else supervised. */
export declare const linkRequestDefaultAccess: (item: Pick<LinkRequestItem, "requestedAccess">) => AuthMcpClientAccess;
/** What the card calls the other environment: its own name, else the address asked for. */
export declare const linkRequestTargetName: (item: Pick<LinkRequestItem, "label" | "url">) => string;
/** A machine the user could link a thread's environment to. */
export interface LinkableMachine {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly machine: EnvironmentMachineKind;
    readonly connected: boolean;
    /** Found on the user's T3 Connect account rather than saved in this client. */
    readonly connectOnly: boolean;
    /** Whether the thread's environment already has a link to it. */
    readonly linked: boolean;
    /**
     * Where the client knows it answers, most preferred first: the addresses it
     * reports, then its saved routes, then its T3 Connect address. The server
     * keeps only those that answer as this machine. Empty for a machine reached
     * only over SSH, whose forward lives in this client.
     */
    readonly urls: ReadonlyArray<string>;
}
/**
 * The catalog's machines other than the thread's own, in catalog order, then those only T3
 * Connect knows. `links` are the thread environment's; an expired one no longer counts as
 * linked. `connect` is what relay discovery found, and a server reaches a machine there as a
 * browser does, so its Connect address is usable.
 */
export declare function linkableMachines(input: {
    readonly environments: ReadonlyArray<EnvironmentPresentation & {
        readonly environmentId: EnvironmentId;
    }>;
    readonly threadEnvironmentId: EnvironmentId;
    readonly links: ReadonlyArray<Pick<PeerLinkSummary, "environmentId" | "status">>;
    readonly connect: ReadonlyMap<string, RelayDiscoveredEnvironment>;
}): ReadonlyArray<LinkableMachine>;
/** The machines best match for the agent's hint first, each rank in catalog order. */
export declare function rankMachinesByHint<T extends {
    readonly label: string;
}>(machines: ReadonlyArray<T>, hint: string | undefined): ReadonlyArray<T>;
/** The machine a card opens on: the one it names, else the hint's best match. */
export declare function linkRequestInitialMachine(item: Pick<LinkRequestItem, "environmentId" | "hint">, machines: ReadonlyArray<LinkableMachine>): EnvironmentId | null;
/** What a link request card shows: the actions while pending, otherwise a one-line outcome. */
export type LinkRequestDisplay = {
    readonly kind: "pending";
} | {
    readonly kind: "pending-elsewhere";
    readonly label: string;
} | {
    readonly kind: "answered";
    readonly outcome: "linked" | "declined" | "ended" | "failed";
    readonly label: string;
};
/**
 * `visibility` is the projected row's: a request inherited from another
 * thread (a fork) can only be answered where it was asked. `accessLabel`
 * names an access level the way the client's access picker does.
 */
export declare function linkRequestDisplay(item: Pick<LinkRequestItem, "linkStatus" | "label" | "url" | "linkedLabel" | "linkedAccess" | "failure">, visibility: "local" | "inherited" | "synthetic", accessLabel: (access: AuthMcpClientAccess) => string): LinkRequestDisplay;
/**
 * Builds the RPC payload for an answer. A link with a blank code returns null,
 * since the server rejects it; callers keep Link disabled instead.
 */
export declare function linkRequestAnswerInput(item: Pick<LinkRequestItem, "id" | "threadId">, answer: {
    readonly type: "link";
    /** The machine picked, or an address typed in its place. */
    readonly target: Pick<LinkableMachine, "environmentId" | "label" | "urls"> | {
        readonly url: string;
    };
    readonly access: AuthMcpClientAccess;
    readonly pairingCode: string;
} | {
    readonly type: "use-existing";
    readonly environmentId: EnvironmentId;
} | {
    readonly type: "decline";
}): PeerLinkRequestAnswerInput | null;
/**
 * Inline error copy for a failed answer. Only known errors pass their message
 * through: anything else (transport or encoding failures) gets the generic
 * copy, so the pairing code can never surface in the UI.
 */
export declare function linkRequestFailureMessage(failure: unknown): string;
