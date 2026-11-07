import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function createShellEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    openInEditor: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly cwd: string;
                readonly editor: "antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed";
                readonly reveal?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").ExternalLauncherBrowserSpawnError | import("@t3tools/contracts").ExternalLauncherCommandNotFoundError | import("@t3tools/contracts").ExternalLauncherEditorSpawnError | import("@t3tools/contracts").ExternalLauncherUnknownEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedTargetError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
