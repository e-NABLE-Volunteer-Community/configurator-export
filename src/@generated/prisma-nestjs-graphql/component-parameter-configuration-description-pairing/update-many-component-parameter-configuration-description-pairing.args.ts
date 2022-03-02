import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyInput } from './component-parameter-configuration-description-pairing-unchecked-update-many.input';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';

@ArgsType()
export class UpdateManyComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    where?: ComponentParameterConfigurationDescriptionPairingWhereInput;
}
