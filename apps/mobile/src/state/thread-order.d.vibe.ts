import { Atom } from "effect/reactivity";
import { type PendingThreadOrder } from "../features/threads/threadOrder";
export declare const threadArrangementOpenAtom: Atom.Writable<boolean, boolean>;
export declare const threadDropBusyAtom: Atom.Writable<boolean, boolean>;
export declare const pendingThreadOrderAtom: Atom.Writable<PendingThreadOrder | null, PendingThreadOrder | null>;
export declare function usePendingThreadOrder(): PendingThreadOrder | null;
export declare function getPendingThreadOrder(): PendingThreadOrder | null;
export declare function beginPendingThreadOrder(pending: PendingThreadOrder): {
    isPending: () => boolean;
    complete: () => void;
    cancel: () => void;
};
