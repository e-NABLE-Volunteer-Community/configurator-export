import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DeviceUpdateOneRequiredWithoutComponentsInput } from '../device/device-update-one-required-without-components.input';
import { ComponentOverviewUpdateManyWithoutComponentInput } from '../component-overview/component-overview-update-many-without-component.input';

@InputType()
export class ComponentUpdateWithoutParametersInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    location?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    exportLocation?: StringFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateOneRequiredWithoutComponentsInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutComponentsInput;

    @Field(() => ComponentOverviewUpdateManyWithoutComponentInput, {nullable:true})
    componentOverviews?: ComponentOverviewUpdateManyWithoutComponentInput;
}
