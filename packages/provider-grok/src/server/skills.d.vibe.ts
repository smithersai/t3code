export { discoverGrokSkills } from "./skills.vibe.platform.js";
/**
 * A message opening with a mention, such as `deploy` and ` ship it` for `$deploy ship it`.
 * @throws {never}
 */
export declare function leadingGrokSkillMention(text: string): {
    readonly name: string;
    readonly rest: string;
} | undefined;
