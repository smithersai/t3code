import * as SchemaAST from "effect/SchemaAST";
import type { JsonPath } from "./AgentSessionJson.vibe.throwing.js";
export { TranscriptJsonLimitError, createTranscriptJsonReader } from "./AgentSessionJson.vibe.throwing.js";
export declare function createTranscriptJsonSelector(schema: {
    readonly ast: SchemaAST.AST;
}): (path: JsonPath) => boolean;
