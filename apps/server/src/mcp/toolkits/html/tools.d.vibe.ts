import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as HtmlRender from "../../../htmlRender/HtmlRender.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
export declare const HtmlPreviewTool: Tool.Tool<"html_preview", {
    readonly parameters: Schema.Struct<{
        readonly html: Schema.String;
        readonly width: Schema.optional<Schema.Int>;
        readonly appearance: Schema.optional<Schema.Literals<readonly ["dark", "light"]>>;
    }>;
    readonly success: Schema.Struct<{
        readonly width: Schema.Int;
        readonly contentHeight: Schema.Int;
        readonly capturedHeight: Schema.Int;
        readonly consoleMessages: Schema.$Array<Schema.Struct<{
            readonly level: Schema.Literals<readonly ["log", "info", "warning", "error"]>;
            readonly text: Schema.String;
        }>>;
        readonly missingImages: Schema.optional<Schema.$Array<Schema.String>>;
        readonly screenshot: Schema.Struct<{
            readonly mimeType: Schema.Literal<"image/png">;
            readonly data: Schema.String;
            readonly width: Schema.Int;
            readonly height: Schema.Int;
        }>;
    }>;
    readonly failure: typeof OrchestratorMcpFailure;
    readonly failureMode: "error";
}, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
export declare const HtmlPreviewToolkit: Toolkit.Toolkit<{
    readonly html_preview: Tool.Tool<"html_preview", {
        readonly parameters: Schema.Struct<{
            readonly html: Schema.String;
            readonly width: Schema.optional<Schema.Int>;
            readonly appearance: Schema.optional<Schema.Literals<readonly ["dark", "light"]>>;
        }>;
        readonly success: Schema.Struct<{
            readonly width: Schema.Int;
            readonly contentHeight: Schema.Int;
            readonly capturedHeight: Schema.Int;
            readonly consoleMessages: Schema.$Array<Schema.Struct<{
                readonly level: Schema.Literals<readonly ["log", "info", "warning", "error"]>;
                readonly text: Schema.String;
            }>>;
            readonly missingImages: Schema.optional<Schema.$Array<Schema.String>>;
            readonly screenshot: Schema.Struct<{
                readonly mimeType: Schema.Literal<"image/png">;
                readonly data: Schema.String;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "error";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
export declare const HtmlRenderToolkit: Toolkit.Toolkit<{
    readonly html_render: Tool.Tool<"html_render", {
        readonly parameters: Schema.Struct<{
            readonly html: Schema.String;
            readonly title: Schema.String;
            readonly height: Schema.Int;
        }>;
        readonly success: Schema.Struct<{
            readonly htmlRender: Schema.Struct<{
                readonly attachmentId: Schema.String;
                readonly title: Schema.String;
                readonly height: Schema.Number;
                readonly heights: Schema.optional<Schema.$Array<Schema.Tuple<readonly [Schema.Int, Schema.Int]>>>;
            }>;
            readonly message: Schema.String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
export declare const HtmlToolkit: Toolkit.Toolkit<{
    readonly html_preview: Tool.Tool<"html_preview", {
        readonly parameters: Schema.Struct<{
            readonly html: Schema.String;
            readonly width: Schema.optional<Schema.Int>;
            readonly appearance: Schema.optional<Schema.Literals<readonly ["dark", "light"]>>;
        }>;
        readonly success: Schema.Struct<{
            readonly width: Schema.Int;
            readonly contentHeight: Schema.Int;
            readonly capturedHeight: Schema.Int;
            readonly consoleMessages: Schema.$Array<Schema.Struct<{
                readonly level: Schema.Literals<readonly ["log", "info", "warning", "error"]>;
                readonly text: Schema.String;
            }>>;
            readonly missingImages: Schema.optional<Schema.$Array<Schema.String>>;
            readonly screenshot: Schema.Struct<{
                readonly mimeType: Schema.Literal<"image/png">;
                readonly data: Schema.String;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "error";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
    readonly html_render: Tool.Tool<"html_render", {
        readonly parameters: Schema.Struct<{
            readonly html: Schema.String;
            readonly title: Schema.String;
            readonly height: Schema.Int;
        }>;
        readonly success: Schema.Struct<{
            readonly htmlRender: Schema.Struct<{
                readonly attachmentId: Schema.String;
                readonly title: Schema.String;
                readonly height: Schema.Number;
                readonly heights: Schema.optional<Schema.$Array<Schema.Tuple<readonly [Schema.Int, Schema.Int]>>>;
            }>;
            readonly message: Schema.String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | ThreadManagementService.ThreadManagementService>;
}>;
