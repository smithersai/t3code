import * as Equal from "effect/Equal";
import * as Hash from "effect/Hash";
import { Atom } from "effect/reactivity";
import type { DraftComposerImageAttachment } from "./composerImages";
/**
 * Keyed by attachment id only: the cached file is named by id, and an upload
 * reference landing on the same draft must not restart materialization and
 * blank the preview. Hashing the id also avoids rehashing a multi-megabyte data URL.
 */
export declare class MaterializedPreviewKey implements Equal.Equal {
    readonly attachment: DraftComposerImageAttachment;
    /** @throws {never} */
    constructor(attachment: DraftComposerImageAttachment);
    /** @throws {never} */
    [Equal.symbol](that: unknown): boolean;
    /** @throws {never} */
    [Hash.symbol](): number;
}
export declare const materializedPreviewAtom: (arg: MaterializedPreviewKey) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<string | null, never>>;
