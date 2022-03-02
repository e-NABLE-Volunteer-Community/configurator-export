import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentCount {

    @Field(() => Int, {nullable:false})
    componentOverviews!: number;

    @Field(() => Int, {nullable:false})
    parameters!: number;
}
