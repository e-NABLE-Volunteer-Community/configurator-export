import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceOrderByWithRelationInput } from '../device/device-order-by-with-relation.input';
import { ComponentOverviewOrderByRelationAggregateInput } from '../component-overview/component-overview-order-by-relation-aggregate.input';
import { ComponentParameterOrderByRelationAggregateInput } from '../component-parameter/component-parameter-order-by-relation-aggregate.input';

@InputType()
export class ComponentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exportLocation?: keyof typeof SortOrder;

    @Field(() => DeviceOrderByWithRelationInput, {nullable:true})
    device?: DeviceOrderByWithRelationInput;

    @Field(() => ComponentOverviewOrderByRelationAggregateInput, {nullable:true})
    componentOverviews?: ComponentOverviewOrderByRelationAggregateInput;

    @Field(() => ComponentParameterOrderByRelationAggregateInput, {nullable:true})
    parameters?: ComponentParameterOrderByRelationAggregateInput;
}
