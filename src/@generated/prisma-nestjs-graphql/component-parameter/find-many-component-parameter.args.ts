import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterWhereInput } from './component-parameter-where.input';
import { ComponentParameterOrderByWithRelationInput } from './component-parameter-order-by-with-relation.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentParameterScalarFieldEnum } from './component-parameter-scalar-field.enum';

@ArgsType()
export class FindManyComponentParameterArgs {

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    where?: ComponentParameterWhereInput;

    @Field(() => [ComponentParameterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentParameterOrderByWithRelationInput>;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:true})
    cursor?: ComponentParameterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComponentParameterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComponentParameterScalarFieldEnum>;
}
