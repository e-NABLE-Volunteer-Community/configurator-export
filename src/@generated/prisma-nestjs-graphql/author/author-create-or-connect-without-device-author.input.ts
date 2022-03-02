import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateWithoutDeviceAuthorInput } from './author-create-without-device-author.input';

@InputType()
export class AuthorCreateOrConnectWithoutDeviceAuthorInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutDeviceAuthorInput, {nullable:false})
    create!: AuthorCreateWithoutDeviceAuthorInput;
}
