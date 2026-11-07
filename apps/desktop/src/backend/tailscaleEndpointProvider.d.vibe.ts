import type { AdvertisedEndpoint } from "@t3tools/contracts";
import { type TailscaleStatus } from "@t3tools/tailscale";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import type { NetworkInterfaces } from "./DesktopNetworkInterfaces.vibe";
export declare const resolveTailscaleAdvertisedEndpoints: (input: {
    readonly port: number;
    readonly serveEnabled?: boolean;
    readonly servePort?: number;
    readonly networkInterfaces: NetworkInterfaces;
    readonly statusJson?: string | null;
    readonly readStatus?: Effect.Effect<(TailscaleStatus | null), never, ChildProcessSpawner.ChildProcessSpawner>;
    readonly probe?: (baseUrl: string) => Effect.Effect<boolean, never, HttpClient.HttpClient>;
}) => Effect.Effect<readonly AdvertisedEndpoint[], never, ChildProcessSpawner.ChildProcessSpawner | HttpClient.HttpClient>;
