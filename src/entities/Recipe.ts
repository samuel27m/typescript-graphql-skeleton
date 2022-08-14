import { ObjectType, Field, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column()
    @Field()
    title: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    description?: string;
}
