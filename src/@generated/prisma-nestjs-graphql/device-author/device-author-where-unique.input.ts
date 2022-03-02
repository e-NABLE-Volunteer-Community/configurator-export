import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorDeviceIdAuthorIdCompoundUniqueInput } from './device-author-device-id-author-id-compound-unique.input';

@InputType()
export class DeviceAuthorWhereUniqueInput {

    @Field(() => DeviceAuthorDeviceIdAuthorIdCompoundUniqueInput, {nullable:true})
    deviceId_authorId?: DeviceAuthorDeviceIdAuthorIdCompoundUniqueInput;
}
