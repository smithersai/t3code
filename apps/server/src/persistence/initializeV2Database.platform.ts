import * as NodeSqlite from "node:sqlite";

export async function snapshotLegacyDatabase(
  sourcePath: string,
  snapshotPath: string,
): Promise<void> {
  const database = new NodeSqlite.DatabaseSync(sourcePath, { readOnly: true });
  try {
    await NodeSqlite.backup(database, snapshotPath);
  } finally {
    database.close();
  }
}
