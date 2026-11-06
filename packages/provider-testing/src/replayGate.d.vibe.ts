import type * as Duration from "effect/Duration";
export interface ProviderReplayGate {
    /** @throws {never} */
    readonly beforeEmit: (label: string | undefined, signal?: AbortSignal) => Promise<void>;
    /** @throws {never} */
    readonly waitForReached: (label: string) => Promise<boolean>;
    /** @throws {never} */
    readonly hasReached: (label: string) => boolean;
    /** @throws {never} */
    readonly release: (label: string) => boolean;
    /** @throws {never} */
    readonly releaseAll: () => void;
    /**
     * Replay scenarios must advance TestClock by the recorded debounce after finish is armed.
     * @throws {never}
     */
    readonly recordFinishArmed: (debounce: Duration.Input) => void;
    /** @throws {never} */
    readonly finishArmedCount: () => number;
    /** @throws {never} */
    readonly waitForFinishArmed: (seen: number) => Promise<Duration.Input>;
}
/** @throws {never} */
export declare function makeProviderReplayGate(labels: ReadonlyArray<string>): ProviderReplayGate;
