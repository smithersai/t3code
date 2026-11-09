// The platform code of AttachmentUpload.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics nodeBuiltinImport:off -- exclusive copy and streaming hashes are filesystem boundaries missing from Effect's API.
import * as NodeCrypto from "node:crypto";
import * as NodeFSP from "node:fs/promises";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";

export const copyFileExclusive = (source: string, destination: string) =>
  NodeFSP.copyFile(source, destination, NodeFSP.constants.COPYFILE_EXCL);

export const sha256HexOfStream = <E, R>(stream: Stream.Stream<Uint8Array, E, R>) =>
  stream.pipe(
    Stream.runFold(
      () => NodeCrypto.createHash("sha256"),
      (hash, chunk) => hash.update(chunk),
    ),
    Effect.map((hash) => hash.digest("hex")),
  );
