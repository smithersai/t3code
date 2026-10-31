import * as Schema from "effect/Schema";
export declare const TextGenerationPolicyKind: Schema.Literals<readonly ["default", "conventional_commits", "repo_conventions", "custom"]>;
export type TextGenerationPolicyKind = typeof TextGenerationPolicyKind.Type;
export declare const TextGenerationPolicy: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["default", "conventional_commits", "repo_conventions", "custom"]>;
    readonly commitInstructions: Schema.optional<Schema.String>;
    readonly changeRequestInstructions: Schema.optional<Schema.String>;
    readonly branchInstructions: Schema.optional<Schema.String>;
    readonly inferRepositoryConventions: Schema.Boolean;
}>;
export type TextGenerationPolicy = typeof TextGenerationPolicy.Type;
