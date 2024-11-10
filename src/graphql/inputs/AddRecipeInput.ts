import { Field, InputType } from 'type-graphql';
import { Recipe } from '../../entities/Recipe';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

@InputType({ description: 'New recipe data' })
export default class AddRecipeInput implements Partial<Recipe> {
    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(0)
    @MaxLength(255)
    title: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(0)
    @MaxLength(255)
    description?: string;
}
