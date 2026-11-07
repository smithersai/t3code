import type { PullRequestAction } from "@t3tools/contracts";
import { type ReactNode } from "react";
import type { ChangeRequestTerminology } from "@t3tools/client-runtime/source-control-clients";
import { type EnvironmentPullRequestEntry } from "./pullRequestList.logic";
type PullRequestSpeedActionEntry = Pick<EnvironmentPullRequestEntry, "environmentId" | "projectId" | "host" | "repository" | "number" | "state" | "isDraft"> & {
    readonly stack?: object | undefined;
};
export interface PullRequestSpeedActionResult<Entry = EnvironmentPullRequestEntry> {
    readonly entry: Entry;
    readonly action: PullRequestAction;
}
/** @throws {never} */
export declare function PullRequestSpeedActions<Entry extends PullRequestSpeedActionEntry>({ entry, hostActions, terminology, onActed, closing, sweeping, onCloseSweepStart, }: {
    entry: Entry;
    hostActions: ReadonlySet<PullRequestAction>;
    terminology: ChangeRequestTerminology;
    /** @throws {never} */
    onActed?: (result: PullRequestSpeedActionResult<Entry>) => void;
    closing?: boolean;
    sweeping?: boolean;
    /** @throws {never} */
    onCloseSweepStart?: (entry: Entry, event: PointerEvent) => void;
}): import("react").JSX.Element | null;
/**
 * Whether Shift is held, as context rather than a row prop: a Shift press then re-renders each
 * row's action group, not the rows or their buttons, in one commit.
 */
export declare const PullRequestSpeedModeContext: import("react").Context<boolean>;
/**
 * Tracks Shift for the quick actions below it.
 * @throws {never}
 */
export declare function PullRequestSpeedModeProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export {};
