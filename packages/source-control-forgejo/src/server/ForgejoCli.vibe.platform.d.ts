import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as FileSystem from "effect/FileSystem";
import { HttpClient } from "effect/http";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import type { SourceControlProviderContext } from "@t3tools/source-control-core/server/SourceControlProvider";
declare const ForgejoCliError_base: Schema.Class<ForgejoCliError, Schema.TaggedStruct<"ForgejoCliError", {
    readonly command: Schema.Literals<readonly ["fj", "tea"]>;
    readonly cwd: Schema.String;
    readonly detail: Schema.String;
    readonly reason: Schema.optional<Schema.Literals<readonly ["missing-cli", "authentication", "forbidden", "not-found", "rate-limit", "invalid-response"]>>;
    readonly httpStatus: Schema.optional<Schema.Int>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ForgejoCliError extends ForgejoCliError_base {
}
export declare const ForgejoLoginSchema: Schema.Struct<{
    readonly name: Schema.String;
    readonly url: Schema.String;
    readonly ssh_host: Schema.optional<Schema.String>;
    readonly valid: Schema.optional<Schema.String>;
    readonly user: Schema.String;
    readonly default: Schema.String;
}>;
export declare function parseForgejoLogins(raw: string): readonly {
    readonly name: string;
    readonly url: string;
    readonly ssh_host?: string | undefined;
    readonly valid?: string | undefined;
    readonly user: string;
    readonly default: string;
}[];
export declare const ForgejoKeysSchema: Schema.Struct<{
    readonly hosts: Schema.$Record<Schema.String, Schema.Struct<{
        readonly type: Schema.Literals<readonly ["Application", "OAuth"]>;
        readonly token: Schema.String;
    }>>;
    readonly aliases: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
}>;
export declare function forgejoKeysPaths(input: {
    readonly platform: string;
    readonly home: string;
    readonly dataHome?: string;
    readonly appData?: string;
}): string[];
export interface ForgejoRepositoryInput {
    readonly cwd: string;
    readonly context?: SourceControlProviderContext;
    readonly repository?: string;
    readonly reference?: string;
    readonly host?: string;
}
export interface ForgejoRepository {
    readonly command?: "fj" | "tea";
    readonly login: string;
    readonly repository: string;
    readonly baseUrl: string;
}
export interface ForgejoApiInput extends ForgejoRepositoryInput {
    readonly path: string;
    readonly method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    readonly body?: unknown;
}
declare const ForgejoCli_base: Context.ServiceClass<ForgejoCli, "@t3tools/source-control-forgejo/server/ForgejoCli", {
    readonly execute: (input: {
        readonly command?: "fj" | "tea";
        readonly cwd: string;
        readonly args: ReadonlyArray<string>;
        readonly stdin?: string;
        readonly timeoutMs?: number;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, ForgejoCliError>;
    readonly listLogins?: (input: {
        readonly cwd: string;
        readonly command: "fj" | "tea";
        readonly remoteUrl?: string;
    }) => Effect.Effect<ReturnType<typeof parseForgejoLogins>, ForgejoCliError>;
    readonly getAccount?: (input: {
        readonly cwd: string;
        readonly baseUrl: string;
    }) => Effect.Effect<string, ForgejoCliError>;
    readonly resolveRepository: (input: ForgejoRepositoryInput) => Effect.Effect<ForgejoRepository, ForgejoCliError>;
    readonly api: (input: ForgejoApiInput) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, ForgejoCliError>;
}>;
export declare class ForgejoCli extends ForgejoCli_base {
}
export declare function parseForgejoRemote(value: string): {
    host: string;
    hostname: string;
    ssh: boolean;
    path: string;
} | null;
export declare function matchForgejoLogin(logins: ReturnType<typeof parseForgejoLogins>, remote: NonNullable<ReturnType<typeof parseForgejoRemote>>, requestedHost?: string, hostOnly?: boolean): {
    readonly name: string;
    readonly url: string;
    readonly ssh_host?: string | undefined;
    readonly valid?: string | undefined;
    readonly user: string;
    readonly default: string;
} | undefined;
export declare const make: Effect.Effect<{
    readonly execute: (input: {
        readonly command?: "fj" | "tea";
        readonly cwd: string;
        readonly args: ReadonlyArray<string>;
        readonly stdin?: string;
        readonly timeoutMs?: number;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, ForgejoCliError>;
    readonly listLogins?: (input: {
        readonly cwd: string;
        readonly command: "fj" | "tea";
        readonly remoteUrl?: string;
    }) => Effect.Effect<ReturnType<typeof parseForgejoLogins>, ForgejoCliError>;
    readonly getAccount?: (input: {
        readonly cwd: string;
        readonly baseUrl: string;
    }) => Effect.Effect<string, ForgejoCliError>;
    readonly resolveRepository: (input: ForgejoRepositoryInput) => Effect.Effect<ForgejoRepository, ForgejoCliError>;
    readonly api: (input: ForgejoApiInput) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, ForgejoCliError>;
}, never, FileSystem.FileSystem | HttpClient.HttpClient | SourceControlHost.SourceControlHost>;
export {};
