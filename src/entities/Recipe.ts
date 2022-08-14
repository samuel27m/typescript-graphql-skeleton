import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Recipe {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;
}
