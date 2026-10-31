import * as Schema from "effect/Schema";
/**
 * Opt-in wire form: on each record (top-level array element, top-level object, or `item`), values
 * under `id`, `*Id`, and `*Ids` index the response's `ids` table. Both peers must apply this exact
 * rule; changing it needs a new opt-in (`compactIds=2`, or a new `accept*` key over WS).
 */
type JsonObject = {
    [key: string]: unknown;
};
/**
 * Adds the optional ID table to a snapshot-shaped schema. `container` returns the
 * key whose value holds the records, `null` when records sit at the top level, or
 * `undefined` when the value has no records (other stream item kinds).
 */
export declare const withRecordIdTable: <S extends Schema.Top>(schema: S, container: (value: JsonObject) => string | null | undefined) => Schema.decodeTo<Schema.toCodecJson<S>, Schema.declare<unknown, unknown>, never, never>;
export {};
