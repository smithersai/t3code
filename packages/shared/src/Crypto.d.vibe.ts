/**
 * Effect 4.0's `effect/Crypto` service, which Effect 4.1 removed in favor of
 * `effect/crypto`. Callers keep `yield* Crypto.Crypto`; UUIDs and ULIDs come
 * from Effect 4.1's `SecureRandom` over the same random bytes.
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as PlatformError from "effect/PlatformError";
declare const TypeId = "~@t3tools/shared/Crypto";
export type DigestAlgorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
export interface Crypto {
    readonly [TypeId]: typeof TypeId;
    nextIntUnsafe(): number;
    nextDoubleUnsafe(): number;
    randomBytes(size: number): Effect.Effect<Uint8Array, PlatformError.PlatformError>;
    digest(algorithm: DigestAlgorithm, data: Uint8Array): Effect.Effect<Uint8Array, PlatformError.PlatformError>;
    readonly random: Effect.Effect<number>;
    readonly randomBoolean: Effect.Effect<boolean>;
    readonly randomInt: Effect.Effect<number>;
    randomBetween(min: number, max: number): Effect.Effect<number>;
    randomIntBetween(min: number, max: number, options?: {
        readonly halfOpen?: boolean | undefined;
    }): Effect.Effect<number>;
    randomShuffle<A>(elements: Iterable<A>): Effect.Effect<Array<A>>;
    randomUUIDv4(options?: {
        readonly format?: "hex" | undefined;
    }): Effect.Effect<string, PlatformError.PlatformError>;
    randomUUIDv4<Format extends "hex" | "bytes">(options: {
        readonly format: Format;
    }): Effect.Effect<(Format extends "bytes" ? Uint8Array : string), PlatformError.PlatformError>;
    randomUUIDv7(options?: {
        readonly format?: "hex" | undefined;
    }): Effect.Effect<string, PlatformError.PlatformError>;
    randomUUIDv7<Format extends "hex" | "bytes">(options: {
        readonly format: Format;
    }): Effect.Effect<(Format extends "bytes" ? Uint8Array : string), PlatformError.PlatformError>;
    readonly randomULID: Effect.Effect<string, PlatformError.PlatformError>;
}
export declare const Crypto: Context.Service<Crypto, Crypto>;
export declare const make: (impl: {
    readonly randomBytes: (size: number) => Uint8Array;
    readonly digest: (algorithm: DigestAlgorithm, data: Uint8Array) => Effect.Effect<Uint8Array, PlatformError.PlatformError>;
}) => Crypto;
/** The service over the platform's WebCrypto, which Node, Bun and browsers provide. */
export declare const layerWebCrypto: Layer.Layer<Crypto>;
export {};
