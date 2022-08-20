import { ObjectType, Field, Int } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    description?: string;
}
