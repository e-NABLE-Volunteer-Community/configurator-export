import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutDeviceAuthorInput } from './author-create-without-device-author.input';
import { AuthorCreateOrConnectWithoutDeviceAuthorInput } from './author-create-or-connect-without-device-author.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutDeviceAuthorInput {

    @Field(() => AuthorCreateWithoutDeviceAuthorInput, {nullable:true})
    create?: AuthorCreateWithoutDeviceAuthorInput;

    @Field(() => AuthorCreateOrConnectWithoutDeviceAuthorInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutDeviceAuthorInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;
}
