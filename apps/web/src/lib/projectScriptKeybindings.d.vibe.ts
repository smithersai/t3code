import { type KeybindingCommand, type ResolvedKeybindingsConfig } from "@t3tools/contracts";
export { PROJECT_SCRIPT_KEYBINDING_INVALID_MESSAGE, decodeProjectScriptKeybindingRule } from "./projectScriptKeybindings.vibe.throwing.js";
export declare function keybindingValueForCommand(keybindings: ResolvedKeybindingsConfig, command: KeybindingCommand | null): string | null;
