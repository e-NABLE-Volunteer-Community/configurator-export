import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInput } from './component-parameter-configuration-description-pairing-create-many-component-parameter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInput], {nullable:false})
    data!: Array<ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
