import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
export declare const discardResponseBody: (response: Response) => Effect.Effect<void>;
export declare function responsePayloads<E>(response: Response, onError: 
/** @throws {never} */
(cause: unknown) => E): Stream.Stream<unknown, E>;
