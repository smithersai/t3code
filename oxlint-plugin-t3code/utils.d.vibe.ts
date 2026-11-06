import type { ESTree } from "@oxlint/plugins";
import * as Option from "effect/Option";
type AstNode = ESTree.Node;
/** @throws {never} */
export declare function unwrapExpression(node: unknown): Option.Option<AstNode>;
/** @throws {never} */
export declare function getPropertyName(node: unknown): Option.Option<string>;
/** @throws {never} */
export declare function isIdentifier(node: Option.Option<AstNode>, name?: string): boolean;
export {};
