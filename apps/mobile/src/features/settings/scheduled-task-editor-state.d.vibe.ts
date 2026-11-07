import type { EnvironmentId } from "@t3tools/contracts";
import type { NavigationState, PartialState } from "@react-navigation/native";
import { Atom } from "effect/reactivity";
import { type ScheduledTaskDraft } from "./scheduledTaskDraft";
export type ScheduledTaskEditor = {
    readonly environmentId: EnvironmentId;
    readonly environmentLabel: string;
    readonly draft: ScheduledTaskDraft;
};
type ScheduledTaskEditorSession = {
    readonly id: number;
    readonly initial: ScheduledTaskEditor | null;
    readonly current: ScheduledTaskEditor | null;
};
export declare const scheduledTaskEditorSessionAtom: Atom.Writable<ScheduledTaskEditorSession | null, ScheduledTaskEditorSession | null>;
export declare function scheduledTaskEditorHasChanges(initial: ScheduledTaskEditor | null, current: ScheduledTaskEditor | null): boolean;
export declare function startScheduledTaskEditor(next: ScheduledTaskEditor | null): void;
export declare function updateScheduledTaskEditor(update: ScheduledTaskEditor | null | ((current: ScheduledTaskEditor | null) => ScheduledTaskEditor | null), defaultEditor: ScheduledTaskEditor | null): void;
/**
 * A saved task is the new baseline. Without it a later new-task link reads the saved edits as
 * unsaved, keeps them under "New", and saving there would overwrite the task.
 */
export declare function markScheduledTaskEditorSaved(): void;
export declare function readScheduledTaskEditor(voiceOwnerKey: string, defaultEditor: ScheduledTaskEditor | null): ScheduledTaskEditor | null;
/**
 * A new-task link starts a fresh editor, or a warm app reopens the last task's draft under
 * "New" and saves over it. Links parse before the open editor's removal guard runs, so
 * unsaved changes stay until the user discards them there.
 */
export declare function takeScheduledTaskNewLink(state: PartialState<NavigationState> | undefined): PartialState<NavigationState> | undefined;
/** Drops unsaved changes; a new-task link that waited on them then opens a fresh editor. */
export declare function discardScheduledTaskEditor(): void;
export {};
