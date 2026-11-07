export { discoverCursorSkills, probeCursorSkills } from "./skills.vibe.platform.js";
/**
 * Cursor invokes Agent Skills with `/name`; T3 composers insert `$name`.
 * @throws {never}
 */
export declare function hasCursorSkillMention(prompt: string): boolean;
/** @throws {never} */
export declare function rewriteCursorSkillMentions(prompt: string, skillNames: ReadonlySet<string>): string;
