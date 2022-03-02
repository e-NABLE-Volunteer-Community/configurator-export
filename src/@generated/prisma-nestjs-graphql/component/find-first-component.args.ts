import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';
import { ComponentOrderByWithRelationInput } from './component-order-by-with-relation.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentScalarFieldEnum } from './component-scalar-field.enum';

@ArgsType()
export class FindFirstComponentArgs {

    @Field(() => ComponentWhereInput, {nullable:true})
    where?: ComponentWhereInput;

    @Field(() => [ComponentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentOrderByWithRelationInput>;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    cursor?: ComponentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComponentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComponentScalarFieldEnum>;
}
