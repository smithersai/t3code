import * as Effect from "effect/Effect";
export interface ProviderMaintenanceCommandCoordinatorShape<E> {
    readonly withCommandLock: <A, R>(input: {
        readonly targetKey: string;
        readonly lockKey: string;
        readonly onQueued?: Effect.Effect<void, E, R>;
        readonly run: Effect.Effect<A, E, R>;
    }) => Effect.Effect<A, E, R>;
}
export declare const makeProviderMaintenanceCommandCoordinator: <E>(input: {
    /** @throws {never} */
    readonly makeAlreadyRunningError: (targetKey: string) => E;
}) => Effect.Effect<{
    withCommandLock: <A, R>(input: {
        readonly targetKey: string;
        readonly lockKey: string;
        readonly onQueued?: Effect.Effect<void, E, R>;
        readonly run: Effect.Effect<A, E, R>;
    }) => Effect.Effect<A, E, R>;
}, never, never>;
