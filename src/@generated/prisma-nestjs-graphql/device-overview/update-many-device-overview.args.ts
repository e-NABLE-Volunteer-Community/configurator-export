import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewUpdateManyMutationInput } from './device-overview-update-many-mutation.input';
import { DeviceOverviewWhereInput } from './device-overview-where.input';

@ArgsType()
export class UpdateManyDeviceOverviewArgs {

    @Field(() => DeviceOverviewUpdateManyMutationInput, {nullable:false})
    data!: DeviceOverviewUpdateManyMutationInput;

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    where?: DeviceOverviewWhereInput;
}
