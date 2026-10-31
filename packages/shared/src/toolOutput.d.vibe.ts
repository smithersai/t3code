import { type HtmlRenderReference } from "./htmlRender.js";
import { MCP_APP_OUTPUT_KEY, type McpAppReference } from "./mcpApp.vibe";
interface CompactToolOutput {
    isError?: true;
    threadId?: string;
    messageId?: string;
    taskId?: string;
    scheduledTaskId?: string;
    status?: "rolled_back";
    htmlRender?: HtmlRenderReference;
    [MCP_APP_OUTPUT_KEY]?: McpAppReference;
    thread?: {
        threadId: string;
    };
    threads?: Array<{
        threadId?: string;
        status?: "rolled_back";
    }>;
}
export declare function compactDynamicToolOutput(value: unknown): CompactToolOutput | undefined;
export declare function htmlRenderFromToolItem(item: {
    readonly toolName: string | null | undefined;
    readonly output?: unknown;
}): HtmlRenderReference | undefined;
/** Accept app references only when server and tool match the item, so tools cannot impersonate another app source. */
export declare function mcpAppFromToolItem(item: {
    readonly toolName: string | null | undefined;
    readonly output?: unknown;
}): McpAppReference | undefined;
/** Some providers report completion even when command output describes a failure. */
export declare function toolOutputIndicatesFailure(text: string): boolean;
export interface ToolOutputImage {
    readonly mimeType: string;
    readonly data?: string;
}
/** Raster types only, so agent SVG/HTML cannot be served inline. */
export declare function readToolOutputImage(block: unknown): ToolOutputImage | null;
export declare const MAX_TOOL_OUTPUT_IMAGES = 8;
export declare const MAX_TOOL_OUTPUT_IMAGE_BASE64_LENGTH: number;
export declare function toolOutputImageBlocks(value: unknown): ReadonlyArray<unknown>;
/** Order defines the shared tool-output-image asset index. */
export declare function toolOutputImages(value: unknown): ReadonlyArray<ToolOutputImage>;
export declare function omitToolOutputImageData(value: unknown): unknown;
export {};
