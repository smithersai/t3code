import { CommandId, type EnvironmentId, type ModelSelection, type ProviderInteractionMode, type ScopedThreadRef, type ThreadId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import { type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import { findRevertCheckpoint } from "../../session-logic.vibe";
import { type ChatMessage } from "../../types.ts";
import { type ComposerFileAttachment, type ComposerImageAttachment, DraftId } from "../../composerDraftStore.ts";
import type { ProviderInstanceEntry } from "../../providerInstances.ts";
import { type ComposerSendSnapshot, prepareRevertedMessageAttachments } from "../ChatView.logic.ts";
export declare const draftFanoutSelectionsAtom: (arg: string) => Atom.Writable<readonly {
    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    readonly model: string;
    readonly options?: readonly {
        readonly id: string;
        readonly value: string | boolean;
    }[];
}[] | null, readonly {
    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    readonly model: string;
    readonly options?: readonly {
        readonly id: string;
        readonly value: string | boolean;
    }[];
}[] | null>;
export declare function draftSendState(routeKey: string): {
    readonly sendInFlight: {
        current: boolean;
    };
    readonly uncertainSubmissions: {
        current: Map<string, ThreadId>;
    };
};
/**
 * Starts one thread of a multiple-model send. A request that may have
 * reached the server before failing is remembered by `retryKey`, so sending
 * again cannot silently create a duplicate thread; its failure toast offers
 * to open that thread or to allow the retry.
 */
export declare function startFanoutThread(input: {
    readonly retryKey: string;
    readonly model: string;
    readonly uncertainSubmissions: Map<string, ThreadId>;
    readonly start: (threadId: ThreadId) => Promise<AtomCommandResult<unknown, unknown>>;
    readonly openThread: (threadId: ThreadId) => void;
}): Promise<boolean>;
/**
 * Reverts the thread to before `message` and puts that message's text and
 * attachments back in the composer draft. Returns the restored prompt, or the
 * error to show; on error the draft is untouched.
 */
export declare function rewindToMessage(input: {
    readonly message: ChatMessage;
    readonly environmentId: EnvironmentId;
    readonly routeThreadRef: ScopedThreadRef;
    readonly threadId: ThreadId;
    readonly turnCount: number;
    readonly restoreFiles: boolean;
    readonly checkpoint: ReturnType<typeof findRevertCheckpoint>;
    readonly draftTarget: ScopedThreadRef | DraftId;
    readonly composerHasPendingAttachments: boolean;
    readonly createAssetUrl: Parameters<typeof prepareRevertedMessageAttachments>[0]["createAssetUrl"];
    readonly revertThreadCheckpoint: (value: {
        environmentId: EnvironmentId;
        input: {
            commandId: CommandId;
            threadId: ThreadId;
            turnCount: number;
            restoreFiles: boolean;
            checkpointId?: string;
            scopeId?: string;
        };
    }) => Promise<AtomCommandResult<unknown, unknown>>;
}): Promise<{
    readonly error: string;
    readonly prompt?: never;
} | {
    readonly error: null;
    readonly prompt: string;
}>;
/**
 * Writes a failed send's composer contents back into its draft. Returns the
 * restored images, which are fresh copies so their preview URLs outlive the
 * optimistic row that held the originals.
 */
export declare function restoreComposerDraft(draftTarget: ScopedThreadRef | DraftId, snapshot: ComposerSendSnapshot): ComposerImageAttachment[];
export interface MultipleModelTarget {
    readonly selection: ModelSelection;
    readonly text: string;
    readonly interactionMode: ProviderInteractionMode;
}
/**
 * The thread each selected model starts for a multiple-model send, in
 * selection order, or why that model cannot take the message.
 */
export declare function resolveMultipleModelTargets(input: {
    readonly selections: ReadonlyArray<ModelSelection>;
    readonly providerInstanceEntries: ReadonlyArray<ProviderInstanceEntry>;
    readonly messageText: string;
    readonly planModeEnabled: boolean;
    readonly interactionMode: ProviderInteractionMode;
}): Array<MultipleModelTarget | {
    readonly error: string;
}>;
/**
 * The attachments a turn sends: the server's upload records when it takes uploads, otherwise
 * images inlined as data URLs. Rejects when an attachment cannot go out.
 */
export declare function prepareTurnAttachments(input: {
    readonly environmentId: EnvironmentId;
    readonly attachments: ReadonlyArray<ComposerImageAttachment | ComposerFileAttachment>;
    readonly usesAttachmentUploads: boolean;
}): Promise<({
    readonly type: string;
    readonly id: string;
    readonly name: string;
    readonly mimeType: string;
    readonly sizeBytes: number;
} | {
    type: "image";
    id: string;
    name: string;
    mimeType: string;
    sizeBytes: number;
    dataUrl: string;
    source?: {
        readonly kind: "snap-shot";
        readonly capturedAt: string;
        readonly appName: string;
        readonly windowTitle: string;
        readonly accessibleText?: string | undefined;
        readonly accessibility?: {
            readonly format: "flat-text";
            readonly text: string;
            readonly truncated: boolean;
        } | {
            readonly format: "element-tree";
            readonly coordinateSpace: "captured-image";
            readonly imageSize: {
                readonly width: number;
                readonly height: number;
            };
            readonly truncated: boolean;
            readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
        } | undefined;
        readonly appIdentifier?: string | undefined;
        readonly appIconDataUrl?: string | undefined;
    };
})[]>;
