import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as HtmlRender from "../../../htmlRender/HtmlRender.ts";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
import * as McpToolAccess from "../../McpToolAccess.ts";
export declare const layerPreview: McpToolAccess.HandlersLayer<{
    readonly html_preview: import("effect/ai/Tool").Tool<"html_preview", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly html: import("effect/Schema").String;
            readonly width: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly appearance: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["dark", "light"]>>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly width: import("effect/Schema").Int;
            readonly contentHeight: import("effect/Schema").Int;
            readonly capturedHeight: import("effect/Schema").Int;
            readonly consoleMessages: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly level: import("effect/Schema").Literals<readonly ["log", "info", "warning", "error"]>;
                readonly text: import("effect/Schema").String;
            }>>;
            readonly missingImages: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").String>>;
            readonly screenshot: import("effect/Schema").Struct<{
                readonly mimeType: import("effect/Schema").Literal<"image/png">;
                readonly data: import("effect/Schema").String;
                readonly width: import("effect/Schema").Int;
                readonly height: import("effect/Schema").Int;
            }>;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "error";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
}, never, never>;
export declare const layerRender: McpToolAccess.HandlersLayer<{
    readonly html_render: import("effect/ai/Tool").Tool<"html_render", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly html: import("effect/Schema").String;
            readonly title: import("effect/Schema").String;
            readonly height: import("effect/Schema").Int;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly htmlRender: import("effect/Schema").Struct<{
                readonly attachmentId: import("effect/Schema").String;
                readonly title: import("effect/Schema").String;
                readonly height: import("effect/Schema").Number;
                readonly heights: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").Tuple<readonly [import("effect/Schema").Int, import("effect/Schema").Int]>>>;
            }>;
            readonly message: import("effect/Schema").String;
        }>;
        readonly failure: typeof OrchestratorMcpFailure;
        readonly failureMode: "return";
    }, HtmlRender.HtmlRender | McpInvocationContext.McpInvocationContext | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
}, never, never>;
