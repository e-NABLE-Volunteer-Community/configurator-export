import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConfigurationDescriptionCount {

    @Field(() => Int, {nullable:false})
    overviews!: number;

    @Field(() => Int, {nullable:false})
    pairings!: number;
}
