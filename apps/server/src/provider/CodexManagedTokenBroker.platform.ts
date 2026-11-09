// @effect-diagnostics nodeBuiltinImport:off - Server-owned private pipe/Unix socket, never a public listener.
import * as NodeFSP from "node:fs/promises";
import * as NodeNet from "node:net";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";

// Stay below macOS's 104-byte and Linux's 108-byte sockaddr_un limits, including NUL.
const UNIX_SOCKET_PATH_BYTES = 100;

export const acquireTokenEndpoint = async (platform: string, uid: number | undefined) => {
  if (platform === "win32") return { endpoint: `\\\\.\\pipe\\t3-token-${NodeCrypto.randomUUID()}` };
  if (uid === undefined) throw new Error("Missing IPC owner");
  const acquireDirectory = async (candidate: string) => {
    const parent = await NodeFSP.realpath(candidate);
    const stat = await NodeFSP.lstat(parent);
    if (
      !stat.isDirectory() ||
      stat.isSymbolicLink() ||
      !(
        (stat.uid === uid && (stat.mode & 0o022) === 0) ||
        (stat.uid === 0 && ((stat.mode & 0o022) === 0 || (stat.mode & 0o1000) !== 0))
      )
    )
      throw new Error("Untrusted IPC parent");
    const directory = await NodeFSP.mkdtemp(NodePath.join(parent, "t3-token-"));
    try {
      await NodeFSP.chmod(directory, 0o700);
      const created = await NodeFSP.lstat(directory);
      if (
        !created.isDirectory() ||
        created.isSymbolicLink() ||
        created.uid !== uid ||
        (created.mode & 0o777) !== 0o700
      )
        throw new Error("Unprotected IPC directory");
      const endpoint = NodePath.join(directory, "s");
      if (Buffer.byteLength(endpoint) > UNIX_SOCKET_PATH_BYTES)
        throw new Error("IPC path too long");
      return { endpoint, directory, created };
    } catch (error) {
      await NodeFSP.rmdir(directory);
      throw error;
    }
  };
  return acquireDirectory(NodeOS.tmpdir()).catch(() => acquireDirectory("/tmp"));
};

export type TokenEndpoint = Awaited<ReturnType<typeof acquireTokenEndpoint>>;

export const releaseTokenEndpoint = async (owned: TokenEndpoint): Promise<void> => {
  if (!("directory" in owned)) return;
  // Never recursively remove a replaced directory or another process's files.
  const current = await NodeFSP.lstat(owned.directory).catch(() => undefined);
  if (
    current &&
    current.dev === owned.created.dev &&
    current.ino === owned.created.ino &&
    !current.isSymbolicLink()
  )
    await NodeFSP.rmdir(owned.directory).catch(() => undefined);
};

/** @throws {never} */
export function createTokenServer(onSocket: (socket: NodeNet.Socket) => void): NodeNet.Server {
  return NodeNet.createServer(onSocket);
}

export const closeTokenServer = (server: NodeNet.Server): Promise<void> =>
  new Promise<void>((resolve) => server.close(() => resolve()));

export const listenTokenServer = <E>(
  server: NodeNet.Server,
  endpoint: string,
  onFailure: (cause: unknown) => E,
): Effect.Effect<void, E> =>
  Effect.callback<void, E>((resume) => {
    const onError = (cause: Error) => resume(Effect.fail(onFailure(cause)));
    server.once("error", onError);
    try {
      server.listen(endpoint, () => resume(Effect.void));
    } catch (cause) {
      resume(Effect.fail(onFailure(cause)));
    }
    return Effect.sync(() => server.off("error", onError));
  });

export const protectTokenEndpoint = (endpoint: string): Promise<void> =>
  NodeFSP.chmod(endpoint, 0o600);
