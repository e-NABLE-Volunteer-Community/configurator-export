import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-or-connect-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-upsert-with-where-unique-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope } from './configuration-set-description-overview-create-many-configuration-set-description-input-envelope.input';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { ConfigurationSetDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-update-with-where-unique-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewUpdateManyWithWhereWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-update-many-with-where-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewScalarWhereInput } from './configuration-set-description-overview-scalar-where.input';

@InputType()
export class ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput {

    @Field(() => [ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput], {nullable:true})
    create?: Array<ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput], {nullable:true})
    upsert?: Array<ConfigurationSetDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput>;

    @Field(() => ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    set?: Array<ConfigurationSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<ConfigurationSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<ConfigurationSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput], {nullable:true})
    update?: Array<ConfigurationSetDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewUpdateManyWithWhereWithoutConfigurationSetDescriptionInput], {nullable:true})
    updateMany?: Array<ConfigurationSetDescriptionOverviewUpdateManyWithWhereWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<ConfigurationSetDescriptionOverviewScalarWhereInput>;
}
