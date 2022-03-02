import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateOneRequiredWithoutDeviceAuthorInput } from '../author/author-update-one-required-without-device-author.input';

@InputType()
export class DeviceAuthorUpdateWithoutDeviceInput {

    @Field(() => AuthorUpdateOneRequiredWithoutDeviceAuthorInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutDeviceAuthorInput;
}
