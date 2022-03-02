import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewUpdateInput } from './device-overview-update.input';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';

@ArgsType()
export class UpdateOneDeviceOverviewArgs {

    @Field(() => DeviceOverviewUpdateInput, {nullable:false})
    data!: DeviceOverviewUpdateInput;

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;
}
