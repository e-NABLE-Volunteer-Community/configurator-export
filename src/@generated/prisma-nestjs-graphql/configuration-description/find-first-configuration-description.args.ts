import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';
import { ConfigurationDescriptionOrderByWithRelationInput } from './configuration-description-order-by-with-relation.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionScalarFieldEnum } from './configuration-description-scalar-field.enum';

@ArgsType()
export class FindFirstConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    where?: ConfigurationDescriptionWhereInput;

    @Field(() => [ConfigurationDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOrderByWithRelationInput>;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConfigurationDescriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationDescriptionScalarFieldEnum>;
}
