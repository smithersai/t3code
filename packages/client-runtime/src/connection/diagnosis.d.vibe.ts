import type { RelayEnvironmentStatusResponse } from "@t3tools/contracts/relay";
import type { ConnectionHop, SupervisorConnectionState } from "./model.vibe";
export type ConnectionHopResult = "ok" | "failed" | "unchecked";
export interface ConnectionDiagnosisHop {
    readonly hop: ConnectionHop;
    readonly label: string;
    readonly result: ConnectionHopResult;
}
export interface ConnectionDiagnosis {
    /** Names the part that failed, e.g. "Mac mini's tunnel is offline". */
    readonly headline: string;
    readonly hops: ReadonlyArray<ConnectionDiagnosisHop>;
    readonly steps: ReadonlyArray<string>;
    readonly facts: ReadonlyArray<readonly [label: string, value: string]>;
    /** The troubleshooting guide section for this failure. Null for direct routes. */
    readonly moreInfoUrl: string | null;
}
export interface ConnectionDiagnosisInput {
    readonly hostLabel: string;
    readonly state: SupervisorConnectionState;
    /** The environment's usual route, used when the failure does not name one. */
    readonly via: "relay" | "direct";
    /** The relay's last health check, which can name a cause before any connect attempt. */
    readonly relayStatus?: Pick<RelayEnvironmentStatusResponse, "status" | "endpointFailure" | "endpointStatus" | "offlineReason"> | null;
    readonly clientVersion?: string | undefined;
    readonly serverVersion?: string | null | undefined;
}
/**
 * Turns a connection state into what failed, in order, and what to try. Returns
 * null when nothing has failed. Web and mobile render this same model.
 */
export declare function presentConnectionDiagnosis(input: ConnectionDiagnosisInput): ConnectionDiagnosis | null;
/** One plain-text block for bug reports. */
export declare function connectionDiagnosisText(hostLabel: string, diagnosis: ConnectionDiagnosis): string;
