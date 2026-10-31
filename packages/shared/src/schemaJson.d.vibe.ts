import * as Cause from "effect/Cause";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
export declare const decodeJsonResult: <S extends Schema.Codec<unknown, unknown, never, never>>(schema: S) => (input: string) => Result.Result<never, Cause.Cause<Schema.SchemaError>> | Result.Result<S["Type"], never>;
export declare const formatSchemaError: (cause: Cause.Cause<Schema.SchemaError>) => string;
export declare const fromLenientJson: <S extends Schema.Top>(schema: S) => Schema.decodeTo<S, Schema.String, never, never>;
export declare function extractJsonObject(raw: string): string;
export declare const fromJsonStringPretty: <S extends Schema.Top>(schema: S) => Schema.decodeTo<Schema.fromJsonString<S>, Schema.toEncoded<Schema.fromJsonString<S>>, never, never>;
