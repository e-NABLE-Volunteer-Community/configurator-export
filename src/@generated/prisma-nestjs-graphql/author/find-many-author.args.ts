import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { AuthorOrderByWithRelationInput } from './author-order-by-with-relation.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorScalarFieldEnum } from './author-scalar-field.enum';

@ArgsType()
export class FindManyAuthorArgs {

    @Field(() => AuthorWhereInput, {nullable:true})
    where?: AuthorWhereInput;

    @Field(() => [AuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithRelationInput>;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: AuthorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}
