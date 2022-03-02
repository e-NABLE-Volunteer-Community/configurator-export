import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DeviceCreateNestedOneWithoutComponentsInput } from '../device/device-create-nested-one-without-components.input';
import { ComponentOverviewCreateNestedManyWithoutComponentInput } from '../component-overview/component-overview-create-nested-many-without-component.input';

@InputType()
export class ComponentCreateWithoutParametersInput {

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => DeviceCreateNestedOneWithoutComponentsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutComponentsInput;

    @Field(() => ComponentOverviewCreateNestedManyWithoutComponentInput, {nullable:true})
    componentOverviews?: ComponentOverviewCreateNestedManyWithoutComponentInput;
}
