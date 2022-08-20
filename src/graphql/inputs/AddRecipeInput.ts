import { Field, InputType } from 'type-graphql';
import { Recipe } from '../../entities/Recipe';

@InputType({ description: 'New recipe data' })
export default class AddRecipeInput implements Partial<Recipe> {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;
}
