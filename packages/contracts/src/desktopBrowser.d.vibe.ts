import * as Schema from "effect/Schema";
export declare const DesktopBrowserEvent: Schema.Union<readonly [Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"attached">;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"detached">;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"cdp">;
    readonly message: Schema.String;
}>]>;
export type DesktopBrowserEvent = typeof DesktopBrowserEvent.Type;
export declare const DesktopBrowserCommand: Schema.Union<readonly [Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"cdp">;
    readonly message: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"release">;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"pointer">;
    readonly phase: Schema.Literals<readonly ["move", "click"]>;
    readonly x: Schema.Finite;
    readonly y: Schema.Finite;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"turn">;
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly active: Schema.Boolean;
}>]>;
export type DesktopBrowserCommand = typeof DesktopBrowserCommand.Type;
