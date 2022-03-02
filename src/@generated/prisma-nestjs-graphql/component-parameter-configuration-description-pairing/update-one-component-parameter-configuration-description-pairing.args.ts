import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingUpdateInput } from './component-parameter-configuration-description-pairing-update.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';

@ArgsType()
export class UpdateOneComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingUpdateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;
}
