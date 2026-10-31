import * as Path from "effect/Path";
import { type ProviderUsageReader, type TranscriptUsageFormat } from "@t3tools/provider-core/server/usage";
import type { MuseSettings } from "../settings.vibe";
import * as MuseUsageHome from "./MuseUsageHome.js";
export declare const museUsageFormat: TranscriptUsageFormat<unknown>;
export declare const museUsageReader: ProviderUsageReader<MuseSettings, Path.Path | MuseUsageHome.MuseUsageHome>;
