import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentParameterCount {

    @Field(() => Int, {nullable:false})
    pairings!: number;
}
