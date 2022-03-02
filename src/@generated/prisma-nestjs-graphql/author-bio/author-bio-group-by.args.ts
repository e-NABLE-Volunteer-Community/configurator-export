import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereInput } from './author-bio-where.input';
import { AuthorBioOrderByWithAggregationInput } from './author-bio-order-by-with-aggregation.input';
import { AuthorBioScalarFieldEnum } from './author-bio-scalar-field.enum';
import { AuthorBioScalarWhereWithAggregatesInput } from './author-bio-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthorBioCountAggregateInput } from './author-bio-count-aggregate.input';
import { AuthorBioAvgAggregateInput } from './author-bio-avg-aggregate.input';
import { AuthorBioSumAggregateInput } from './author-bio-sum-aggregate.input';
import { AuthorBioMinAggregateInput } from './author-bio-min-aggregate.input';
import { AuthorBioMaxAggregateInput } from './author-bio-max-aggregate.input';

@ArgsType()
export class AuthorBioGroupByArgs {

    @Field(() => AuthorBioWhereInput, {nullable:true})
    where?: AuthorBioWhereInput;

    @Field(() => [AuthorBioOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthorBioOrderByWithAggregationInput>;

    @Field(() => [AuthorBioScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorBioScalarFieldEnum>;

    @Field(() => AuthorBioScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthorBioScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorBioCountAggregateInput, {nullable:true})
    _count?: AuthorBioCountAggregateInput;

    @Field(() => AuthorBioAvgAggregateInput, {nullable:true})
    _avg?: AuthorBioAvgAggregateInput;

    @Field(() => AuthorBioSumAggregateInput, {nullable:true})
    _sum?: AuthorBioSumAggregateInput;

    @Field(() => AuthorBioMinAggregateInput, {nullable:true})
    _min?: AuthorBioMinAggregateInput;

    @Field(() => AuthorBioMaxAggregateInput, {nullable:true})
    _max?: AuthorBioMaxAggregateInput;
}
