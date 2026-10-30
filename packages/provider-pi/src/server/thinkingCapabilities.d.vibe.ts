import { type ModelCapabilities } from "@t3tools/contracts";
declare const PI_THINKING_LEVELS: readonly ["off", "minimal", "low", "medium", "high", "xhigh", "max"];
export type PiThinkingLevel = (typeof PI_THINKING_LEVELS)[number];
export declare const EMPTY_PI_MODEL_CAPABILITIES: ModelCapabilities;
export declare function thinkingCapabilitiesForPiModel(model: unknown, defaultThinkingLevel: unknown): ModelCapabilities;
export {};
