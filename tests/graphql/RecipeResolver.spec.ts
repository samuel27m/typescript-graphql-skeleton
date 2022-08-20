import 'reflect-metadata';
import { createApolloServer } from '../../src/services/ApolloServices/ApolloServerService';
import { AppDataSource, initialiseDataSource, destroyDataSource } from '../../src/database';
import { Recipe } from '../../src/entities/Recipe';

jest.mock('../../src/database');

describe('RecipeResolver', () => {
    beforeEach(async () => {
        await initialiseDataSource();
    });

    afterEach(async () => {
        await destroyDataSource();
    });

    it('adds a recipe', async () => {
        const title = 'another one';
        const apolloServer = await createApolloServer();
        const query = `mutation {
          addRecipe(data: {title: "${title}"}) {
            id,
            title,
            description
          }
        }`;

        const result = await apolloServer.executeOperation({
            query,
        });

        const addedRecipe = result.data?.addRecipe;

        expect(addedRecipe).not.toBeNull();
        expect(addedRecipe.title).toEqual(title);
        expect(addedRecipe.description).toBeNull();
    });

    it('gets recipes', async () => {
        // create a recipe
        const recipe: Omit<Recipe, 'id'> = {
            title: 'testing',
            description: 'test',
        };
        const repository = AppDataSource.getRepository(Recipe);
        await repository.save(recipe);

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
