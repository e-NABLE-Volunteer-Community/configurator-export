import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateManyInput } from './configuration-set-description-overview-create-many.input';

@ArgsType()
export class CreateManyConfigurationSetDescriptionOverviewArgs {

    @Field(() => [ConfigurationSetDescriptionOverviewCreateManyInput], {nullable:false})
    data!: Array<ConfigurationSetDescriptionOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
