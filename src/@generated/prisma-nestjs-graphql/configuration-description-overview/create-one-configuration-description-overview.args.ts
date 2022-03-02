import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCreateInput } from './configuration-description-overview-create.input';

@ArgsType()
export class CreateOneConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewCreateInput, {nullable:false})
    data!: ConfigurationDescriptionOverviewCreateInput;
}
