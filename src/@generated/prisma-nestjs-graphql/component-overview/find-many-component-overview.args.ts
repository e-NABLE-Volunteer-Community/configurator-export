import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereInput } from './component-overview-where.input';
import { ComponentOverviewOrderByWithRelationInput } from './component-overview-order-by-with-relation.input';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentOverviewScalarFieldEnum } from './component-overview-scalar-field.enum';

@ArgsType()
export class FindManyComponentOverviewArgs {

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    where?: ComponentOverviewWhereInput;

    @Field(() => [ComponentOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentOverviewOrderByWithRelationInput>;

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:true})
    cursor?: ComponentOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComponentOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComponentOverviewScalarFieldEnum>;
}
