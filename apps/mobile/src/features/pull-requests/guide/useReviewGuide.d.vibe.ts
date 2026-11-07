import { AsyncResult } from "effect/reactivity";
import { type PullRequestParams } from "../usePullRequestDiff.vibe";
/** @throws {never} */
export declare function useReviewGuidesEnabled(params: PullRequestParams): boolean;
/** @throws {never} */
export declare function useReviewGuide(params: PullRequestParams): {
    data: {
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[] | undefined;
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string | undefined;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    } | null;
    successResult: AsyncResult.Success<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[] | undefined;
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string | undefined;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    }, unknown> | null;
    error: string | null;
    failure: unknown;
    isPending: boolean;
    isSuccess: boolean;
    refresh: () => void;
    enabled: boolean;
    canWrite: boolean;
    running: boolean;
    write: () => Promise<void>;
    startError: string | null;
};
