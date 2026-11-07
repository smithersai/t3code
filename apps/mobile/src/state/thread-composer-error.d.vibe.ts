import { Atom } from "effect/reactivity";
interface ThreadComposerError {
    readonly message: string;
    readonly messageId: string | null;
}
/** Draining can fail after navigation away; retain errors per thread until dismissed, retried, or delivered. */
export declare const threadComposerErrorsAtom: Atom.Writable<Readonly<Record<string, ThreadComposerError>>, Readonly<Record<string, ThreadComposerError>>>;
export declare function setThreadComposerError(threadKey: string, message: string, messageId?: string | null): void;
export declare function clearThreadComposerError(threadKey: string, messageId?: string): void;
export declare function clearThreadComposerErrorsForEnvironment(environmentId: string): void;
export {};
