import { Atom } from "effect/reactivity";
import { type HighlightedLines, type HighlightScheme } from "../../lib/highlights";
export interface SourceHighlightInput {
    readonly path: string;
    readonly contents: string;
    readonly theme: HighlightScheme;
}
declare const SourceHighlightError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "SourceHighlightError";
} & Readonly<A>;
declare class SourceHighlightError extends SourceHighlightError_base<{
    readonly cause: unknown;
}> {
}
export declare const sourceHighlightAtom: (input: SourceHighlightInput) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<HighlightedLines, SourceHighlightError>>;
export {};
