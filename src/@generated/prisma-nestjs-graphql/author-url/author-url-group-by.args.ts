import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereInput } from './author-url-where.input';
import { AuthorUrlOrderByWithAggregationInput } from './author-url-order-by-with-aggregation.input';
import { AuthorUrlScalarFieldEnum } from './author-url-scalar-field.enum';
import { AuthorUrlScalarWhereWithAggregatesInput } from './author-url-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthorUrlCountAggregateInput } from './author-url-count-aggregate.input';
import { AuthorUrlAvgAggregateInput } from './author-url-avg-aggregate.input';
import { AuthorUrlSumAggregateInput } from './author-url-sum-aggregate.input';
import { AuthorUrlMinAggregateInput } from './author-url-min-aggregate.input';
import { AuthorUrlMaxAggregateInput } from './author-url-max-aggregate.input';

@ArgsType()
export class AuthorUrlGroupByArgs {

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    where?: AuthorUrlWhereInput;

    @Field(() => [AuthorUrlOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthorUrlOrderByWithAggregationInput>;

    @Field(() => [AuthorUrlScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorUrlScalarFieldEnum>;

    @Field(() => AuthorUrlScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthorUrlScalarWhereWithAggregatesInput;

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
