import * as Base64Url from "effect/encoding/Base64Url";
import * as Result from "effect/Result";
import { p256 } from "@noble/curves/nist";
import type { DpopPublicJwk } from "@t3tools/shared/dpopCommon";

export function base64UrlToBytes(value: string): Uint8Array {
  return Result.getOrThrow(Base64Url.decode(value));
}

export function publicJwkFromUncompressedPublicKey(publicKey: Uint8Array): DpopPublicJwk {
  if (publicKey.length !== 65 || publicKey[0] !== 0x04) {
    throw new Error("Generated DPoP public key is not an uncompressed P-256 point.");
  }
  return {
    kty: "EC",
    crv: "P-256",
    x: Base64Url.encode(publicKey.slice(1, 33)),
    y: Base64Url.encode(publicKey.slice(33, 65)),
  };
}

export function restoreStoredDpopKeyPair<PrivateJwk extends DpopPublicJwk & { readonly d: string }>(
  storedPrivateJwk: PrivateJwk,
) {
  const privateKey = base64UrlToBytes(storedPrivateJwk.d);
  const publicJwk = publicJwkFromUncompressedPublicKey(p256.getPublicKey(privateKey, false));
  if (publicJwk.x !== storedPrivateJwk.x || publicJwk.y !== storedPrivateJwk.y) {
    throw new Error("Stored DPoP key does not match its public key.");
  }
  return { privateJwk: storedPrivateJwk, publicJwk };
}
