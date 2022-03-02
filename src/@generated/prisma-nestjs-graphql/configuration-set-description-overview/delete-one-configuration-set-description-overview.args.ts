import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';

@ArgsType()
export class DeleteOneConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionOverviewWhereUniqueInput;
}
