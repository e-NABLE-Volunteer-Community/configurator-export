import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingCreateInput } from './component-parameter-configuration-description-pairing-create.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateInput } from './component-parameter-configuration-description-pairing-update.input';

@ArgsType()
export class UpsertOneComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateInput, {nullable:false})
    create!: ComponentParameterConfigurationDescriptionPairingCreateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateInput, {nullable:false})
    update!: ComponentParameterConfigurationDescriptionPairingUpdateInput;
}
