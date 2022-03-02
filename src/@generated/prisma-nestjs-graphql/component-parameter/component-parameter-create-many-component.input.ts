import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';

@InputType()
export class ComponentParameterCreateManyComponentInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ComponentParameterKind, {nullable:false})
    kind!: keyof typeof ComponentParameterKind;

    @Field(() => String, {nullable:false})
    cadName!: string;

    @Field(() => String, {nullable:true})
    humanName?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
