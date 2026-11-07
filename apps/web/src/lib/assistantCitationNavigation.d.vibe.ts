import type { AssistantCitation } from "@t3tools/contracts";
declare module "@tanstack/react-router" {
    interface HistoryState {
        assistantCitationActivation?: string;
    }
}
/** Base64url keeps router hash normalization from decoding quote whitespace or source IDs. */
export declare function assistantCitationHash(citation: AssistantCitation): string;
export declare function assistantCitationFromLocation(href: string): {
    readonly version: 1;
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
    readonly text: string;
    readonly comment?: string | undefined;
    readonly start: number;
    readonly end: number;
    readonly prefix: string;
    readonly suffix: string;
} | null;
/** A fresh activation lets the same link reveal its source again after dismissal. */
export declare function assistantCitationNavigation(citation: AssistantCitation): {
    to: "/$environmentId/$threadId";
    params: {
        environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        threadId: string & import("effect/Brand").Brand<"ThreadId">;
    };
    hash: string;
    resetScroll: boolean;
    state: {
        assistantCitationActivation: string;
    };
};
