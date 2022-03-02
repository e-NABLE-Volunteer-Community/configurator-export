import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingUpsertWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-upsert-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-update-without-component-parameter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateOneWithoutComponentParameterInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput, {nullable:true})
    create?: ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput, {nullable:true})
    connectOrCreate?: ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpsertWithoutComponentParameterInput, {nullable:true})
    upsert?: ComponentParameterConfigurationDescriptionPairingUpsertWithoutComponentParameterInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput, {nullable:true})
    update?: ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput;
}
