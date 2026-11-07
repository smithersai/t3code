import { type EnvironmentId, type ScopedThreadRef, type ThreadLinkedPullRequest, type ThreadPullRequestLink, type VcsStatusResult } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import { type ThreadPullRequestBadge } from "@t3tools/client-runtime/thread-pull-requests";
import { useRender } from "@base-ui/react/use-render";
import { type MouseEvent, type ReactElement } from "react";
import { type ThreadStatusPill } from "./Sidebar.logic";
import type { SidebarThreadSummary } from "../types";
import { type PullRequestGlyphIcon } from "./pullRequest/pullRequestIcons";
export interface PrStatusIndicator {
    label: string;
    colorClass: string;
    Icon: PullRequestGlyphIcon;
    tooltip: string;
    tooltipLead: string;
    tooltipTitle: string;
    url: string;
}
export interface TerminalStatusIndicator {
    label: "Terminal process running";
    colorClass: string;
    pulse: boolean;
}
export type ThreadPr = VcsStatusResult["pr"];
export interface LinkedThreadPullRequestStatus {
    readonly pr: NonNullable<ThreadPr>;
    readonly sourceControlProvider: NonNullable<VcsStatusResult["sourceControlProvider"]>;
}
/** @throws {never} */
export declare function useLinkedThreadPullRequest(environmentId: EnvironmentId | null, linkedPullRequest: ThreadLinkedPullRequest | null | undefined, enabled?: boolean, pullRequests?: ReadonlyArray<ThreadPullRequestLink>, branchPullRequest?: ThreadLinkedPullRequest | null): LinkedThreadPullRequestStatus | null;
/** @throws {never} */
export declare function linkedPullRequestSnapshotStatus(link: ThreadPullRequestLink): LinkedThreadPullRequestStatus | null;
export { resolveThreadPullRequestBadge, type ThreadPullRequestBadge, } from "@t3tools/client-runtime/thread-pull-requests";
export interface ThreadPullRequestBadgePresentation {
    readonly Icon: PullRequestGlyphIcon;
    readonly toneClassName: string;
    readonly label: string;
    readonly text: string | number;
}
/** @throws {never} */
export declare function ThreadPullRequestBadgeControl({ render, badge, pullRequests, number, url, status, onOpenList, onOpenPullRequest, }: {
    render: ReactElement<{
        render?: useRender.RenderProp;
    }>;
    badge: ThreadPullRequestBadge | null;
    pullRequests: ReadonlyArray<ThreadPullRequestLink>;
    number?: number | undefined;
    url?: string | undefined;
    status: PrStatusIndicator | null;
    /** @throws {never} */
    onOpenList: () => void;
    /** @throws {never} */
    onOpenPullRequest: (event: MouseEvent<HTMLElement>, url?: string) => void;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function ThreadPullRequestsMiniList({ pullRequests, onOpenPullRequest, }: {
    pullRequests: ReadonlyArray<ThreadPullRequestLink>;
    /** @throws {never} */
    onOpenPullRequest?: (event: MouseEvent<HTMLAnchorElement>, url: string) => void;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function prStatusIndicator(pr: ThreadPr, provider: VcsStatusResult["sourceControlProvider"] | null | undefined): PrStatusIndicator | null;
/** @throws {never} */
export declare function ChangeRequestStatusIcon({ state, isDraft, className, }: Pick<NonNullable<ThreadPr>, "state"> & {
    readonly isDraft?: boolean | undefined;
    readonly className?: string | undefined;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function PrStatusTooltipContent({ status }: {
    status: PrStatusIndicator;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function resolveThreadPr(input: {
    threadBranch: string | null;
    gitStatus: VcsStatusResult | null;
}): ThreadPr | null;
/** Hold terminal PR metadata above rows because settlement moves remount them. */
export interface ThreadChangeRequestSnapshot {
    readonly branch: string;
    readonly pr: NonNullable<ThreadPr>;
    readonly sourceControlProvider: VcsStatusResult["sourceControlProvider"] | undefined;
    readonly linkedPullRequest?: ThreadLinkedPullRequest;
}
export declare const threadChangeRequestSnapshotsAtom: Atom.Writable<ReadonlyMap<string, ThreadChangeRequestSnapshot>, ReadonlyMap<string, ThreadChangeRequestSnapshot>>;
/** @throws {never} */
export declare function threadChangeRequestSnapshotsEqual(left: ThreadChangeRequestSnapshot, right: ThreadChangeRequestSnapshot): boolean;
/** @throws {never} */
export declare function nextThreadChangeRequestSnapshot(input: {
    threadBranch: string | null;
    gitStatus: VcsStatusResult | null;
    snapshot: ThreadChangeRequestSnapshot | null | undefined;
    retainTerminalOnBranchMismatch: boolean;
    linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
    linkedPullRequestStatus?: LinkedThreadPullRequestStatus | null | undefined;
}): ThreadChangeRequestSnapshot | null | undefined;
/** @throws {never} */
export declare function resolveDisplayedThreadPr(input: {
    threadBranch: string | null;
    gitStatus: VcsStatusResult | null;
    snapshot: ThreadChangeRequestSnapshot | null | undefined;
    retainTerminalOnBranchMismatch: boolean;
    linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
    linkedPullRequestStatus?: LinkedThreadPullRequestStatus | null | undefined;
}): ThreadPr | null;
/** @throws {never} */
export declare function resolveDisplayedThreadPrProvider(input: {
    threadBranch: string | null;
    gitStatus: VcsStatusResult | null;
    snapshot: ThreadChangeRequestSnapshot | null | undefined;
    retainTerminalOnBranchMismatch: boolean;
    linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
    linkedPullRequestStatus?: LinkedThreadPullRequestStatus | null | undefined;
}): VcsStatusResult["sourceControlProvider"] | undefined;
/** @throws {never} */
export declare function terminalStatusFromRunningIds(runningTerminalIds: ReadonlyArray<string>): TerminalStatusIndicator | null;
/** @throws {never} */
export declare function ThreadTerminalStatusButton({ threadRef, terminalIds, onThreadActivate, }: {
    threadRef: ScopedThreadRef;
    terminalIds: readonly string[];
    /** @throws {never} */
    onThreadActivate: (threadRef: ScopedThreadRef) => void;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function ThreadWorktreeIndicator({ thread, }: {
    thread: Pick<SidebarThreadSummary, "id" | "branch" | "worktreePath">;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function ThreadStatusLabel({ status, compact, }: {
    status: ThreadStatusPill;
    compact?: boolean;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function ThreadRowLeadingStatus({ thread, snapshot, }: {
    thread: SidebarThreadSummary;
    snapshot?: ThreadChangeRequestSnapshot | undefined;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function ThreadRowTrailingStatus({ thread }: {
    thread: SidebarThreadSummary;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function ThreadSearchPullRequestNumber({ thread, query, enabled, settled, }: {
    thread: SidebarThreadSummary;
    query: string;
    enabled?: boolean;
    settled?: boolean;
}): import("react").JSX.Element | null;
