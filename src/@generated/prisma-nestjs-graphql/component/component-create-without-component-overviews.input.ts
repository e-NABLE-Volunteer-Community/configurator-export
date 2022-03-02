import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DeviceCreateNestedOneWithoutComponentsInput } from '../device/device-create-nested-one-without-components.input';
import { ComponentParameterCreateNestedManyWithoutComponentInput } from '../component-parameter/component-parameter-create-nested-many-without-component.input';

@InputType()
export class ComponentCreateWithoutComponentOverviewsInput {

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => DeviceCreateNestedOneWithoutComponentsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutComponentsInput;

    @Field(() => ComponentParameterCreateNestedManyWithoutComponentInput, {nullable:true})
    parameters?: ComponentParameterCreateNestedManyWithoutComponentInput;
}
