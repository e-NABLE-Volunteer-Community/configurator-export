import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ComponentParameterUncheckedCreateNestedManyWithoutComponentInput } from '../component-parameter/component-parameter-unchecked-create-nested-many-without-component.input';

@InputType()
export class ComponentUncheckedCreateWithoutComponentOverviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => ComponentParameterUncheckedCreateNestedManyWithoutComponentInput, {nullable:true})
    parameters?: ComponentParameterUncheckedCreateNestedManyWithoutComponentInput;
}
