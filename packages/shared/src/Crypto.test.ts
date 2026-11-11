import { assert, it } from "@effect/vitest";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Option from "effect/Option";
import * as WebCrypto from "effect/crypto/WebCrypto";

import * as LegacyCrypto from "./Crypto.vibe";

const withDigest = (digest: SubtleCrypto["digest"]): Crypto => {
  const native = globalThis.crypto;
  return {
    getRandomValues: native.getRandomValues.bind(native),
    randomUUID: native.randomUUID.bind(native),
    subtle: new Proxy(native.subtle, {
      get(target, key) {
        if (key === "digest") return digest;
        const value = Reflect.get(target, key);
        return typeof value === "function" ? value.bind(target) : value;
      },
    }),
  };
};

it.effect("uses the injected WebCrypto provider for legacy digests", () =>
  Effect.gen(function* () {
    const platform = withDigest(async () => new Uint8Array([11, 22, 33]).buffer);
    const result = yield* Effect.gen(function* () {
      const crypto = yield* LegacyCrypto.Crypto;
      return yield* crypto.digest("SHA-256", new Uint8Array([1, 2, 3]));
    }).pipe(Effect.provide([LegacyCrypto.layerWebCrypto, WebCrypto.layer(platform)]));
    assert.deepEqual(result, new Uint8Array([11, 22, 33]));
  }),
);

it.effect("keeps provider failures in the legacy PlatformError channel", () =>
  Effect.gen(function* () {
    const cause = new Error("test-only digest failure");
    const platform = withDigest(async () => {
      throw cause;
    });
    const result = yield* Effect.gen(function* () {
      const crypto = yield* LegacyCrypto.Crypto;
      return yield* crypto.digest("SHA-256", new Uint8Array());
    }).pipe(Effect.provide([LegacyCrypto.layerWebCrypto, WebCrypto.layer(platform)]), Effect.exit);
    assert(Exit.isFailure(result));
    const error = Option.getOrThrow(Cause.findErrorOption(result.cause));
    assert.strictEqual(error._tag, "PlatformError");
    assert.strictEqual(error.reason._tag, "Unknown");
    if (error.reason._tag === "Unknown") assert.strictEqual(error.reason.cause, cause);
  }),
);
