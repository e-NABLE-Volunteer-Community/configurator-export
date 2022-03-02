import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraCreateManyDeviceInput } from './device-extra-create-many-device.input';

@InputType()
export class DeviceExtraCreateManyDeviceInputEnvelope {

    @Field(() => [DeviceExtraCreateManyDeviceInput], {nullable:false})
    data!: Array<DeviceExtraCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
