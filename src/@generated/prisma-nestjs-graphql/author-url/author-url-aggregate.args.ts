import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereInput } from './author-url-where.input';
import { AuthorUrlOrderByWithRelationInput } from './author-url-order-by-with-relation.input';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorUrlCountAggregateInput } from './author-url-count-aggregate.input';
import { AuthorUrlAvgAggregateInput } from './author-url-avg-aggregate.input';
import { AuthorUrlSumAggregateInput } from './author-url-sum-aggregate.input';
import { AuthorUrlMinAggregateInput } from './author-url-min-aggregate.input';
import { AuthorUrlMaxAggregateInput } from './author-url-max-aggregate.input';

@ArgsType()
export class AuthorUrlAggregateArgs {

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

    @Field(() => AuthorUrlCountAggregateInput, {nullable:true})
    _count?: AuthorUrlCountAggregateInput;

    @Field(() => AuthorUrlAvgAggregateInput, {nullable:true})
    _avg?: AuthorUrlAvgAggregateInput;

    @Field(() => AuthorUrlSumAggregateInput, {nullable:true})
    _sum?: AuthorUrlSumAggregateInput;

    @Field(() => AuthorUrlMinAggregateInput, {nullable:true})
    _min?: AuthorUrlMinAggregateInput;

    @Field(() => AuthorUrlMaxAggregateInput, {nullable:true})
    _max?: AuthorUrlMaxAggregateInput;
}
