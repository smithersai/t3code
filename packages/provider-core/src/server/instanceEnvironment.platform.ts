/** @throws {never} */
export function readProcessEnv(): NodeJS.ProcessEnv {
  return process.env;
}
