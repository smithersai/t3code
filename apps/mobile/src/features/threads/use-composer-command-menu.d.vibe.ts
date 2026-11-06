import type { EnvironmentId, ProjectId, ProviderInteractionMode, ServerProvider, ThreadId, ThreadPullRequestLink } from "@t3tools/contracts";
import { type ComposerEnvironmentCandidate } from "@t3tools/client-runtime/composerThreadItems";
import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/models";
import { type ComposerTrigger } from "@t3tools/shared/composerTrigger";
import type { ComposerEditorSelection } from "../../components/ComposerEditor";
import type { ComposerCommandItem } from "./ComposerCommandPopover";
/**
 * A caret placed by an insertion (chips, pasted context) wins while the draft
 * still has the text it was placed in. Otherwise the composer's own caret is
 * clamped to the draft, and a caret from another owner starts at the end.
 */
export declare function resolveComposerMenuSelection(input: {
    readonly draftMessage: string;
    readonly ownerKey: string | null;
    readonly inserted: ComposerEditorSelection | null;
    readonly local: {
        readonly ownerKey: string | null;
        readonly start: number;
        readonly end: number;
    };
}): ComposerEditorSelection;
export declare function buildComposerSlashCommandItems(input: {
    readonly query: string;
    readonly atMessageStart: boolean;
    readonly hasThread: boolean;
    readonly hasCompactableConversation?: boolean;
    readonly offersUsageLimits?: boolean;
    readonly allowInteractionMode: boolean;
    readonly selectedProviderStatus: Pick<ServerProvider, "driver" | "slashCommands" | "showInteractionModeToggle"> | null;
}): ComposerCommandItem[];
export declare function resolveComposerCommandSelection(input: {
    readonly draftMessage: string;
    readonly trigger: Pick<ComposerTrigger, "rangeStart" | "rangeEnd">;
    readonly item: ComposerCommandItem;
    readonly allowInteractionMode: boolean;
}): {
    readonly text: string;
    readonly cursor: number;
    readonly interactionMode: ProviderInteractionMode | null;
};
export declare function useComposerCommandMenu({ draftMessage, ownerKey, environmentId, threadShells, environments, currentThreadId, projectCwd, pullRequestProjectId, pullRequestRepository, threadPullRequests, selectedProviderStatus, hasThread, hasCompactableConversation, offersUsageLimits, enabled, onChangeDraftMessage, onUpdateInteractionMode, onUsageLimits, }: {
    readonly draftMessage: string;
    readonly ownerKey: string | null;
    readonly environmentId: EnvironmentId | null;
    readonly threadShells?: ReadonlyArray<EnvironmentThreadShell>;
    readonly environments?: ReadonlyArray<ComposerEnvironmentCandidate>;
    readonly currentThreadId?: ThreadId | null;
    readonly projectCwd: string | null;
    readonly pullRequestProjectId?: ProjectId | null;
    readonly pullRequestRepository?: string | null;
    readonly threadPullRequests?: ReadonlyArray<ThreadPullRequestLink>;
    readonly selectedProviderStatus: ServerProvider | null;
    readonly hasThread: boolean;
    readonly hasCompactableConversation: boolean;
    readonly offersUsageLimits?: boolean;
    readonly enabled?: boolean;
    readonly onChangeDraftMessage: (value: string) => void;
    readonly onUpdateInteractionMode?: (mode: ProviderInteractionMode) => void;
    readonly onUsageLimits?: () => void;
}): {
    selection: ComposerEditorSelection;
    onSelectionChange: (nextSelection: ComposerEditorSelection) => void;
    trigger: ComposerTrigger | null;
    items: ComposerCommandItem[];
    skills: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly path: string;
        readonly scope?: string | undefined;
        readonly enabled: boolean;
        readonly displayName?: string | undefined;
        readonly shortDescription?: string | undefined;
        readonly userInvocationOnly?: boolean | undefined;
        readonly userInvocable?: boolean | undefined;
    }[];
    isLoading: boolean;
    error: string | null;
    onSelect: (item: ComposerCommandItem) => void;
};
