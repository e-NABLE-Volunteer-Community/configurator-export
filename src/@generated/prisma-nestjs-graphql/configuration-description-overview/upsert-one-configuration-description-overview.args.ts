import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { ConfigurationDescriptionOverviewCreateInput } from './configuration-description-overview-create.input';
import { ConfigurationDescriptionOverviewUpdateInput } from './configuration-description-overview-update.input';

@ArgsType()
export class UpsertOneConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationDescriptionOverviewCreateInput, {nullable:false})
    create!: ConfigurationDescriptionOverviewCreateInput;

    @Field(() => ConfigurationDescriptionOverviewUpdateInput, {nullable:false})
    update!: ConfigurationDescriptionOverviewUpdateInput;
}
