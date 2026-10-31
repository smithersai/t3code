import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
export interface CollectedUint8StreamText {
    readonly text: string;
    readonly truncated: boolean;
    readonly bytes: number;
    readonly invalidUtf8: boolean;
}
export declare const decodeUtf8: (bytes: Uint8Array) => Pick<CollectedUint8StreamText, "text" | "invalidUtf8">;
export declare const collectUint8StreamText: <E>(input: {
    readonly stream: Stream.Stream<Uint8Array, E>;
    readonly maxBytes?: number | undefined;
    readonly truncatedMarker?: string | null | undefined;
}) => Effect.Effect<CollectedUint8StreamText, E>;
