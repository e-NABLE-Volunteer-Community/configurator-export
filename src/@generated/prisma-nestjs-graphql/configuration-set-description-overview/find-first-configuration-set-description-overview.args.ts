import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';
import { ConfigurationSetDescriptionOverviewOrderByWithRelationInput } from './configuration-set-description-overview-order-by-with-relation.input';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewScalarFieldEnum } from './configuration-set-description-overview-scalar-field.enum';

@ArgsType()
export class FindFirstConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationSetDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationSetDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationSetDescriptionOverviewScalarFieldEnum>;
}
