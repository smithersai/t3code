import * as SchemaAST from "effect/SchemaAST";
type JsonPath = ReadonlyArray<string | number | null>;
export declare function createTranscriptJsonSelector(schema: {
    readonly ast: SchemaAST.AST;
}): (path: JsonPath) => boolean;
export declare class TranscriptJsonLimitError extends Error {
}
export declare function createTranscriptJsonReader(reserve: (bytes: number) => void, selectPath: (path: JsonPath) => boolean, options?: {
    readonly maxDepth?: number;
}): {
    write: (chunk: string) => void;
    finish: () => unknown;
};
export {};
