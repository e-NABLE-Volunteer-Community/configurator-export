import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';

@InputType()
export class EnumComponentParameterKindFieldUpdateOperationsInput {

    @Field(() => ComponentParameterKind, {nullable:true})
    set?: keyof typeof ComponentParameterKind;
}
