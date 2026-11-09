/**
 * The commit slot of a diff cache key. The service builds every diff cache key with
 * `JSON.stringify([reference, cursor, commit, updatedAt])`, so parsing it cannot fail.
 * @throws {never}
 */
export function diffCacheKeyCommit(key: string): unknown {
  return (JSON.parse(key) as ReadonlyArray<unknown>)[2];
}
