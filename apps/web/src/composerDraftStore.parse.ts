/**
 * Reads the persisted composer drafts that zustand's storage wrote with `JSON.stringify`. Malformed
 * storage throws, as `JSON.parse` does; zustand's rehydration catches it.
 */
export function parsePersistedComposerState(raw: string): unknown {
  return JSON.parse(raw);
}
