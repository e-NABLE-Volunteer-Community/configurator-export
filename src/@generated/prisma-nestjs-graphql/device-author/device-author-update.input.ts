import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateOneRequiredWithoutDeviceAuthorsInput } from '../device/device-update-one-required-without-device-authors.input';
import { AuthorUpdateOneRequiredWithoutDeviceAuthorInput } from '../author/author-update-one-required-without-device-author.input';

@InputType()
export class DeviceAuthorUpdateInput {

    @Field(() => DeviceUpdateOneRequiredWithoutDeviceAuthorsInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutDeviceAuthorsInput;

    @Field(() => AuthorUpdateOneRequiredWithoutDeviceAuthorInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutDeviceAuthorInput;
}
