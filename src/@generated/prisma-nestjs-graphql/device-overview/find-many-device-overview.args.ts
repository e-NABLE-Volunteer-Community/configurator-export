import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereInput } from './device-overview-where.input';
import { DeviceOverviewOrderByWithRelationInput } from './device-overview-order-by-with-relation.input';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceOverviewScalarFieldEnum } from './device-overview-scalar-field.enum';

@ArgsType()
export class FindManyDeviceOverviewArgs {

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    where?: DeviceOverviewWhereInput;

    @Field(() => [DeviceOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceOverviewOrderByWithRelationInput>;

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:true})
    cursor?: DeviceOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceOverviewScalarFieldEnum>;
}
