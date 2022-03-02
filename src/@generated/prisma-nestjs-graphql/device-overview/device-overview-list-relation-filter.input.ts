import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewWhereInput } from './device-overview-where.input';

@InputType()
export class DeviceOverviewListRelationFilter {

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    every?: DeviceOverviewWhereInput;

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    some?: DeviceOverviewWhereInput;

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    none?: DeviceOverviewWhereInput;
}
