import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-upsert-with-where-unique-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope } from './component-parameter-configuration-description-pairing-create-many-component-parameter-input-envelope.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-update-with-where-unique-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-update-many-with-where-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingScalarWhereInput } from './component-parameter-configuration-description-pairing-scalar-where.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutComponentParameterInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput], {nullable:true})
    create?: Array<ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutComponentParameterInput], {nullable:true})
    upsert?: Array<ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutComponentParameterInput>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope, {nullable:true})
    createMany?: ComponentParameterConfigurationDescriptionPairingCreateManyComponentParameterInputEnvelope;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    set?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    delete?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterConfigurationDescriptionPairingWhereUniqueInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutComponentParameterInput], {nullable:true})
    update?: Array<ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutComponentParameterInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutComponentParameterInput], {nullable:true})
    updateMany?: Array<ComponentParameterConfigurationDescriptionPairingUpdateManyWithWhereWithoutComponentParameterInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereInput>;
}
