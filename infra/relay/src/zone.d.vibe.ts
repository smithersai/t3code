import * as Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
export declare const RelayDeploymentConfig: Effect.Effect<{
    stage: string;
    relayPublicDomain: string;
    relayPublicOrigin: string;
    relayApiZoneName: string;
    managedEndpointZoneName: string;
}, Config.ConfigError, Alchemy.Stack>;
export declare const ManagedEndpointZone: Effect.Effect<Cloudflare.Zone.Zone, Config.ConfigError, Cloudflare.Providers | Alchemy.Stack>;
export declare const RelayApiZone: Effect.Effect<Cloudflare.Zone.Zone, Config.ConfigError, Cloudflare.Providers | Alchemy.Stack>;
