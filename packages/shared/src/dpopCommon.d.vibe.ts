import * as Schema from "effect/Schema";
export declare const DpopPublicJwk: Schema.Struct<{
    readonly kty: Schema.Literal<"EC">;
    readonly crv: Schema.Literal<"P-256">;
    readonly x: Schema.String;
    readonly y: Schema.String;
}>;
export type DpopPublicJwk = typeof DpopPublicJwk.Type;
export declare function normalizeDpopHtu(url: string): string | null;
