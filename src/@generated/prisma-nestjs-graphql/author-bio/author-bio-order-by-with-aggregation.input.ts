import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorBioCountOrderByAggregateInput } from './author-bio-count-order-by-aggregate.input';
import { AuthorBioAvgOrderByAggregateInput } from './author-bio-avg-order-by-aggregate.input';
import { AuthorBioMaxOrderByAggregateInput } from './author-bio-max-order-by-aggregate.input';
import { AuthorBioMinOrderByAggregateInput } from './author-bio-min-order-by-aggregate.input';
import { AuthorBioSumOrderByAggregateInput } from './author-bio-sum-order-by-aggregate.input';

@InputType()
export class AuthorBioOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => AuthorBioCountOrderByAggregateInput, {nullable:true})
    _count?: AuthorBioCountOrderByAggregateInput;

    @Field(() => AuthorBioAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthorBioAvgOrderByAggregateInput;

    @Field(() => AuthorBioMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthorBioMaxOrderByAggregateInput;

    @Field(() => AuthorBioMinOrderByAggregateInput, {nullable:true})
    _min?: AuthorBioMinOrderByAggregateInput;

    @Field(() => AuthorBioSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthorBioSumOrderByAggregateInput;
}
