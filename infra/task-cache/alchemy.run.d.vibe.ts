import * as Alchemy from "alchemy";
import * as Axiom from "@alchemy.run/axiom";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";
declare const _default: Effect.Effect<Alchemy.CompiledStack<{
    url: Alchemy.Output<string | undefined, never>;
    workerName: Alchemy.Output<string, never>;
    dashboard: Alchemy.Output<string, never>;
}, any>, import("effect/Config").ConfigError, never> & {
    readonly stackName: string;
} & Alchemy.StackProps<NoInfer<Axiom.Providers | Cloudflare.Providers | Alchemy.Stack>>;
export default _default;
