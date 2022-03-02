import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { DeviceOverviewCreateInput } from './device-overview-create.input';
import { DeviceOverviewUpdateInput } from './device-overview-update.input';

@ArgsType()
export class UpsertOneDeviceOverviewArgs {

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;

    @Field(() => DeviceOverviewCreateInput, {nullable:false})
    create!: DeviceOverviewCreateInput;

    @Field(() => DeviceOverviewUpdateInput, {nullable:false})
    update!: DeviceOverviewUpdateInput;
}
