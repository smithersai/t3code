import type { ProviderInstanceEnvironment, ProviderInstanceId } from "@t3tools/contracts";
import type { AcpRegistrySettings } from "../settings.vibe";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
export declare const makeAcpRegistryAuthenticationState: (input: {
    readonly cacheDir: string;
    readonly instanceId: ProviderInstanceId;
    readonly settings: AcpRegistrySettings;
    readonly environment: ProviderInstanceEnvironment;
    readonly processEnvironment: NodeJS.ProcessEnv;
}) => Effect.Effect<{
    get: Effect.Effect<boolean, never, never>;
    set: (authenticated: boolean) => Effect.Effect<void, never, never>;
}, never, Crypto.Crypto | FileSystem.FileSystem | Path.Path>;
