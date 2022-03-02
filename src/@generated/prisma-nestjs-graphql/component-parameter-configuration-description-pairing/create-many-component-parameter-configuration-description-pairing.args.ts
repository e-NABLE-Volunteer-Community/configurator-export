import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateManyInput } from './component-parameter-configuration-description-pairing-create-many.input';

@ArgsType()
export class CreateManyComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateManyInput], {nullable:false})
    data!: Array<ComponentParameterConfigurationDescriptionPairingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
