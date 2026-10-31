import * as Schema from "effect/Schema";
export declare const ThreadTitleRegeneration: Schema.Struct<{
    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly startedAt: Schema.String;
}>;
export type ThreadTitleRegeneration = typeof ThreadTitleRegeneration.Type;
