import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DeviceUpdateOneRequiredWithoutComponentsInput } from '../device/device-update-one-required-without-components.input';
import { ComponentParameterUpdateManyWithoutComponentInput } from '../component-parameter/component-parameter-update-many-without-component.input';

@InputType()
export class ComponentUpdateWithoutComponentOverviewsInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    location?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    exportLocation?: StringFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateOneRequiredWithoutComponentsInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutComponentsInput;

    @Field(() => ComponentParameterUpdateManyWithoutComponentInput, {nullable:true})
    parameters?: ComponentParameterUpdateManyWithoutComponentInput;
}
