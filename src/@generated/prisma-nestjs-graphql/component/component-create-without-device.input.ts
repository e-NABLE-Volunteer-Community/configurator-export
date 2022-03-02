import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ComponentOverviewCreateNestedManyWithoutComponentInput } from '../component-overview/component-overview-create-nested-many-without-component.input';
import { ComponentParameterCreateNestedManyWithoutComponentInput } from '../component-parameter/component-parameter-create-nested-many-without-component.input';

@InputType()
export class ComponentCreateWithoutDeviceInput {

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => ComponentOverviewCreateNestedManyWithoutComponentInput, {nullable:true})
    componentOverviews?: ComponentOverviewCreateNestedManyWithoutComponentInput;

    @Field(() => ComponentParameterCreateNestedManyWithoutComponentInput, {nullable:true})
    parameters?: ComponentParameterCreateNestedManyWithoutComponentInput;
}
