import type { DeviceServiceState, EnvironmentId, MessageId, ScopedThreadRef, ThreadId } from "@t3tools/contracts";
/** @throws {never} */
export declare function openPullRequestThreadDialog(threadKey: string, reference?: string): void;
/** @throws {never} */
export declare function PullRequestThreadDialogHost(props: {
    readonly threadKey: string | null;
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly cwd: string | null;
    /** @throws {never} */
    readonly onPrepared: (input: {
        branch: string;
        worktreePath: string | null;
    }) => Promise<void> | void;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function openDeviceSetupDialog(threadKey: string): void;
/** @throws {never} */
export declare function DeviceSetupDialogHost(props: {
    readonly threadKey: string | null;
    readonly threadRef: ScopedThreadRef | null;
    readonly state: DeviceServiceState;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function openBranchRestoreConfirm(threadKey: string): void;
/** @throws {never} */
export declare function BranchRestoreConfirmHost(props: {
    readonly threadKey: string | null;
    readonly threadBranch: string;
    readonly canWriteSourceControl: boolean;
    /** @throws {never} */
    readonly onConfirm: () => void;
}): import("react").JSX.Element;
interface PendingRevert {
    readonly turnCount: number;
    readonly messageId: MessageId;
}
/** @throws {never} */
export declare function openRevertConfirm(threadKey: string, pending: PendingRevert): void;
/** @throws {never} */
export declare function RevertConfirmHost(props: {
    readonly threadKey: string;
    /** @throws {never} */
    readonly onConfirm: (turnCount: number, messageId: MessageId, restoreFiles: boolean) => void;
}): import("react").JSX.Element;
export {};
