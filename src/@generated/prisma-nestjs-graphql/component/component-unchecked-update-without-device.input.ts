import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ComponentOverviewUncheckedUpdateManyWithoutComponentInput } from '../component-overview/component-overview-unchecked-update-many-without-component.input';
import { ComponentParameterUncheckedUpdateManyWithoutComponentInput } from '../component-parameter/component-parameter-unchecked-update-many-without-component.input';

@InputType()
export class ComponentUncheckedUpdateWithoutDeviceInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    location?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    exportLocation?: StringFieldUpdateOperationsInput;

    @Field(() => ComponentOverviewUncheckedUpdateManyWithoutComponentInput, {nullable:true})
    componentOverviews?: ComponentOverviewUncheckedUpdateManyWithoutComponentInput;

    @Field(() => ComponentParameterUncheckedUpdateManyWithoutComponentInput, {nullable:true})
    parameters?: ComponentParameterUncheckedUpdateManyWithoutComponentInput;
}
