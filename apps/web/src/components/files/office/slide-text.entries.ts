// Adapted from opencode (MIT). Copyright (c) 2025 opencode. See LICENSE.opencode.
/** A file in the deck's zip package: where its central directory record and its local data sit. */
export type Entry = {
  readonly name: string;
  readonly record: number;
  readonly length: number;
  readonly local: number;
};

/**
 * The central directory's records, from `directory` up to the end record at `end`; undefined when one is malformed: it
 * runs past the directory, or its local header does not sit before it.
 */
export function readEntries(view: DataView, directory: number, end: number, count: number) {
  const decoder = new TextDecoder();

  return Array.from({ length: count }).reduce<{ at: number; entries: Entry[] } | undefined>(
    (state) => {
      if (!state || state.at + 46 > end || view.getUint32(state.at, true) !== 0x02014b50)
        return undefined;

      const nameLength = view.getUint16(state.at + 28, true);
      const length =
        46 + nameLength + view.getUint16(state.at + 30, true) + view.getUint16(state.at + 32, true);
      const local = view.getUint32(state.at + 42, true);

      // A local header is 30 bytes before its name and data.
      if (state.at + length > end || local + 30 > directory) return undefined;

      const name = decoder.decode(
        new Uint8Array(view.buffer, view.byteOffset + state.at + 46, nameLength),
      );

      state.entries.push({ name, record: state.at, length, local });

      return { at: state.at + length, entries: state.entries };
    },
    { at: directory, entries: [] },
  )?.entries;
}
