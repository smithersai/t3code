import type { AuthMcpClientAccess, EnvironmentId } from "@t3tools/contracts";
import * as Result from "effect/Result";
/**
 * A fresh pairing code minted on `environmentId` with this client's session
 * there, for linking with `access`. Fails with `PeerPairingCodeError` when the
 * session may not create one.
 */
export declare function mintPairingCodeOn(environmentId: EnvironmentId, access: AuthMcpClientAccess): Promise<Result.Result<string, unknown>>;
