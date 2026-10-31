import { AssistantCitation } from "@t3tools/contracts";
export declare function withAssistantCitationComment(citation: AssistantCitation, comment: string): AssistantCitation;
export declare function formatAssistantCitationHref(citation: AssistantCitation): string;
export declare function parseAssistantCitationHref(href: string): AssistantCitation | null;
export declare function assistantCitationLabel(citation: AssistantCitation): string;
export declare function serializeAssistantCitation(citation: AssistantCitation): string;
export declare function collectAssistantCitations(text: string): {
    citation: AssistantCitation;
    source: string;
    start: number;
    end: number;
}[];
export declare function assistantCitationsToPlainText(prompt: string): string;
export declare function expandAssistantCitationsForProvider(prompt: string): string;
export declare function renderAssistantCitationsAsText(prompt: string): string;
