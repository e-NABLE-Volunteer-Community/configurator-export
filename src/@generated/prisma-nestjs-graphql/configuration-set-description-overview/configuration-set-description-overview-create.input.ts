import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateNestedOneWithoutOverviewsInput } from '../configuration-set-description/configuration-set-description-create-nested-one-without-overviews.input';

@InputType()
export class ConfigurationSetDescriptionOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => ConfigurationSetDescriptionCreateNestedOneWithoutOverviewsInput, {nullable:false})
    configurationSetDescription!: ConfigurationSetDescriptionCreateNestedOneWithoutOverviewsInput;
}
