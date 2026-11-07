import type { SdkCredentialStore } from "@cursor/sdk";
import { type ProviderInstanceId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
export declare const makeCursorCredentialStore: (instanceId: ProviderInstanceId, legacyFile?: string | undefined) => Effect.Effect<{
    store: SdkCredentialStore;
    binding: {
        readonly owner: "t3";
        readonly key: string;
    };
}, never, FileSystem.FileSystem | ProviderHost.ProviderHost>;
