import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewCreateManyDeviceInput } from './device-overview-create-many-device.input';

@InputType()
export class DeviceOverviewCreateManyDeviceInputEnvelope {

    @Field(() => [DeviceOverviewCreateManyDeviceInput], {nullable:false})
    data!: Array<DeviceOverviewCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
