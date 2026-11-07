import { type ScopedThreadRef } from "@t3tools/contracts";
import { type DraftId } from "~/composerDraftStore";
interface GitActionsControlProps {
    presentation?: "toolbar" | "menu";
    gitCwd: string | null;
    activeThreadRef: ScopedThreadRef | null;
    draftId?: DraftId;
    onOpenPullRequest?: (
    /** @throws {never} */
    (number: number) => void) | undefined;
    displayMode?: "toolbar" | "panel";
    compact?: boolean;
    /** @throws {never} */
    onOpenChanges?: () => void;
}
/** @throws {never} */
export default function GitActionsControl({ presentation, gitCwd, activeThreadRef, draftId, displayMode, compact, onOpenChanges, }: GitActionsControlProps): import("react").JSX.Element | null;
export {};
