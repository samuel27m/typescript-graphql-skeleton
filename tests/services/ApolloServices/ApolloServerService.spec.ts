import 'reflect-metadata';
import { createApolloServer } from '../../../src/services/ApolloServices/ApolloServerService';

describe('ApolloServiceService', () => {
    it('recipe resolver', async () => {
        const apolloServer = await createApolloServer();
        const query = `{
          recipes {
            id
            title
            description
          }
        }`;

        const result = await apolloServer.executeOperation({
            query,
        });

        expect(result.data).toMatchObject({
            recipes: [
                {
                    id: '1',
                    title: '123',
                    description: ' lol',
                },
            ],
        });
    });
});
