import * as Context from "effect/Context";
declare const WebCrypto_base: Context.ServiceClass<WebCrypto, "t3code-relay/WebCrypto", {
    readonly subtle: SubtleCrypto;
}>;
export declare class WebCrypto extends WebCrypto_base {
}
export {};
