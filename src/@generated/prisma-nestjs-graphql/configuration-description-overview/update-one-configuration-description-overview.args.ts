import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewUpdateInput } from './configuration-description-overview-update.input';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';

@ArgsType()
export class UpdateOneConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewUpdateInput, {nullable:false})
    data!: ConfigurationDescriptionOverviewUpdateInput;

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewWhereUniqueInput;
}
