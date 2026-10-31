import { TextGenerationError } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
export declare function toJsonSchemaObject(schema: Schema.Top): unknown;
export declare function limitSection(value: string, maxChars: number): string;
export declare function sanitizeCommitSubject(raw: string): string;
export declare function sanitizePrTitle(raw: string): string;
export declare function sanitizeThreadTitle(raw: string): string;
export declare function normalizeCliError(cliName: string, operation: string, error: unknown, fallback: string): TextGenerationError;
