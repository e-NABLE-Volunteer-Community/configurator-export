import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-without-configuration-description.input';
import { ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-or-connect-without-configuration-description.input';
import { ConfigurationDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationDescriptionInput } from './configuration-description-overview-upsert-with-where-unique-without-configuration-description.input';
import { ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope } from './configuration-description-overview-create-many-configuration-description-input-envelope.input';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { ConfigurationDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationDescriptionInput } from './configuration-description-overview-update-with-where-unique-without-configuration-description.input';
import { ConfigurationDescriptionOverviewUpdateManyWithWhereWithoutConfigurationDescriptionInput } from './configuration-description-overview-update-many-with-where-without-configuration-description.input';
import { ConfigurationDescriptionOverviewScalarWhereInput } from './configuration-description-overview-scalar-where.input';

@InputType()
export class ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput {

    @Field(() => [ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput], {nullable:true})
    create?: Array<ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput>;

    @Field(() => [ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput>;

    @Field(() => [ConfigurationDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationDescriptionInput], {nullable:true})
    upsert?: Array<ConfigurationDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationDescriptionInput>;

    @Field(() => ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope;

    @Field(() => [ConfigurationDescriptionOverviewWhereUniqueInput], {nullable:true})
    set?: Array<ConfigurationDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<ConfigurationDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<ConfigurationDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationDescriptionInput], {nullable:true})
    update?: Array<ConfigurationDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationDescriptionInput>;

    @Field(() => [ConfigurationDescriptionOverviewUpdateManyWithWhereWithoutConfigurationDescriptionInput], {nullable:true})
    updateMany?: Array<ConfigurationDescriptionOverviewUpdateManyWithWhereWithoutConfigurationDescriptionInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<ConfigurationDescriptionOverviewScalarWhereInput>;
}
