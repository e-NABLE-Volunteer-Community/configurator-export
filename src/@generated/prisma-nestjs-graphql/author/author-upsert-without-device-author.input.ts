import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutDeviceAuthorInput } from './author-update-without-device-author.input';
import { AuthorCreateWithoutDeviceAuthorInput } from './author-create-without-device-author.input';

@InputType()
export class AuthorUpsertWithoutDeviceAuthorInput {

    @Field(() => AuthorUpdateWithoutDeviceAuthorInput, {nullable:false})
    update!: AuthorUpdateWithoutDeviceAuthorInput;

    @Field(() => AuthorCreateWithoutDeviceAuthorInput, {nullable:false})
    create!: AuthorCreateWithoutDeviceAuthorInput;
}
