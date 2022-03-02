import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';
import { ConfigurationDescriptionOverviewOrderByWithRelationInput } from './configuration-description-overview-order-by-with-relation.input';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewScalarFieldEnum } from './configuration-description-overview-scalar-field.enum';

@ArgsType()
export class FindFirstConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConfigurationDescriptionOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationDescriptionOverviewScalarFieldEnum>;
}
