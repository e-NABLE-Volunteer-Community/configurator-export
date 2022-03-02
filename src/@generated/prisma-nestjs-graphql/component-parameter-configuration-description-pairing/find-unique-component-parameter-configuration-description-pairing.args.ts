import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';

@ArgsType()
export class FindUniqueComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;
}
