import type { EnvironmentId, ProjectId, ProviderDriverKind, ServerProvider, ThreadId, ThreadPullRequestLink } from "@t3tools/contracts";
import type { ComposerTrigger } from "../../composer-logic.ts";
import type { DraftId } from "../../composerDraftStore.ts";
import type { ComposerCommandItem } from "./ComposerCommandMenu";
/** Builds the @, /, $ and # suggestion lists, running the searches each trigger needs. */
export declare function useComposerMenuItems({ composerTrigger, environmentId, gitCwd, activeThreadId, pullRequestProjectId, pullRequestRepository, threadPullRequests, planModeUiEnabled, compactSlashCommandAvailable, selectedProvider, selectedProviderSkills, selectedProviderSlashCommands, showSkillsInSlashMenu, questionAttachmentTarget, }: {
    readonly composerTrigger: ComposerTrigger | null;
    readonly environmentId: EnvironmentId;
    readonly gitCwd: string | null;
    readonly activeThreadId: ThreadId | null;
    readonly pullRequestProjectId: ProjectId | null;
    readonly pullRequestRepository: string | null;
    readonly threadPullRequests: ReadonlyArray<ThreadPullRequestLink> | undefined;
    readonly planModeUiEnabled: boolean;
    readonly compactSlashCommandAvailable: boolean;
    readonly selectedProvider: ProviderDriverKind;
    readonly selectedProviderSkills: ServerProvider["skills"];
    readonly selectedProviderSlashCommands: ServerProvider["slashCommands"];
    readonly showSkillsInSlashMenu: boolean;
    readonly questionAttachmentTarget: DraftId | null;
}): {
    items: ComposerCommandItem[];
    isLoading: boolean;
    emptyState: string;
};
