/**
 * Reads an atom family key built with `JSON.stringify`. A malformed key throws,
 * as `JSON.parse` does.
 */
export function parseAtomFamilyKey(key: string): unknown {
  return JSON.parse(key);
}
