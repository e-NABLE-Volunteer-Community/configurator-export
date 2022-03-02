import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-many-configuration-description.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInput], {nullable:false})
    data!: Array<ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
