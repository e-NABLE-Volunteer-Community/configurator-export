import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';
import { ConfigurationSetDescriptionOrderByWithRelationInput } from './configuration-set-description-order-by-with-relation.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionScalarFieldEnum } from './configuration-set-description-scalar-field.enum';

@ArgsType()
export class FindFirstConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionWhereInput;

    @Field(() => [ConfigurationSetDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOrderByWithRelationInput>;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConfigurationSetDescriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConfigurationSetDescriptionScalarFieldEnum>;
}
