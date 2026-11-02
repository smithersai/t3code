import type { ESTree } from "@oxlint/plugins";
import * as Option from "effect/Option";
type AstNode = ESTree.Node;
export declare function unwrapExpression(node: unknown): Option.Option<AstNode>;
export declare function getPropertyName(node: unknown): Option.Option<string>;
export declare function isIdentifier(node: Option.Option<AstNode>, name?: string): boolean;
export {};
