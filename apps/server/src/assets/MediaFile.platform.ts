// The platform code of MediaFile.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics nodeBuiltinImport:off - FileSystem does not expose no-follow
// or non-blocking open flags, and the response must keep the validated descriptor.
import * as NodeFS from "node:fs";
import * as NodeFSP from "node:fs/promises";

export interface OpenMediaFile {
  readonly handle: NodeFSP.FileHandle;
  readonly info: NodeFS.BigIntStats;
}

const realpathLikeFileSystem = (filePath: string) =>
  new Promise<string>((resolve, reject) => {
    NodeFS.realpath(filePath, (error, resolved) => (error ? reject(error) : resolve(resolved)));
  });

export const openValidatedMediaFile = async (
  filePath: string,
  identity: { readonly device: string; readonly inode: string } | undefined,
) => {
  const before = await NodeFSP.lstat(filePath, { bigint: true });
  if (!before.isFile() || before.ino === 0n) return null;
  if (
    identity &&
    (before.dev.toString() !== identity.device || before.ino.toString() !== identity.inode)
  ) {
    return null;
  }

  // Windows lacks these flags; the descriptor/path identity checks still apply.
  const handle = await NodeFSP.open(
    filePath,
    NodeFS.constants.O_RDONLY |
      (NodeFS.constants.O_NOFOLLOW ?? 0) |
      (NodeFS.constants.O_NONBLOCK ?? 0),
  );
  let accepted = false;
  try {
    const info = await handle.stat({ bigint: true });
    if (!info.isFile() || info.dev !== before.dev || info.ino !== before.ino) return null;
    if (
      identity &&
      (info.dev.toString() !== identity.device || info.ino.toString() !== identity.inode)
    ) {
      return null;
    }
    // Match FileSystem.realPath's JS behavior; native realpath expands Windows 8.3 names too.
    if ((await realpathLikeFileSystem(filePath)) !== filePath) return null;
    const after = await NodeFSP.lstat(filePath, { bigint: true });
    if (!after.isFile() || info.dev !== after.dev || info.ino !== after.ino) return null;
    accepted = true;
    return { handle, info } satisfies OpenMediaFile;
  } finally {
    if (!accepted) await handle.close();
  }
};

export const closeMediaFileHandle = (file: OpenMediaFile) => file.handle.close();

export const readMediaFileHandleHeader = async (file: OpenMediaFile, byteCount: number) => {
  const buffer = new Uint8Array(byteCount);
  const { bytesRead } = await file.handle.read(buffer, 0, byteCount, 0);
  return buffer.subarray(0, bytesRead);
};

export const statMediaFileHandle = (file: OpenMediaFile) => file.handle.stat({ bigint: true });

export const createMediaFileReadStream = (file: OpenMediaFile, start: number, end: number) =>
  file.handle.createReadStream({
    autoClose: false,
    start,
    end,
  });
