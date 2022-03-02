import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingScalarWhereInput } from './component-parameter-configuration-description-pairing-scalar-where.input';
import { ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutPairingsInput } from './component-parameter-configuration-description-pairing-unchecked-update-many-without-pairings.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingScalarWhereInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingScalarWhereInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutPairingsInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutPairingsInput;
}
