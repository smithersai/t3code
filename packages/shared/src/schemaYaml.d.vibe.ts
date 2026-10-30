import * as Schema from "effect/Schema";
import { type CreateNodeOptions, type DocumentOptions, type ParseOptions, type SchemaOptions, type ToJSOptions, type ToStringOptions } from "yaml";
export type YamlParseOptions = ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions;
export type YamlStringifyOptions = DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions & ToStringOptions;
export declare const fromYaml: <S extends Schema.Top>(schema: S) => Schema.decodeTo<S, Schema.String, never, never>;
