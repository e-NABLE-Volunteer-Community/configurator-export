import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthorBioCountAggregate } from './author-bio-count-aggregate.output';
import { AuthorBioAvgAggregate } from './author-bio-avg-aggregate.output';
import { AuthorBioSumAggregate } from './author-bio-sum-aggregate.output';
import { AuthorBioMinAggregate } from './author-bio-min-aggregate.output';
import { AuthorBioMaxAggregate } from './author-bio-max-aggregate.output';

@ObjectType()
export class AggregateAuthorBio {

    @Field(() => AuthorBioCountAggregate, {nullable:true})
    _count?: AuthorBioCountAggregate;

    @Field(() => AuthorBioAvgAggregate, {nullable:true})
    _avg?: AuthorBioAvgAggregate;

    @Field(() => AuthorBioSumAggregate, {nullable:true})
    _sum?: AuthorBioSumAggregate;

    @Field(() => AuthorBioMinAggregate, {nullable:true})
    _min?: AuthorBioMinAggregate;

    @Field(() => AuthorBioMaxAggregate, {nullable:true})
    _max?: AuthorBioMaxAggregate;
}
