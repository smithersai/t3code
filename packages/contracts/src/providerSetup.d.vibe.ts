import * as Schema from "effect/Schema";
export declare const ProviderSetupInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>;
export type ProviderSetupInput = typeof ProviderSetupInput.Type;
export declare const CodexAuthCallbackInput: Schema.Struct<{
    readonly authorizationUrl: Schema.String;
    readonly returnUrl: Schema.String;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly flowId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type CodexAuthCallbackInput = typeof CodexAuthCallbackInput.Type;
export declare const CodexAuthCallbackState: Schema.Union<readonly [Schema.Struct<{
    readonly phase: Schema.Literal<"ready">;
}>, Schema.Struct<{
    readonly phase: Schema.Literal<"finished">;
    readonly callbackUrl: Schema.String;
}>]>;
export declare const ProviderAuthMethod: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly accountEmail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.NullOr<Schema.String>;
    readonly type: Schema.Literals<readonly ["agent", "terminal", "credentials"]>;
}>;
export type ProviderAuthMethod = typeof ProviderAuthMethod.Type;
export declare const ProviderAuthInteraction: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"browser">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requiresConsent: Schema.Boolean;
    readonly acceptsCallback: Schema.optionalKey<Schema.Boolean>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"deviceCode">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly userCode: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"terminal">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly output: Schema.String;
    readonly outputOffset: Schema.optionalKey<Schema.Int>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"credentials">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly fields: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly secret: Schema.Boolean;
    }>>;
}>]>;
export type ProviderAuthInteraction = typeof ProviderAuthInteraction.Type;
export declare const ProviderAuthResponse: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"browser">;
    readonly action: Schema.Literals<readonly ["accept", "decline"]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"terminal">;
    readonly data: Schema.String;
    readonly size: Schema.optionalKey<Schema.Struct<{
        readonly cols: Schema.Int;
        readonly rows: Schema.Int;
    }>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"credentials">;
    readonly values: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.String>;
}>]>;
export type ProviderAuthResponse = typeof ProviderAuthResponse.Type;
export declare const ProviderAuthStartInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly methodId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly returnUrl: Schema.optionalKey<Schema.String>;
    readonly callbackMode: Schema.optionalKey<Schema.Literals<readonly ["server", "client"]>>;
}>;
export type ProviderAuthStartInput = typeof ProviderAuthStartInput.Type;
export declare const ProviderAuthRespondInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly flowId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly interactionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly response: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"browser">;
        readonly action: Schema.Literals<readonly ["accept", "decline"]>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"terminal">;
        readonly data: Schema.String;
        readonly size: Schema.optionalKey<Schema.Struct<{
            readonly cols: Schema.Int;
            readonly rows: Schema.Int;
        }>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"credentials">;
        readonly values: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.String>;
    }>]>;
}>;
export type ProviderAuthRespondInput = typeof ProviderAuthRespondInput.Type;
export declare const ProviderAuthState: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly phase: Schema.Literals<readonly ["idle", "starting", "waiting", "verifying", "succeeded", "failed", "cancelled"]>;
    readonly flowId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly authorizationUrl: Schema.NullOr<Schema.String>;
    readonly expiresAt: Schema.NullOr<Schema.String>;
    readonly message: Schema.NullOr<Schema.String>;
    readonly methods: Schema.optionalKey<Schema.Codec<readonly {
        readonly id: string;
        readonly accountEmail?: string | undefined;
        readonly name: string;
        readonly description: string | null;
        readonly type: "agent" | "credentials" | "terminal";
    }[], readonly {
        readonly id: string;
        readonly accountEmail?: string | undefined;
        readonly name: string;
        readonly description: string | null;
        readonly type: "agent" | "credentials" | "terminal";
    }[], never, never>>;
    readonly interaction: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"browser">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly requiresConsent: Schema.Boolean;
        readonly acceptsCallback: Schema.optionalKey<Schema.Boolean>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"deviceCode">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly userCode: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"terminal">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly output: Schema.String;
        readonly outputOffset: Schema.optionalKey<Schema.Int>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"credentials">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fields: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly secret: Schema.Boolean;
        }>>;
    }>]>>>, Schema.Unknown, never, never>>;
    readonly credentialOwner: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["provider", "t3"]>>, Schema.Unknown, never, never>>;
}>;
export type ProviderAuthState = typeof ProviderAuthState.Type;
export declare const ProviderAuthCompleteInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly flowId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly callbackUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProviderAuthCompleteInput = typeof ProviderAuthCompleteInput.Type;
export declare const ProviderAuthCancelInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly flowId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProviderAuthCancelInput = typeof ProviderAuthCancelInput.Type;
export declare const ProviderInstallState: Schema.Struct<{
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly operationId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phase: Schema.Literals<readonly ["idle", "downloading", "extracting", "verifying", "succeeded", "failed", "cancelled"]>;
    readonly downloadedBytes: Schema.Int;
    readonly totalBytes: Schema.NullOr<Schema.Int>;
    readonly version: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly installedVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly executablePath: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly source: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["managed", "local"]>>>;
    readonly canRemove: Schema.Boolean;
    readonly message: Schema.NullOr<Schema.String>;
}>;
export type ProviderInstallState = typeof ProviderInstallState.Type;
export declare const ProviderInstallCancelInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly operationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ProviderInstallCancelInput = typeof ProviderInstallCancelInput.Type;
declare const ProviderSetupError_base: Schema.Class<ProviderSetupError, Schema.TaggedStruct<"ProviderSetupError", {
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly operation: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
/** Safe setup failure text. Never include OAuth codes, URLs, or native token data. */
export declare class ProviderSetupError extends ProviderSetupError_base {
    get message(): string;
}
export declare const ChatGptReconnectProfile: Schema.Struct<{
    readonly clientId: Schema.String;
    readonly subject: Schema.optionalKey<Schema.String>;
    readonly email: Schema.optionalKey<Schema.NullOr<Schema.String>>;
    readonly redirectUri: Schema.optionalKey<Schema.String>;
    readonly connectionLabel: Schema.optionalKey<Schema.String>;
    readonly sharingEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly idTokenHint: Schema.optionalKey<Schema.String>;
}>;
export type ChatGptReconnectProfile = typeof ChatGptReconnectProfile.Type;
export declare const ChatGptTransferredProfile: Schema.Struct<{
    readonly registration: Schema.Struct<{
        readonly clientId: Schema.String;
        readonly subject: Schema.optionalKey<Schema.String>;
        readonly email: Schema.optionalKey<Schema.NullOr<Schema.String>>;
        readonly redirectUri: Schema.optionalKey<Schema.String>;
        readonly connectionLabel: Schema.optionalKey<Schema.String>;
        readonly sharingEnabled: Schema.optionalKey<Schema.Boolean>;
        readonly idTokenHint: Schema.optionalKey<Schema.String>;
    }>;
    readonly credentials: Schema.Struct<{
        readonly clientId: Schema.String;
        readonly accessToken: Schema.NonEmptyString;
        readonly refreshToken: Schema.NullOr<Schema.String>;
        readonly idToken: Schema.NonEmptyString;
        readonly issuer: Schema.String;
        readonly expiresAt: Schema.Finite;
        readonly earliestRefreshAt: Schema.NullOr<Schema.Finite>;
        readonly scopes: Schema.$Array<Schema.String>;
        readonly subject: Schema.String;
        readonly email: Schema.NullOr<Schema.String>;
    }>;
}>;
export type ChatGptTransferredProfile = typeof ChatGptTransferredProfile.Type;
export declare const ChatGptReconnectProfileInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly methodId: Schema.String;
}>;
export declare const ChatGptImportProfileInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly profile: Schema.Struct<{
        readonly registration: Schema.Struct<{
            readonly clientId: Schema.String;
            readonly subject: Schema.optionalKey<Schema.String>;
            readonly email: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly redirectUri: Schema.optionalKey<Schema.String>;
            readonly connectionLabel: Schema.optionalKey<Schema.String>;
            readonly sharingEnabled: Schema.optionalKey<Schema.Boolean>;
            readonly idTokenHint: Schema.optionalKey<Schema.String>;
        }>;
        readonly credentials: Schema.Struct<{
            readonly clientId: Schema.String;
            readonly accessToken: Schema.NonEmptyString;
            readonly refreshToken: Schema.NullOr<Schema.String>;
            readonly idToken: Schema.NonEmptyString;
            readonly issuer: Schema.String;
            readonly expiresAt: Schema.Finite;
            readonly earliestRefreshAt: Schema.NullOr<Schema.Finite>;
            readonly scopes: Schema.$Array<Schema.String>;
            readonly subject: Schema.String;
            readonly email: Schema.NullOr<Schema.String>;
        }>;
    }>;
}>;
export declare const ChatGptHandoffInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly attemptId: Schema.String;
    readonly returnUrl: Schema.String;
    readonly profile: Schema.NullOr<Schema.Struct<{
        readonly clientId: Schema.String;
        readonly subject: Schema.optionalKey<Schema.String>;
        readonly email: Schema.optionalKey<Schema.NullOr<Schema.String>>;
        readonly redirectUri: Schema.optionalKey<Schema.String>;
        readonly connectionLabel: Schema.optionalKey<Schema.String>;
        readonly sharingEnabled: Schema.optionalKey<Schema.Boolean>;
        readonly idTokenHint: Schema.optionalKey<Schema.String>;
    }>>;
}>;
export type ChatGptHandoffInput = typeof ChatGptHandoffInput.Type;
export declare const ChatGptHandoffState: Schema.Union<readonly [Schema.Struct<{
    readonly phase: Schema.Literal<"auth">;
    readonly state: Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly phase: Schema.Literals<readonly ["idle", "starting", "waiting", "verifying", "succeeded", "failed", "cancelled"]>;
        readonly flowId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly authorizationUrl: Schema.NullOr<Schema.String>;
        readonly expiresAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.String>;
        readonly methods: Schema.optionalKey<Schema.Codec<readonly {
            readonly id: string;
            readonly accountEmail?: string | undefined;
            readonly name: string;
            readonly description: string | null;
            readonly type: "agent" | "credentials" | "terminal";
        }[], readonly {
            readonly id: string;
            readonly accountEmail?: string | undefined;
            readonly name: string;
            readonly description: string | null;
            readonly type: "agent" | "credentials" | "terminal";
        }[], never, never>>;
        readonly interaction: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"browser">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly requiresConsent: Schema.Boolean;
            readonly acceptsCallback: Schema.optionalKey<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"deviceCode">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly userCode: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"terminal">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly output: Schema.String;
            readonly outputOffset: Schema.optionalKey<Schema.Int>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"credentials">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fields: Schema.$Array<Schema.Struct<{
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly secret: Schema.Boolean;
            }>>;
        }>]>>>, Schema.Unknown, never, never>>;
        readonly credentialOwner: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["provider", "t3"]>>, Schema.Unknown, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly phase: Schema.Literal<"finished">;
    readonly profile: Schema.Struct<{
        readonly registration: Schema.Struct<{
            readonly clientId: Schema.String;
            readonly subject: Schema.optionalKey<Schema.String>;
            readonly email: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly redirectUri: Schema.optionalKey<Schema.String>;
            readonly connectionLabel: Schema.optionalKey<Schema.String>;
            readonly sharingEnabled: Schema.optionalKey<Schema.Boolean>;
            readonly idTokenHint: Schema.optionalKey<Schema.String>;
        }>;
        readonly credentials: Schema.Struct<{
            readonly clientId: Schema.String;
            readonly accessToken: Schema.NonEmptyString;
            readonly refreshToken: Schema.NullOr<Schema.String>;
            readonly idToken: Schema.NonEmptyString;
            readonly issuer: Schema.String;
            readonly expiresAt: Schema.Finite;
            readonly earliestRefreshAt: Schema.NullOr<Schema.Finite>;
            readonly scopes: Schema.$Array<Schema.String>;
            readonly subject: Schema.String;
            readonly email: Schema.NullOr<Schema.String>;
        }>;
    }>;
}>]>;
export type ChatGptHandoffState = typeof ChatGptHandoffState.Type;
export {};
