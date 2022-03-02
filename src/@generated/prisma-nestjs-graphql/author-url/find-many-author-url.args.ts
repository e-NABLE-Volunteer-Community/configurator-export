import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereInput } from './author-url-where.input';
import { AuthorUrlOrderByWithRelationInput } from './author-url-order-by-with-relation.input';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorUrlScalarFieldEnum } from './author-url-scalar-field.enum';

@ArgsType()
export class FindManyAuthorUrlArgs {

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    where?: AuthorUrlWhereInput;

    @Field(() => [AuthorUrlOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorUrlOrderByWithRelationInput>;

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:true})
    cursor?: AuthorUrlWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthorUrlScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorUrlScalarFieldEnum>;
}
