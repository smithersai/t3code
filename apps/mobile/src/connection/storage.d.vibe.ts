import { Persistence } from "@t3tools/client-runtime/platform";
import { TokenStore } from "@t3tools/client-runtime/authorization";
import { CredentialStore, ProfileStore } from "@t3tools/client-runtime/connection";
import * as Layer from "effect/Layer";
export declare const layer: Layer.Layer<CredentialStore.ConnectionCredentialStore | ProfileStore.ConnectionProfileStore | Persistence.ConnectionRegistrationStore | Persistence.ConnectionTargetStore | TokenStore.RemoteDpopAccessTokenStore, import("@t3tools/client-runtime/connection").ConnectionAttemptError, import("../persistence/mobile-secure-storage.vibe").MobileSecureStorage>;
