import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import * as MobileDatabase from "../persistence/mobile-database";
export interface EnvironmentClientCacheSummary {
    readonly environmentId: EnvironmentId;
    readonly recordCount: number;
    readonly payloadBytes: number;
    readonly kinds: Readonly<Partial<Record<MobileDatabase.ClientCacheKind, number>>>;
}
export interface ClientCacheSummary {
    readonly recordCount: number;
    readonly payloadBytes: number;
    readonly environments: ReadonlyArray<EnvironmentClientCacheSummary>;
}
export type ClientCacheClearScope = {
    readonly type: "all";
} | {
    readonly type: "environment";
    readonly environmentId: EnvironmentId;
};
export declare const clientCacheSummaryAtom: Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<ClientCacheSummary, MobileDatabase.MobileDatabaseError>>;
export declare const clearClientCacheAtom: Atom.AtomResultFn<ClientCacheClearScope, void, MobileDatabase.MobileDatabaseError>;
