import { AgentElapsed } from "./AgentElapsed";
import type { ReactNode } from "react";
import { type HandoffEndpoints, type HandoffTimelineRun } from "@t3tools/client-runtime/handoff";
import { ProviderDriverKind, type OrchestrationV2Notification, type OrchestrationV2TurnItem, type ProviderInstanceId, type ServerProvider, type ThreadId, type EnvironmentId, type ScopedThreadRef } from "@t3tools/contracts";
import type { TimestampFormat } from "@t3tools/contracts/settings";
/** @throws {never} */
export declare function isV2LifecycleItem(item: OrchestrationV2TurnItem): boolean;
export type { HandoffTimelineRun } from "@t3tools/client-runtime/handoff";
/** @throws {never} */
export declare function V2LifecycleRow(props: {
    readonly item: OrchestrationV2TurnItem;
    readonly environmentId: EnvironmentId;
    readonly resourceSummary?: boolean | undefined;
    readonly createdAt: string;
    readonly timestampFormat: TimestampFormat;
    readonly runs: ReadonlyArray<HandoffTimelineRun>;
    /** @throws {never} */
    readonly onOpenThread: (threadId: ThreadId) => void;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function SubagentElapsed({ agent }: {
    agent: Parameters<typeof AgentElapsed>[0]["agent"];
}): import("react").JSX.Element;
/** @throws {never} */
export declare function EnvironmentSubagentAvatar({ environmentId, providerInstanceId, ...props }: {
    environmentId: EnvironmentId;
    providerInstanceId: ProviderInstanceId;
    driver?: ProviderDriverKind | undefined;
    status?: OrchestrationV2TurnItem["status"] | undefined;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function SubagentNotificationLink(props: {
    readonly parentRef: ScopedThreadRef;
    readonly childThreadId: ThreadId;
    readonly outcome: OrchestrationV2Notification["outcome"];
    readonly createdAt: string;
    readonly timestampFormat: TimestampFormat;
    /** @throws {never} */
    readonly onOpenThread: (threadId: ThreadId) => void;
    readonly fallback: ReactNode;
}): string | number | bigint | boolean | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | Iterable<ReactNode> | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").ReactPortal | null | undefined> | null | undefined;
/** @throws {never} */
export declare function HandoffRow(props: {
    readonly environmentId: EnvironmentId;
    readonly endpoints: HandoffEndpoints;
    readonly providers: ReadonlyArray<ServerProvider>;
    readonly pending?: boolean;
    readonly failed?: boolean;
}): import("react").JSX.Element;
