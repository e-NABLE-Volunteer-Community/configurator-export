import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope } from './component-parameter-configuration-description-pairing-create-many-configuration-description-input-envelope.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput], {nullable:true})
    create?: Array<ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope, {nullable:true})
    createMany?: ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;
}
