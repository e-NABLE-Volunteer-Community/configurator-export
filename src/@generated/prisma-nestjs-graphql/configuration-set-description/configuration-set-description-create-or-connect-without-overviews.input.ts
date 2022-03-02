import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionCreateWithoutOverviewsInput } from './configuration-set-description-create-without-overviews.input';

@InputType()
export class ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput {

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutOverviewsInput;
}
