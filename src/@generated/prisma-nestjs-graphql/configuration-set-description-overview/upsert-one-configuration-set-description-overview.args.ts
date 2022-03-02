import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { ConfigurationSetDescriptionOverviewCreateInput } from './configuration-set-description-overview-create.input';
import { ConfigurationSetDescriptionOverviewUpdateInput } from './configuration-set-description-overview-update.input';

@ArgsType()
export class UpsertOneConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionOverviewCreateInput, {nullable:false})
    create!: ConfigurationSetDescriptionOverviewCreateInput;

    @Field(() => ConfigurationSetDescriptionOverviewUpdateInput, {nullable:false})
    update!: ConfigurationSetDescriptionOverviewUpdateInput;
}
