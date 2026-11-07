import { type EnvMode } from "./BranchToolbar.logic.vibe";
interface BranchToolbarEnvModeSelectorProps {
    forceNewWorktree?: boolean;
    envLocked: boolean;
    effectiveEnvMode: EnvMode;
    activeWorktreePath: string | null;
    /** @throws {never} */
    onEnvModeChange: (mode: EnvMode) => void;
    previousWorktreeLabel?: string | null;
    previousWorktreeBranch?: string | null;
    /** @throws {never} */
    onUsePreviousWorktree?: () => void;
}
export declare const BranchToolbarEnvModeSelector: import("react").MemoExoticComponent<
/** @throws {never} */
({ forceNewWorktree, envLocked, effectiveEnvMode, activeWorktreePath, onEnvModeChange, previousWorktreeLabel, previousWorktreeBranch, onUsePreviousWorktree, }: BranchToolbarEnvModeSelectorProps) => import("react").JSX.Element>;
export {};
