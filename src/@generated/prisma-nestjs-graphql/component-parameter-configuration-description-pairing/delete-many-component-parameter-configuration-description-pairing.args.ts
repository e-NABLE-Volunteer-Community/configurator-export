import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';

@ArgsType()
export class DeleteManyComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    where?: ComponentParameterConfigurationDescriptionPairingWhereInput;
}
