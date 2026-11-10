// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFS from "node:fs";
import * as NodeNet from "node:net";
import * as NodeReadline from "node:readline";
import type * as NodeStream from "node:stream";

import * as Predicate from "effect/Predicate";

export const statBootstrapFd = (fd: number) => NodeFS.fstatSync(fd);

/** @throws {never} */
export const createBootstrapLineReader = (stream: NodeStream.Readable) =>
  NodeReadline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

export function openBootstrapInputStream(
  fd: number,
  fdPath: string | undefined,
): NodeStream.Readable {
  if (fdPath === undefined) {
    return makeDirectBootstrapStream(fd);
  }

  let streamFd: number | undefined;
  try {
    streamFd = NodeFS.openSync(fdPath, "r");
    return NodeFS.createReadStream("", {
      fd: streamFd,
      encoding: "utf8",
      autoClose: true,
    });
  } catch (error) {
    if (isBootstrapFdPathDuplicationError(error)) {
      if (streamFd !== undefined) {
        NodeFS.closeSync(streamFd);
      }
      return makeDirectBootstrapStream(fd);
    }
    throw error;
  }
}

const makeDirectBootstrapStream = (fd: number): NodeStream.Readable => {
  try {
    return NodeFS.createReadStream("", {
      fd,
      encoding: "utf8",
      autoClose: true,
    });
  } catch {
    const stream = new NodeNet.Socket({
      fd,
      readable: true,
      writable: false,
    });
    stream.setEncoding("utf8");
    return stream;
  }
};

// WSL-inherited stdin pipes cannot be reopened via /proc/self/fd/0 (EACCES),
// so they must be read directly.
const isBootstrapFdPathDuplicationError = Predicate.compose(
  Predicate.hasProperty("code"),
  (_) => _.code === "ENXIO" || _.code === "EINVAL" || _.code === "EPERM" || _.code === "EACCES",
);
