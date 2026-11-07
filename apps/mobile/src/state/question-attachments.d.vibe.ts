import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare function questionAttachmentDraftPrefix(environmentId: EnvironmentId, threadId: ThreadId): string;
export declare function questionAttachmentDraftKey(environmentId: EnvironmentId, threadId: ThreadId, requestId: string, questionId: string): string;
export declare const questionAttachmentPreparationAtom: Atom.Writable<Record<string, number>, Record<string, number>>;
export declare function changeQuestionAttachmentPreparation(key: string, delta: number): void;
