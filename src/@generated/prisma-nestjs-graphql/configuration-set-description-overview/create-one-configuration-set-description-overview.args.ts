import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateInput } from './configuration-set-description-overview-create.input';

@ArgsType()
export class CreateOneConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewCreateInput, {nullable:false})
    data!: ConfigurationSetDescriptionOverviewCreateInput;
}
