import { TextGenerationError } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
/** @throws {never} */
export declare function toJsonSchemaObject(schema: Schema.Top): unknown;
/** @throws {never} */
export declare function limitSection(value: string, maxChars: number): string;
/** @throws {never} */
export declare function sanitizeCommitSubject(raw: string): string;
/** @throws {never} */
export declare function sanitizePrTitle(raw: string): string;
/** @throws {never} */
export declare function sanitizeThreadTitle(raw: string): string;
/** @throws {never} */
export declare function normalizeCliError(cliName: string, operation: string, error: unknown, fallback: string): TextGenerationError;
