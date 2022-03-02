import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DeviceCreateNestedOneWithoutComponentsInput } from '../device/device-create-nested-one-without-components.input';

@InputType()
export class ComponentCreateWithoutComponentOverviewInput {

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    measurementOptionParamMap!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => DeviceCreateNestedOneWithoutComponentsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutComponentsInput;
}
