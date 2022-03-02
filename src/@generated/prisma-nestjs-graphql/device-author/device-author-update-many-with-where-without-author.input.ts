import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorScalarWhereInput } from './device-author-scalar-where.input';
import { DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorInput } from './device-author-unchecked-update-many-without-device-author.input';

@InputType()
export class DeviceAuthorUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => DeviceAuthorScalarWhereInput, {nullable:false})
    where!: DeviceAuthorScalarWhereInput;

    @Field(() => DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorInput, {nullable:false})
    data!: DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorInput;
}
