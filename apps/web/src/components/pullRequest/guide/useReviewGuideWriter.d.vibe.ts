import type { EnvironmentId, PullRequestRef } from "@t3tools/contracts";
export declare function useReviewGuideWriter({ environmentId, reference, title, }: {
    environmentId: EnvironmentId;
    reference: PullRequestRef;
    title: string | null;
}): {
    query: import("~/state/query").EnvironmentQueryView<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
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
                    readonly note?: string;
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
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
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
                }[];
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
                    readonly note?: string;
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
    running: boolean;
    canWrite: boolean;
    write: () => Promise<void>;
};
