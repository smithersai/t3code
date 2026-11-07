import * as Crypto from "@t3tools/shared/Crypto";
import * as Layer from "effect/Layer";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as EffectAcpErrors from "effect-acp/errors";
import { AcpSessionRuntime } from "./AcpSessionRuntime.vibe.platform.js";
import type { AcpSessionRuntimeOptions } from "./AcpSessionRuntime.vibe.platform.js";
export { AcpProcessGroupTerminationError, AcpSessionRuntime, capturePosixOwnershipLedger, isSafeCgroupPath, make, makeLinuxCgroupController, makePosixProcessTreeController, observePosixOwnershipLedger, parseCgroup2Mounts, parseUnifiedCgroupPath, posixProcessIsZombie, resolveLinuxCgroupTargetCommand, selectAcpAgentAuthMethod, signalLinuxCgroupRootTerm, sweepStaleLinuxCgroupSiblings, terminateLinuxCgroupLease, terminatePosixOwnedProcessTree, wrapCommandForLinuxCgroup, } from "./AcpSessionRuntime.vibe.platform.js";
export type { AcpLinuxCgroupController, AcpLinuxCgroupLease, AcpOwnedPosixProcess, AcpPosixOwnershipRoot, AcpPosixProcessIdentity, AcpPosixProcessTreeController, AcpSessionActivationOptions, AcpSessionEventStreamBarrier, AcpSessionRequestLogEvent, AcpSessionRuntimeEvent, AcpSessionRuntimeOptions, AcpSessionRuntimeStartResult, AcpSpawnInput, SweepStaleLinuxCgroupSiblingsOptions, } from "./AcpSessionRuntime.vibe.platform.js";
/** @throws {never} */
export declare function parseCgroup2Mount(contents: string): {
    readonly mountPoint: string;
    readonly root: string;
} | undefined;
export declare const layer: (options: AcpSessionRuntimeOptions) => Layer.Layer<AcpSessionRuntime, EffectAcpErrors.AcpError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
