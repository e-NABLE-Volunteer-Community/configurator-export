import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewCreateInput } from './device-overview-create.input';

@ArgsType()
export class CreateOneDeviceOverviewArgs {

    @Field(() => DeviceOverviewCreateInput, {nullable:false})
    data!: DeviceOverviewCreateInput;
}
