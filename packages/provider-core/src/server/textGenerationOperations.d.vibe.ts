import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { type ChatAttachment, type ModelSelection, TextGenerationError } from "@t3tools/contracts";
import type { ProviderTextGeneration } from "./textGeneration.vibe";
export type Operation = keyof ProviderTextGeneration;
export interface Request<S extends Schema.Top> {
    readonly operation: Operation;
    readonly cwd: string;
    readonly prompt: string;
    readonly outputSchema: S;
    readonly modelSelection: ModelSelection;
    readonly attachments?: ReadonlyArray<ChatAttachment> | undefined;
    /** Investigate cwd with read-only tools across turns; fail if the runner cannot guarantee read-only access. */
    readonly investigate?: {
        readonly timeoutMs: number;
    } | undefined;
}
/** @throws {never} */
export declare const investigationUnsupported: (operation: Operation, provider: string) => TextGenerationError;
export type Runner = <S extends Schema.Top>(request: Request<S>) => Effect.Effect<S["Type"], TextGenerationError, S["DecodingServices"]>;
/** @throws {never} */
export declare const withoutInvestigation: (provider: string, run: Runner) => Runner;
export declare const decodeJsonReply: <S extends Schema.Top>(request: Pick<Request<S>, "operation" | "outputSchema">, provider: string, text: string) => Effect.Effect<S["Type"], TextGenerationError, S["DecodingServices"]>;
/** @throws {never} */
export declare function fromRunner(name: string, run: Runner): ProviderTextGeneration;
