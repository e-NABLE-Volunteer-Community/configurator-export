import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutDeviceAuthorInput } from './author-create-without-device-author.input';
import { AuthorCreateOrConnectWithoutDeviceAuthorInput } from './author-create-or-connect-without-device-author.input';
import { AuthorUpsertWithoutDeviceAuthorInput } from './author-upsert-without-device-author.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutDeviceAuthorInput } from './author-update-without-device-author.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutDeviceAuthorInput {

    @Field(() => AuthorCreateWithoutDeviceAuthorInput, {nullable:true})
    create?: AuthorCreateWithoutDeviceAuthorInput;

    @Field(() => AuthorCreateOrConnectWithoutDeviceAuthorInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutDeviceAuthorInput;

    @Field(() => AuthorUpsertWithoutDeviceAuthorInput, {nullable:true})
    upsert?: AuthorUpsertWithoutDeviceAuthorInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutDeviceAuthorInput, {nullable:true})
    update?: AuthorUpdateWithoutDeviceAuthorInput;
}
