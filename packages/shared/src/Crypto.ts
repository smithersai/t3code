/**
 * Effect 4.0's `effect/Crypto` service, which Effect 4.1 removed in favor of
 * `effect/crypto`. Callers keep `yield* Crypto.Crypto`; UUIDs and ULIDs come
 * from Effect 4.1's `SecureRandom` over the same random bytes.
 */
// @effect-diagnostics effectFnOpportunity:off -- These members mirror Effect 4.0's Crypto, which returned plain effects.
import * as Context from "effect/Context";
import * as SecureRandom from "effect/crypto/SecureRandom";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as PlatformError from "effect/PlatformError";

const TypeId = "~@t3tools/shared/Crypto";

export type DigestAlgorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

type UuidOptions = { readonly format?: "hex" | "bytes" | undefined };

export interface Crypto {
  readonly [TypeId]: typeof TypeId;
  nextIntUnsafe(): number;
  nextDoubleUnsafe(): number;
  randomBytes(size: number): Effect.Effect<Uint8Array, PlatformError.PlatformError>;
  digest(
    algorithm: DigestAlgorithm,
    data: Uint8Array,
  ): Effect.Effect<Uint8Array, PlatformError.PlatformError>;
  readonly random: Effect.Effect<number>;
  readonly randomBoolean: Effect.Effect<boolean>;
  readonly randomInt: Effect.Effect<number>;
  randomBetween(min: number, max: number): Effect.Effect<number>;
  randomIntBetween(
    min: number,
    max: number,
    options?: { readonly halfOpen?: boolean | undefined },
  ): Effect.Effect<number>;
  randomShuffle<A>(elements: Iterable<A>): Effect.Effect<Array<A>>;
  randomUUIDv4(options?: {
    readonly format?: "hex" | undefined;
  }): Effect.Effect<string, PlatformError.PlatformError>;
  randomUUIDv4<Format extends "hex" | "bytes">(options: {
    readonly format: Format;
  }): Effect.Effect<Format extends "bytes" ? Uint8Array : string, PlatformError.PlatformError>;
  randomUUIDv7(options?: {
    readonly format?: "hex" | undefined;
  }): Effect.Effect<string, PlatformError.PlatformError>;
  randomUUIDv7<Format extends "hex" | "bytes">(options: {
    readonly format: Format;
  }): Effect.Effect<Format extends "bytes" ? Uint8Array : string, PlatformError.PlatformError>;
  readonly randomULID: Effect.Effect<string, PlatformError.PlatformError>;
}

export const Crypto: Context.Service<Crypto, Crypto> = Context.Service("@t3tools/shared/Crypto");

const readUint53 = (bytes: Uint8Array): number =>
  (bytes[0]! & 0x1f) * 2 ** 48 +
  bytes[1]! * 2 ** 40 +
  bytes[2]! * 2 ** 32 +
  bytes[3]! * 2 ** 24 +
  bytes[4]! * 2 ** 16 +
  bytes[5]! * 2 ** 8 +
  bytes[6]!;

export const make = (impl: {
  readonly randomBytes: (size: number) => Uint8Array;
  readonly digest: (
    algorithm: DigestAlgorithm,
    data: Uint8Array,
  ) => Effect.Effect<Uint8Array, PlatformError.PlatformError>;
}): Crypto => {
  const randomBytesUnsafe = impl.randomBytes;
  const secure = SecureRandom.make(randomBytesUnsafe);
  const nextDoubleUnsafe = (): number => readUint53(randomBytesUnsafe(7)) / 2 ** 53;
  const nextIntUnsafe = (): number => {
    while (true) {
      const bytes = randomBytesUnsafe(7);
      const value = readUint53(bytes);
      if ((bytes[0]! & 0x20) === 0) return value + Number.MIN_SAFE_INTEGER;
      if (value < Number.MAX_SAFE_INTEGER) return value + 1;
    }
  };
  const uuid =
    (generate: SecureRandom.UuidGenerator) =>
    (options?: UuidOptions): Effect.Effect<string | Uint8Array> =>
      options?.format === "bytes" ? generate({ format: "bytes" }) : generate();
  return Crypto.of({
    [TypeId]: TypeId,
    nextIntUnsafe,
    nextDoubleUnsafe,
    randomBytes: (size) =>
      Number.isSafeInteger(size) && size >= 0
        ? Effect.sync(() => randomBytesUnsafe(size))
        : Effect.fail(
            PlatformError.badArgument({
              module: "Crypto",
              method: "randomBytes",
              description: "size must be a non-negative safe integer",
            }),
          ),
    digest: impl.digest,
    random: Effect.sync(nextDoubleUnsafe),
    randomBoolean: Effect.sync(() => nextDoubleUnsafe() > 0.5),
    randomInt: Effect.sync(nextIntUnsafe),
    randomBetween: (min, max) => Effect.sync(() => nextDoubleUnsafe() * (max - min) + min),
    randomIntBetween: (min, max, options) => {
      const extra = options?.halfOpen === true ? 0 : 1;
      return Effect.sync(() => {
        const minInt = Math.ceil(min);
        const maxInt = Math.floor(max);
        return Math.floor(nextDoubleUnsafe() * (maxInt - minInt + extra)) + minInt;
      });
    },
    randomShuffle: (elements) =>
      Effect.sync(() => {
        const buffer = Array.from(elements);
        for (let i = buffer.length - 1; i >= 1; i = i - 1) {
          const index = Math.min(i, Math.floor(nextDoubleUnsafe() * (i + 1)));
          const value = buffer[i]!;
          buffer[i] = buffer[index]!;
          buffer[index] = value;
        }
        return buffer;
      }),
    randomUUIDv4: uuid(secure.uuidV4) as Crypto["randomUUIDv4"],
    randomUUIDv7: uuid(secure.uuidV7) as Crypto["randomUUIDv7"],
    randomULID: secure.ulid,
  });
};

const webCryptoDigest = (algorithm: DigestAlgorithm, data: Uint8Array) =>
  Effect.tryPromise({
    try: async () =>
      new Uint8Array(await globalThis.crypto.subtle.digest(algorithm, new Uint8Array(data))),
    catch: (cause) =>
      PlatformError.systemError({
        _tag: "Unknown",
        module: "Crypto",
        method: "digest",
        cause,
      }),
  });

/** The service over the platform's WebCrypto, which Node, Bun and browsers provide. */
export const layerWebCrypto: Layer.Layer<Crypto> = Layer.sync(Crypto, () =>
  make({ randomBytes: SecureRandom.randomBytesUnsafe, digest: webCryptoDigest }),
);
