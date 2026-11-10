// @effect-diagnostics nodeBuiltinImport:off - The ownership lock is a native SQLite handle held for the server's lifetime.
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import * as NodeSqlite from "node:sqlite";

import * as Effect from "effect/Effect";

export type ServerOwnershipLock = NodeSqlite.DatabaseSync;

/** @throws {never} */
export const joinPath = (...segments: ReadonlyArray<string>): string => NodePath.join(...segments);

/** @throws {never} */
export const dirnamePath = (path: string): string => NodePath.dirname(path);

export const openServerOwnershipLock = (stateDir: string) => {
  NodeFS.mkdirSync(stateDir, { recursive: true });
  const db = new NodeSqlite.DatabaseSync(NodePath.join(stateDir, "server-owner.sqlite"));
  try {
    db.exec("PRAGMA busy_timeout = 0; BEGIN EXCLUSIVE;");
  } catch (cause) {
    db.close();
    throw cause;
  }
  return db;
};

export const closeServerOwnershipLock = (db: ServerOwnershipLock) => Effect.sync(() => db.close());
