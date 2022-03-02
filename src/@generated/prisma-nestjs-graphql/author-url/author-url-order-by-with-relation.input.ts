import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorOrderByWithRelationInput } from '../author/author-order-by-with-relation.input';

@InputType()
export class AuthorUrlOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => AuthorOrderByWithRelationInput, {nullable:true})
    author?: AuthorOrderByWithRelationInput;
}
