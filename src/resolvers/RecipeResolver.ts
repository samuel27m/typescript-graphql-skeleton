import { Resolver, Query } from 'type-graphql';
import { Recipe } from '../entities/Recipe';
import { AppDataSource } from '../database';

@Resolver(Recipe)
export class RecipeResolver {
    @Query(() => [Recipe])
    async recipes() {
        const repository = AppDataSource.getRepository(Recipe);
        return await repository.find();
    }
}
