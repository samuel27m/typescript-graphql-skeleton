import 'reflect-metadata';
import { createApolloServer } from '../../src/services/ApolloServices/ApolloServerService';
import { Recipe } from '../../src/entities/Recipe';
import { AppDataSource, initialiseDataSource } from '../../src/database';

describe('RecipeResolver', () => {
    beforeAll(async () => {
        await initialiseDataSource();
        // create recipe
        const recipe = new Recipe();
        recipe.title = 'my test';
        recipe.description = 'description test';

        const repository = AppDataSource.getRepository(Recipe);
        await repository.save(recipe);
    });

    afterAll(async () => {
        await AppDataSource.destroy();
    });

    it('gets recipes', async () => {
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

        expect(result.data?.recipes).toHaveLength(1);
    });
});
