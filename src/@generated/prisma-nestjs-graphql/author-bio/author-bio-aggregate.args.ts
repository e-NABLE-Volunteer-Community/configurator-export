import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereInput } from './author-bio-where.input';
import { AuthorBioOrderByWithRelationInput } from './author-bio-order-by-with-relation.input';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorBioCountAggregateInput } from './author-bio-count-aggregate.input';
import { AuthorBioAvgAggregateInput } from './author-bio-avg-aggregate.input';
import { AuthorBioSumAggregateInput } from './author-bio-sum-aggregate.input';
import { AuthorBioMinAggregateInput } from './author-bio-min-aggregate.input';
import { AuthorBioMaxAggregateInput } from './author-bio-max-aggregate.input';

@ArgsType()
export class AuthorBioAggregateArgs {

    @Field(() => AuthorBioWhereInput, {nullable:true})
    where?: AuthorBioWhereInput;

    @Field(() => [AuthorBioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorBioOrderByWithRelationInput>;

    @Field(() => AuthorBioWhereUniqueInput, {nullable:true})
    cursor?: AuthorBioWhereUniqueInput;

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
