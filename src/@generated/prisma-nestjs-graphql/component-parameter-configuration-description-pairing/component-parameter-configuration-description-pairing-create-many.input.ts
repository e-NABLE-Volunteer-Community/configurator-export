import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    componentParameterId!: number;

    @Field(() => Int, {nullable:false})
    configurationDescriptionId!: number;
}
