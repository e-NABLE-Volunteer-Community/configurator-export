import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-upsert-with-where-unique-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope } from './component-parameter-configuration-description-pairing-create-many-configuration-description-input-envelope.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-update-with-where-unique-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-update-many-with-where-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingScalarWhereInput } from './component-parameter-configuration-description-pairing-scalar-where.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput], {nullable:true})
    create?: Array<ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutConfigurationDescriptionInput], {nullable:true})
    upsert?: Array<ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutConfigurationDescriptionInput>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope, {nullable:true})
    createMany?: ComponentParameterConfigurationDescriptionPairingCreateManyConfigurationDescriptionInputEnvelope;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    set?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    delete?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutConfigurationDescriptionInput], {nullable:true})
    update?: Array<ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutConfigurationDescriptionInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutConfigurationDescriptionInput], {nullable:true})
    updateMany?: Array<ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutConfigurationDescriptionInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereInput>;
}
