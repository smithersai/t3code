import { type ProviderApprovalDecision, type RuntimeRequestId } from "@t3tools/contracts";
import { type ThreadUserInputQuestion } from "@t3tools/client-runtime/state/thread-requests";
export declare function useSelectedThreadRequests(): {
    activePendingApproval: import("@t3tools/client-runtime/state/thread-requests").ThreadPendingApproval | null;
    activePendingApprovals: readonly import("@t3tools/client-runtime/state/thread-requests").ThreadPendingApproval[];
    activePendingUserInput: import("@t3tools/client-runtime/state/thread-requests").ThreadPendingUserInput | null;
    activePendingUserInputDrafts: {
        [k: string]: {
            attachmentCount: number;
            attachmentsBlocked: boolean;
        } | {
            selectedOptionValues?: ReadonlyArray<string>;
            customAnswer?: string;
            attachmentCount: number;
            attachmentsBlocked: boolean;
        } | {
            customAnswer: string;
            attachmentCount: number;
            attachmentsBlocked: boolean;
        };
    };
    activePendingUserInputAnswers: Record<string, string | readonly string[]> | null;
    respondingApprovalId: (string & import("effect/Brand").Brand<"RuntimeRequestId">) | null;
    respondingUserInputId: (string & import("effect/Brand").Brand<"RuntimeRequestId">) | null;
    onRespondToApproval: (requestId: RuntimeRequestId, decision: ProviderApprovalDecision, feedback?: string) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
        readonly sequence: number;
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").OrchestrationV2DispatchCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError> | undefined>;
    onSelectUserInputOption: (requestId: RuntimeRequestId, question: ThreadUserInputQuestion, value: string) => void;
    onChangeUserInputCustomAnswer: (requestId: RuntimeRequestId, questionId: string, customAnswer: string) => void;
    onSubmitUserInput: () => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
        readonly sequence: number;
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").OrchestrationV2DispatchCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError> | undefined>;
    onDismissUserInput: () => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
        readonly sequence: number;
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").OrchestrationV2DispatchCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError> | undefined>;
};
