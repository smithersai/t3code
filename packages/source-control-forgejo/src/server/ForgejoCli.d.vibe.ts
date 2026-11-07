import * as Layer from "effect/Layer";
import { ForgejoCli } from "./ForgejoCli.vibe.platform.js";
export { ForgejoCli, ForgejoCliError, ForgejoKeysSchema, ForgejoLoginSchema, make, matchForgejoLogin, parseForgejoLogins, parseForgejoRemote, } from "./ForgejoCli.vibe.platform.js";
export type { ForgejoApiInput, ForgejoRepository, ForgejoRepositoryInput } from "./ForgejoCli.vibe.platform.js";
export declare const layer: Layer.Layer<ForgejoCli, never, import("effect/FileSystem").FileSystem | import("effect/http/HttpClient").HttpClient | import("@t3tools/source-control-core/server/SourceControlHost").SourceControlHost>;
