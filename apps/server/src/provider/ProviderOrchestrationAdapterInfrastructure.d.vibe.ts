import * as Layer from "effect/Layer";
import * as ClaudeAdapterV2 from "../orchestration-v2/Adapters/ClaudeAdapterV2.js";
import * as CodexAdapterV2 from "../orchestration-v2/Adapters/CodexAdapterV2.js";
import * as CursorAgentSdk from "@t3tools/provider-cursor/server/CursorAgentSdk";
import * as CursorSdk from "@t3tools/provider-cursor/server/CursorSdk";
import * as CursorKeychain from "@t3tools/provider-cursor/server/CursorKeychain";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
export type ProviderOrchestrationAdapterInfrastructure = ClaudeAdapterV2.ClaudeAgentSdkQueryRunner | CodexAdapterV2.CodexAppServerClientFactory | CursorAgentSdk.CursorAgentSdkRunner | CursorSdk.CursorSdk | CursorKeychain.CursorKeychain | IdAllocator.IdAllocatorV2;
/** Reuse the continuation worker's exact layer reference so memoization shares one queue. */
export declare const layer: Layer.Layer<ClaudeAdapterV2.ClaudeAgentSdkQueryRunner | CodexAdapterV2.CodexAppServerClientFactory | CursorAgentSdk.CursorAgentSdkRunner | CursorKeychain.CursorKeychain | CursorSdk.CursorSdk | IdAllocator.IdAllocatorV2, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | import("@t3tools/shared/Crypto").Crypto | import("effect/Path").Path | import("../preview/PortScanner.js").PortDiscovery | import("@t3tools/provider-core/server/ProviderEventLoggers").ProviderEventLoggers>;
