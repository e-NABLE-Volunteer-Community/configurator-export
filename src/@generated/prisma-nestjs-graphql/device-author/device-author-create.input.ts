import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateNestedOneWithoutDeviceAuthorsInput } from '../device/device-create-nested-one-without-device-authors.input';
import { AuthorCreateNestedOneWithoutDeviceAuthorInput } from '../author/author-create-nested-one-without-device-author.input';

@InputType()
export class DeviceAuthorCreateInput {

    @Field(() => DeviceCreateNestedOneWithoutDeviceAuthorsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutDeviceAuthorsInput;

    @Field(() => AuthorCreateNestedOneWithoutDeviceAuthorInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutDeviceAuthorInput;
}
