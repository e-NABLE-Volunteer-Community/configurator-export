import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';

@ArgsType()
export class DeleteManyConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionOverviewWhereInput;
}
