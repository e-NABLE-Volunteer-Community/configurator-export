import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorUrlCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    url!: string;
}
