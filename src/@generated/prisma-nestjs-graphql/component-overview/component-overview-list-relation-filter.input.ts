import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewWhereInput } from './component-overview-where.input';

@InputType()
export class ComponentOverviewListRelationFilter {

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    every?: ComponentOverviewWhereInput;

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    some?: ComponentOverviewWhereInput;

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    none?: ComponentOverviewWhereInput;
}
