import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { HttpClient } from "effect/http";
declare const ChatGptCatalogError_base: Schema.Class<ChatGptCatalogError, Schema.TaggedStruct<"ChatGptCatalogError", {
    readonly status: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class ChatGptCatalogError extends ChatGptCatalogError_base {
}
export declare const chatGptModels: (accessToken: string, nativeModels: readonly {
    readonly slug: string;
    readonly name: string;
    readonly shortName?: string | undefined;
    readonly subProvider?: string | undefined;
    readonly aliases?: readonly string[] | undefined;
    readonly badge?: "new" | undefined;
    readonly isCustom: boolean;
    readonly isDefault?: boolean | undefined;
    readonly isLegacy?: boolean | undefined;
    readonly capabilities: {
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
    } | null;
}[]) => Effect.Effect<{
    shortName?: string | undefined;
    subProvider?: string | undefined;
    aliases?: readonly string[] | undefined;
    badge?: "new" | undefined;
    isDefault?: boolean | undefined;
    isLegacy?: boolean | undefined;
    capabilities: {
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
    } | null;
    slug: string;
    name: string;
    isCustom: false;
}[], ChatGptCatalogError | import("effect/http/HttpClientError").HttpClientError | Schema.SchemaError | import("effect/Cause").TimeoutError, HttpClient.HttpClient>;
export {};
