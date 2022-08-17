import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { createApolloServer } from '../../../src/services/ApolloServices/ApolloServerService';

describe('ApolloServiceService', () => {
    it('creates Apollo Server', async () => {
        const apolloServer = await createApolloServer();
        expect(apolloServer).toBeInstanceOf(ApolloServer);
    });
});
