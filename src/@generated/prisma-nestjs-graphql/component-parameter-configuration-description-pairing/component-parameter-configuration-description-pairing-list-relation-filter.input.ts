import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingListRelationFilter {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    every?: ComponentParameterConfigurationDescriptionPairingWhereInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    some?: ComponentParameterConfigurationDescriptionPairingWhereInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    none?: ComponentParameterConfigurationDescriptionPairingWhereInput;
}
