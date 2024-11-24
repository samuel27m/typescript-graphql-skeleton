import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { RecipeResolver } from '../../graphql/resolvers/RecipeResolver';

async function getSchema() {
    return buildSchema({
        resolvers: [RecipeResolver],
        validate: true,
    });
}

async function createApolloServer(): Promise<ApolloServer> {
    return new ApolloServer({
        schema: await getSchema(),
    });
}

export { getSchema, createApolloServer };
