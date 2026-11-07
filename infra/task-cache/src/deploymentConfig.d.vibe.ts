import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Config from "effect/Config";
import * as FileSystem from "effect/FileSystem";
export declare const WriterSecrets: Layer.Layer<never, Config.ConfigError | import("effect/PlatformError").PlatformError | Schema.SchemaError, FileSystem.FileSystem>;
