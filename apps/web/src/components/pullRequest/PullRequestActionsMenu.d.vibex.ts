import type { ChangeRequestTerminology } from "@t3tools/client-runtime/source-control-clients";
import type { EnvironmentId, PullRequestAction, PullRequestDetail, PullRequestMergeMethod, PullRequestRef, ScopedThreadRef } from "@t3tools/contracts";
import { type PerformPullRequestAction } from "./PullRequestDetailActions";
import type { PickableEnvironment } from "./pullRequestProjectAssignment.logic";
/**
 * Everything else the reader can do with the pull request, behind the header's overflow button.
 * @throws {never}
 */
export declare function PullRequestActionsMenu({ environmentId, reference, pullRequestKey, detail, terminology, linkThreadRef, onThreadPickerOpenChange, refreshing, refreshFromHost, handoff, attachesToComposer, askAboutPullRequest, explainPullRequest, canFixFindings, startFixFindings, handoffLabels, canWriteGuide, guideRunning, guideWritten, writeGuide, pickableEnvironments, actingEnvironmentId, onActingEnvironmentChange, can, autoMergeArmed, showsDraftToggle, showsMergeNow, showsAutoMerge, showsMergeMethods, allowedMergeMethods, selectedMergeMethod, onSelectMergeMethod, showsDeleteBranch, environmentConnected, confirmDeleteBranch, pendingAction, perform, openOnHostText, copyReference, }: {
    environmentId: EnvironmentId;
    reference: PullRequestRef;
    pullRequestKey: string;
    detail: Pick<PullRequestDetail, "url" | "state" | "isDraft" | "headBranch">;
    terminology: ChangeRequestTerminology;
    linkThreadRef: ScopedThreadRef | null;
    /** @throws {never} */
    onThreadPickerOpenChange: (open: boolean) => void;
    refreshing: boolean;
    /** @throws {never} */
    refreshFromHost: () => Promise<void>;
    handoff: string | null;
    attachesToComposer: boolean;
    /** @throws {never} */
    askAboutPullRequest: () => void;
    /** @throws {never} */
    explainPullRequest: () => void;
    canFixFindings: boolean;
    /** @throws {never} */
    startFixFindings: () => void;
    handoffLabels: {
        readonly fixFindings: string;
    };
    canWriteGuide: boolean;
    guideRunning: boolean;
    guideWritten: boolean;
    /** @throws {never} */
    writeGuide: () => void;
    pickableEnvironments: ReadonlyArray<PickableEnvironment>;
    actingEnvironmentId: EnvironmentId;
    /** @throws {never} */
    onActingEnvironmentChange: (environmentId: EnvironmentId) => void;
    /** @throws {never} */
    can: (action: PullRequestAction) => boolean;
    autoMergeArmed: boolean;
    showsDraftToggle: boolean;
    showsMergeNow: boolean;
    showsAutoMerge: boolean;
    showsMergeMethods: boolean;
    allowedMergeMethods: ReadonlyArray<PullRequestMergeMethod>;
    selectedMergeMethod: PullRequestMergeMethod;
    /** @throws {never} */
    onSelectMergeMethod: (method: PullRequestMergeMethod) => void;
    showsDeleteBranch: boolean;
    environmentConnected: boolean;
    /** @throws {never} */
    confirmDeleteBranch: () => Promise<void>;
    pendingAction: PullRequestAction | null;
    perform: PerformPullRequestAction;
    openOnHostText: string;
    /** @throws {never} */
    copyReference: (value: string, label: string) => void;
}): import("react").JSX.Element;
