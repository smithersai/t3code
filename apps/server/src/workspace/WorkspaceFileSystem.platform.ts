// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFS from "node:fs";
import * as NodeFSP from "node:fs/promises";

import type * as Path from "effect/Path";
import * as Effect from "effect/Effect";

import { fileHeaderMimeType } from "./fileHeaderMimeType.ts";

// NTFS reaches .git through trailing dots/spaces, stream suffixes and GIT~1; compare uppercased names.
const isGitMetadataName = (segment: string) => {
  const name = (segment.split(":")[0] ?? "").replace(/[. ]+$/, "").toUpperCase();
  return name === ".GIT" || name === "GIT~1";
};

export const readFileHeaderMimeType = async (expandedPath: string) => {
  const handle = await NodeFSP.open(
    expandedPath,
    NodeFS.constants.O_RDONLY | NodeFS.constants.O_NONBLOCK,
  );
  try {
    if (!(await handle.stat()).isFile()) return undefined;
    const buffer = Buffer.alloc(512);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    return fileHeaderMimeType(buffer.subarray(0, bytesRead));
  } finally {
    await handle.close();
  }
};

// Reject Git folders, including renamed bare repos whose config/hooks can execute; paths must be normalized.
// Stop at linked worktrees' .git files since worktrees can sit inside bare repos.
export const isInGitFolderAt = async (path: Path.Path, absolutePath: string) => {
  if (absolutePath.split(path.sep).some(isGitMetadataName)) return true;
  for (let folder = path.dirname(absolutePath); ; folder = path.dirname(folder)) {
    const [head, commondir, objects, refs, dotGit] = await Promise.all(
      ["HEAD", "commondir", "objects", "refs", ".git"].map((name) =>
        NodeFSP.lstat(path.join(folder, name)).catch((error: NodeJS.ErrnoException) => {
          // Any other failure leaves the folder unknown, so the write is refused.
          if (error.code === "ENOENT" || error.code === "ENOTDIR") return null;
          throw error;
        }),
      ),
    );
    // Git recognizes HEAD with commondir or objects/refs as a repository.
    if (head && (commondir || (objects && refs))) return true;
    if (dotGit?.isFile() || path.dirname(folder) === folder) return false;
  }
};

export const resolveReadRealPath = async (
  path: Path.Path,
  target: { readonly absolutePath: string },
  input: { readonly allowMissing?: boolean | undefined },
) => {
  let candidate = target.absolutePath;
  for (;;) {
    try {
      return {
        realTargetPath: path.join(
          await NodeFSP.realpath(candidate),
          path.relative(candidate, target.absolutePath),
        ),
        exists: candidate === target.absolutePath,
      };
    } catch (error) {
      if (!input.allowMissing || (error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
      // Like writes, missing reads must check the nearest existing ancestor.
      // An existing entry that cannot resolve is a dangling link, not absence.
      const exists = await NodeFSP.lstat(candidate).then(
        () => true,
        (cause: NodeJS.ErrnoException) => {
          if (cause.code !== "ENOENT") throw cause;
          return false;
        },
      );
      if (exists || path.dirname(candidate) === candidate) throw error;
      candidate = path.dirname(candidate);
    }
  }
};

export const resolveWriteRealPath = async (
  path: Path.Path,
  realWorkspaceRoot: string,
  segments: ReadonlyArray<string>,
) => {
  for (let depth = segments.length; depth > 0; depth--) {
    const candidate = path.join(realWorkspaceRoot, ...segments.slice(0, depth));
    try {
      return path.join(await NodeFSP.realpath(candidate), ...segments.slice(depth));
    } catch (error) {
      // Only a missing entry is skipped; one that exists but cannot resolve is a dangling link.
      const exists = await NodeFSP.lstat(candidate).then(
        () => true,
        () => false,
      );
      if ((error as NodeJS.ErrnoException).code !== "ENOENT" || exists) throw error;
    }
  }
  return path.join(realWorkspaceRoot, ...segments);
};

export const realPath = (path: string) => NodeFSP.realpath(path);

// Non-blocking opens prevent FIFO hangs before stat rejects them; Windows lacks the flag.
export const openForRead = (path: string) =>
  NodeFSP.open(path, NodeFS.constants.O_RDONLY | (NodeFS.constants.O_NONBLOCK ?? 0));

export const allocateBuffer = (size: number) => Effect.sync(() => Buffer.alloc(size));

// A symlink swapped in after the check is not followed. Windows lacks O_NOFOLLOW.
export const writeFileNoFollow = (path: string, contents: string) =>
  NodeFSP.writeFile(path, contents, {
    flag:
      NodeFS.constants.O_WRONLY |
      NodeFS.constants.O_CREAT |
      NodeFS.constants.O_TRUNC |
      (NodeFS.constants.O_NOFOLLOW ?? 0),
  });
