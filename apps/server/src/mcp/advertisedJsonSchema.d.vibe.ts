import { Tool } from "effect/ai";
/**
 * The input schema T3 advertises for a tool. Drops JSON noise that every thread pays for:
 * `additionalProperties: true`, safe-integer bounds, nested `anyOf`, JSON-string fallbacks, and
 * the `null` branch of optional properties. A tagged union of objects becomes one object.
 * Decoding still uses the full schema, so each tag's own required fields still apply.
 * @throws {never}
 */
export declare const advertisedJsonSchema: (tool: Tool.Any) => ReturnType<typeof Tool.getJsonSchema>;
