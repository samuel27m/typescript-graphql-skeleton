import { Resolver, Query } from 'type-graphql';
import { Recipe } from '../entities/Recipe';

@Resolver(Recipe)
export class RecipeResolver {
    @Query(() => [Recipe])
    recipes() {
        return [
            {
                id: '1',
                title: '123',
                description: ' lol',
            },
        ];
    }
}
