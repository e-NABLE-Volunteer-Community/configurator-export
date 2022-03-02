import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutDeviceAuthorInput } from '../author/author-create-nested-one-without-device-author.input';

@InputType()
export class DeviceAuthorCreateWithoutDeviceInput {

    @Field(() => AuthorCreateNestedOneWithoutDeviceAuthorInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutDeviceAuthorInput;
}
