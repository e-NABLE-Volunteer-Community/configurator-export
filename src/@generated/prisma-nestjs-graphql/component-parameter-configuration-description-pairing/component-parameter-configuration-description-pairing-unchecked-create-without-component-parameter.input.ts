import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUncheckedCreateWithoutComponentParameterInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    configurationDescriptionId!: number;
}
