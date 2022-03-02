import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereInput } from './device-overview-where.input';

@ArgsType()
export class DeleteManyDeviceOverviewArgs {

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    where?: DeviceOverviewWhereInput;
}
