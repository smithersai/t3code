declare const SshHostDiscoveryError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshHostDiscoveryError";
} & Readonly<A>;
export declare class SshHostDiscoveryError extends SshHostDiscoveryError_base<{
    readonly message: string;
    readonly cause: unknown;
}> {
}
declare const SshInvalidTargetError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshInvalidTargetError";
} & Readonly<A>;
export declare class SshInvalidTargetError extends SshInvalidTargetError_base<{
    readonly message: string;
}> {
}
declare const SshCommandError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshCommandError";
} & Readonly<A>;
export declare class SshCommandError extends SshCommandError_base<{
    readonly message: string;
    readonly command: readonly string[];
    readonly exitCode: number | null;
    readonly stderr: string;
    readonly stdout?: string;
    readonly cause?: unknown;
}> {
}
declare const SshLaunchError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshLaunchError";
} & Readonly<A>;
export declare class SshLaunchError extends SshLaunchError_base<{
    readonly message: string;
    readonly stdout: string;
    readonly cause?: unknown;
}> {
}
declare const SshPairingError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshPairingError";
} & Readonly<A>;
export declare class SshPairingError extends SshPairingError_base<{
    readonly message: string;
    readonly stdout: string;
    readonly cause?: unknown;
}> {
}
declare const SshHttpBridgeError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshHttpBridgeError";
} & Readonly<A>;
export declare class SshHttpBridgeError extends SshHttpBridgeError_base<{
    readonly message: string;
    readonly status?: number;
    readonly cause?: unknown;
}> {
}
declare const SshReadinessError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshReadinessError";
} & Readonly<A>;
export declare class SshReadinessError extends SshReadinessError_base<{
    readonly message: string;
    readonly cause?: unknown;
}> {
}
declare const SshPasswordPromptError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SshPasswordPromptError";
} & Readonly<A>;
export declare class SshPasswordPromptError extends SshPasswordPromptError_base<{
    readonly message: string;
    readonly cause?: unknown;
}> {
}
export {};
