import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorBioCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    locale!: string;
}
