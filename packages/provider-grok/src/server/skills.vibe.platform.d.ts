import type { ServerProviderSkill } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
declare const GrokSkillsProbeError_base: Schema.Class<GrokSkillsProbeError, Schema.TaggedStruct<"GrokSkillsProbeError", {
    readonly stage: Schema.Literals<readonly ["spawn", "timeout", "exit", "decode"]>;
    readonly cwd: Schema.optional<Schema.String>;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class GrokSkillsProbeError extends GrokSkillsProbeError_base {
    get message(): string;
}
export declare function decodeGrokInspectSkills(stdout: string): ReadonlyArray<ServerProviderSkill> | undefined;
export declare const discoverGrokSkills: (grokSettings: Pick<{
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, "binaryPath">, environment?: NodeJS.ProcessEnv | undefined, cwd?: string | undefined) => Effect.Effect<readonly {
    readonly name: string;
    readonly description?: string | undefined;
    readonly path: string;
    readonly scope?: string | undefined;
    readonly enabled: boolean;
    readonly displayName?: string | undefined;
    readonly shortDescription?: string | undefined;
    readonly userInvocationOnly?: boolean | undefined;
    readonly userInvocable?: boolean | undefined;
}[], GrokSkillsProbeError, import("effect/process/ChildProcessSpawner").ChildProcessSpawner>;
export {};
