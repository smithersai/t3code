import { Flag } from "effect/cli";
import { AuthGrantScope } from "@t3tools/contracts";
/** @throws {never} */
export declare const authScopesFlag: (defaults: ReadonlyArray<AuthGrantScope>) => Flag.Flag<("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[]>;
