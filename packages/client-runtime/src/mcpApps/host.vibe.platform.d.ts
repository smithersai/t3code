import { type McpAppReference } from "@t3tools/shared/mcpApp";
export type JsonRpcId = string | number;
export type McpAppDisplayMode = "inline" | "fullscreen" | "pip";
export interface McpAppHostContext {
    readonly theme: "light" | "dark";
    readonly styles: {
        readonly variables: Readonly<Record<string, string>>;
    };
    readonly displayMode: McpAppDisplayMode;
    readonly availableDisplayModes: ReadonlyArray<McpAppDisplayMode>;
    /**
     * `maxHeight` when the host sizes the frame to the app's reported height,
     * `height` when the frame is a fixed box the app must fit (spec
     * "Container Dimensions").
     */
    readonly containerDimensions: {
        readonly width: number;
        readonly maxHeight: number;
    } | {
        readonly width: number;
        readonly height: number;
    };
    readonly platform: "web" | "desktop" | "mobile";
    readonly locale?: string;
    readonly timeZone?: string;
    readonly userAgent?: string;
    readonly deviceCapabilities?: {
        readonly touch?: boolean;
        readonly hover?: boolean;
    };
    readonly safeAreaInsets?: {
        readonly top: number;
        readonly right: number;
        readonly bottom: number;
        readonly left: number;
    };
    readonly toolInfo?: {
        readonly tool: unknown;
    };
}
export type McpAppDownload = {
    readonly _tag: "embedded";
    readonly name: string;
    readonly mimeType: string;
    readonly bytes: Uint8Array;
} | {
    readonly _tag: "link";
    readonly name: string;
    readonly uri: string;
    readonly mimeType?: string;
};
export declare function mcpResourceBytes(content: unknown): Uint8Array | undefined;
export interface McpAppCallToolResult {
    readonly content: ReadonlyArray<unknown>;
    readonly structuredContent?: unknown;
    readonly isError?: boolean | undefined;
    readonly _meta?: unknown;
}
export declare class McpAppHostRefusal extends Error {
}
export interface McpAppHostOptions {
    readonly app: McpAppReference;
    readonly hostVersion: string;
    readonly post: (message: unknown) => void;
    readonly hostContext: () => McpAppHostContext;
    readonly callTool: (input: {
        readonly name: string;
        readonly arguments: Record<string, unknown>;
    }) => Promise<McpAppCallToolResult>;
    readonly readResource: (input: {
        readonly uri: string;
    }) => Promise<unknown>;
    readonly openLink: (url: string) => Promise<void>;
    readonly sendMessage: (text: string) => Promise<void>;
    /** Replaces what this app tells the agent on its next turn; undefined content clears it. */
    readonly updateModelContext: (context: {
        readonly content?: ReadonlyArray<unknown>;
        readonly structuredContent?: Record<string, unknown>;
    }) => Promise<void>;
    readonly requestDisplayMode: (mode: McpAppDisplayMode) => Promise<McpAppDisplayMode>;
    readonly downloadFile: (files: ReadonlyArray<McpAppDownload>) => Promise<void>;
    readonly onRequestTeardown: () => void;
    readonly onSizeChanged: (size: {
        readonly width?: number;
        readonly height?: number;
    }) => void;
}
export interface McpAppHost {
    /** Handles one message the app posted; the caller has already checked its source. */
    readonly receive: (data: unknown) => void;
    readonly setToolCall: (call: {
        readonly arguments: unknown;
        readonly result: McpAppCallToolResult | undefined;
    }) => void;
    readonly updateHostContext: () => void;
    /**
     * Asks the app to wrap up before its document goes away (`ui/resource-teardown`),
     * resolving once it answers or after a short timeout, then disposes the host.
     */
    readonly teardown: () => Promise<void>;
    readonly dispose: () => void;
}
export declare function jsonBytes(value: unknown): number;
export declare function isId(value: unknown): value is JsonRpcId;
/**
 * Providers can report absent fields as null (Codex sends `_meta: null`), which
 * the MCP Apps SDK rejects, dropping the whole notification or response.
 */
export declare function normalizeMcpAppToolResult(result: McpAppCallToolResult): McpAppCallToolResult;
export declare function makeMcpAppHost(options: McpAppHostOptions): McpAppHost;
export declare function downloadName(uri: unknown, name: unknown): string;
export declare function readDownloads(contents: unknown): ReadonlyArray<McpAppDownload> | undefined;
