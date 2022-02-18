import { apolloServer } from '../../../src/services/ApolloServices/ApolloServerService';

describe('ApolloServiceService', () => {
    it('hello resolver', async () => {
        const query = `{ hello }`;

        const result = await apolloServer.executeOperation({
            query,
        });

        expect(result.data).toMatchObject({
            hello: 'world',
        });
    });
});
