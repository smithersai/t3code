import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as PlatformError from "effect/PlatformError";
import { SshPasswordPromptError } from "./errors.vibe";
export interface SshPasswordRequest {
    readonly destination: string;
    readonly username: string | null;
    readonly prompt: string;
    readonly attempt: number;
}
interface SshAskpassFile {
    readonly path: string;
    readonly contents: string;
    readonly mode?: number;
}
export interface SshAskpassHelperDescriptor {
    readonly launcherPath: string;
    readonly files: ReadonlyArray<SshAskpassFile>;
}
export interface SshAuthOptions {
    readonly authSecret?: string | null;
    readonly batchMode?: "yes" | "no";
    readonly interactiveAuth?: boolean;
}
export interface SshPasswordPromptShape {
    readonly isAvailable: boolean;
    readonly request: (request: SshPasswordRequest) => Effect.Effect<string | null, SshPasswordPromptError>;
}
declare const SshPasswordPrompt_base: Context.ServiceClass<SshPasswordPrompt, "@t3tools/ssh/auth/SshPasswordPrompt", SshPasswordPromptShape>;
export declare class SshPasswordPrompt extends SshPasswordPrompt_base {
    static readonly disabledLayer: Layer.Layer<SshPasswordPrompt, never, never>;
}
export interface SshChildEnvironmentOptions {
    readonly interactiveAuth?: boolean;
    readonly baseEnv?: NodeJS.ProcessEnv;
    readonly askpassDirectory?: string;
    readonly authSecret?: string | null;
}
export declare const buildSshChildEnvironment: (input?: SshChildEnvironmentOptions | undefined) => Effect.Effect<NodeJS.ProcessEnv, PlatformError.PlatformError, FileSystem.FileSystem | Path.Path>;
/** @throws {never} */
export declare function isSshAuthFailure(error: unknown): boolean;
export {};
