import { AssistantCitation } from "@t3tools/contracts";
/** @throws {never} */
export declare function withAssistantCitationComment(citation: AssistantCitation, comment: string): AssistantCitation;
/** @throws {never} */
export declare function formatAssistantCitationHref(citation: AssistantCitation): string;
/** @throws {never} */
export declare function parseAssistantCitationHref(href: string): AssistantCitation | null;
/** @throws {never} */
export declare function assistantCitationLabel(citation: AssistantCitation): string;
/** @throws {never} */
export declare function serializeAssistantCitation(citation: AssistantCitation): string;
/** @throws {never} */
export declare function collectAssistantCitations(text: string): {
    citation: AssistantCitation;
    source: string;
    start: number;
    end: number;
}[];
/** @throws {never} */
export declare function assistantCitationsToPlainText(prompt: string): string;
/** @throws {never} */
export declare function expandAssistantCitationsForProvider(prompt: string): string;
/** @throws {never} */
export declare function renderAssistantCitationsAsText(prompt: string): string;
