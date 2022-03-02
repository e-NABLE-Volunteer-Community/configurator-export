import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateInput } from './component-parameter-configuration-description-pairing-create.input';

@ArgsType()
export class CreateOneComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingCreateInput;
}
