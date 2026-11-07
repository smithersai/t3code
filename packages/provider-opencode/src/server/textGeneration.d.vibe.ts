import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
import * as OpenCodeServerOwner from "./OpenCodeServerOwner.vibe";
declare const OpenCodeTextGenerationSessionRequestError_base: Schema.Class<OpenCodeTextGenerationSessionRequestError, Schema.TaggedStruct<"OpenCodeTextGenerationSessionRequestError", {
    readonly operation: Schema.Literals<readonly ["generateCommitMessage", "generatePrContent", "generateBranchName", "generateThreadTitle", "generateReviewGuide"]>;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class OpenCodeTextGenerationSessionRequestError extends OpenCodeTextGenerationSessionRequestError_base {
    get message(): string;
}
declare const OpenCodeTextGenerationSessionPayloadError_base: Schema.Class<OpenCodeTextGenerationSessionPayloadError, Schema.TaggedStruct<"OpenCodeTextGenerationSessionPayloadError", {
    operation: Schema.Literals<readonly ["generateCommitMessage", "generatePrContent", "generateBranchName", "generateThreadTitle", "generateReviewGuide"]>;
    cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class OpenCodeTextGenerationSessionPayloadError extends OpenCodeTextGenerationSessionPayloadError_base {
    get message(): string;
}
declare const OpenCodeTextGenerationPromptRequestError_base: Schema.Class<OpenCodeTextGenerationPromptRequestError, Schema.TaggedStruct<"OpenCodeTextGenerationPromptRequestError", {
    readonly operation: Schema.Literals<readonly ["generateCommitMessage", "generatePrContent", "generateBranchName", "generateThreadTitle", "generateReviewGuide"]>;
    readonly cwd: Schema.String;
    readonly sessionId: Schema.String;
    readonly providerId: Schema.String;
    readonly modelId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class OpenCodeTextGenerationPromptRequestError extends OpenCodeTextGenerationPromptRequestError_base {
    get message(): string;
}
declare const OpenCodeTextGenerationPromptResponseError_base: Schema.Class<OpenCodeTextGenerationPromptResponseError, Schema.TaggedStruct<"OpenCodeTextGenerationPromptResponseError", {
    readonly operation: Schema.Literals<readonly ["generateCommitMessage", "generatePrContent", "generateBranchName", "generateThreadTitle", "generateReviewGuide"]>;
    readonly cwd: Schema.String;
    readonly sessionId: Schema.String;
    readonly providerId: Schema.String;
    readonly modelId: Schema.String;
    readonly providerErrorName: Schema.optional<Schema.String>;
    readonly providerMessage: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class OpenCodeTextGenerationPromptResponseError extends OpenCodeTextGenerationPromptResponseError_base {
    get message(): string;
}
declare const OpenCodeTextGenerationEmptyOutputError_base: Schema.Class<OpenCodeTextGenerationEmptyOutputError, Schema.TaggedStruct<"OpenCodeTextGenerationEmptyOutputError", {
    readonly operation: Schema.Literals<readonly ["generateCommitMessage", "generatePrContent", "generateBranchName", "generateThreadTitle", "generateReviewGuide"]>;
    readonly cwd: Schema.String;
    readonly sessionId: Schema.String;
    readonly providerId: Schema.String;
    readonly modelId: Schema.String;
    readonly responsePartCount: Schema.Int;
    readonly textPartCount: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class OpenCodeTextGenerationEmptyOutputError extends OpenCodeTextGenerationEmptyOutputError_base {
    get message(): string;
}
export declare const makeOpenCodeTextGeneration: (openCodeSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly serverUrl: string;
    readonly serverPassword: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}) => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, OpenCodeRuntime.OpenCodeRuntime | OpenCodeServerOwner.OpenCodeServerOwner | ProviderHost.ProviderHost>;
export {};
