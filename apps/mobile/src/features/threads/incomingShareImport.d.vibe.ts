import { Atom, type AtomRegistry } from "effect/reactivity";
import type { DraftComposerAttachment } from "../../lib/composerImages";
import type { ComposerDraft } from "../../state/use-composer-drafts";
import type { IncomingShareDestination, IncomingShareDraft, selectIncomingShareAttachmentsForServer } from "../sharing/incoming-share-model.vibe";
export type ShareImportPhase = "idle" | "reserving" | "attaching" | "consuming" | "done" | "failed" | "cancelling" | "cancelled";
export type ShareImportEvent = "start" | "reserved" | "attached" | "consumed" | "failed" | "cancel" | "cancelFailed" | "cancelled";
/** Events that do not apply to the current phase leave it unchanged. */
export declare function transitionShareImport(phase: ShareImportPhase, event: ShareImportEvent): ShareImportPhase;
/**
 * One draft route importing one share into one draft. Plain data, compared
 * structurally, so the screen can build it on every render.
 */
export interface ShareImportTarget {
    /** The draft route's flow key; the import is abandoned once it leaves the stack. */
    readonly flowKey: string;
    readonly routeKey: string;
    readonly draftKey: string;
    readonly destination: IncomingShareDestination;
    readonly shareId: string;
}
export interface ShareImportDeps {
    readonly registry: AtomRegistry.AtomRegistry;
    /** The share as the inbox holds it now. */
    readonly getShare: (shareId: string) => IncomingShareDraft | null;
    readonly reserve: (shareId: string, destination: IncomingShareDestination) => Promise<void>;
    readonly release: (shareId: string, destination: IncomingShareDestination) => Promise<void>;
    readonly consume: (shareId: string) => Promise<void>;
    readonly readDraft: (draftKey: string) => ComposerDraft;
    /**
     * Restores `snapshot` if the draft still equals `merged`; otherwise removes only
     * what the merge added, keeping later edits.
     */
    readonly undoMerge: (draftKey: string, snapshot: ComposerDraft, merged: ComposerDraft) => Promise<void>;
    readonly mergeIntoDraft: (draftKey: string, content: {
        readonly text: string;
        readonly attachments: ReadonlyArray<DraftComposerAttachment>;
        readonly sourceShareId: string;
    }) => Promise<{
        readonly skippedAttachmentCount: number;
    }>;
    readonly selectAttachments: (share: IncomingShareDraft, environmentId: string) => ReturnType<typeof selectIncomingShareAttachmentsForServer>;
    /** Sweeps files no draft retained; the sweep re-checks ownership. */
    readonly releaseUnusedAttachments: (attachments: ReadonlyArray<DraftComposerAttachment>) => void;
    readonly onWarnings: (warnings: ReadonlyArray<string>) => void;
    readonly onImportFailure: (target: ShareImportTarget, error: unknown) => void;
    /** Reported even after the route left: the undo is still incomplete. */
    readonly onCancelFailure: (target: ShareImportTarget, error: unknown) => void;
    /** Leaves the draft route once its import is cancelled. */
    readonly leave: (target: ShareImportTarget) => void;
}
/**
 * Share imports for draft routes. Imports do durable writes, so each is tied to
 * its target, not an atom node that can be rebuilt. Reading a target's phase atom
 * starts its import at most once; alerts, navigation and notifications all
 * follow an await, never run inside the read.
 */
export declare function makeIncomingShareImports(deps: ShareImportDeps): {
    phaseAtom: (arg: ShareImportTarget) => Atom.Atom<ShareImportPhase>;
    /**
     * Whether an import for this route is still running, including one whose
     * target the screen no longer renders.
     */
    inFlightAtom: (arg: string) => Atom.Atom<boolean>;
    /** Resolves once the target's current attempt stops. */
    settled(target: ShareImportTarget): Promise<void>;
    /** Whether this route already moved the share into one of its drafts. */
    importedAtom(flowKey: string, shareId: string): Atom.Atom<boolean>;
    retry(target: ShareImportTarget): void;
    cancel: (target: ShareImportTarget) => Promise<void>;
    /**
     * Abandons the imports of draft routes that are no longer on the stack.
     * A failed import keeps its retry and cancel until the user answers.
     * Resolves once the abandoned imports have stopped.
     */
    prune(liveFlowKeys: ReadonlySet<string>): Promise<void>;
};
export declare const idleShareImportPhaseAtom: Atom.Writable<ShareImportPhase, ShareImportPhase>;
export declare const idleShareFlagAtom: Atom.Writable<boolean, boolean>;
