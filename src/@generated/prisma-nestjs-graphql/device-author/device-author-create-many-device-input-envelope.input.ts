import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateManyDeviceInput } from './device-author-create-many-device.input';

@InputType()
export class DeviceAuthorCreateManyDeviceInputEnvelope {

    @Field(() => [DeviceAuthorCreateManyDeviceInput], {nullable:false})
    data!: Array<DeviceAuthorCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
