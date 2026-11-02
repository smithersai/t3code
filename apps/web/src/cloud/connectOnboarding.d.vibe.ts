import * as Schema from "effect/Schema";
export declare const CONNECT_ONBOARDING_OPT_OUT_STORAGE_KEY = "t3code:connect-onboarding-opt-out:v1";
export declare const ConnectOnboardingOptOutSchema: Schema.Struct<{
    readonly optOutAccounts: Schema.$Array<Schema.String>;
}>;
export type ConnectOnboardingOptOutState = typeof ConnectOnboardingOptOutSchema.Type;
export declare const EMPTY_CONNECT_ONBOARDING_OPT_OUT_STATE: ConnectOnboardingOptOutState;
