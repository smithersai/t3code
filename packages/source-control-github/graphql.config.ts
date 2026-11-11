// graphqlgen loads graphql.config.ts by name; the configuration is defined in graphql.config.main.vibe.
import "vibelang/register";

export default (await import("./graphql.config.main.vibe")).default;
