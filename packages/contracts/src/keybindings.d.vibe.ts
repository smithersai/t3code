import * as Schema from "effect/Schema";
export declare const MAX_WHEN_EXPRESSION_DEPTH = 64;
export declare const MAX_SCRIPT_ID_LENGTH = 24;
export declare const MAX_KEYBINDINGS_COUNT = 256;
export declare const THREAD_JUMP_KEYBINDING_COMMANDS: readonly ["thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"];
export type ThreadJumpKeybindingCommand = (typeof THREAD_JUMP_KEYBINDING_COMMANDS)[number];
export declare const MODEL_PICKER_JUMP_KEYBINDING_COMMANDS: readonly ["modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9"];
export type ModelPickerJumpKeybindingCommand = (typeof MODEL_PICKER_JUMP_KEYBINDING_COMMANDS)[number];
declare const THREAD_KEYBINDING_COMMANDS: readonly ["thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"];
export type ThreadKeybindingCommand = (typeof THREAD_KEYBINDING_COMMANDS)[number];
declare const MODEL_PICKER_KEYBINDING_COMMANDS: readonly ["modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9"];
export type ModelPickerKeybindingCommand = (typeof MODEL_PICKER_KEYBINDING_COMMANDS)[number];
export declare const STATIC_KEYBINDING_COMMANDS: readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"];
export declare const SCRIPT_RUN_COMMAND_PATTERN: Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>;
export declare const KeybindingCommand: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
export type KeybindingCommand = typeof KeybindingCommand.Type;
export declare const KeybindingValue: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const KeybindingWhen: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const KeybindingRule: Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly when: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type KeybindingRule = typeof KeybindingRule.Type;
export declare const KeybindingsConfig: Schema.$Array<Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly when: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>>;
export type KeybindingsConfig = typeof KeybindingsConfig.Type;
export declare const KeybindingShortcut: Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly metaKey: Schema.Boolean;
    readonly ctrlKey: Schema.Boolean;
    readonly shiftKey: Schema.Boolean;
    readonly altKey: Schema.Boolean;
    readonly modKey: Schema.Boolean;
}>;
export type KeybindingShortcut = typeof KeybindingShortcut.Type;
export declare const PreviewForwardedShortcut: Schema.Struct<{
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly shortcut: Schema.Struct<{
        readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly metaKey: Schema.Boolean;
        readonly ctrlKey: Schema.Boolean;
        readonly shiftKey: Schema.Boolean;
        readonly altKey: Schema.Boolean;
        readonly modKey: Schema.Boolean;
    }>;
}>;
export type PreviewForwardedShortcut = typeof PreviewForwardedShortcut.Type;
export declare const KeybindingWhenNode: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"identifier">;
    readonly name: Schema.NonEmptyString;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"not">;
    readonly node: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"and">;
    readonly left: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
    readonly right: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"or">;
    readonly left: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
    readonly right: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
}>]>;
export type KeybindingWhenNode = {
    type: "identifier";
    name: string;
} | {
    type: "not";
    node: KeybindingWhenNode;
} | {
    type: "and";
    left: KeybindingWhenNode;
    right: KeybindingWhenNode;
} | {
    type: "or";
    left: KeybindingWhenNode;
    right: KeybindingWhenNode;
};
export declare const ResolvedKeybindingRule: Schema.Struct<{
    readonly command: Schema.Union<readonly [Schema.Literals<readonly ["sidebar.toggle", "navigation.back", "navigation.forward", "terminal.toggle", "terminal.split", "terminal.splitVertical", "terminal.new", "terminal.close", "rightPanel.toggle", "rightPanel.new", "threadPanel.toggle", "rightPanel.toggleMaximized", "rightPanel.close", "view.reopenClosed", "pullRequest.copyNumber", "diff.toggle", "preview.toggle", "preview.refresh", "preview.focusUrl", "preview.zoomIn", "preview.zoomOut", "preview.resetZoom", "commandPalette.toggle", "filePicker.toggle", "projectSearch.toggle", "usage.open", "theme.select", "appearance.cycle", "themeEditor.toggle", "composer.stash", "composer.sendAlternate", "composer.sendBackground", "composer.sendAndNewThread", "composer.host", "composer.cycleHost", "composer.effort", "composer.increaseEffort", "composer.decreaseEffort", "composer.mode", "composer.workspace", "composer.previousWorktree", "composer.branch", "chat.new", "chat.newLocal", "chat.newWithoutProject", "chat.find", "editor.openFavorite", "usage.cost", "usage.tokens", "usage.limits", "usage.period.day", "usage.period.week", "usage.period.month", "usage.period.quarter", "modelPicker.toggle", "modelPicker.previousProvider", "modelPicker.nextProvider", "modelPicker.jump.1", "modelPicker.jump.2", "modelPicker.jump.3", "modelPicker.jump.4", "modelPicker.jump.5", "modelPicker.jump.6", "modelPicker.jump.7", "modelPicker.jump.8", "modelPicker.jump.9", "thread.stop", "thread.steerQueuedMessage", "thread.editQueuedMessage", "thread.previous", "thread.next", "thread.copyReference", "thread.settle", "thread.pin", "thread.undo", "thread.jump.1", "thread.jump.2", "thread.jump.3", "thread.jump.4", "thread.jump.5", "thread.jump.6", "thread.jump.7", "thread.jump.8", "thread.jump.9"]>, Schema.TemplateLiteral<readonly [Schema.Literal<"script.">, Schema.NonEmptyString, Schema.Literal<".run">]>]>;
    readonly shortcut: Schema.Struct<{
        readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly metaKey: Schema.Boolean;
        readonly ctrlKey: Schema.Boolean;
        readonly shiftKey: Schema.Boolean;
        readonly altKey: Schema.Boolean;
        readonly modKey: Schema.Boolean;
    }>;
    readonly whenAst: Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"identifier">;
        readonly name: Schema.NonEmptyString;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"not">;
        readonly node: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"and">;
        readonly left: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
        readonly right: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"or">;
        readonly left: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
        readonly right: Schema.suspend<Schema.Codec<KeybindingWhenNode, KeybindingWhenNode, never, never>>;
    }>]>>;
}>;
export type ResolvedKeybindingRule = typeof ResolvedKeybindingRule.Type;
/** Drops undecodable rules without failing the connection. */
export declare const ResolvedKeybindingsConfig: Schema.Codec<readonly {
    readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
    readonly shortcut: {
        readonly key: string;
        readonly metaKey: boolean;
        readonly ctrlKey: boolean;
        readonly shiftKey: boolean;
        readonly altKey: boolean;
        readonly modKey: boolean;
    };
    readonly whenAst?: {
        readonly type: "identifier";
        readonly name: string;
    } | {
        readonly type: "not";
        readonly node: KeybindingWhenNode;
    } | {
        readonly type: "and";
        readonly left: KeybindingWhenNode;
        readonly right: KeybindingWhenNode;
    } | {
        readonly type: "or";
        readonly left: KeybindingWhenNode;
        readonly right: KeybindingWhenNode;
    } | undefined;
}[], readonly {
    readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
    readonly shortcut: {
        readonly key: string;
        readonly metaKey: boolean;
        readonly ctrlKey: boolean;
        readonly shiftKey: boolean;
        readonly altKey: boolean;
        readonly modKey: boolean;
    };
    readonly whenAst?: {
        readonly type: "identifier";
        readonly name: string;
    } | {
        readonly type: "not";
        readonly node: KeybindingWhenNode;
    } | {
        readonly type: "and";
        readonly left: KeybindingWhenNode;
        readonly right: KeybindingWhenNode;
    } | {
        readonly type: "or";
        readonly left: KeybindingWhenNode;
        readonly right: KeybindingWhenNode;
    } | undefined;
}[], never, never>;
export type ResolvedKeybindingsConfig = typeof ResolvedKeybindingsConfig.Type;
declare const KeybindingsConfigError_base: Schema.Class<KeybindingsConfigError, Schema.TaggedStruct<"KeybindingsConfigParseError", {
    readonly configPath: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class KeybindingsConfigError extends KeybindingsConfigError_base {
    get message(): string;
}
export {};
