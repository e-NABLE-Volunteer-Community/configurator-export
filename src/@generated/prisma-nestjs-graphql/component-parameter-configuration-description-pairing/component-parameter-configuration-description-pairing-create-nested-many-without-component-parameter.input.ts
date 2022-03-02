import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope } from './component-parameter-configuration-description-pairing-create-many-component-parameter-input-envelope.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutComponentParameterInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput], {nullable:true})
    create?: Array<ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope, {nullable:true})
    createMany?: ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;
}
