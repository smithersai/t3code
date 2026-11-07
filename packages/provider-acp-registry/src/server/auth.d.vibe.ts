import { ProviderSetupError, type ProviderInstanceId } from "@t3tools/contracts";
import type { AcpRegistrySettings } from "../settings.vibe";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as AcpRegistrySupport from "./AcpRegistrySupport.ts";
import * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
type Runtime = Pick<AcpSessionRuntime.AcpSessionRuntime["Service"], "initialize" | "authenticate" | "start" | "handleElicitation" | "logout">;
export declare const makeAcpRegistryAuth: (options: {
    readonly instanceId: ProviderInstanceId;
    readonly settings: AcpRegistrySettings;
    readonly cwd: string;
    readonly environment: NodeJS.ProcessEnv;
    readonly onChanged: (authenticated: boolean) => Effect.Effect<void>;
    readonly makeRuntime?: (spawn: AcpSessionRuntime.AcpSpawnInput) => Effect.Effect<Runtime, ProviderSetupError, Scope.Scope>;
}) => Effect.Effect<import("@t3tools/provider-core/server/auth").ProviderAuthController, never, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | Scope.Scope>;
export {};
