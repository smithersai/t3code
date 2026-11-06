import type { RelayAgentActivityAggregateRow, RelayAgentActivityAggregateState, RelayAgentActivityState } from "@t3tools/contracts/relay";
import type { ApnsNotificationPayload } from "./apnsDeliveryJobs.ts";
/** @throws {never} */
export declare function isTerminalPhase(state: RelayAgentActivityState): boolean;
/** @throws {never} */
export declare function agentActivityExpiresAt(state: Pick<RelayAgentActivityState, "phase" | "updatedAt">): number;
/** @throws {never} */
export declare function isExpiredAgentActivityState(state: RelayAgentActivityState, nowMs: number): boolean;
export declare const MAX_ACTIVITY_ROWS = 5;
/** @throws {never} */
export declare function sanitizeAgentActivityAggregateRow(row: RelayAgentActivityAggregateRow): RelayAgentActivityAggregateRow;
/** @throws {never} */
export declare function sanitizeAgentActivityAggregateState(aggregate: RelayAgentActivityAggregateState): RelayAgentActivityAggregateState;
/** @throws {never} */
export declare function sanitizeApnsNotificationPayload(notification: ApnsNotificationPayload): ApnsNotificationPayload;
/** @throws {never} */
export declare function notificationForActivity(row: RelayAgentActivityAggregateRow): ApnsNotificationPayload;
