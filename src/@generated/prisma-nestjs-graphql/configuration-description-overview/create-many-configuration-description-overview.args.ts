import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCreateManyInput } from './configuration-description-overview-create-many.input';

@ArgsType()
export class CreateManyConfigurationDescriptionOverviewArgs {

    @Field(() => [ConfigurationDescriptionOverviewCreateManyInput], {nullable:false})
    data!: Array<ConfigurationDescriptionOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
