import * as SchemaAST from "effect/SchemaAST";
import type { JsonPath } from "./AgentSessionJson.vibe.throwing.js";
export { TranscriptJsonLimitError, createTranscriptJsonReader } from "./AgentSessionJson.vibe.throwing.js";
/** @throws {never} */
export declare function createTranscriptJsonSelector(schema: {
    readonly ast: SchemaAST.AST;
}): 
/** @throws {never} */
(path: JsonPath) => boolean;
