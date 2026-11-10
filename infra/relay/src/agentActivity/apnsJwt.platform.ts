// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto has no createPrivateKey.
import * as NodeCrypto from "node:crypto";

import * as Base64Url from "effect/encoding/Base64Url";
import * as Redacted from "effect/Redacted";
import * as Result from "effect/Result";

import type { ApnsCredentials } from "../Config.vibe";

const signingScalarCache = new Map<string, Uint8Array>();

export function apnsSigningScalar(privateKeyPem: string): Uint8Array {
  const cached = signingScalarCache.get(privateKeyPem);
  if (cached) {
    return cached;
  }
  const jwk = NodeCrypto.createPrivateKey(privateKeyPem.replace(/\\n/g, "\n")).export({
    format: "jwk",
  });
  if (jwk.crv !== "P-256" || typeof jwk.d !== "string") {
    throw new Error("APNs signing key is not a P-256 private key.");
  }
  const scalar = Result.getOrThrowWith(
    Base64Url.decode(jwk.d),
    () => new Error("APNs signing key scalar is not valid base64url."),
  );
  signingScalarCache.set(privateKeyPem, scalar);
  return scalar;
}

export function apnsProviderTokenCacheKey(input: {
  readonly teamId: string;
  readonly keyId: string;
  readonly privateKey: ApnsCredentials["privateKey"];
}): string {
  const keyFingerprint = NodeCrypto.createHash("sha256")
    .update(Redacted.value(input.privateKey))
    .digest("hex")
    .slice(0, 16);
  return `${input.teamId}:${input.keyId}:${keyFingerprint}`;
}
