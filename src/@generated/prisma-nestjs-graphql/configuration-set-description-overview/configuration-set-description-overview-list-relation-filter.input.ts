import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';

@InputType()
export class ConfigurationSetDescriptionOverviewListRelationFilter {

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    every?: ConfigurationSetDescriptionOverviewWhereInput;

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    some?: ConfigurationSetDescriptionOverviewWhereInput;

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    none?: ConfigurationSetDescriptionOverviewWhereInput;
}
