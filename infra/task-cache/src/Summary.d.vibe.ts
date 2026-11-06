import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
export declare const Summary: Schema.Struct<{
    readonly id: Schema.String;
    readonly recordedAt: Schema.Number;
    readonly host: Schema.String;
    readonly platform: Schema.String;
    readonly arch: Schema.String;
    readonly ci: Schema.Boolean;
    readonly runId: Schema.String;
    readonly tasks: Schema.$Array<Schema.Struct<{
        readonly package: Schema.String;
        readonly task: Schema.String;
        readonly source: Schema.Literals<readonly ["local", "remote", "unspecified", "executed", "failed"]>;
        readonly savedMs: Schema.Number;
    }>>;
}>;
export declare const recordSummary: (summary: {
    readonly id: string;
    readonly recordedAt: number;
    readonly host: string;
    readonly platform: string;
    readonly arch: string;
    readonly ci: boolean;
    readonly runId: string;
    readonly tasks: readonly {
        readonly package: string;
        readonly task: string;
        readonly source: "executed" | "failed" | "local" | "remote" | "unspecified";
        readonly savedMs: number;
    }[];
}, developer: string) => Effect.Effect<void, never, never>;
