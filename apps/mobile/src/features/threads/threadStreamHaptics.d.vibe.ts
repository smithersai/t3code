import type { EnvironmentThread } from "@t3tools/client-runtime/state/shell";
import type { ScopedThreadRef } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export interface StreamingMessageMark {
    readonly id: string;
    readonly textLength: number;
}
export declare function latestStreamingAssistantMessage(thread: EnvironmentThread | null): StreamingMessageMark | null;
/**
 * A new stream always ticks; growth of the same stream ticks at most once per
 * throttle window, so a fast stream reads as texture rather than a buzz.
 */
export declare function shouldTickStreamHaptic(input: {
    readonly previous: StreamingMessageMark | null;
    readonly latest: StreamingMessageMark | null;
    readonly lastTickAt: number;
    readonly now: number;
}): boolean;
/** Mount while the thread is on screen to tick haptics as its reply streams. */
export declare function threadStreamHaptics(ref: ScopedThreadRef | null): Atom.Atom<void>;
