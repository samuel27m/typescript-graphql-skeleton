import { Repository } from 'typeorm';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { AppDataSource } from '../../database';
import { Recipe } from '../../entities/Recipe';
import AddRecipeInput from '../inputs/AddRecipeInput';
import { validate } from 'class-validator';

@Resolver(Recipe)
export class RecipeResolver {
    private repository: Repository<Recipe>;
    constructor() {
        this.repository = AppDataSource.getRepository(Recipe);
    }

    @Query(() => [Recipe])
    async recipes(): Promise<Recipe[]> {
        return await this.repository.find();
    }

    @Mutation(() => Recipe)
    async addRecipe(@Arg('data') newRecipeData: AddRecipeInput): Promise<Recipe> {
        await validate(newRecipeData);
        return await this.repository.save(newRecipeData);
    }
}
