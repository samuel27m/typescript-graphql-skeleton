import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RecipeResolver } from '../../resolvers/RecipeResolver';

async function createApolloServer(): Promise<ApolloServer> {
    const schema = await buildSchema({
        resolvers: [RecipeResolver],
    });
    return new ApolloServer({
        schema: schema,
    });
}

export { createApolloServer };
