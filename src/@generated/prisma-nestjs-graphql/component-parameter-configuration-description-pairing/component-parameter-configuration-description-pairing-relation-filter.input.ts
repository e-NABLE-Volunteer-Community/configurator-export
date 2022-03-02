import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingRelationFilter {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    is?: ComponentParameterConfigurationDescriptionPairingWhereInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    isNot?: ComponentParameterConfigurationDescriptionPairingWhereInput;
}
