import type { ThreadId } from "@t3tools/contracts";
import type { HtmlRenderReference } from "@t3tools/shared/htmlRender";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import type { McpProviderSessionConfig } from "./mcpSession.ts";
export interface KeptHtmlRender {
    readonly title: string;
    readonly height: number;
    readonly htmlLength: number;
    readonly htmlHash: string;
    readonly htmlEnd: string;
    readonly reference: HtmlRenderReference;
}
declare const McpProviderSessions_base: Context.ServiceClass<McpProviderSessions, "@t3tools/provider-core/server/McpProviderSessions", {
    readonly set: (config: McpProviderSessionConfig) => Effect.Effect<void>;
    readonly read: (threadId: ThreadId) => Effect.Effect<McpProviderSessionConfig | undefined>;
    readonly clear: (threadId: ThreadId) => Effect.Effect<void>;
    readonly recordHtmlRender: (threadId: ThreadId, input: {
        readonly html: string;
        readonly title: string;
        readonly height: number;
    }, reference: HtmlRenderReference) => Effect.Effect<void>;
    readonly takeHtmlRender: (threadId: ThreadId, input: {
        readonly html?: unknown;
        readonly title?: unknown;
        readonly height?: unknown;
    }, reported?: HtmlRenderReference) => Effect.Effect<HtmlRenderReference | undefined>;
}>;
export declare class McpProviderSessions extends McpProviderSessions_base {
}
export declare const make: Effect.Effect<{
    readonly set: (config: McpProviderSessionConfig) => Effect.Effect<void>;
    readonly read: (threadId: ThreadId) => Effect.Effect<McpProviderSessionConfig | undefined>;
    readonly clear: (threadId: ThreadId) => Effect.Effect<void>;
    readonly recordHtmlRender: (threadId: ThreadId, input: {
        readonly html: string;
        readonly title: string;
        readonly height: number;
    }, reference: HtmlRenderReference) => Effect.Effect<void>;
    readonly takeHtmlRender: (threadId: ThreadId, input: {
        readonly html?: unknown;
        readonly title?: unknown;
        readonly height?: unknown;
    }, reported?: HtmlRenderReference) => Effect.Effect<HtmlRenderReference | undefined>;
}, never, never>;
export {};
