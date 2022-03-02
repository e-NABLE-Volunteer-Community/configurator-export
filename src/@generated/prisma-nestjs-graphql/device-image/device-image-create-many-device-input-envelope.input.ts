import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageCreateManyDeviceInput } from './device-image-create-many-device.input';

@InputType()
export class DeviceImageCreateManyDeviceInputEnvelope {

    @Field(() => [DeviceImageCreateManyDeviceInput], {nullable:false})
    data!: Array<DeviceImageCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
