// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFS from "node:fs";
import * as NodeFSP from "node:fs/promises";
import * as NodePath from "node:path";

import type { WorkflowFileIdentity } from "./workflowFileRead.vibe";

/** @throws {never} */
export function workflowFilesRoot(home: string, configDir?: string): string {
  return NodePath.join(configDir?.trim() || NodePath.join(home, ".claude"), "projects");
}

/** @throws {never} */
export function isAbsolutePath(path: string): boolean {
  return NodePath.isAbsolute(path);
}

/** @throws {never} */
export function pathExtname(path: string): string {
  return NodePath.extname(path);
}

export const pathSep = NodePath.sep;

export const realpath = (path: string): Promise<string> => NodeFSP.realpath(path);

export const readWorkflowFile = async (
  resolved: string,
  input: {
    readonly byteCap: number;
    readonly tail?: boolean;
    readonly fromOffset?: {
      readonly offset: number;
      readonly identity: WorkflowFileIdentity | null;
    };
  },
) => {
  const handle = await NodeFSP.open(
    resolved,
    NodeFS.constants.O_RDONLY | (NodeFS.constants.O_NONBLOCK ?? 0),
  );
  try {
    const stat = await handle.stat();
    if (!stat.isFile()) {
      return { failure: "not-regular-file" as const };
    }
    const pathStat = await NodeFSP.lstat(resolved);
    if (stat.ino !== pathStat.ino || stat.dev !== pathStat.dev) {
      return { failure: "changed-during-read" as const };
    }
    const identity = { dev: stat.dev, ino: stat.ino };
    if (input.fromOffset !== undefined) {
      const previous = input.fromOffset.identity;
      const start =
        previous !== null &&
        previous.dev === identity.dev &&
        previous.ino === identity.ino &&
        input.fromOffset.offset <= stat.size
          ? input.fromOffset.offset
          : 0;
      const buffer = Buffer.alloc(Math.min(stat.size - start, input.byteCap));
      const { bytesRead } = await handle.read(buffer, 0, buffer.length, start);
      const read = buffer.subarray(0, bytesRead);
      // Defer partial lines; skip single over-cap lines so the cursor can advance.
      const lineEnd = read.lastIndexOf(0x0a) + 1;
      const consumed = lineEnd === 0 && bytesRead === input.byteCap ? bytesRead : lineEnd;
      return {
        contents: read.subarray(0, lineEnd).toString("utf8"),
        // Only the cap signals truncation; a half-written last line does not.
        truncated: stat.size - start > input.byteCap,
        startOffset: start,
        endOffset: start + consumed,
        identity,
      };
    }
    const buffer = Buffer.alloc(Math.min(stat.size, input.byteCap + (input.tail ? 1 : 0)));
    const truncated = stat.size > buffer.length;
    const offset = input.tail ? stat.size - buffer.length : 0;
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, offset);
    return {
      contents: buffer.subarray(0, bytesRead).toString("utf8"),
      truncated,
      startOffset: offset,
      endOffset: offset + bytesRead,
      identity,
    };
  } finally {
    await handle.close();
  }
};
