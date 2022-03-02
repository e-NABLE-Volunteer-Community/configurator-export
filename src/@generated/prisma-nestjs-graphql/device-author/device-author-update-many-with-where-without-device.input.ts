import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorScalarWhereInput } from './device-author-scalar-where.input';
import { DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorsInput } from './device-author-unchecked-update-many-without-device-authors.input';

@InputType()
export class DeviceAuthorUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => DeviceAuthorScalarWhereInput, {nullable:false})
    where!: DeviceAuthorScalarWhereInput;

    @Field(() => DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorsInput, {nullable:false})
    data!: DeviceAuthorUncheckedUpdateManyWithoutDeviceAuthorsInput;
}
