import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';

@ArgsType()
export class DeleteManyConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationDescriptionOverviewWhereInput;
}
