export declare const MCP_APP_PROTOCOL_VERSION = "2026-01-26";
export declare const MCP_APP_MIME_TYPE = "text/html;profile=mcp-app";
export declare const MCP_APP_EXTENSION_ID = "io.modelcontextprotocol/ui";
export declare const MCP_APP_RESOURCE_SCHEME = "ui://";
export declare const MCP_APP_OUTPUT_KEY = "t3McpApp";
export declare const MCP_APP_DEFAULT_HEIGHT = 320;
export declare const MCP_APP_MAX_HEIGHT = 2000;
export declare const MCP_APP_MAX_HTML_BYTES: number;
export interface McpAppCsp {
    readonly connectDomains?: ReadonlyArray<string>;
    readonly resourceDomains?: ReadonlyArray<string>;
    readonly frameDomains?: ReadonlyArray<string>;
    readonly baseUriDomains?: ReadonlyArray<string>;
}
export interface McpAppPermissions {
    readonly camera?: Record<string, never>;
    readonly microphone?: Record<string, never>;
    readonly geolocation?: Record<string, never>;
    readonly clipboardWrite?: Record<string, never>;
}
export interface McpAppReference {
    readonly attachmentId: string;
    readonly server: string;
    readonly tool: string;
    readonly resourceUri: string;
    readonly csp?: McpAppCsp;
    readonly permissions?: McpAppPermissions;
    readonly prefersBorder?: boolean;
}
export declare function readMcpAppCsp(value: unknown): McpAppCsp | undefined;
export declare function readMcpAppPermissions(value: unknown): McpAppPermissions | undefined;
export declare function readMcpAppReference(value: unknown): McpAppReference | undefined;
export declare function mcpAppReferencesEqual(left: McpAppReference, right: McpAppReference): boolean;
export declare function readMcpAppResourceUri(meta: unknown): string | undefined;
export declare function mcpAppToolCallableByApp(meta: unknown): boolean;
/** Block undeclared origins, including self, which would expose T3's API. */
export declare function mcpAppContentSecurityPolicy(csp: McpAppCsp | undefined): string;
/** The route's sandbox header keeps origins opaque; the document CSP can only tighten it. */
export declare function injectMcpAppCsp(html: string, csp: McpAppCsp | undefined): string;
/** Opaque origins require authenticating bridge messages by parent window. */
export declare function injectMcpAppThemeBootstrap(html: string): string;
/** Opaque documents throw on cookie reads; analytics startup often expects an empty string instead. */
export declare function injectMcpAppCookieBootstrap(html: string): string;
export declare function mcpAppAllowAttribute(permissions: McpAppPermissions | undefined): string;
export declare function clampMcpAppHeight(height: number): number;
export declare function mcpAppFileName(reference: McpAppReference): string;
