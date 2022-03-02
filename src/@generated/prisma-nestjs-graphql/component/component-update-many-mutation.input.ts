import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ComponentUpdateManyMutationInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    location?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    exportLocation?: StringFieldUpdateOperationsInput;
}
