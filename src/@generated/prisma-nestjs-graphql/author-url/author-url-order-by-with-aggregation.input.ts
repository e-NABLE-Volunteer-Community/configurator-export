import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorUrlCountOrderByAggregateInput } from './author-url-count-order-by-aggregate.input';
import { AuthorUrlAvgOrderByAggregateInput } from './author-url-avg-order-by-aggregate.input';
import { AuthorUrlMaxOrderByAggregateInput } from './author-url-max-order-by-aggregate.input';
import { AuthorUrlMinOrderByAggregateInput } from './author-url-min-order-by-aggregate.input';
import { AuthorUrlSumOrderByAggregateInput } from './author-url-sum-order-by-aggregate.input';

@InputType()
export class AuthorUrlOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => AuthorUrlCountOrderByAggregateInput, {nullable:true})
    _count?: AuthorUrlCountOrderByAggregateInput;

    @Field(() => AuthorUrlAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthorUrlAvgOrderByAggregateInput;

    @Field(() => AuthorUrlMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthorUrlMaxOrderByAggregateInput;

    @Field(() => AuthorUrlMinOrderByAggregateInput, {nullable:true})
    _min?: AuthorUrlMinOrderByAggregateInput;

    @Field(() => AuthorUrlSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthorUrlSumOrderByAggregateInput;
}
