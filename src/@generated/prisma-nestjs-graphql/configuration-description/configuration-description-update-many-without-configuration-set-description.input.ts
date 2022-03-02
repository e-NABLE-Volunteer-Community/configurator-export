import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput } from './configuration-description-create-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput } from './configuration-description-create-or-connect-without-configuration-set-description.input';
import { ConfigurationDescriptionUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput } from './configuration-description-upsert-with-where-unique-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope } from './configuration-description-create-many-configuration-set-description-input-envelope.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput } from './configuration-description-update-with-where-unique-without-configuration-set-description.input';
import { ConfigurationDescriptionUpdateManyWithWhereWithoutConfigurationSetDescriptionInput } from './configuration-description-update-many-with-where-without-configuration-set-description.input';
import { ConfigurationDescriptionScalarWhereInput } from './configuration-description-scalar-where.input';

@InputType()
export class ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput {

    @Field(() => [ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput], {nullable:true})
    create?: Array<ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationDescriptionUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput], {nullable:true})
    upsert?: Array<ConfigurationDescriptionUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput>;

    @Field(() => ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope;

    @Field(() => [ConfigurationDescriptionWhereUniqueInput], {nullable:true})
    set?: Array<ConfigurationDescriptionWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionWhereUniqueInput], {nullable:true})
    disconnect?: Array<ConfigurationDescriptionWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionWhereUniqueInput], {nullable:true})
    delete?: Array<ConfigurationDescriptionWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationDescriptionWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput], {nullable:true})
    update?: Array<ConfigurationDescriptionUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationDescriptionUpdateManyWithWhereWithoutConfigurationSetDescriptionInput], {nullable:true})
    updateMany?: Array<ConfigurationDescriptionUpdateManyWithWhereWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationDescriptionScalarWhereInput], {nullable:true})
    deleteMany?: Array<ConfigurationDescriptionScalarWhereInput>;
}
