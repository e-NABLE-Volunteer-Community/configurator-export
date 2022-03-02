import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';

@ArgsType()
export class FindUniqueConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewWhereUniqueInput;
}
