// @effect-diagnostics nodeBuiltinImport:off - publish commits and rollbacks
// move exact directory entries with rename, which the FileSystem service does
// not expose atomically.
import * as NodeFS from "node:fs";

import * as Effect from "effect/Effect";

export const readProcessId = Effect.sync(() => process.pid);

export function stageThemeFile(stagingPath: string, raw: string) {
  try {
    NodeFS.unlinkSync(stagingPath);
  } catch {}
  const fd = NodeFS.openSync(
    stagingPath,
    NodeFS.constants.O_WRONLY | NodeFS.constants.O_CREAT | NodeFS.constants.O_EXCL,
    0o644,
  );
  try {
    NodeFS.writeFileSync(fd, raw);
    return NodeFS.fstatSync(fd).ino;
  } finally {
    NodeFS.closeSync(fd);
  }
}

export function backUpPublishedTheme(destinationPath: string, backupPath: string) {
  try {
    NodeFS.renameSync(destinationPath, backupPath);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return false;
    throw error;
  }
}

export const revertThemePublish = (
  stagingPath: string,
  destinationPath: string,
  backupPath: string,
  hadPrevious: boolean,
  stagedIno: number,
) =>
  Effect.sync(() => {
    try {
      NodeFS.unlinkSync(stagingPath);
    } catch {}
    try {
      // Only replace this process's inode or an empty destination; concurrent publishers win.
      const destinationIno = (() => {
        try {
          return NodeFS.lstatSync(destinationPath).ino;
        } catch {
          return null;
        }
      })();
      if (hadPrevious) {
        if (destinationIno === null || destinationIno === stagedIno) {
          NodeFS.renameSync(backupPath, destinationPath);
        } else {
          NodeFS.unlinkSync(backupPath);
        }
      } else if (destinationIno === stagedIno) {
        NodeFS.unlinkSync(destinationPath);
      }
    } catch {}
  });

export const cleanupThemeBackup = (hadPrevious: boolean, backupPath: string) =>
  Effect.sync(() => {
    try {
      if (hadPrevious) NodeFS.unlinkSync(backupPath);
    } catch {}
  });

export const renameThemeFile = (stagingPath: string, destinationPath: string) =>
  NodeFS.renameSync(stagingPath, destinationPath);
